import React, { useEffect } from 'react';

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
<section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Scope of Work</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    By collaborating with industry leaders, we have tackled unique supply chain challenges and technology roadblocks. Our work spans the entire supply chain—servicing carriers, shippers, and 3PL providers across critical operational areas.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-700"><div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"><i data-lucide="check" className="w-4 h-4"></i></div> Rating &amp; Load Management</li>
                    <li className="flex items-center gap-3 text-slate-700"><div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"><i data-lucide="check" className="w-4 h-4"></i></div> Capacity Management &amp; Fleet Optimization</li>
                    <li className="flex items-center gap-3 text-slate-700"><div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"><i data-lucide="check" className="w-4 h-4"></i></div> Route Planning</li>
                    <li className="flex items-center gap-3 text-slate-700"><div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"><i data-lucide="check" className="w-4 h-4"></i></div> Billing &amp; Invoicing</li>
                    <li className="flex items-center gap-3 text-slate-700"><div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"><i data-lucide="check" className="w-4 h-4"></i></div> Final Mile Delivery Solutions</li>
                </ul>
            </div>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" className="rounded-2xl object-cover h-[500px] w-full shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center"><i data-lucide="target" className="w-6 h-6"></i></div>
                        <h4 className="font-bold text-slate-900">Tech Expertise</h4>
                    </div>
                    <p className="text-sm text-slate-600">From MVPs to platforms scaling to over 1M users, delivering custom tech strategies.</p>
                </div>
            </div>
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

                <div className="mt-12">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Global Presence</h3>
                    <div className="flex items-start gap-4">
                        <i data-lucide="map-pin" className="w-6 h-6 text-brand-accent shrink-0 mt-1"></i>
                        <p className="text-slate-600"><strong>U.S. Headquarters:</strong><br />609 SW 8th Street, 6th Floor<br />Bentonville, AR 72712</p>
                    </div>
                </div>
            </div>
            
            </div>
    </section>

    </>
  );
}