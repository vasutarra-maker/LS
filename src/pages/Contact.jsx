import React from 'react';

export default function Contact() {

  return (
    <>
<section className="hero-bg pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                    Global Freight · 150+ Countries
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight">
                    Autonomous Supply Chains. <span className="text-brand-accent">Engineered for Speed.</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                    Transforming global freight forwarders and 3PL networks through real-time telemetry, automated route optimization, and high-velocity freight execution.
                </p>
                <div className="flex gap-4">
                    <a href="/quote" className="px-8 py-4 rounded-full bg-brand-accent text-white font-bold hover:bg-brand-accentHover transition-all flex items-center gap-2 shadow-lg shadow-brand-accent/30">
                        Book Shipment <i data-lucide="arrow-right" className="w-5 h-5"></i>
                    </a>
                </div>
            </div>
            
            {/*  Hero Proof Component  */}
            <div className="relative bg-slate-800 rounded-3xl p-2 border border-slate-700 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" className="rounded-2xl object-cover h-[400px] w-full opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700 flex items-center justify-between">
                    <div>
                        <div className="flex text-brand-accent mb-1">
                            <i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i><i data-lucide="star" className="w-4 h-4 fill-current"></i>
                        </div>
                        <p className="text-white font-bold text-xl">4.9/5 <span className="text-sm font-normal text-slate-400">2,400+ reviews</span></p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-display font-bold text-white">99.8%</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">On-Time</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<div className="bg-white py-10 border-b border-slate-200 overflow-hidden flex relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee gap-16 items-center whitespace-nowrap text-slate-400 font-display font-bold text-2xl uppercase tracking-widest px-8">
            <span>Global Partners</span> • <span>Maersk</span> • <span>DHL</span> • <span>FedEx</span> • <span>Lufthansa</span> • <span>Hapag-Lloyd</span> • 
            <span>Global Partners</span> • <span>Maersk</span> • <span>DHL</span> • <span>FedEx</span> • <span>Lufthansa</span> • <span>Hapag-Lloyd</span>
        </div>
    </div>
<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
        <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span> What We Move
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Every Mode. Every Lane. <span className="text-brand-accent">One Platform.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*  Air  */}
            <div className="fretrix-card overflow-hidden group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1570710891163-6d815f474911?q=80&amp;w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-50 text-brand-accent flex items-center justify-center"><i data-lucide="plane"></i></div>
                        <span className="text-xs font-semibold bg-slate-100 px-3 py-1 rounded-full text-slate-600">Express</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Air Freight</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">Priority door-to-door delivery for time-critical cargo using our global air network.</p>
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mb-6">
                        <div><p className="font-bold text-slate-900">24-48h</p><p className="text-xs text-slate-500">Avg Transit</p></div>
                        <div><p className="font-bold text-slate-900">380+</p><p className="text-xs text-slate-500">Airports</p></div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group/btn">
                        Explore Air Solutions <i data-lucide="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>

            {/*  Ocean  */}
            <div className="fretrix-card overflow-hidden group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&amp;w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><i data-lucide="ship"></i></div>
                        <span className="text-xs font-semibold bg-slate-100 px-3 py-1 rounded-full text-slate-600">Global Lanes</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Ocean Freight</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">Reliable FCL and LCL services across major trade lanes with weekly departures.</p>
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mb-6">
                        <div><p className="font-bold text-slate-900">220+</p><p className="text-xs text-slate-500">Ports</p></div>
                        <div><p className="font-bold text-slate-900">Live</p><p className="text-xs text-slate-500">Tracking</p></div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group/btn">
                        Explore Ocean <i data-lucide="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>

            {/*  Warehouse  */}
            <div className="fretrix-card overflow-hidden group flex flex-col">
                <div className="h-48 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><i data-lucide="box"></i></div>
                        <span className="text-xs font-semibold bg-slate-100 px-3 py-1 rounded-full text-slate-600">Fulfillment</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">Warehousing</h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow">Robotic micro-fulfillment hubs optimized for same-day picking and storage.</p>
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 mb-6">
                        <div><p className="font-bold text-slate-900">Same-Day</p><p className="text-xs text-slate-500">Dispatch</p></div>
                        <div><p className="font-bold text-slate-900">99.9%</p><p className="text-xs text-slate-500">Accuracy</p></div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm group/btn">
                        Select Warehouse <i data-lucide="arrow-right" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
<section className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-12">Live Telemetry Flow</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/*  Node 1  */}
                <div className="bg-white p-6 rounded-2xl text-left shadow-sm border border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold mb-4">1</div>
                    <h4 className="text-lg font-bold text-slate-900">Consolidation Hub</h4>
                    <p className="text-sm text-slate-500 mt-2">Automated RFID tagging, weight check &amp; pallet packing.</p>
                </div>
                {/*  Node 2  */}
                <div className="bg-white p-6 rounded-2xl text-left shadow-sm border border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold mb-4">2</div>
                    <h4 className="text-lg font-bold text-slate-900">Transit Corridor</h4>
                    <p className="text-sm text-slate-500 mt-2">Automated digital customs clearance &amp; IoT sensor sync.</p>
                </div>
                {/*  Node 3  */}
                <div className="bg-white p-6 rounded-2xl text-left shadow-sm border border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold mb-4">3</div>
                    <h4 className="text-lg font-bold text-slate-900">Regional Hub</h4>
                    <p className="text-sm text-slate-500 mt-2">High-speed sorting into regional fulfillment fleets.</p>
                </div>
                {/*  Node 4  */}
                <div className="bg-white p-6 rounded-2xl text-left shadow-sm border border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold mb-4">4</div>
                    <h4 className="text-lg font-bold text-slate-900">Last-Mile Delivery</h4>
                    <p className="text-sm text-slate-500 mt-2">EV Fleet dispatch with real-time ETA geo-tracking.</p>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}