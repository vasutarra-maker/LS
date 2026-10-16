import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_SERVICES } from '../data/servicesList';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [location]);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen && window.lucide) {
      window.lucide.createIcons();
    }
  }, [mobileMenuOpen, servicesSubmenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
                <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Logistics-Studio-logo_hd-1-768x269.png" alt="Logistics Studio" className="h-8 sm:h-10 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
                <Link to="/" className="hover:text-brand-accent transition-colors transform hover:-translate-y-0.5 duration-300">Home</Link>
                <Link to="/about" className="hover:text-brand-accent transition-colors transform hover:-translate-y-0.5 duration-300">About Us</Link>
                
                <div className="relative group h-full py-6 -my-6 flex items-center">
                    <Link to="/services" className="flex items-center gap-1 hover:text-brand-accent transition-colors cursor-pointer transform hover:-translate-y-0.5 duration-300">
                        Services <i data-lucide="chevron-down" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"></i>
                    </Link>
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-[40%] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[920px] max-w-[95vw] z-50">
                        <div className="bg-[#0b1536] rounded-2xl p-4 shadow-2xl border border-slate-700/50 grid grid-cols-3 gap-2 relative">
                            {ALL_SERVICES.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/60 transition-colors group/link"
                                >
                                    <div className="w-9 h-9 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5 group-hover/link:bg-brand-accent group-hover/link:text-white transition-all">
                                        <i data-lucide={item.icon} className="w-4.5 h-4.5"></i>
                                    </div>
                                    <div>
                                        <div className="text-slate-100 font-bold text-[14px] leading-tight mb-1 group-hover/link:text-brand-accent transition-colors flex items-center gap-1.5">
                                            <span>{item.name}</span>
                                            {item.badge === 'Flagship Service' && (
                                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-brand-accent/30 text-brand-accent font-semibold">
                                                Flagship
                                              </span>
                                            )}
                                        </div>
                                        <div className="text-xs text-slate-400 leading-snug">
                                            {item.subtitle}
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {/* Bottom Action */}
                            <div className="col-span-3 mt-2 pt-3 border-t border-slate-700/50 flex items-center justify-between px-3">
                                <Link to="/services" className="text-brand-accent font-bold text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
                                    <span>View all services & complete EDI lifecycle</span>
                                    <i data-lucide="arrow-right" className="w-4 h-4"></i>
                                </Link>
                                <span className="text-[11px] text-slate-400">
                                  14 Yrs Logistics · 400 Engineers
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Link to="/resources" className="hover:text-brand-accent transition-colors transform hover:-translate-y-0.5 duration-300">Resources</Link>
            </nav>

            <div className="flex items-center gap-3">
                <Link to="/quote" className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-accent text-white font-bold text-sm hover:bg-brand-accentHover transition-colors shadow-md shadow-brand-accent/30">
                    Request Quote <i data-lucide="arrow-right" className="w-4 h-4"></i>
                </Link>
                {/* Mobile / Tablet Menu Toggle */}
                <button 
                  className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-brand-accent hover:bg-slate-100 focus:outline-none transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation menu"
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

        {/* Mobile & Tablet Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 shadow-2xl absolute left-0 right-0 top-full flex flex-col py-5 px-6 gap-3 text-base font-semibold text-slate-700 max-h-[calc(100vh-70px)] overflow-y-auto">
             <Link 
               to="/" 
               onClick={() => setMobileMenuOpen(false)} 
               className={`py-2 px-3 rounded-lg transition-colors ${location.pathname === '/' ? 'bg-orange-50 text-brand-accent font-bold' : 'hover:bg-slate-50 hover:text-brand-accent'}`}
             >
               Home
             </Link>
             <Link 
               to="/about" 
               onClick={() => setMobileMenuOpen(false)} 
               className={`py-2 px-3 rounded-lg transition-colors ${location.pathname === '/about' ? 'bg-orange-50 text-brand-accent font-bold' : 'hover:bg-slate-50 hover:text-brand-accent'}`}
             >
               About Us
             </Link>

             {/* Services Dropdown in Mobile/Tablet Menu */}
             <div className="border-t border-slate-100 pt-2 pb-1">
                 <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                   <Link 
                     to="/services" 
                     onClick={() => setMobileMenuOpen(false)} 
                     className="hover:text-brand-accent font-bold text-slate-900 flex-1"
                   >
                     Services
                   </Link>
                   <button 
                     type="button"
                     onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
                     className="p-1 text-slate-500 hover:text-brand-accent"
                     aria-label="Toggle services submenu"
                   >
                     <svg className={`w-5 h-5 transition-transform duration-200 ${servicesSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </button>
                 </div>
                 
                 {servicesSubmenuOpen && (
                   <div className="mt-1 pl-4 pr-2 space-y-1 text-sm bg-slate-50 rounded-xl py-2 border border-slate-100">
                       <Link 
                         to="/services" 
                         onClick={() => setMobileMenuOpen(false)} 
                         className="block py-1.5 px-3 rounded-md text-brand-accent font-bold hover:bg-white"
                       >
                         → Overview & All Services
                       </Link>
                       {ALL_SERVICES.map((s) => (
                           <Link 
                             key={s.id} 
                             to={s.path} 
                             onClick={() => setMobileMenuOpen(false)} 
                             className={`block py-1.5 px-3 rounded-md transition-colors ${location.pathname === s.path ? 'bg-brand-accent text-white font-bold' : 'text-slate-600 hover:text-brand-accent hover:bg-white'}`}
                           >
                             • {s.fullName || s.name}
                           </Link>
                       ))}
                   </div>
                 )}
             </div>

             <Link 
               to="/resources" 
               onClick={() => setMobileMenuOpen(false)} 
               className={`py-2 px-3 rounded-lg transition-colors ${location.pathname === '/resources' ? 'bg-orange-50 text-brand-accent font-bold' : 'hover:bg-slate-50 hover:text-brand-accent'}`}
             >
               Resources
             </Link>
             
             <div className="pt-3 border-t border-slate-100">
               <Link 
                 to="/quote" 
                 onClick={() => setMobileMenuOpen(false)} 
                 className="w-full py-3 px-6 rounded-full bg-brand-accent text-white font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-brand-accent/25 hover:bg-brand-accentHover transition-colors"
               >
                   Request Quote <i data-lucide="arrow-right" className="w-4 h-4"></i>
               </Link>
             </div>
          </div>
        )}
    </header>
  );
}
