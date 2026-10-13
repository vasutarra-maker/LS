import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ValuesScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Staggered column transforms (Development & Strategy -> Dedicated Teams -> Data Science & AI)
  // Column 1: Development & Strategy
  const col1TextY = useTransform(scrollYProgress, [0.02, 0.5], [0, 240]);
  const col1RingY = useTransform(scrollYProgress, [0.02, 0.5], [0, 140]);
  const col1RingOpacity = useTransform(scrollYProgress, [0.02, 0.25, 0.5], [0.2, 0.7, 0.1]);
  const col1Overlay = useTransform(scrollYProgress, [0.02, 0.5], [0.82, 0.22]);
  const col1Scale = useTransform(scrollYProgress, [0.02, 0.5], [1.12, 1.0]);

  // Column 2: Dedicated Teams
  const col2TextY = useTransform(scrollYProgress, [0.18, 0.72], [0, 240]);
  const col2RingY = useTransform(scrollYProgress, [0.18, 0.72], [0, 140]);
  const col2RingOpacity = useTransform(scrollYProgress, [0.18, 0.45, 0.72], [0.2, 0.7, 0.1]);
  const col2Overlay = useTransform(scrollYProgress, [0.18, 0.72], [0.82, 0.22]);
  const col2Scale = useTransform(scrollYProgress, [0.18, 0.72], [1.12, 1.0]);

  // Column 3: Data Science & AI
  const col3TextY = useTransform(scrollYProgress, [0.35, 0.95], [0, 240]);
  const col3RingY = useTransform(scrollYProgress, [0.35, 0.95], [0, 140]);
  const col3RingOpacity = useTransform(scrollYProgress, [0.35, 0.65, 0.95], [0.2, 0.7, 0.1]);
  const col3Overlay = useTransform(scrollYProgress, [0.35, 0.95], [0.82, 0.22]);
  const col3Scale = useTransform(scrollYProgress, [0.35, 0.95], [1.12, 1.0]);

  const columns = [
    {
      number: '1',
      title: 'Strategy & Development',
      description:
        'Technology roadmaps, architecture and custom software, planned and built by the same team.',
      path: '/strategy-and-development',
      label: 'Explore Strategy',
      accentColor: 'text-white hover:text-white/80',
      image:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
      textY: col1TextY,
      ringY: col1RingY,
      ringOpacity: col1RingOpacity,
      overlay: col1Overlay,
      scale: col1Scale,
    },
    {
      number: '2',
      title: 'Dedicated Teams / Staff Augmentation',
      description:
        'Engineers who already know logistics, working inside your team.',
      path: '/dedicated-teams',
      label: 'Explore Teams',
      accentColor: 'text-white hover:text-white/80',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      textY: col2TextY,
      ringY: col2RingY,
      ringOpacity: col2RingOpacity,
      overlay: col2Overlay,
      scale: col2Scale,
    },
    {
      number: '3',
      title: 'AI & Data Science',
      description:
        'Forecasting, pattern detection and automation built on your operational data.',
      path: '/data-science',
      label: 'Explore Data Science',
      accentColor: 'text-white hover:text-white/80',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      textY: col3TextY,
      ringY: col3RingY,
      ringOpacity: col3RingOpacity,
      overlay: col3Overlay,
      scale: col3Scale,
    },
  ];

  return (
    <section
      data-no-fx
      ref={containerRef}
      className="relative h-[220vh] bg-black"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="relative h-full w-full overflow-hidden flex flex-col justify-start p-8 md:p-12 lg:p-14 select-none"
            >
              {/* Background Image with parallax scale */}
              <motion.div
                style={{ scale: col.scale }}
                className="absolute inset-0 w-full h-full z-0"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Dynamic scroll overlay that clears up */}
              <motion.div
                style={{ opacity: col.overlay }}
                className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 z-1 pointer-events-none"
              />

              {/* Subtle top ambient glow */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-1 pointer-events-none" />

              {/* Animated Text Content Box */}
              <motion.div
                style={{ y: col.textY }}
                className="relative z-10 flex flex-col justify-start pt-8 md:pt-16 max-w-md"
              >
                {/* Number Badge */}
                <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white text-xs font-mono mb-6 shrink-0 backdrop-blur-md bg-black/20">
                  {col.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-display font-medium text-white mb-4 tracking-tight drop-shadow-md">
                  {col.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-[15px] text-white/85 leading-relaxed drop-shadow">
                  {col.description}
                </p>

                {/* Floating Ghost Ring (as captured in scroll sequence) */}
                <motion.div
                  style={{ y: col.ringY, opacity: col.ringOpacity }}
                  className="w-9 h-9 rounded-full border border-white/40 my-5 shrink-0 pointer-events-none"
                />

                {/* Explore Link based on service page */}
                <Link
                  to={col.path}
                  className={`inline-flex items-center gap-2 font-bold text-sm mt-2 transition-all group/btn w-fit ${col.accentColor}`}
                >
                  <span>{col.label}</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.2 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
