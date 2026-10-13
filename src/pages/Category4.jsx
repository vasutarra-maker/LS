import React from 'react';
import { Link } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';

export default function Category4() {
  return (
    <>
      <section className="bg-[#f0f5fa] pt-40 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Category 4</h1>
          </div>
          <div className="mt-8 md:mt-0 text-slate-500 font-medium">
            Home / Services / Category 4
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
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop"
              className="w-full max-w-2xl mx-auto mb-10 rounded-2xl shadow-2xl object-cover h-[300px]"
              alt="Category 4"
            />

            <h2 className="text-3xl font-display font-bold text-slate-900 mt-8 mb-4">
              Category 4 Solutions
            </h2>
            <p>
              Don’t invest in technology that doesn’t fit your needs. Our team has the skills and expertise to help you find a tailored solution.
            </p>
            <p>
              At Logistics Studio, Category 4 unifies IoT asset tracking, smart container telematics, and real-time environmental condition monitoring. Monitor ambient temperature, humidity, geofence breaches, and shock events across the entire global cold chain.
            </p>

            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent my-10">
              <p className="font-medium text-slate-800 italic">
                "Real-time sensor telemetry turns cold-chain compliance into an exact science, safeguarding sensitive cargo from origin to destination."
              </p>
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-6">Our Approach</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Cold Chain Sensors</h4>
                  <p className="text-sm mt-1">Real-time temperature and humidity tracking with instant alarms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Geofence Monitoring</h4>
                  <p className="text-sm mt-1">Automated gate-in/gate-out alerts and route adherence monitoring.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Cargo Security</h4>
                  <p className="text-sm mt-1">Shock, tilt, and door-opening detection for high-value freight.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                  <i data-lucide="check" className="w-5 h-5"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Live Telematics Dashboard</h4>
                  <p className="text-sm mt-1">Unified single-pane map tracking all vehicles and shipping containers.</p>
                </div>
              </div>
            </div>

            <p>
              From initial consultation to final deployment, our Category 4 team ensures you stay ahead of the curve. Partner with us to future-proof your logistics backbone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

