import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function DataScience() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <section className="bg-[#f0f5fa] pt-32 sm:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900">
              AI & Data Science
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl text-sm sm:text-base">
              Forecasting, pattern detection and automation built on your operational data.
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-slate-500 font-medium text-xs sm:text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">AI & Data Science</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ServiceSidebar />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-slate-600 leading-relaxed text-base sm:text-lg">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[220px] sm:h-[300px] sm:h-[320px]"
              alt="AI and Data Science in Logistics"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                Operational AI & Predictive Models
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Turn Operational Telemetry into Predictive Foresight
              </h2>
              <p className="mb-4">
                Applied AI and data science engineered specifically for freight forwarding and warehouse operations. We don't build generic algorithms in a vacuum—we start with the operational data you already have, much of which flows continuously through EDI, your TMS, and your WMS.
              </p>
              <p>
                From there, we build predictive models and automated workflows for demand forecasting, spotting transit patterns, flagging delivery exceptions early, and reducing tedious manual workloads. Where enterprise scale demands it, we leverage platforms like IBM watsonx.
              </p>
            </div>

            {/* Who It's For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="users" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                Freight forwarders, warehouse operators, and 3PLs that want to move from reacting to shipment crises after they occur to predicting disruptions before they happen.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-5 sm:p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic text-base sm:text-lg">
                "Logistics produces huge amounts of data that rarely gets used beyond reporting. Using it well means fewer surprises, better planning and fewer people doing repetitive work."
              </p>
            </div>

            {/* How We Deliver It */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">
                How We Deliver It
              </h3>
              <p className="mb-6 text-sm sm:text-base text-slate-600">
                Grounded in practical operational execution rather than theoretical data science:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Operational Data Foundations</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Unify fragmented telemetry from EDI transactions (214, 204, 856), GPS feeds, TMS archives, and WMS logs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Forecasting & Dwell Prediction</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Machine learning models forecasting lane capacity, port dwell times, and freight volume variations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Exception Spotting & Triage</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Automated pattern detection that detects temperature excursions, misrouted shipments, and missed scan alerts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Enterprise AI with IBM watsonx</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Where it fits, we deploy enterprise generative AI and intelligent document automation using platforms like IBM watsonx.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="p-5 sm:p-6 rounded-2xl bg-orange-50/50 border border-brand-accent/20">
              <h4 className="font-bold text-brand-accent text-xs sm:text-sm uppercase tracking-wider mb-2">
                Why It Matters
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Most logistics companies generate gigabytes of data each week that sits dormant in static dashboards. Using that data with applied predictive intelligence means fewer surprises, improved capacity planning, and significantly fewer hours wasted on repetitive paperwork.
              </p>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
                  Want to unlock your operational data?
                </h4>
                <p className="text-slate-300 text-sm">
                  Talk to our AI & Data Science team to see where predictive intelligence can prevent shipment delays.
                </p>
              </div>
              <Link
                to="/quote"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}