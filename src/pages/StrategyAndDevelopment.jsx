import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function StrategyAndDevelopment() {
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
              Strategy & Development
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl">
              Technology roadmaps, architecture and custom software, planned and built by the same team.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-slate-500 font-medium text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">Strategy & Development</span>
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[320px]"
              alt="Strategy and Development"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                Plan & Build with One Partner
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Strategy & Custom Software Built for Logistics
              </h2>
              <p className="mb-4">
                Technology planning and custom software for logistics operations, from roadmap and architecture through to build. We design and deliver technology that addresses operational realities—whether you are creating a modern customer portal, upgrading an aging TMS, or building bespoke freight applications.
              </p>
              <p>
                Because our architects and developers belong to the same team, you get seamless continuity from discovery workshops to the production deploy.
              </p>
            </div>

            {/* Who It's For */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="users" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                3PL, freight forwarding, and warehousing companies planning a new platform, a customer portal, or a major technology investment. These teams want a partner who understands the business, not just the code.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic">
                "When the strategy firm and the build team are different companies, a lot gets lost in the handover. One team that owns both delivers what was actually planned."
              </p>
            </div>

            {/* How We Deliver It */}
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                How We Deliver It
              </h3>
              <p className="mb-6 text-base text-slate-600">
                Architects with logistics experience work directly with our engineering teams, ensuring the architecture is tailored to real supply chain demands:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Technology Roadmaps</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Clear architectural roadmaps detailing legacy replacement, cloud adoption, and integration timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Modern Stack Development</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      We build in Java and Spring Boot, Python, Ruby on Rails, React, and native mobile for iOS and Android.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Infrastructure as Code</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Enterprise infrastructure managed as code in Terraform, ensuring repeatability, security, and automated scaling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Continuous Analytics & KPIs</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Observability, SLA reporting, and transaction metrics integrated into every platform we build.
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
                When the strategy firm and the build team are different companies, months of effort and architectural nuance get compromised during handover. One experienced partner that owns both strategy and engineering delivers software that matches your business model.
              </p>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold font-display text-white mb-1">
                  Planning a new logistics platform?
                </h4>
                <p className="text-slate-300 text-sm">
                  Schedule a discovery session with our senior logistics software architects.
                </p>
              </div>
              <Link
                to="/quote"
                className="px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Discuss Your Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}