import React from 'react';

const WHY_CARDS = [
  {
    id: 'logistics-only',
    title: 'Logistics only, for 14 years',
    desc: 'We don’t split our attention across banking, retail, and healthcare. Everything we’ve learned has come from logistics.',
    theme: 'accent',
    bgClass: 'bg-[#f97316] text-white border-transparent shadow-lg shadow-orange-500/20',
    titleClass: 'text-white',
    descClass: 'text-orange-50/90',
    artClass: 'text-white/85',
    renderArt: () => (
      <svg className="w-36 h-32" viewBox="0 0 160 120" fill="none" stroke="currentColor">
        <ellipse cx="80" cy="18" rx="58" ry="15" strokeWidth="1.2" />
        <ellipse cx="80" cy="32" rx="58" ry="15" strokeWidth="1.2" />
        <ellipse cx="80" cy="46" rx="58" ry="15" strokeWidth="1.2" />
        <ellipse cx="80" cy="60" rx="58" ry="15" strokeWidth="1.2" />
        <ellipse cx="80" cy="74" rx="58" ry="15" strokeWidth="1.2" />
        <ellipse cx="80" cy="88" rx="58" ry="15" strokeWidth="1.2" />
        <ellipse cx="80" cy="102" rx="58" ry="15" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'engineers',
    title: '400 engineers who know the domain',
    desc: 'Our people understand freight, warehousing, and EDI as well as they understand code.',
    theme: 'light',
    bgClass: 'bg-[#f4f4f0] text-slate-900 border-slate-200/70 shadow-sm hover:border-slate-300',
    titleClass: 'text-slate-900',
    descClass: 'text-slate-600',
    artClass: 'text-slate-800',
    renderArt: () => (
      <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none" stroke="currentColor">
        <circle cx="80" cy="80" r="64" strokeWidth="1.2" />
        <circle cx="92" cy="80" r="52" strokeWidth="1.2" />
        <circle cx="104" cy="80" r="40" strokeWidth="1.2" />
        <circle cx="116" cy="80" r="28" strokeWidth="1.2" />
        <circle cx="126" cy="80" r="18" strokeWidth="1.2" />
        <circle cx="134" cy="80" r="10" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'edi-lifecycle',
    title: 'The whole EDI lifecycle under one roof',
    desc: 'Strategy, onboarding, mapping, integration, connectivity, testing, support, managed service, and migration, all from one partner.',
    theme: 'dark',
    bgClass: 'bg-[#0a0f1c] text-white border-slate-800 shadow-xl shadow-slate-950/30',
    titleClass: 'text-white',
    descClass: 'text-slate-300',
    artClass: 'text-white/85',
    renderArt: () => (
      <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none" stroke="currentColor">
        <line x1="20" y1="140" x2="140" y2="20" strokeWidth="1.3" />
        <path d="M75 20 H140 V85" strokeWidth="1.3" />
        <path d="M20 75 V140 H85" strokeWidth="1.3" />
        <path d="M105 20 H140 V55" strokeWidth="1.3" />
        <path d="M20 105 V140 H55" strokeWidth="1.3" />
        <path d="M125 20 H140 V35" strokeWidth="1.3" />
        <path d="M20 125 V140 H35" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    id: 'platforms',
    title: 'Experience on the platforms you actually run',
    desc: 'Deep expertise in BizTalk Server, Cleo, IBM Sterling B2B Integrator, and CData, older legacy versions included.',
    theme: 'light',
    bgClass: 'bg-[#f4f4f0] text-slate-900 border-slate-200/70 shadow-sm hover:border-slate-300',
    titleClass: 'text-slate-900',
    descClass: 'text-slate-600',
    artClass: 'text-slate-800',
    renderArt: () => (
      <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none" stroke="currentColor">
        <circle cx="36" cy="36" r="14" strokeWidth="1.2" />
        <circle cx="80" cy="36" r="14" strokeWidth="1.2" />
        <circle cx="124" cy="36" r="14" strokeWidth="1.2" />
        <circle cx="36" cy="80" r="14" strokeWidth="1.2" />
        <circle cx="80" cy="80" r="14" strokeWidth="1.2" />
        <circle cx="124" cy="80" r="14" strokeWidth="1.2" />
        <circle cx="36" cy="124" r="14" strokeWidth="1.2" />
        <circle cx="80" cy="124" r="14" strokeWidth="1.2" />
        <circle cx="124" cy="124" r="14" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'stability-progress',
    title: 'Old and new together',
    desc: 'We keep legacy systems running and build what replaces them, so you never have to choose between stability and progress.',
    theme: 'dark',
    bgClass: 'bg-[#0b1536] text-white border-slate-800 shadow-xl shadow-slate-950/30',
    titleClass: 'text-white',
    descClass: 'text-slate-300',
    artClass: 'text-white/85',
    renderArt: () => (
      <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none" stroke="currentColor">
        <circle cx="56" cy="80" r="42" strokeWidth="1.2" />
        <circle cx="104" cy="80" r="42" strokeWidth="1.2" />
        <line x1="14" y1="80" x2="146" y2="80" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="56" cy="80" r="3.5" fill="currentColor" />
        <circle cx="104" cy="80" r="3.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function WhyLogisticsCards() {
  return (
    <div
      data-no-fx
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 items-stretch"
    >
      {WHY_CARDS.map((card) => (
        <div
          key={card.id}
          className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 border min-h-[460px] sm:min-h-[500px] transition-all duration-300 select-none group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl cursor-default ${card.bgClass}`}
        >
          {/* Top content: Title and Description */}
          <div>
            <h3 className={`text-2xl sm:text-[25px] font-display font-bold leading-tight tracking-tight mb-4 ${card.titleClass}`}>
              {card.title}
            </h3>
            <p className={`text-sm sm:text-[14.5px] leading-relaxed ${card.descClass}`}>
              {card.desc}
            </p>
          </div>

          {/* Bottom graphic: Minimalist geometric wireframe line art */}
          <div className={`mt-8 pt-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${card.artClass}`}>
            {card.renderArt()}
          </div>
        </div>
      ))}
    </div>
  );
}
