import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function LegacyMigration() {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <section className="bg-[#f0f5fa] pt-40 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              Legacy Migration & Modernization
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl">
              Moving off ageing applications and integration platforms without breaking live operations.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-slate-500 font-medium text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">Legacy Migration</span>
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
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[320px]"
              alt="Legacy Migration & Modernization"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                Zero-Downtime Transition
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Modernize Without Breaking Live Operations
              </h2>
              <p className="mb-4">
                Moving from ageing applications and integration platforms to modern technology shouldn't feel like a high-wire act. We know the legacy platforms inside-out—including older BizTalk Server versions, Cleo, and IBM Sterling B2B Integrator—and we know the modern cloud and API stack that replaces them.
              </p>
              <p>
                We migrate in planned phases, run old and new systems side-by-side, and switch over only when the new system is proven. Live operations and trading partners are never put at risk.
              </p>
            </div>

            {/* Target Audience */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="users" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                Companies running core operations on older BizTalk Server versions, legacy Cleo or Sterling installs, or in-house custom EDI code that only one person understands.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic">
                "Waiting on legacy systems gets more expensive each year as skills disappear and vendors end support. A planned migration is cheaper and safer than an emergency one."
              </p>
            </div>

            {/* How We Deliver It */}
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                How We Deliver It
              </h3>
              <p className="mb-6 text-base text-slate-600">
                Our modernization playbook eliminates the risk of "big bang" cutovers through phased validation and parallel processing:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Comprehensive Discovery</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Catalog every partner, document type, translation map, connection, and custom workflow currently in production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Map & Profile Rebuilding</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Rebuild and optimize maps on the target platform, cleaning up legacy workarounds and documenting all logic.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Side-by-Side Dual Run</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Run legacy and target environments concurrently with production transactions to verify complete data parity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Phased Wave Cutover</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Migrate trading partners in controlled batches, eliminating surprise disruptions and ensuring rapid fallback if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="p-6 rounded-2xl bg-orange-50/50 border border-brand-accent/20">
              <h4 className="font-bold text-brand-accent text-sm uppercase tracking-wider mb-2">
                Why It Matters
              </h4>
              <p className="text-slate-700 text-base leading-relaxed">
                Legacy EDI is often the riskiest system a logistics company runs, because everything depends on it and few people still understand it. A phased migration lowers that risk without disrupting daily freight movement or putting revenue at risk.
              </p>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold font-display text-white mb-1">
                  Planning a platform migration?
                </h4>
                <p className="text-slate-300 text-sm">
                  Talk to our architects to evaluate your legacy landscape and build a zero-risk cutover roadmap.
                </p>
              </div>
              <Link
                to="/quote"
                className="px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

