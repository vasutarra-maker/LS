import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function DedicatedTeams() {
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
              Dedicated Teams / Staff Augmentation
            </h1>
            <p className="text-slate-500 font-medium mt-2 max-w-2xl">
              Engineers who already know logistics, working inside your team.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-slate-500 font-medium text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">Dedicated Teams</span>
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
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full rounded-2xl shadow-xl object-cover h-[320px]"
              alt="Dedicated Logistics Teams"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-brand-accent/20 text-xs font-bold text-brand-accent mb-4">
                400-Engineer Bench
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Domain-Experienced Engineers Ready from Day One
              </h2>
              <p className="mb-4">
                Experienced engineers who already understand logistics, working directly as part of your internal engineering squads. We draw from our 400 engineer bench, built over 14 years exclusively in the logistics industry.
              </p>
              <p>
                Our engineers come in already fluent in EDI, freight forwarding, warehousing, and transportation workflows. You can add a single specialist or a full team with its own technical lead, scaling team size dynamically as your product roadmap evolves.
              </p>
            </div>

            {/* Who It's For */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <i data-lucide="users" className="w-5 h-5 text-brand-accent"></i>
                Who It's For
              </h3>
              <p className="text-base text-slate-600">
                Logistics companies that need more engineering capacity quickly and don’t want to spend months teaching new contractors what an ASN, a load tender, or a 214 status event is.
              </p>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent">
              <p className="font-medium text-slate-800 italic">
                "Generalist contractors take time to learn the domain, and you pay for that learning. Domain experienced engineers are productive from the first sprint."
              </p>
            </div>

            {/* How We Deliver It */}
            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                How We Deliver It
              </h3>
              <p className="mb-6 text-base text-slate-600">
                Seamless augmentation models structured to match your development workflows and delivery pace:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Immediate Domain Fluency</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Engineers already familiar with load tenders, ASNs, freight bills, WMS picking, and TMS dispatching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Flexible Team Composition</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Engage a single integration specialist or spin up a dedicated pod complete with a senior tech lead.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Elastic Scaling</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Adjust team capacity seamlessly as seasonal freight volumes fluctuate or critical project milestones arrive.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Transparent Collaboration</h4>
                    <p className="text-sm mt-1 text-slate-500">
                      Embedded directly into your standups, code reviews, Slack/Teams channels, and CI/CD pipelines.
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
                Generalist contractors spend their first 3–6 months trying to decode logistics terminology and industry processes—and you pay for every hour of that education. Our domain-experienced engineers write production-ready code from sprint one.
              </p>
            </div>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-[#0a1945] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold font-display text-white mb-1">
                  Need engineers who know logistics?
                </h4>
                <p className="text-slate-300 text-sm">
                  Tell us your tech stack and requirements. We can match candidates within 48 hours.
                </p>
              </div>
              <Link
                to="/quote"
                className="px-6 py-3 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shrink-0 shadow-lg shadow-brand-accent/30"
              >
                Request Team Capacity
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}