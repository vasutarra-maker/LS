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
  const col1TextY = useTransform(scrollYProgress, [0.02, 0.45], [0, 160]);
  const col1RingY = useTransform(scrollYProgress, [0.02, 0.45], [0, 90]);
  const col1RingOpacity = useTransform(scrollYProgress, [0.02, 0.22, 0.45], [0.2, 0.7, 0.1]);
  const col1Overlay = useTransform(scrollYProgress, [0.02, 0.45], [0.55, 0.15]);
  const col1Scale = useTransform(scrollYProgress, [0.02, 0.45], [1.10, 1.0]);

  // Column 2: Dedicated Teams
  const col2TextY = useTransform(scrollYProgress, [0.15, 0.65], [0, 160]);
  const col2RingY = useTransform(scrollYProgress, [0.15, 0.65], [0, 90]);
  const col2RingOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.65], [0.2, 0.7, 0.1]);
  const col2Overlay = useTransform(scrollYProgress, [0.15, 0.65], [0.55, 0.15]);
  const col2Scale = useTransform(scrollYProgress, [0.15, 0.65], [1.10, 1.0]);

  // Column 3: Data Science & AI
  const col3TextY = useTransform(scrollYProgress, [0.3, 0.88], [0, 160]);
  const col3RingY = useTransform(scrollYProgress, [0.3, 0.88], [0, 90]);
  const col3RingOpacity = useTransform(scrollYProgress, [0.3, 0.58, 0.88], [0.2, 0.7, 0.1]);
  const col3Overlay = useTransform(scrollYProgress, [0.3, 0.88], [0.55, 0.15]);
  const col3Scale = useTransform(scrollYProgress, [0.3, 0.88], [1.10, 1.0]);

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

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      data-no-fx
      ref={containerRef}
      className="relative md:h-[160vh] bg-white"
    >
      {/* Sticky viewport frame on desktop / tablet, natural flow on mobile */}
      <div className="relative md:sticky md:top-0 md:h-screen w-full overflow-hidden flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 h-full w-full divide-y md:divide-y-0 md:divide-x divide-white/20 flex-1">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="relative min-h-[500px] md:min-h-full h-full w-full overflow-hidden flex flex-col justify-start p-6 sm:p-8 md:p-8 lg:p-14 select-none"
            >
              {/* Background Image with parallax scale */}
              <motion.div
                style={{ scale: isMobile ? 1 : col.scale }}
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
                style={{ opacity: isMobile ? 0.45 : col.overlay }}
                className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-900/35 to-slate-950/65 z-1 pointer-events-none"
              />

              {/* Animated Text Content Box */}
              <motion.div
                style={{ y: isMobile ? 0 : col.textY }}
                className="relative z-10 flex flex-col justify-start pt-6 sm:pt-8 md:pt-16 max-w-md"
              >
                {/* Number Badge */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/50 flex items-center justify-center text-white text-xs font-mono mb-4 sm:mb-6 shrink-0 backdrop-blur-md bg-white/10">
                  {col.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white mb-3 sm:mb-4 tracking-tight drop-shadow-md">
                  {col.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-[15px] text-white/85 leading-relaxed drop-shadow">
                  {col.description}
                </p>

                {/* Floating Ghost Ring */}
                <motion.div
                  style={{ y: isMobile ? 0 : col.ringY, opacity: isMobile ? 0.35 : col.ringOpacity }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 my-4 sm:my-5 shrink-0 pointer-events-none"
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
