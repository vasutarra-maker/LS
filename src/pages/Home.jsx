import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const servicesRef = useRef(null);
  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ["start start", "end end"]
  });

  const card2Y = useTransform(servicesScroll, [0, 0.4], ["100vh", "0vh"]);
  const card2Op = useTransform(servicesScroll, [0, 0.3], [0, 1]);

  const card3Y = useTransform(servicesScroll, [0.4, 0.8], ["100vh", "0vh"]);
  const card3Op = useTransform(servicesScroll, [0.4, 0.7], [0, 1]);

  // Services header reveal
  const servicesHeadY = useTransform(servicesScroll, [0, 0.2], ["60px", "0px"]);
  const servicesHeadOp = useTransform(servicesScroll, [0, 0.15], [0, 1]);

  const coreRef = useRef(null);
  const { scrollYProgress: coreScroll } = useScroll({
    target: coreRef,
    offset: ["start start", "end end"]
  });

  const coreCard1Y = useTransform(coreScroll, [0, 0.4], ["100vh", "0vh"]);
  const coreCard2Y = useTransform(coreScroll, [0.2, 0.6], ["100vh", "0vh"]);
  const coreCard3Y = useTransform(coreScroll, [0.4, 0.8], ["100vh", "0vh"]);
  const coreCard4Y = useTransform(coreScroll, [0.6, 1], ["100vh", "0vh"]);

  const coreCard1Op = useTransform(coreScroll, [0, 0.2], [0, 1]);
  const coreCard2Op = useTransform(coreScroll, [0.2, 0.4], [0, 1]);
  const coreCard3Op = useTransform(coreScroll, [0.4, 0.6], [0, 1]);
  const coreCard4Op = useTransform(coreScroll, [0.6, 0.8], [0, 1]);

  // Hero parallax: layers move at different speeds as the user scrolls away
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const orbY1 = useTransform(heroScroll, [0, 1], ["0px", "250px"]);
  const orbY2 = useTransform(heroScroll, [0, 1], ["0px", "-150px"]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0px", "120px"]);
  const heroTextOp = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroCardY = useTransform(heroScroll, [0, 1], ["0px", "-80px"]);
  const heroCardRotate = useTransform(heroScroll, [0, 1], [2, -4]);
  const heroImgScale = useTransform(heroScroll, [0, 1], [1, 1.15]);

  React.useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => {
        observer.disconnect();
    };
  }, []);

  return (
    <>
<section data-no-fx ref={heroRef} className="hero-bg pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1945] to-[#041029] opacity-90 z-0"></div>
        <motion.div style={{ y: orbY1 }} className="absolute w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl top-10 right-10 z-0"></motion.div>
        <motion.div style={{ y: orbY2 }} className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 left-10 z-0"></motion.div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div style={{ y: heroTextY, opacity: heroTextOp }} initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }} className="space-y-8">
                <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-slate-300 hover:bg-slate-700/50 transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
                    Technology Solutions for Transportation &amp; Logistics
                </motion.div>
                <motion.h1 variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }} className="text-5xl lg:text-7xl font-display font-extrabold leading-tight tracking-tight">
                    Innovate, Automate <span className="text-brand-accent">&amp; Predict</span>
                </motion.h1>
                <motion.p variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }} className="text-lg text-slate-400 max-w-lg leading-relaxed hover:text-slate-300 transition-colors duration-500">
                    Provides supply chain software development, app design, data analytics, staff augmentation, and system integrations (ERP to last-mile delivery). Assists with digital strategy, custom transportation management systems (TMS), and support for in-house engineering teams.
                </motion.p>
                <motion.div variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }} className="flex gap-4 group">
                    <Link to="/quote" className="px-8 py-4 rounded-full bg-brand-accent text-white font-bold hover:bg-brand-accentHover transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-accent/30 transform hover:-translate-y-1 hover:scale-105"> Get Started <i data-lucide="arrow-right" className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"></i></Link>
                </motion.div>
            </motion.div>
            
            {/*  Hero Proof Component  */}
            <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}>
            <motion.div style={{ y: heroCardY, rotate: heroCardRotate }} className="relative bg-slate-800 rounded-3xl p-2 border border-slate-700 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                <div className="overflow-hidden rounded-2xl">
                    <motion.img style={{ scale: heroImgScale }} src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" className="object-cover h-[400px] w-full opacity-80 filter hover:brightness-110" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700 flex items-center justify-between transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    <div>
                        <div className="flex text-brand-accent mb-1">
                            <i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i>
                        </div>
                        <p className="text-white font-bold text-xl">4.9/5 <span className="text-sm font-normal text-slate-400">Trusted Partner</span></p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-display font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400 animate-pulse">100%</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">Agile</p>
                    </div>
                </div>
            </motion.div>
            </motion.div>
        </div>
    </section>
<div className="bg-white py-10 border-b border-slate-200 overflow-hidden flex relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee gap-16 md:gap-24 items-center px-8 w-max">
            {/*  Set 1  */}
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/05/echo-icon-removebg-preview-modified-fotor-2024051722614.png" alt="Echo" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/JB-Hunt-size-4-1-Kittl.svg" alt="JB Hunt" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Transplace-logo-2-1-Kittl.svg" alt="Transplace" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Choptanklogo-1-Kittl.svg" alt="Choptank" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Simple-Logo-Schema-1-Kittl.svg" alt="Simple Schema" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/05/pgt-1.png" alt="PGT" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            {/*  Set 2  */}
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/05/echo-icon-removebg-preview-modified-fotor-2024051722614.png" alt="Echo" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/JB-Hunt-size-4-1-Kittl.svg" alt="JB Hunt" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Transplace-logo-2-1-Kittl.svg" alt="Transplace" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Choptanklogo-1-Kittl.svg" alt="Choptank" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Simple-Logo-Schema-1-Kittl.svg" alt="Simple Schema" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
            <img src="https://logisticsstudio.com/wp-content/uploads/2024/05/pgt-1.png" alt="PGT" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />
        </div>
    </div>
<section data-no-fx ref={servicesRef} className="h-[200vh] relative" id="services">
    <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
            <motion.div style={{ y: servicesHeadY, opacity: servicesHeadOp }} className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm transform hover:scale-105 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span> Featured Service Modules
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 hover:text-brand-accent transition-colors duration-300">Comprehensive <span className="text-brand-accent">Solutions.</span></h2>
            </motion.div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*  Module 1  */}
            <motion.div className="fretrix-card scroll-animate overflow-hidden group flex flex-col hover:border-brand-accent transition-all duration-300 z-20">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 bg-white shadow-xl">
                    <div className="flex justify-between items-center mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-orange-50 text-brand-accent flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"><i data-lucide="compass"></i></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-brand-accent transition-colors duration-300">Development &amp; Strategy</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">Rapid Prototyping, Custom Software Development, Strategy Roadmaps, and Technology Consulting. Taking digital ideas from conception to deployment.</p>
                    <Link to="/strategy-and-development" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group/btn mt-auto"> Explore Strategy <i data-lucide="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300"></i></Link>
                </div>
            </motion.div>

            {/*  Module 2  */}
            <motion.div style={{ y: card2Y, opacity: card2Op }} className="fretrix-card scroll-animate overflow-hidden group flex flex-col hover:border-brand-accent transition-all duration-300 z-30">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 bg-white shadow-2xl">
                    <div className="flex justify-between items-center mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"><i data-lucide="users"></i></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">Dedicated Teams</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">Ongoing Long-Term Support &amp; Maintenance, Product Development &amp; Integration. Scalable engineering team augmentation tailored to client roadmaps.</p>
                    <Link to="/dedicated-teams" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/btn mt-auto"> Explore Teams <i data-lucide="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300"></i></Link>
                </div>
            </motion.div>

            {/*  Module 3  */}
            <motion.div style={{ y: card3Y, opacity: card3Op }} className="fretrix-card scroll-animate overflow-hidden group flex flex-col hover:border-brand-accent transition-all duration-300 z-10">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 bg-white shadow-md">
                    <div className="flex justify-between items-center mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"><i data-lucide="network"></i></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">Data Science &amp; AI</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">Predictive modeling, disruption prevention, and system optimization. Combining data scientists and ML models for decision-making.</p>
                    <Link to="/data-science" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm group/btn mt-auto"> Explore Data Science <i data-lucide="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300"></i></Link>
                </div>
            </motion.div>
        </div>
    </div>
  </div>
</section>
<section data-no-fx ref={coreRef} className="h-[150vh] relative bg-slate-100">
    <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24 px-6">
        <div className="max-w-7xl mx-auto text-center w-full">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-12 hover:scale-105 transition-transform duration-300">Core Capabilities <span className="text-brand-accent">"What We Do"</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                
                <motion.div style={{ y: coreCard1Y, opacity: coreCard1Op }} className="bg-white p-8 rounded-2xl text-left shadow-sm border border-slate-200 group hover:-translate-y-3 hover:shadow-xl hover:border-brand-accent transition-all duration-500 cursor-pointer relative z-40">
                    <div className="w-14 h-14 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"><i data-lucide="map" className="w-6 h-6"></i></div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-brand-accent transition-colors duration-300">Strategy Solutions</h4>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">Helps logistics companies create clear technology roadmaps through a tailored discovery process.</p>
                </motion.div>
                
                <motion.div style={{ y: coreCard2Y, opacity: coreCard2Op }} className="bg-white p-8 rounded-2xl text-left shadow-sm border border-slate-200 group hover:-translate-y-3 hover:shadow-xl hover:border-blue-500 transition-all duration-500 cursor-pointer relative z-30">
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"><i data-lucide="code" className="w-6 h-6"></i></div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">Development &amp; Design</h4>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">Custom software and mobile apps across TMS, office systems, and executive dashboards.</p>
                </motion.div>
                
                <motion.div style={{ y: coreCard3Y, opacity: coreCard3Op }} className="bg-white p-8 rounded-2xl text-left shadow-sm border border-slate-200 group hover:-translate-y-3 hover:shadow-xl hover:border-purple-500 transition-all duration-500 cursor-pointer relative z-20">
                    <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"><i data-lucide="cpu" className="w-6 h-6"></i></div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">Digital Transformation</h4>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">Cloud migration, custom API/EDI integrations, and ML/AI integration into everyday software.</p>
                </motion.div>
                
                <motion.div style={{ y: coreCard4Y, opacity: coreCard4Op }} className="bg-white p-8 rounded-2xl text-left shadow-sm border border-slate-200 group hover:-translate-y-3 hover:shadow-xl hover:border-emerald-500 transition-all duration-500 cursor-pointer relative z-10">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"><i data-lucide="users" className="w-6 h-6"></i></div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">Agile Engineering</h4>
                    <p className="text-sm text-slate-500 mt-3 leading-relaxed">Agile development squads tailored specifically to the nuances of supply chain challenges.</p>
                </motion.div>
            </div>
        </div>
    </div>
</section>

    </>
  );
}