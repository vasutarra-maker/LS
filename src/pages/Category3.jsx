import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function Category3() {
  return (
    <>
      <section className="bg-[#f0f5fa] pt-40 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Category 3</h1>
          </div>
          <div className="mt-8 md:mt-0 text-slate-500 font-medium">
            Home / Services / Category 3
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ServiceSidebar />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-8 text-slate-600 leading-relaxed text-lg">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
              className="w-full max-w-2xl mx-auto mb-10 rounded-2xl shadow-2xl object-cover h-[300px]"
              alt="Category 3"
            />

            <h2 className="text-3xl font-display font-bold text-slate-900 mt-8 mb-4">
              Category 3 Solutions
            </h2>
            <p>
              Don’t invest in technology that doesn’t fit your needs. Our team has the skills and expertise to help you find a tailored solution.
            </p>
            <p>
              At Logistics Studio, Category 3 streamlines freight audit, invoice settlement, and financial reconciliation. Eliminate billing discrepancies, automate rate verification, and capture actionable cost-saving opportunities across your entire carrier network.
            </p>

            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent my-10">
              <p className="font-medium text-slate-800 italic">
                "Financial accuracy in freight logistics transforms carrier relationships from contentious disputes into collaborative, data-driven partnerships."
              </p>
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-6">Our Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Automated Audit</h4>
                  <p className="text-sm mt-1">Instant invoice matching against agreed contract rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Dispute Management</h4>
                  <p className="text-sm mt-1">Automated exception capture and carrier communication.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Spend Analytics</h4>
                  <p className="text-sm mt-1">Granular visibility into accessorial charges and lane costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">ERP Reconciliation</h4>
                  <p className="text-sm mt-1">Seamless journal entry sync into SAP, Oracle, and NetSuite.</p>
                </div>
              </div>
            </div>

            <p>
              From initial consultation to final deployment, our Category 3 team ensures you stay ahead of the curve. Partner with us to future-proof your logistics backbone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

