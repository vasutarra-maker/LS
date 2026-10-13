import React from 'react';
import { Link } from 'react-router-dom';

import ServiceSidebar from '../components/ServiceSidebar';

export default function IbmWatsonx() {

  return (
    <>
<section className="bg-[#f0f5fa] pt-40 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div>
                <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">IBM Watsonx</h1>
            </div>
            <div className="mt-8 md:mt-0 text-slate-500 font-medium">
                Home / Services / IBM Watsonx
            </div>
        </div>
    </section>
<section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/*  Sidebar (Fretrix style)  */}
            <div className="lg:col-span-4">
                <ServiceSidebar />
            </div>

            {/*  Content Area  */}
            <div className="lg:col-span-8 space-y-8 text-slate-600 leading-relaxed text-lg">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="w-full max-w-2xl mx-auto mb-10 rounded-2xl shadow-2xl object-cover h-[300px]" alt="Ibm Watsonx" />
                
                <h2 className="text-3xl font-display font-bold text-slate-900 mt-8 mb-4">IBM Watsonx Solutions</h2>
                <p>Don’t invest in technology that doesn’t fit your needs. Our team has the skills and expertise to help you find a tailored solution.</p>
                
                <p>At Logistics Studio, we believe that strategic alignment is the cornerstone of any successful supply chain transformation. We conduct deep-dive assessments to understand your core operational bottlenecks, then chart out rigorous technological adoption roadmaps perfectly scaled to your organization's maturity level.</p>
                
                <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent my-10">
                    <p className="font-medium text-slate-800 italic">"Strategy is not about buying every tool on the market. It's about deploying the right ecosystem that inherently empowers your team and minimizes friction across borders."</p>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-6">Our Approach</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1"><i data-lucide="check" className="w-5 h-5"></i></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Customized Roadmaps</h4>
                            <p className="text-sm mt-1">Aligning technology directly with your business goals.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1"><i data-lucide="check" className="w-5 h-5"></i></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Scalable Architecture</h4>
                            <p className="text-sm mt-1">Tech stack deployment that grows with your volume.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1"><i data-lucide="check" className="w-5 h-5"></i></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Cost Optimization</h4>
                            <p className="text-sm mt-1">Identifying redundancies and reducing process friction.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1"><i data-lucide="check" className="w-5 h-5"></i></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Continuous Analytics</h4>
                            <p className="text-sm mt-1">Ongoing support, reporting, and performance tracking.</p>
                        </div>
                    </div>
                </div>
                
                <p>From initial consultation to final deployment, our strategy and development team ensures you stay ahead of the curve. Partner with us to future-proof your logistics backbone.</p>
            </div>
        </div>
    </section>

    </>
  );
}