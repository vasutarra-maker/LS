import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ── Upward arrow particle floating in hero ── */
function ArrowParticle({ x, delay, duration, size = 16 }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, bottom: '-10px' }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -400], opacity: [0, 0.8, 0.6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 20V4M12 4L6 10M12 4L18 10" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

/* ── Floating cargo box background element ── */
function FloatingBox({ left, top, size = 40, delay = 0, color = '#f97316', rotate = 0 }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left, top, color, width: size, height: size }}
      animate={{ y: [0, -16, 0], rotate: [rotate, rotate + 6, rotate], opacity: [0.2, 0.45, 0.2] }}
      transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 40 40" fill="none" width={size} height={size}>
        <rect x="4" y="16" width="32" height="20" rx="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 22h32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 16v20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M4 16l3-9h26l3 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 22v5h8v-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M20 9V4M17 7l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

/* ── Card: rises from below ONCE, stays in place on scroll up ── */
function LiftCard({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Service card data ── */
const SERVICE_CARDS = [
  {
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    icon: 'compass',
    title: 'Development & Strategy',
    desc: 'Rapid Prototyping, Custom Software Development, Strategy Roadmaps, and Technology Consulting. Taking digital ideas from conception to deployment.',
    link: '/strategy-and-development',
    label: 'Explore Strategy',
    accent: { ring: 'border-brand-accent', text: 'text-brand-accent', bg: 'bg-orange-50', hover: 'group-hover:text-brand-accent', hoverBg: 'group-hover:bg-brand-accent', overlay: 'bg-brand-accent/20' },
  },
  {
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
    icon: 'users',
    title: 'Dedicated Teams',
    desc: 'Ongoing Long-Term Support & Maintenance, Product Development & Integration. Scalable engineering team augmentation tailored to client roadmaps.',
    link: '/dedicated-teams',
    label: 'Explore Teams',
    accent: { ring: 'border-blue-500', text: 'text-blue-600', bg: 'bg-blue-50', hover: 'group-hover:text-blue-600', hoverBg: 'group-hover:bg-blue-600', overlay: 'bg-blue-500/20' },
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    icon: 'network',
    title: 'Data Science & AI',
    desc: 'Predictive modeling, disruption prevention, and system optimization. Combining data scientists and ML models for decision-making.',
    link: '/data-science',
    label: 'Explore Data Science',
    accent: { ring: 'border-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', hover: 'group-hover:text-emerald-600', hoverBg: 'group-hover:bg-emerald-600', overlay: 'bg-emerald-500/20' },
  },
];


/* ── Smooth scroll section: cards fly in from right smoothly ── */
function ServiceScrollSection({ UpArrow }) {
  return (
    <section className="py-24 bg-white relative" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div 
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm">
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
              <UpArrow size={14} className="text-brand-accent" />
            </motion.span>
            Featured Service Modules
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Comprehensive <span className="text-brand-accent">Solutions.</span>
          </h2>
        </motion.div>

        {/* Cards grid — each slides in from right smoothly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
          {SERVICE_CARDS.map((card, i) => (
            <div
              key={i}
              className="h-full"
            >
              <div className={`fretrix-card h-full overflow-hidden group flex flex-col hover:${card.accent.ring} transition-all duration-300 shadow-sm hover:shadow-xl border border-slate-100 rounded-2xl`}>
                <div className="h-48 overflow-hidden relative">
                  <div className={`absolute inset-0 ${card.accent.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />
                  <img src={card.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={card.title} />
                  {/* Upward arrow badge on hover */}
                  <div className="absolute top-3 right-3 z-20 bg-white/85 backdrop-blur rounded-xl p-2
                    opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <UpArrow size={18} className={card.accent.text} />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-full ${card.accent.bg} ${card.accent.text} flex items-center justify-center
                      group-hover:scale-110 ${card.accent.hoverBg} group-hover:text-white transition-all duration-300`}>
                      <i data-lucide={card.icon} />
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 text-slate-900 ${card.accent.hover} transition-colors duration-300`}>
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{card.desc}</p>
                  <Link to={card.link} className={`inline-flex items-center gap-2 ${card.accent.text} font-bold text-sm mt-auto group/btn`}>
                    {card.label}
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.15 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  /* Hero parallax */
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbY1      = useTransform(heroScroll, [0, 1], ['0px', '220px']);
  const orbY2      = useTransform(heroScroll, [0, 1], ['0px', '-130px']);
  const heroTextY  = useTransform(heroScroll, [0, 1], ['0px', '100px']);
  const heroTextOp = useTransform(heroScroll, [0, 0.75], [1, 0]);
  const heroCardY  = useTransform(heroScroll, [0, 1], ['0px', '-60px']);
  const heroImgSc  = useTransform(heroScroll, [0, 1], [1, 1.12]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-fade-in-up'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-animate').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const particles = [
    { x: 6,  delay: 0,   duration: 3.5, size: 13 },
    { x: 18, delay: 1.2, duration: 4.2, size: 18 },
    { x: 33, delay: 0.5, duration: 3.0, size: 11 },
    { x: 52, delay: 2.0, duration: 4.8, size: 16 },
    { x: 68, delay: 0.8, duration: 3.8, size: 14 },
    { x: 82, delay: 1.5, duration: 5.0, size: 20 },
    { x: 93, delay: 0.3, duration: 3.2, size: 12 },
  ];

  /* ── Upward arrow icon (reused inline) ── */
  const UpArrow = ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 20V4M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section data-no-fx ref={heroRef} className="hero-bg pt-32 pb-24 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1945] to-[#041029] opacity-95 z-0" />
        <motion.div style={{ y: orbY1 }} className="absolute w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-3xl top-10 right-10 z-0" />
        <motion.div style={{ y: orbY2 }} className="absolute w-96 h-96 bg-blue-500/15 rounded-full blur-3xl bottom-10 left-10 z-0" />

        {/* Background floating cargo boxes */}
        <FloatingBox left="5%"  top="15%" size={44} delay={0}   color="#f97316" rotate={-15} />
        <FloatingBox left="87%" top="18%" size={36} delay={1.5} color="#60a5fa" rotate={10} />
        <FloatingBox left="78%" top="62%" size={52} delay={0.8} color="#f97316" rotate={20} />
        <FloatingBox left="10%" top="68%" size={36} delay={2.2} color="#a78bfa" rotate={-5} />
        <FloatingBox left="48%" top="8%"  size={30} delay={1.0} color="#34d399" rotate={12} />

        {/* Upward arrow particles rising */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => <ArrowParticle key={i} {...p} />)}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Left: text */}
          <motion.div
            style={{ y: heroTextY, opacity: heroTextOp }}
            initial="hidden" animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
            className="space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              Technology Solutions for Transportation &amp; Logistics
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="text-5xl lg:text-7xl font-display font-extrabold leading-tight tracking-tight text-white">
              Elevate Your <span className="text-brand-accent">Supply Chain</span>
            </motion.h1>

            {/* Rising bar-chart accent */}
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="flex items-end gap-1 h-10">
              {[3, 5, 4, 7, 6, 8, 7, 9, 8, 10].map((h, i) => (
                <motion.div key={i} className="w-2 rounded-t bg-brand-accent"
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 4}px` }}
                  transition={{ delay: 0.8 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
              ))}
              <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }}
                className="ml-3 text-brand-accent text-sm font-bold flex items-center gap-1">
                <UpArrow size={15} className="text-brand-accent" /> Trending Up
              </motion.div>
            </motion.div>

            <motion.p variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Supply chain software development, data analytics, staff augmentation, and system integrations — from ERP to last-mile delivery. Lifting your logistics to new heights.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }} className="flex gap-4">
              <Link to="/quote"
                className="px-8 py-4 rounded-full bg-brand-accent text-white font-bold hover:bg-brand-accentHover transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-accent/30 hover:-translate-y-1 hover:scale-105 group">
                Get Started
                <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
                  <UpArrow size={18} className="text-white" />
                </motion.span>
              </Link>
              <Link to="/services"
                className="px-8 py-4 rounded-full border border-slate-600 text-slate-300 font-bold hover:border-brand-accent hover:text-brand-accent transition-all duration-300 flex items-center gap-2">
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: hero card */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}>
            <motion.div style={{ y: heroCardY }}
              className="relative bg-slate-800 rounded-3xl p-2 border border-slate-700 shadow-2xl">
              <div className="overflow-hidden rounded-2xl">
                <motion.img style={{ scale: heroImgSc }}
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop"
                  className="object-cover h-[380px] w-full opacity-80" alt="Warehouse logistics" />
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 border border-slate-700 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Deliveries', value: '2.4M+', icon: '📦' },
                    { label: 'On-Time Rate', value: '99.2%', icon: '⬆️' },
                    { label: 'Partners', value: '150+', icon: '🤝' },
                  ].map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.15 }} className="text-center">
                      <div className="text-lg mb-0.5">{s.icon}</div>
                      <div className="text-white font-bold text-lg leading-none">{s.value}</div>
                      <div className="text-slate-400 text-xs mt-1">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating cargo box badge */}
              <motion.div
                className="absolute -top-5 -right-5 bg-brand-accent rounded-2xl p-3 shadow-lg shadow-brand-accent/40"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <svg width="26" height="26" viewBox="0 0 40 40" fill="none" className="text-white">
                  <rect x="4" y="16" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
                  <path d="M4 22h32" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 16v20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                  <path d="M4 16l3-9h26l3 9" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 22v5h8v-5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 9V4M17 7l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CORE CAPABILITIES — elevator-rise ONCE, stays on scroll-up ═══════════════ */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-3 mb-4">
              {/* Mini rising bar chart */}
              <div className="flex items-end gap-0.5 h-7">
                {[2, 3, 2, 4, 3, 5, 4, 6, 5, 7].map((h, i) => (
                  <motion.div key={i} className="w-1.5 rounded-t bg-brand-accent"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h * 3.5}px` }}
                    viewport={{ once: true, margin: "200px" }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }} />
                ))}
              </div>
              <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Growth Capabilities</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900">
              Core Capabilities <span className="text-brand-accent">"What We Do"</span>
            </h2>
          </motion.div>

          {/* 4 capability cards — staggered upward entrance, fixed after */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'map', delay: 0,
                title: 'Strategy Solutions',
                desc: 'Helps logistics companies create clear technology roadmaps through a tailored discovery process.',
                accent: 'brand-accent', border: 'border-brand-accent', text: 'text-brand-accent', bg: 'bg-orange-50',
              },
              {
                icon: 'code', delay: 0.12,
                title: 'Development & Design',
                desc: 'Custom software and mobile apps across TMS, office systems, and executive dashboards.',
                accent: 'blue-600', border: 'border-blue-500', text: 'text-blue-600', bg: 'bg-blue-50',
              },
              {
                icon: 'cpu', delay: 0.24,
                title: 'Digital Transformation',
                desc: 'Cloud migration, custom API/EDI integrations, and ML/AI integration into everyday software.',
                accent: 'purple-600', border: 'border-purple-500', text: 'text-purple-600', bg: 'bg-purple-50',
              },
              {
                icon: 'users', delay: 0.36,
                title: 'Agile Engineering',
                desc: 'Agile development squads tailored specifically to the nuances of supply chain challenges.',
                accent: 'emerald-600', border: 'border-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50',
              },
            ].map((card, i) => (
              <div key={i} className="h-full">
                <div className={`bg-white p-8 rounded-2xl text-left shadow-sm border border-slate-200 group h-full
                  hover:-translate-y-3 hover:shadow-xl hover:${card.border} transition-all duration-500 cursor-pointer relative`}
                >
                  {/* Upward arrow accent — visible on hover */}
                  <div className={`absolute top-4 right-4 ${card.text} opacity-0 group-hover:opacity-100
                    translate-y-1 group-hover:translate-y-0 transition-all duration-300`}>
                    <UpArrow size={16} />
                  </div>

                  <div className={`w-14 h-14 rounded-full ${card.bg} ${card.text} flex items-center justify-center mb-6
                    group-hover:scale-110 group-hover:bg-${card.accent} group-hover:text-white transition-all duration-300`}>
                    <i data-lucide={card.icon} className="w-6 h-6" />
                  </div>
                  <h4 className={`text-xl font-bold text-slate-900 group-hover:${card.text} transition-colors duration-300`}>
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-500 mt-3 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES — cards slide in from RIGHT as you scroll ═══════════════ */}
      <ServiceScrollSection UpArrow={UpArrow} />
    </>
  );
}