import React from 'react';

export default function Quote() {

  return (
    <>
<section id="quote" className="py-32 px-6 bg-[#0a0f1c] text-white relative min-h-screen flex items-center justify-center">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative z-10 w-full mt-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Get a <span className="text-brand-accent">Custom Quote</span></h2>
                <p className="text-slate-400">Experience next-generation logistics tailored to your 2026 enterprise requirements.</p>
            </div>
            
            <form className="bg-[#121b2d] backdrop-blur-xl border border-[#1e293b] p-8 md:p-10 rounded-3xl shadow-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Full Name</label>
                        <input type="text" className="w-full bg-[#0a0f1c] border border-[#1e293b] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Work Email</label>
                        <input type="email" className="w-full bg-[#0a0f1c] border border-[#1e293b] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="john@company.com" />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Company Size</label>
                        <select className="w-full bg-[#0a0f1c] border border-[#1e293b] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                            <option>Startup (1-50)</option>
                            <option>Growth (51-200)</option>
                            <option>Enterprise (201+)</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300">Service Required</label>
                        <select className="w-full bg-[#0a0f1c] border border-[#1e293b] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                            <option>Strategy and Development</option>
                            <option>Dedicated Teams</option>
                            <option>Data Science</option>
                            <option>IBM Sterling B2B Integrator</option>
                            <option>Supply Chain Sustainability</option>
                            <option>IBM Watsonx</option>
                        </select>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Project Details</label>
                    <textarea className="w-full bg-[#0a0f1c] border border-[#1e293b] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors h-32 resize-none" placeholder="Tell us about your operational challenges..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-brand-accent text-white font-bold py-4 rounded-xl hover:bg-brand-accentHover transition-colors flex justify-center items-center gap-2">
                    Submit Request <i data-lucide="arrow-right" className="w-5 h-5"></i>
                </button>
            </form>
        </div>
    </section>

    </>
  );
}