import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function IbmWatsonx() {
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
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Enterprise AI Platform
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900">
              IBM watsonx for Logistics
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl text-sm sm:text-base">
              Enterprise AI and cognitive document automation tailored to freight forwarding and warehouse data streams.
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-slate-500 font-medium text-xs sm:text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">IBM watsonx</span>
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
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[220px] sm:h-[300px] sm:h-[320px]"
              alt="IBM watsonx for Logistics"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                Applied AI & Machine Learning
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Enterprise AI Built on Real Logistics Data
              </h2>
              <p className="mb-4">
                Where enterprise scale, data governance, and regulatory compliance require a robust AI platform, we utilize IBM watsonx. By connecting watsonx directly to your operational data streams—including EDI feeds, TMS documents, and WMS logs—we construct tailored models for freight forecasting, pattern detection, and autonomous document processing.
              </p>
              <p>
                From parsing non-standard bills of lading and customs documents to detecting shipment exceptions before delivery deadlines pass, watsonx delivers measurable automation without compromising corporate data privacy.
              </p>
            </div>

            {/* Who It's For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="cpu" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                Enterprises, freight forwarders, and 3PLs seeking production-grade generative AI, natural language document comprehension, and operational pattern detection with strict data privacy boundaries.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-5 sm:p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic text-base sm:text-lg">
                "Logistics produces massive operational data. Using watsonx means turning that data into predictive foresight, reducing repetitive manual work, and eliminating shipment surprises."
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">
                watsonx Capabilities in Supply Chain
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Intelligent Document Extraction</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Automated parsing of unstructured bills of lading, customs declarations, and commercial invoices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Operational Pattern Spotting</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Machine learning models identifying route delay patterns, carrier detention spikes, and inventory variances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Predictive Demand Sensing</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Aligning historical EDI shipment flows with macroeconomic variables to anticipate future volume swings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Enterprise Data Governance</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Complete model lineage, transparency, and data ownership ensuring your operational telemetry remains proprietary.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related AI Services link */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base">Explore Our AI & Data Science Practice</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Learn how we build predictive models and operational automation directly on top of your EDI, TMS, and WMS data.
                </p>
              </div>
              <Link
                to="/data-science"
                className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-full bg-slate-900 hover:bg-brand-accent text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View AI & Data Science</span>
                <i data-lucide="arrow-right" className="w-3.5 h-3.5"></i>
              </Link>
            </div>

            <p className="mt-8 text-slate-600 text-sm sm:text-base">
              From automated parsing of complex freight documentation to predictive disruption modeling, watsonx delivers secure, enterprise-grade AI engineered for logistics.
            </p>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
                  Ready to deploy watsonx for logistics?
                </h4>
                <p className="text-slate-300 text-sm">
                  Consult with our applied AI specialists to define high-impact use cases.
                </p>
              </div>
              <Link
                to="/quote"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Request AI Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}