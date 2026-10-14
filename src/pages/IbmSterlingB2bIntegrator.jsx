import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function IbmSterlingB2bIntegrator() {
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
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Core Platform Expertise
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900">
              IBM Sterling B2B Integrator
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl text-sm sm:text-base">
              High-volume B2B and EDI transaction processing, trading partner management, and enterprise workflows.
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-slate-500 font-medium text-xs sm:text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">IBM Sterling B2B Integrator</span>
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
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[220px] sm:h-[300px] sm:h-[320px]"
              alt="IBM Sterling B2B Integrator"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                Production-Proven Platform Support
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                High-Volume B2B Integrator Management & Optimization
              </h2>
              <p className="mb-4">
                IBM Sterling B2B Integrator is the trusted backbone for many of the world’s largest freight forwarders, 3PLs, and global supply chain networks. Our engineers bring deep production experience running, maintaining, and upgrading complex Sterling environments.
              </p>
              <p>
                From tuning high-throughput business processes (BPs) and building resilient mapping schemas to managing partner certificates and executing zero-downtime platform migrations, we ensure your mission-critical EDI never misses a beat.
              </p>
            </div>

            {/* Who It's For */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="server" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                Logistics and 3PL organizations operating IBM Sterling B2B Integrator who need senior platform engineers for day-to-day mapping, partner onboarding, business process optimization, or phased modernization to the cloud.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-5 sm:p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic text-base sm:text-lg">
                "Production experience matters most when high-volume EDI pipelines experience peak surges. We keep Sterling B2B Integrator humming smoothly through millions of monthly transactions."
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">
                Our Sterling B2B Capabilities
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">BPML Orchestration</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Authoring and fine-tuning robust Business Process Modeling Language (BPML) flows for automated error handling and retries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Complex Map Development</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      High-precision X12, EDIFACT, XML, and JSON translations tested against strict trading partner compliance specs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Partner Profile & AS2/SFTP</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Trading partner management, digital certificate life-cycles, MDN receipt tracking, and perimeter server security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Cloud & Hybrid Migration</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Phased transition from on-prem Sterling instances to hybrid cloud setups, containerized nodes, or REST integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related EDI Services link */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-base">Explore Our Comprehensive EDI Services</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Discover our 10 EDI capability areas including onboarding, mapping, 24/7 monitoring, and full managed services.
                </p>
              </div>
              <Link
                to="/edi-services"
                className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-full bg-slate-900 hover:bg-brand-accent text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View EDI Services</span>
                <i data-lucide="arrow-right" className="w-3.5 h-3.5"></i>
              </Link>
            </div>

            <p className="mt-8 text-slate-600 text-sm sm:text-base">
              From business process re-engineering to 24/7 SLA monitoring, our Sterling B2B team ensures enterprise continuity for your highest-volume trading partners.
            </p>

            {/* CTA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
                  Need IBM Sterling support or optimization?
                </h4>
                <p className="text-slate-300 text-sm">
                  Connect with our certified Sterling B2B engineers for project or managed support.
                </p>
              </div>
              <Link
                to="/quote"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}