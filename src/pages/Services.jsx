import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ALL_SERVICES,
  EDI_AREAS,
} from '../data/servicesList';

export default function Services() {
  const [selectedArea, setSelectedArea] = useState(EDI_AREAS[0]);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [selectedArea]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg pt-36 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Logistics Only · 14 Years · 400 Engineers
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight text-white">
              Logistics Technology. <span className="text-brand-accent">Engineered for Precision.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              For 14 years, LogisticsStudio has built technology for one industry only: logistics. We work with 3PLs, freight forwarders, warehouse operators, and last-mile carriers. Our 400-engineer team knows the code and knows how a load tender, an ASN, or a freight invoice moves through a business.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/quote"
                className="px-8 py-4 rounded-full bg-brand-accent text-white font-bold hover:bg-brand-accentHover transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/30"
              >
                <span>Request Assessment</span>
                <i data-lucide="arrow-right" className="w-5 h-5"></i>
              </Link>
              <Link
                to="/edi-services"
                className="px-8 py-4 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white font-semibold transition-all flex items-center gap-2 border border-slate-700"
              >
                <span>Explore EDI Capabilities</span>
                <i data-lucide="chevron-right" className="w-4 h-4"></i>
              </Link>
            </div>
          </div>

          {/* Hero Proof Visual */}
          <div className="relative bg-slate-800 rounded-3xl p-2 border border-slate-700 shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
              className="rounded-2xl object-cover h-[400px] w-full opacity-85"
              alt="Logistics Studio EDI & Supply Chain Technology"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 border border-slate-700 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider block mb-1">
                  Domain Proven
                </span>
                <p className="text-white font-bold text-xl">
                  400 Engineers <span className="text-sm font-normal text-slate-400">· 100% Logistics Focus</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-display font-bold text-white">14 Yrs</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Domain Depth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Section (6 Official Service Lines) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200" id="services-grid">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services at a Glance
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Six Dedicated <span className="text-brand-accent">Service Lines</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
            Each service answers four fundamental questions: what the service is, who it’s for, how we deliver it, and why it matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((srv) => (
            <Link
              key={srv.id}
              to={srv.path}
              className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:border-brand-accent/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl border border-brand-accent/30 bg-orange-50 text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <i data-lucide={srv.icon} className="w-6 h-6"></i>
                  </div>
                  {srv.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-orange-50 group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-colors">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-accent transition-colors mb-2">
                  {srv.fullName || srv.name}
                </h3>
                <p className="text-sm font-medium text-slate-700 mb-3 leading-snug">
                  {srv.inOneLine}
                </p>

                <div className="pt-3 border-t border-slate-100 mb-6">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Best Fit:
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {srv.bestFit}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group-hover:translate-x-1 transition-transform">
                <span>Explore capability</span>
                <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Spotlight: The 10 EDI Lifecycle Areas */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Flagship Depth
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              The Complete <span className="text-brand-accent">EDI Lifecycle</span>
            </h2>
            <p className="text-slate-600 text-base max-w-3xl mx-auto leading-relaxed">
              EDI gets the most space because it’s the part of the business clients feel straight away when it breaks. We handle every step in a trading relationship, on the platforms you already run.
            </p>
          </div>

          {/* Interactive EDI Lifecycle Browser */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left list of 10 areas */}
            <div className="lg:col-span-5 space-y-2">
              {EDI_AREAS.map((area) => {
                const isSelected = selectedArea.id === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-brand-accent text-white border-brand-accent shadow-md'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-brand-accent/50 hover:bg-orange-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {area.number}
                      </span>
                      <span className="font-bold text-sm">{area.title}</span>
                    </div>
                    <i
                      data-lucide="chevron-right"
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'translate-x-1 text-white' : 'text-slate-400'
                      }`}
                    ></i>
                  </button>
                );
              })}
            </div>

            {/* Right details box */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-orange-50 border border-brand-accent/30 text-brand-accent font-bold text-base flex items-center justify-center shrink-0">
                  {selectedArea.number}
                </span>
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    {selectedArea.title}
                  </h3>
                  <span className="text-xs text-brand-accent font-semibold uppercase tracking-wider">
                    {selectedArea.shortTitle}
                  </span>
                </div>
              </div>

              <div className="space-y-5 text-sm mt-6">
                <div>
                  <span className="font-bold text-slate-900 block mb-1">What it is:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedArea.whatItIs}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-1">Who it's for:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedArea.whoItsFor}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-1">How we deliver it:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedArea.howWeDeliverIt}</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border border-brand-accent/20">
                  <span className="font-bold text-brand-accent block mb-1 text-xs uppercase tracking-wider">
                    Why it matters:
                  </span>
                  <p className="text-slate-700 leading-relaxed italic">{selectedArea.whyItMatters}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/edi-services#${selectedArea.id}`}
                  className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:underline"
                >
                  <span>Explore in EDI Services</span>
                  <i data-lucide="arrow-right" className="w-4 h-4"></i>
                </Link>
                <Link
                  to="/edi-services"
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-brand-accent text-white text-xs font-semibold transition-colors"
                >
                  View All 10 Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}