import React, { useState, useEffect, useRef } from 'react';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All Resources');
  const [visibleCount, setVisibleCount] = useState(3);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    
    const cards = Array.from(gridRef.current.querySelectorAll('.resource-card'));
    let matchedCount = 0;
    
    cards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const isMatch = activeCategory === 'All Resources' || category === activeCategory;
      
      if (isMatch) {
        if (matchedCount < visibleCount) {
          card.classList.remove('hidden');
          card.classList.add('flex');
        } else {
          card.classList.add('hidden');
          card.classList.remove('flex');
        }
        matchedCount++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
      }
    });

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      if (matchedCount > visibleCount) {
        loadMoreBtn.style.display = 'inline-block';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  }, [activeCategory, visibleCount]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(3);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <>
<section className="bg-[#0b1536] pt-40 pb-20 px-6 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e85d22]/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 text-[#e85d22] font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-[#e85d22] animate-ping"></span> Knowledge Hub
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up" style={{"animationDelay":"100ms"}}>Resources</h1>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed animate-fade-in-up" style={{"animationDelay":"200ms"}}>
                    Industry insights, blog posts, press releases, case studies, and technical guides. Explore how Logistics Studio is transforming the supply chain.
                </p>
            </div>
        </div>
    </section>
<div className="sticky-tabs bg-white border-b border-slate-200 sticky z-40 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
            <ul className="flex items-center gap-8 text-sm font-semibold text-slate-500 overflow-x-auto" id="category-filters">
                {['All Resources', 'White papers', 'Blog posts', 'Webinars', 'Case studies', 'Info sheets'].map(cat => (
                  <li 
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`category-tab py-4 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
                      activeCategory === cat 
                        ? 'border-[#e85d22] text-slate-900' 
                        : 'border-transparent hover:text-[#e85d22] hover:border-[#e85d22]'
                    }`}
                    data-category={cat}
                  >
                    {cat}
                  </li>
                ))}
            </ul>
        </div>
    </div>
<section className="py-24 px-6 bg-[#f8fafc] min-h-[600px]">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="resources-grid" ref={gridRef}>
                
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="White papers">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700 group-hover:scale-105 transition-transform">White papers</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">From Siloed Tools to Connected Intelligence: The Logistics Studio AI Suite in Action</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Addresses how fragmented teams, disconnected systems, and isolated technology investments cause delays, operational misalignment, and uneven customer experiences in supply chains.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> November 24, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Webinars">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-100 text-purple-700 group-hover:scale-105 transition-transform">Webinars</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">AI and Cybersecurity in Supply Chains: Friend or Foe?</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Explores the dual nature of AI in supply chain management. While AI serves as a vigilant defender by detecting anomalies, predicting cyber threats, and automating security responses.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> October 21, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Info sheets">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-700 group-hover:scale-105 transition-transform">Info sheets</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">The Hidden Advantage: How Global Resource Centers Transform Logistics Technology Operations</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Focuses on scaling technology operations for rapidly growing logistics providers. Discusses how establishing Global Resource Centers alleviates engineering bottlenecks.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> September 18, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Blog posts">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-[#e85d22] group-hover:scale-105 transition-transform">Blog posts</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">Siloed Thinking is Out: Adopt This Strategic Approach to AI in Logistics</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Critiques the reactive AI trap—implementing isolated AI tools for emails, voice calls, and document processing without unified integration.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> August 26, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Info sheets">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-700 group-hover:scale-105 transition-transform">Info sheets</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">AI Prompts for Logistics Teams: Practical Tools for Immediate Impact</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">A practical guide offering actionable, function-specific AI prompts for logistics professionals. Designed for immediate execution without requiring dedicated data science teams.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> August 6, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="White papers">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700 group-hover:scale-105 transition-transform">White papers</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">From Data Dashboards to Decision Intelligence: The Evolution of Logistics Technology</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Details the transition from static, cluttered reporting dashboards to actionable Decision Intelligence. Focuses on enabling faster, real-time operational decisions.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> July 11, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Webinars">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-100 text-purple-700 group-hover:scale-105 transition-transform">Webinars</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">The Intelligent Pricing Agent: Beyond Dynamic Pricing to Strategic Intelligence</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Examines modern freight forwarding and rate setting. Explores how intelligent pricing algorithms move beyond basic dynamic pricing.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> June 30, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="White papers">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700 group-hover:scale-105 transition-transform">White papers</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">Logistics Automation: Getting Started at Any Stage</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Serves as a practical roadmap for logistics companies at various maturity levels (startups to enterprise) to start automating workflows, reporting systems, and supply chain decisions.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> April 8, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Blog posts">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-[#e85d22] group-hover:scale-105 transition-transform">Blog posts</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Bentonville, AR</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">Logistics Studio Strengthens Enterprise Solutions Portfolio with Key Leadership Hire</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Official announcement detailing the appointment of Sai Kastury as Director of Enterprise Presales and the launch of Logistics Studio’s new Data and Automation service offering.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> March 3, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Case studies">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">Case studies</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Austin, TX</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">Logistics Studio's Modern Approach to EDI Modernization Driving Innovation</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Highlights the modernization of Electronic Data Interchange (EDI) systems. Covers compliance with international standards and modernizing data exchange frameworks.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> February 5, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Case studies">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">Case studies</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Austin, TX</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">Low-Code Solution Garners 50% Increase in Productivity for Transportation Company</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Examines a real-world client implementation where a large-scale multimodal North American transportation provider used low-code software integrations to achieve a 50% increase.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> February 5, 2025</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            <article className="resource-card flex bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#e85d22] transition-all duration-500 flex-col group animate-fade-in-up cursor-pointer" data-category="Blog posts">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-[#e85d22] group-hover:scale-105 transition-transform">Blog posts</span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 group-hover:text-slate-500 transition-colors"><i data-lucide="map-pin" className="w-3 h-3"></i> Austin, TX</span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-[#e85d22] transition-colors line-clamp-3 leading-snug">2024 Year in Review: Milestones, Impact, and Growth</h3>
                <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed group-hover:text-slate-600 transition-colors">Recaps Logistics Studio's key achievements, partnerships, customer success stories, and technology rollouts across 2024.</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 flex items-center gap-2"><i data-lucide="calendar" className="w-4 h-4"></i> December 30, 2024</span>
                    <span className="text-[#e85d22] group-hover:translate-x-2 transition-transform duration-300"><i data-lucide="arrow-right" className="w-5 h-5"></i></span>
                </div>
            </article>
    
            </div>
            
            <div className="mt-16 text-center">
                <button onClick={handleLoadMore} id="load-more-btn" className="px-8 py-4 rounded-full border-2 border-[#e85d22] text-[#e85d22] font-bold hover:bg-[#e85d22] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Load More Articles
                </button>
            </div>
        </div>
    </section>

    </>
  );
}