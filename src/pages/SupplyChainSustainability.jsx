import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function SupplyChainSustainability() {
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
              Supply Chain Sustainability
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl text-sm sm:text-base">
              Technology support for sustainability commitments and emissions reporting.
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-slate-500 font-medium text-xs sm:text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">Sustainability</span>
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
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[220px] sm:h-[300px] sm:h-[320px]"
              alt="Supply Chain Sustainability"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                ESG Telemetry & Green Logistics
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Technology That Backs Your Sustainability Commitments
              </h2>
              <p className="mb-4">
                Technology support that enables logistics enterprises, 3PLs, and carriers to meet stringent sustainability commitments and regulatory standards. From capturing accurate emissions data to automated ESG compliance reporting, we help you transform green targets into operational realities.
              </p>
              <p>
                We integrate directly with partner EDI transactions, telematics systems, and TMS dispatchers to turn transport execution into verified emissions intelligence.
              </p>
            </div>

            {/* Who It's For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="users" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                Logistics companies with emissions targets, customer sustainability mandates, or environmental reporting obligations who need reliable systems to measure and document progress.
              </p>
            </div>

            {/* How We Deliver It */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">
                How We Deliver It
              </h3>
              <p className="mb-6 text-sm sm:text-base text-slate-600">
                Our technology capabilities bridge operations with verified carbon calculations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Emissions Data Capture</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Automated ingestion of fuel consumption, engine idle, and mileage telemetry across fleets and partner networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Audit-Ready ESG Reporting</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Standardized reporting aligned with GLEC frameworks and customer ESG scorecards for bid submissions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Route & Load Optimization</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Algorithmic routing and load consolidation reducing deadhead miles and carbon output per ton-mile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">EDI & Telematics Extraction</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Pulling sustainability telemetry directly from 214 shipment events, 210 invoices, and ELD black-box feeds.
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
                Sustainability is no longer just a marketing pledge. Shippers actively choose logistics partners who can back up claims with auditable data. Implementing reliable measurement tech wins contracts and protects margins.
              </p>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
                  Need to track or report emissions?
                </h4>
                <p className="text-slate-300 text-sm">
                  Discover how our data integration pipelines capture sustainability data effortlessly.
                </p>
              </div>
              <Link
                to="/quote"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Get Sustainability Advice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}