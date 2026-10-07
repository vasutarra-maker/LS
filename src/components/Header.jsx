import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
                    <button className="flex items-center gap-1 hover:text-brand-accent transition-colors cursor-pointer transform hover:-translate-y-0.5 duration-300" onClick="window.location.href='services.html'">
                        Services <i data-lucide="chevron-down" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"></i>
                    </button>
                    
                    {/*  Mega Menu Dropdown  */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[650px] z-50">
                        <div className="bg-[#0b1536] rounded-2xl p-4 shadow-2xl border border-slate-700/50 grid grid-cols-2 gap-2 relative">
                            
                            {/*  Item 1  */}
                            <Link to="/strategy-and-development" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                                <div className="w-10 h-10 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                                    <i data-lucide="compass" className="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div className="text-slate-100 font-bold text-[15px] mb-1">Strategy and Development</div>
                                    <div className="text-xs text-slate-400">Digital roadmaps &amp; consulting</div>
                                </div>
                            </Link>

                            {/*  Item 2  */}
                            <Link to="/dedicated-teams" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                                <div className="w-10 h-10 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                                    <i data-lucide="users" className="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div className="text-slate-100 font-bold text-[15px] mb-1">Dedicated Teams</div>
                                    <div className="text-xs text-slate-400">Staff augmentation &amp; support</div>
                                </div>
                            </Link>

                            {/*  Item 3  */}
                            <Link to="/data-science" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                                <div className="w-10 h-10 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                                    <i data-lucide="bar-chart-2" className="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div className="text-slate-100 font-bold text-[15px] mb-1">Data Science</div>
                                    <div className="text-xs text-slate-400">AI predictive models &amp; analytics</div>
                                </div>
                            </Link>

                            {/*  Item 4  */}
                            <Link to="/ibm-sterling-b2b-integrator" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                                <div className="w-10 h-10 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                                    <i data-lucide="git-merge" className="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div className="text-slate-100 font-bold text-[15px] mb-1">IBM Sterling Integrator</div>
                                    <div className="text-xs text-slate-400">Supply chain &amp; B2B workflows</div>
                                </div>
                            </Link>

                            {/*  Item 5  */}
                            <Link to="/supply-chain-sustainability" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                                <div className="w-10 h-10 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                                    <i data-lucide="leaf" className="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div className="text-slate-100 font-bold text-[15px] mb-1">Sustainability</div>
                                    <div className="text-xs text-slate-400">Green metrics &amp; optimization</div>
                                </div>
                            </Link>

                            {/*  Item 6  */}
                            <Link to="/ibm-watsonx" className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group/link">
                                <div className="w-10 h-10 rounded-lg border border-brand-accent/50 flex items-center justify-center text-brand-accent shrink-0 mt-0.5">
                                    <i data-lucide="cpu" className="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div className="text-slate-100 font-bold text-[15px] mb-1">IBM Watsonx</div>
                                    <div className="text-xs text-slate-400">Enterprise AI for logistics</div>
                                </div>
                            </Link>
                            
                            {/*  Bottom Action  */}
                            <div className="col-span-2 mt-2 pt-4 border-t border-slate-700/50 flex justify-start">
                                <Link to="/services" className="text-brand-accent font-bold text-sm hover:text-orange-400 transition-colors flex items-center gap-2 pl-4 pb-2">
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
            </div>
        </div>
    </header>
  );
}
