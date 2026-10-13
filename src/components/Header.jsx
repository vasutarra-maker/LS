import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_SERVICES } from '../data/servicesList';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
                <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Logistics-Studio-logo_hd-1-768x269.png" alt="Logistics Studio" className="h-10 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                <Link to="/" className="hover:text-brand-accent transition-colors transform hover:-translate-y-0.5 duration-300">Home</Link>
                <Link to="/about" className="hover:text-brand-accent transition-colors transform hover:-translate-y-0.5 duration-300">About Us</Link>
                
                <div className="relative group h-full py-6 -my-6 flex items-center">
                    <Link to="/services" className="flex items-center gap-1 hover:text-brand-accent transition-colors cursor-pointer transform hover:-translate-y-0.5 duration-300">
                        Services <i data-lucide="chevron-down" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"></i>
                    </Link>
                    
                    {/*  Mega Menu Dropdown (All 10 Services in 3 Columns)  */}
                    <div className="absolute top-full left-1/2 -translate-x-[40%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[920px] z-50">
                        <div className="bg-[#0b1536] rounded-2xl p-4 shadow-2xl border border-slate-700/50 grid grid-cols-3 gap-2 relative">
                            {ALL_SERVICES.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/50 transition-colors group/link"
                                >
                                    <div className="w-9 h-9 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 group-hover/link:bg-brand-accent group-hover/link:text-white transition-all">
                                        <i data-lucide={item.icon} className="w-4.5 h-4.5"></i>
                                    </div>
                                    <div>
                                        <div className="text-slate-100 font-bold text-[14px] leading-tight mb-1 group-hover/link:text-brand-accent transition-colors">
                                            {item.name}
                                        </div>
                                        <div className="text-xs text-slate-400 leading-snug">
                                            {item.subtitle}
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {/*  Bottom Action  */}
                            <div className="col-span-3 mt-2 pt-3 border-t border-slate-700/50 flex justify-start">
                                <Link to="/services" className="text-brand-accent font-bold text-sm hover:text-orange-400 transition-colors flex items-center gap-2 pl-3 pb-1">
                                    View all services <i data-lucide="arrow-right" className="w-4 h-4"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Link to="/resources" className="hover:text-brand-accent transition-colors transform hover:-translate-y-0.5 duration-300">Resources</Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link to="/quote" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shadow-md shadow-brand-accent/30">
                    Request Quote <i data-lucide="arrow-right" className="w-4 h-4"></i>
                </Link>
                {/* Mobile Menu Toggle */}
                <button 
                  className="md:hidden p-2 text-slate-600 hover:text-brand-accent focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
            </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute left-0 right-0 top-full flex flex-col py-4 px-6 gap-3 text-base font-semibold text-slate-700 max-h-[85vh] overflow-y-auto">
             <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">Home</Link>
             <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">About Us</Link>
             <div className="border-t border-slate-100 pt-2">
                 <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent font-bold text-slate-900 block mb-2">Services</Link>
                 <div className="pl-3 space-y-2 text-sm text-slate-600">
                     {ALL_SERVICES.map((s) => (
                         <Link key={s.id} to={s.path} onClick={() => setMobileMenuOpen(false)} className="block hover:text-brand-accent">• {s.fullName || s.name}</Link>
                     ))}
                 </div>
             </div>
             <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-accent">Resources</Link>
             <Link to="/quote" onClick={() => setMobileMenuOpen(false)} className="text-brand-accent mt-2 inline-flex items-center gap-2">
                 Request Quote <i data-lucide="arrow-right" className="w-4 h-4"></i>
             </Link>
          </div>
        )}
    </header>
  );
}
