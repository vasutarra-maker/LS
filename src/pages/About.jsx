import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import shippingImg from '../assets/shipping-containers.png';

function LeadershipSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const teamSlides = [
    {
      name: "Kyler Ford",
      role: "VP of Growth",
      image: "https://logisticsstudio.com/wp-content/uploads/2024/04/kyler1.png",
      words: "A decade of executive experience in transportation, SaaS, fintech, and digital services across private enterprise. Dedicated to scaling our impact and delivering tailored software solutions."
    },
    {
      name: "Ravindra Chavali",
      role: "CTO",
      image: "https://logisticsstudio.com/wp-content/uploads/2024/04/ravi-1.png",
      words: "20+ years in enterprise architecture and data science. Specializes in predictive analytics and automation to build resilient, future-ready logistics networks."
    },
    {
      name: "Sai Kastury",
      role: "Director of Presales",
      image: "https://logisticsstudio.com/wp-content/uploads/2025/04/Sai-Kastury.png",
      words: "Leads Digital, Cloud & AI Unit. Extensive enterprise product experience with IBM, Oracle, and SAP driving seamless digital transformations for our core clients."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? teamSlides.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Words From Our <br /> <span className="text-brand-accent">Leadership Team</span>
          </h2>
          <button className="hidden md:flex items-center gap-2 border border-slate-700 rounded-full px-6 py-3 text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors">
            View All Testimonials
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform -rotate-45">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:h-[500px]">
          {/* Left: CEO Video */}
          <div className="lg:w-5/12 relative rounded-3xl overflow-hidden group cursor-pointer h-[400px] lg:h-full shrink-0">
            <img 
              src="https://logisticsstudio.com/wp-content/uploads/2024/04/krishna-1.png" 
              alt="Krishna Vattipalli"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-6 py-4 flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="black">
                  <path d="M5 3L19 12L5 21V3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-black tracking-widest text-xs">WATCH REEL</span>
            </div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-bold text-xl drop-shadow-md">Krishna Vattipalli</h3>
              <p className="text-white/80 text-sm font-medium drop-shadow-md">CEO & Founder</p>
            </div>
          </div>

          {/* Right: Testimonial Slider */}
          <div className="lg:w-7/12 relative h-auto min-h-[400px] lg:h-full flex items-center mt-8 lg:mt-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-[#ff8c42]"></div>
            
            <div className="relative z-10 w-full p-8 md:p-12 pr-16 h-full flex items-center">
              <div className="bg-white w-full rounded-2xl p-8 md:p-10 shadow-xl relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <div className="mb-6 text-[#1a56ff]">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 10C9 12.2091 7.20914 14 5 14C2.79086 14 1 12.2091 1 10C1 7.79086 2.79086 6 5 6C5 6 5.5 6 6 6.1C5.5 4.5 4 3 2 3L3 1C5.5 1 8 3 9 6V10ZM21 10C21 12.2091 19.2091 14 17 14C14.7909 14 13 12.2091 13 10C13 7.79086 14.7909 6 17 6C17 6 17.5 6 18 6.1C17.5 4.5 16 3 14 3L15 1C17.5 1 20 3 21 6V10Z" />
                        </svg>
                      </div>
                      
                      <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed mb-8">
                        "{teamSlides[activeSlide].words}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <img 
                        src={teamSlides[activeSlide].image} 
                        alt={teamSlides[activeSlide].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900">{teamSlides[activeSlide].name}</h4>
                        <p className="text-slate-500 text-sm">{teamSlides[activeSlide].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
              {teamSlides.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 transition-all duration-300 rounded-full ${activeSlide === i ? 'h-6 bg-white' : 'h-3 bg-white/50'}`}
                />
              ))}
            </div>

            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-800 hover:text-brand-accent transition-colors hover:scale-105 border border-slate-100"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 bg-[#0070f3] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors hover:scale-105"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0');
                if (entry.target.classList.contains('value-box-left')) {
                    entry.target.classList.remove('-translate-x-12');
                } else if (entry.target.classList.contains('value-box-right')) {
                    entry.target.classList.remove('translate-x-12');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.value-box-left, .value-box-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scopeItems = [
    "Rating & Load Management",
    "Capacity Management & Fleet Optimization",
    "Route Planning",
    "Billing & Invoicing",
    "Final Mile Delivery Solutions"
  ];

  return (
    <>
<section className="hero-bg pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                About Logistics Studio
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white">
                Innovating for the <span className="text-brand-accent">Transportation &amp; Logistics Industry.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Logistics Studio provides digital strategy and solutions for the transportation &amp; logistics industry. Inspired by the evolution of technology and the pursuit of innovation, we are grounded in a passion for applying tech to modern supply chains.
            </p>
        </div>
    </section>

    {/* ── Our Scope of Work Section ── */}
    <section className="py-24 bg-white overflow-hidden border-b border-slate-100" id="scope">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Our Scope of Work
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            By collaborating with industry leaders, we have tackled unique supply chain challenges and technology roadblocks. Our work spans the entire supply chain—servicing carriers, shippers, and 3PL providers across critical operational areas.
          </p>
          <ul className="space-y-5">
            {scopeItems.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="flex items-center gap-4 text-slate-700 font-medium"
              >
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Image with UX pattern */}
        <div 
          className="relative group pb-12 pl-4"
        >
          {/* Main Image Container */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[420px] md:h-[480px]">
             <img src={shippingImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Shipping Containers" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating content Box with better UX (Glassmorphism, hover reveal) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-4 left-0 w-[85%] z-20"
          >
             <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-[0_20px_40px_rgb(0,0,0,0.15)] border border-slate-50 group-hover:-translate-y-4 transition-transform duration-500">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center shrink-0 shadow-lg shadow-brand-accent/40 group-hover:scale-110 transition-transform duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" className="animate-spin-slow" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900">Tech Expertise</h3>
               </div>
               <p className="text-slate-500 leading-relaxed text-sm">
                  From MVPs to platforms scaling to over 1M users, delivering custom tech strategies.
               </p>

               {/* Hidden stats that reveal on hover */}
               <div className="mt-0 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:mt-5 group-hover:opacity-100 transition-all duration-500 flex gap-8">
                  <div>
                     <div className="text-brand-accent font-bold text-xl">1M+</div>
                     <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Active Users</div>
                  </div>
                  <div>
                     <div className="text-brand-accent font-bold text-xl">99.9%</div>
                     <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Uptime</div>
                  </div>
               </div>
             </div>
          </motion.div>
          
          {/* Secondary floating accent */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-8 -left-6 bg-white rounded-2xl p-3 shadow-xl z-10 border border-slate-100 flex items-end gap-1 h-12"
          >
             {[2,4,3,5].map((h,i) => <div key={i} className="w-1.5 bg-brand-accent rounded-t" style={{height: `${h*20}%`}} />)}
          </motion.div>
        </div>
      </div>
    </section>
<LeadershipSection />
<section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
            {/*  Values  */}
            <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Core Values</h2>
                <p className="text-slate-600 mb-8">
                    Operating out of our headquarters in Visakhapatnam alongside regional offices in the United States, we are guided by a foundational set of core values.
                </p>
                
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10 opacity-0 -translate-x-12 transition-all duration-700 value-box-left">
                            <div className="text-brand-accent font-bold mb-1">Mutual Respect</div>
                        </div>
                        <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10 opacity-0 translate-x-12 transition-all duration-700 value-box-right">
                            <div className="text-brand-accent font-bold mb-1">Shared Responsibility</div>
                        </div>
                        <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10 opacity-0 -translate-x-12 transition-all duration-700 value-box-left">
                            <div className="text-brand-accent font-bold mb-1">Integrity &amp; Trust</div>
                        </div>
                        <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10 opacity-0 translate-x-12 transition-all duration-700 value-box-right">
                            <div className="text-brand-accent font-bold mb-1">Humility &amp; Modesty</div>
                        </div>
                        <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10 opacity-0 -translate-x-12 transition-all duration-700 value-box-left">
                            <div className="text-brand-accent font-bold mb-1">Flexibility</div>
                        </div>
                        <div className="bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10 opacity-0 translate-x-12 transition-all duration-700 value-box-right">
                            <div className="text-brand-accent font-bold mb-1">People &amp; Family</div>
                        </div>
                    </div>

            </div>
            
            </div>
    </section>

    </>
  );
}