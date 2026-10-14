import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';
import { EDI_AREAS } from '../data/servicesList';

export default function EdiServices() {
  const [activeAreaTab, setActiveAreaTab] = useState('all');

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [activeAreaTab]);

  const filteredAreas =
    activeAreaTab === 'all'
      ? EDI_AREAS
      : EDI_AREAS.filter((a) => a.id === activeAreaTab);

  return (
    <>
      {/* Top Banner / Hero */}
      <section className="bg-[#f0f5fa] pt-32 sm:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Flagship Service
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900">
              EDI Services & Capabilities
            </h1>
            <p className="text-slate-500 font-medium text-sm sm:text-base mt-2 max-w-2xl">
              Every part of EDI, from onboarding a new trading partner to 24/7 support, mapping, integration, and platform migration.
            </p>
          </div>
          <div className="text-slate-500 font-medium text-xs sm:text-sm flex flex-wrap gap-1 items-center">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">EDI Services</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Sidebar */}
          <div className="lg:col-span-4">
            <ServiceSidebar />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12 text-slate-600 leading-relaxed text-base sm:text-lg">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[220px] sm:h-[340px]"
              alt="EDI Services & Trading Partner Network"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                Full-Lifecycle EDI Partner
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                The Whole EDI Lifecycle Under One Roof
              </h2>
              <p className="mb-4">
                We cover the whole EDI lifecycle: planning, onboarding, mapping, integration, connectivity, testing, support, full management, and modernization. A logistics company might trade with 40 partners or 400. Each partner has its own spec, its own preferred connection, and its own idea of what "on time" means.
              </p>
              <p>
                Most providers handle one part of that. We handle all of it, on the platforms you already run.
              </p>
            </div>

            {/* Target Audience Callout */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="users" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                3PLs, freight forwarders, carriers, and warehouse operators that send and receive large volumes of EDI with customers, carriers, vendors, and major retailers.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic">
                "EDI gets the most space because it's the part of the business that our clients feel straight away when it breaks. A map that is almost right still gets rejected. Maps built by people who know both EDI and logistics hold up under real volumes and partner audits."
              </p>
            </div>

            {/* 10 Areas Section */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">
                    Relationship Lifecycle
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900">
                    The 10 Core EDI Capabilities
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    These 10 areas follow the typical lifecycle of a trading relationship. Pick one area or take the whole set.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setActiveAreaTab('all')}
                    className={`px-3 py-1.5 rounded-full font-semibold transition-colors ${
                      activeAreaTab === 'all'
                        ? 'bg-brand-accent text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    View All (10)
                  </button>
                </div>
              </div>

              {/* 10 Areas Detailed Cards */}
              <div className="space-y-4 sm:space-y-6">
                {filteredAreas.map((area) => (
                  <div
                    key={area.id}
                    id={area.id}
                    className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-accent/60 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-50 border border-brand-accent/30 text-brand-accent font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                          {area.number}
                        </span>
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-accent transition-colors">
                            {area.title}
                          </h4>
                          <span className="text-xs text-brand-accent font-semibold uppercase tracking-wider">
                            {area.shortTitle}
                          </span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-brand-accent group-hover:text-white transition-colors shrink-0">
                        <i data-lucide={area.icon} className="w-4 h-4"></i>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100">
                      <div>
                        <span className="font-bold text-slate-800 block mb-1">What it is:</span>
                        <p className="text-slate-600 leading-relaxed">{area.whatItIs}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 block mb-1">Who it's for:</span>
                        <p className="text-slate-600 leading-relaxed">{area.whoItsFor}</p>
                      </div>
                    </div>

                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                      <div>
                        <span className="font-bold text-slate-800 block mb-1">How we deliver it:</span>
                        <p className="text-slate-600 leading-relaxed">{area.howWeDeliverIt}</p>
                      </div>
                      <div className="p-3 bg-orange-50/50 rounded-xl border border-brand-accent/20">
                        <span className="font-bold text-brand-accent block mb-0.5 text-xs uppercase tracking-wide">
                          Why it matters:
                        </span>
                        <p className="text-slate-700 text-xs sm:text-sm italic">{area.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1945] text-white relative overflow-hidden mt-8 sm:mt-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 relative z-10">
                Ready to talk EDI with an engineer who gets it?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-xl relative z-10 leading-relaxed">
                If you have a trading partner waiting to go live, an EDI setup that keeps you up at night, or a platform you need to move off, talk to us. We’ll start by understanding how your operation actually works.
              </p>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-brand-accent hover:bg-brand-accentHover text-white font-bold rounded-full text-sm transition-all shadow-lg shadow-brand-accent/30 relative z-10 w-full sm:w-auto text-center"
              >
                <span>Request EDI Assessment</span>
                <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

