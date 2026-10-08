import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import shippingImg from '../assets/shipping-containers.png';

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
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
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
        </motion.div>
      </div>
    </section>
<section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-slate-900">Leadership Team</h2>
                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Guided by decades of transportation and logistics technology experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/*  CEO  */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                        <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/krishna-1.png" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 text-center">Krishna Vattipalli</h3>
                    <p className="text-brand-accent text-sm font-semibold text-center mb-4">CEO &amp; Founder</p>
                    <p className="text-slate-600 text-sm text-center">Over 20 years in transportation tech. Founder of Fleet Enable, formerly led tech teams at J.B. Hunt &amp; Rockfish Interactive.</p>
                </div>
                {/*  VP of Growth  */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                        <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/kyler1.png" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 text-center">Kyler Ford</h3>
                    <p className="text-brand-accent text-sm font-semibold text-center mb-4">VP of Growth</p>
                    <p className="text-slate-600 text-sm text-center">A decade of executive experience in transportation, SaaS, fintech, and digital services across private enterprise.</p>
                </div>
                {/*  CTO  */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                        <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/ravi-1.png" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 text-center">Ravindra Chavali</h3>
                    <p className="text-brand-accent text-sm font-semibold text-center mb-4">CTO</p>
                    <p className="text-slate-600 text-sm text-center">20+ years in enterprise architecture and data science. Specializes in predictive analytics and automation.</p>
                </div>
                {/*  Director of Presales  */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden">
                        <img src="https://logisticsstudio.com/wp-content/uploads/2025/04/Sai-Kastury.png" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 text-center">Sai Kastury</h3>
                    <p className="text-brand-accent text-sm font-semibold text-center mb-4">Director of Presales</p>
                    <p className="text-slate-600 text-sm text-center">Leads Digital, Cloud &amp; AI Unit. Extensive enterprise product experience with IBM, Oracle, and SAP.</p>
                </div>
            </div>
        </div>
    </section>
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