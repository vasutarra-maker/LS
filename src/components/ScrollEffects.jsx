import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide motion layer.
 *  - Lenis: inertial smooth scrolling (synced with GSAP ScrollTrigger)
 *  - GSAP ScrollTrigger: reveals, staggers, parallax, counters, scrubbed hero fade
 *  - UX: scroll progress bar, auto-hiding header, SPA link navigation, magnetic buttons
 *
 * Any section that runs its own scroll animation (e.g. Home's pinned sections)
 * opts out with the `data-no-fx` attribute.
 */
export default function ScrollEffects() {
  const location = useLocation();
  const navigate = useNavigate();
  const lenisRef = useRef(null);
  const barRef = useRef(null);

  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mount-once: smooth scroll, progress bar, header, links ---------- */
  useEffect(() => {
    const lenis = new Lenis({ lerp: reduceMotion ? 1 : 0.085, smoothWheel: !reduceMotion });
    lenisRef.current = lenis;

    const header = document.querySelector('header');

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${e.progress || 0})`;
      }
      if (header) {
        const isScrolled = e.scroll > 40;
        header.classList.toggle('fx-scrolled', isScrolled);
        document.body.classList.toggle('is-scrolled', isScrolled);
        
        // hide on scroll down, reveal on scroll up
        const hide = e.direction === 1 && e.scroll > 480;
        header.style.transform = hide ? 'translateY(-110%)' : 'translateY(0)';
        document.body.classList.toggle('header-hidden', hide);
      }
    });

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      gsap.ticker.remove(tick);
      lenis.destroy();
      if (header) header.style.transform = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------- Per-route: build all scroll animations ---------- */
  useLayoutEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    if (reduceMotion) return undefined;

    // Page entrance runs before first paint to avoid a flash of content
    const mainEl = document.querySelector('main');
    const entrance = mainEl
      ? gsap.fromTo(mainEl, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'opacity,transform' })
      : null;

    const cleanups = [];
    let ctx;

    const build = () => {
      const main = document.querySelector('main');
      if (!main) return;
      const skip = (el) => !!el.closest('[data-no-fx]');
      const q = (sel) => Array.from(main.querySelectorAll(sel)).filter((el) => !skip(el));

      // Elements animated by GSAP must not fight Tailwind's `transition-*` utilities
      const detach = (els, props) => {
        els.forEach((el) => {
          const prev = el.style.transitionProperty;
          el.style.transitionProperty = props;
          cleanups.push(() => { el.style.transitionProperty = prev; });
        });
      };

      ctx = gsap.context(() => {

        // 1) First section: scrubbed parallax fade as you scroll away
        const first = main.querySelector(':scope > section');
        if (first && !skip(first)) {
          const inner = first.firstElementChild;
          if (inner) {
            gsap.to(inner, {
              y: 70, opacity: 0.15, ease: 'none',
              scrollTrigger: { trigger: first, start: 'top top', end: 'bottom top', scrub: true },
            });
          }
        }

        // 2) Dark hero sections: inject drifting parallax orbs
        q('section.hero-bg').forEach((sec) => {
          const prevIso = sec.style.isolation;
          sec.style.isolation = 'isolate';
          const orbs = [
            'top-10 right-10 bg-brand-accent/20',
            'bottom-10 left-10 bg-blue-500/20',
          ].map((cls) => {
            const o = document.createElement('div');
            o.className = `absolute w-96 h-96 rounded-full blur-3xl pointer-events-none ${cls}`;
            o.style.zIndex = '-1';
            o.setAttribute('data-fx-orb', '');
            sec.prepend(o);
            return o;
          });
          cleanups.push(() => { orbs.forEach((o) => o.remove()); sec.style.isolation = prevIso; });
          gsap.to(orbs[0], { yPercent: 70, xPercent: -20, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom top', scrub: 1 } });
          gsap.to(orbs[1], { yPercent: -70, xPercent: 20, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom top', scrub: 1 } });
        });

        // 3) Headings + their intro paragraph
        q('h1, h2').forEach((h) => {
          const targets = [h];
          const next = h.nextElementSibling;
          if (next && next.tagName === 'P') targets.push(next);
          gsap.from(targets, {
            y: 44, opacity: 0, filter: 'blur(8px)', duration: 0.95, stagger: 0.14, ease: 'power3.out',
            clearProps: 'filter,transform,opacity',
            scrollTrigger: { trigger: h, start: 'top 90%', once: true },
          });
        });

        // 4) Grids: staggered card reveal
        q('.grid').forEach((grid) => {
          const kids = Array.from(grid.children).filter((c) => !c.hasAttribute('data-fx-orb'));
          if (!kids.length) return;
          detach(kids, 'background-color, border-color, box-shadow, color, scale, translate, rotate');
          gsap.from(kids, {
            y: 70, opacity: 0, scale: 0.95, duration: 0.85, ease: 'power3.out',
            stagger: Math.min(0.12, 0.9 / kids.length),
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: grid, start: 'top 87%', once: true },
          });
        });

        // 5) Other content blocks directly inside sections fade up
        const blocks = q('section > div > *').filter((el) => {
          if (el.classList.contains('grid') || /(^|\s)grid(\s|$)/.test(el.className)) return false;
          if (el.querySelector('h1, h2')) return false;
          return true;
        });
        gsap.set(blocks, { opacity: 0, y: 40 });
        ScrollTrigger.batch(blocks, {
          start: 'top 90%', once: true,
          onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity' }),
        });

        // 6) Image parallax (scaled inside an overflow-hidden frame when available)
        q('img.object-cover').forEach((img) => {
          if (img.closest('.animate-marquee')) return;
          let frame = null;
          let p = img.parentElement;
          for (let i = 0; i < 3 && p && p !== main; i += 1, p = p.parentElement) {
            if (getComputedStyle(p).overflow === 'hidden') { frame = p; break; }
          }
          detach([img], 'scale, translate, opacity, filter, box-shadow');
          if (frame) {
            gsap.fromTo(img,
              { yPercent: -7, scale: 1.18 },
              { yPercent: 7, scale: 1.18, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } });
          } else {
            gsap.fromTo(img,
              { y: -18 },
              { y: 18, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
          }
        });

        // 7) Count-up numbers (e.g. 99.8%, 150+, 2,400+)
        q('h1, h2, h3, h4, p, span, div').forEach((el) => {
          if (el.children.length) return;
          const txt = el.textContent.trim();
          const m = txt.match(/^(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(\D{0,3})$/);
          if (!m) return;
          const raw = m[1];
          const suffix = m[2];
          const target = parseFloat(raw.replace(/,/g, ''));
          if (raw.length > 1 && raw.startsWith('0') && !raw.startsWith('0.')) return;
          if (!suffix && target < 10) return;
          const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
          const useComma = raw.includes(',');
          const state = { v: 0 };
          const fmt = (v) => {
            const n = decimals ? v.toFixed(decimals) : Math.round(v).toString();
            return (useComma ? Number(n).toLocaleString('en-US') : n) + suffix;
          };
          el.textContent = fmt(0);
          cleanups.push(() => { el.textContent = txt; });
          gsap.to(state, {
            v: target, duration: 1.8, ease: 'power2.out',
            onUpdate: () => { el.textContent = fmt(state.v); },
            onComplete: () => { el.textContent = txt; },
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          });
        });
      }, main);

      // 8) Magnetic pill buttons (fine pointers only)
      if (window.matchMedia('(pointer: fine)').matches) {
        const btns = Array.from(document.querySelectorAll('main a.rounded-full, header a.rounded-full, footer a.rounded-full'));
        btns.forEach((btn) => {
          const prev = btn.style.transitionProperty;
          btn.style.transitionProperty = 'background-color, border-color, box-shadow, color, scale, translate';
          const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
          const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
          const move = (e) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.28);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.28);
          };
          const leave = () => { xTo(0); yTo(0); };
          btn.addEventListener('pointermove', move);
          btn.addEventListener('pointerleave', leave);
          cleanups.push(() => {
            btn.removeEventListener('pointermove', move);
            btn.removeEventListener('pointerleave', leave);
            gsap.set(btn, { clearProps: 'x,y' });
            btn.style.transitionProperty = prev;
          });
        });
      }

      ScrollTrigger.refresh();
    };

    // Wait for the new route to paint, then build; refresh again once images settle
    const t1 = setTimeout(build, 60);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (entrance) entrance.kill();
      if (ctx) ctx.revert();
      cleanups.forEach((fn) => fn());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-gradient-to-r from-brand-accent via-orange-400 to-amber-300 pointer-events-none"
      style={{ transform: 'scaleX(0)', transformOrigin: '0 50%' }}
    />
  );
}
