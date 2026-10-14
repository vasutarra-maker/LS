import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RESOURCES_DATA = [
  {
    category: "White papers",
    location: "Bentonville, AR",
    title: "From Siloed Tools to Connected Intelligence: The Logistics Studio AI Suite in Action",
    desc: "Addresses how fragmented teams, disconnected systems, and isolated technology investments cause delays, operational misalignment, and uneven customer experiences in supply chains.",
    date: "November 24, 2025"
  },
  {
    category: "Webinars",
    location: "Bentonville, AR",
    title: "AI and Cybersecurity in Supply Chains: Friend or Foe?",
    desc: "Explores the dual nature of AI in supply chain management. While AI serves as a vigilant defender by detecting anomalies, predicting cyber threats, and automating security responses.",
    date: "October 21, 2025"
  },
  {
    category: "Info sheets",
    location: "Bentonville, AR",
    title: "The Hidden Advantage: How Global Resource Centers Transform Logistics Technology Operations",
    desc: "Focuses on scaling technology operations for rapidly growing logistics providers. Discusses how establishing Global Resource Centers alleviates engineering bottlenecks.",
    date: "September 18, 2025"
  },
  {
    category: "Blog posts",
    location: "Bentonville, AR",
    title: "Siloed Thinking is Out: Adopt This Strategic Approach to AI in Logistics",
    desc: "Critiques the reactive AI trap—implementing isolated AI tools for emails, voice calls, and document processing without unified integration.",
    date: "August 26, 2025"
  },
  {
    category: "Info sheets",
    location: "Bentonville, AR",
    title: "AI Prompts for Logistics Teams: Practical Tools for Immediate Impact",
    desc: "A practical guide offering actionable, function-specific AI prompts for logistics professionals. Designed for immediate execution without requiring dedicated data science teams.",
    date: "August 6, 2025"
  },
  {
    category: "White papers",
    location: "Bentonville, AR",
    title: "From Data Dashboards to Decision Intelligence: The Evolution of Logistics Technology",
    desc: "Details the transition from static, cluttered reporting dashboards to actionable Decision Intelligence. Focuses on enabling faster, real-time operational decisions.",
    date: "July 11, 2025"
  },
  {
    category: "Webinars",
    location: "Bentonville, AR",
    title: "The Intelligent Pricing Agent: Beyond Dynamic Pricing to Strategic Intelligence",
    desc: "Examines modern freight forwarding and rate setting. Explores how intelligent pricing algorithms move beyond basic dynamic pricing.",
    date: "June 30, 2025"
  },
  {
    category: "White papers",
    location: "Bentonville, AR",
    title: "Logistics Automation: Getting Started at Any Stage",
    desc: "Serves as a practical roadmap for logistics companies at various maturity levels (startups to enterprise) to start automating workflows, reporting systems, and supply chain decisions.",
    date: "April 8, 2025"
  },
  {
    category: "Blog posts",
    location: "Bentonville, AR",
    title: "Logistics Studio Strengthens Enterprise Solutions Portfolio with Key Leadership Hire",
    desc: "Official announcement detailing the appointment of Sai Kastury as Director of Enterprise Presales and the launch of Logistics Studio’s new Data and Automation service offering.",
    date: "March 3, 2025"
  },
  {
    category: "Case studies",
    location: "Austin, TX",
    title: "Logistics Studio's Modern Approach to EDI Modernization Driving Innovation",
    desc: "Highlights the modernization of Electronic Data Interchange (EDI) systems. Covers compliance with international standards and modernizing data exchange frameworks.",
    date: "February 5, 2025"
  },
  {
    category: "Case studies",
    location: "Austin, TX",
    title: "Low-Code Solution Garners 50% Increase in Productivity for Transportation Company",
    desc: "Examines a real-world client implementation where a large-scale multimodal North American transportation provider used low-code software integrations to achieve a 50% increase.",
    date: "February 5, 2025"
  },
  {
    category: "Blog posts",
    location: "Austin, TX",
    title: "2024 Year in Review: Milestones, Impact, and Growth",
    desc: "Recaps Logistics Studio's key achievements, partnerships, customer success stories, and technology rollouts across 2024.",
    date: "December 30, 2024"
  }
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All Resources');
  const [visibleCount, setVisibleCount] = useState(4);
  const [openIndex, setOpenIndex] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(4);
    setOpenIndex(null);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const filteredResources = RESOURCES_DATA.filter(
    (item) => activeCategory === 'All Resources' || item.category === activeCategory
  );

  const visibleResources = filteredResources.slice(0, visibleCount);

  // Helper for category styling
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'White papers': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Webinars': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Info sheets': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'Blog posts': return 'bg-orange-100 text-[#e85d22] border-orange-200';
      case 'Case studies': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <>
      <section className="bg-[#0b1536] pt-32 sm:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e85d22]/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#e85d22] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#e85d22] animate-ping"></span> Knowledge Hub
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Resources
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Industry insights, blog posts, press releases, case studies, and technical guides. Explore how Logistics Studio is transforming the supply chain.
            </p>
          </div>
        </div>
      </section>

      <div className="sticky-tabs bg-white border-b border-slate-200 sticky z-40 shadow-sm top-0 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-500 overflow-x-auto no-scrollbar">
            {['All Resources', 'White papers', 'Blog posts', 'Webinars', 'Case studies', 'Info sheets'].map(cat => (
              <li 
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`py-3.5 sm:py-4 border-b-2 cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat 
                    ? 'border-[#e85d22] text-slate-900' 
                    : 'border-transparent hover:text-[#e85d22] hover:border-[#e85d22]'
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f8fafc] min-h-[600px]" data-no-fx>
        <div className="max-w-5xl mx-auto">
          
          <div className="border-t border-slate-200">
            <AnimatePresence>
              {visibleResources.map((item, i) => {
                const isOpen = openIndex === i;
                const globalIndex = RESOURCES_DATA.indexOf(item);
                const num = `${String(globalIndex + 1).padStart(2, '0')}/`;
                
                return (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-b border-slate-200 bg-white px-4 sm:px-6 first:rounded-xl sm:first:rounded-2xl last:rounded-xl sm:last:rounded-2xl"
                  >
                    <button
                      onClick={() => toggleAccordion(i)}
                      className="w-full py-5 sm:py-8 flex items-center justify-between group cursor-pointer text-left focus:outline-none gap-4"
                    >
                      <div className="flex items-center gap-3 sm:gap-6 md:gap-12 min-w-0">
                        <span className="text-slate-300 font-mono text-sm sm:text-xl md:text-2xl shrink-0">{num}</span>
                        <h3 className={`text-base sm:text-xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#e85d22]' : 'text-slate-900 group-hover:text-[#e85d22]'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <div className={`shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black text-white' : 'bg-slate-100 text-slate-900 group-hover:bg-[#e85d22] group-hover:text-white'}`}>
                        <motion.div
                          initial={false}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </motion.div>
                      </div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      className="overflow-hidden"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="pb-6 sm:pb-8 pt-2 pl-0 sm:pl-12 md:pl-[6.5rem] flex flex-col md:flex-row gap-4 sm:gap-8">
                        <div className="md:w-3/5">
                          <p className="text-slate-500 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                            {item.desc}
                          </p>
                          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-slate-400">
                            <span className="flex items-center gap-1">
                              <i data-lucide="map-pin" className="w-3.5 h-3.5 sm:w-4 sm:h-4"></i> {item.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <i data-lucide="calendar" className="w-3.5 h-3.5 sm:w-4 sm:h-4"></i> {item.date}
                            </span>
                          </div>
                        </div>
                        <div className="md:w-2/5 flex flex-wrap gap-2 items-start content-start">
                          <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border ${getCategoryStyles(item.category)}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredResources.length > visibleCount && (
            <div className="mt-10 sm:mt-16 text-center">
              <button onClick={handleLoadMore} className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[#e85d22] text-[#e85d22] font-bold text-sm sm:text-base hover:bg-[#e85d22] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}