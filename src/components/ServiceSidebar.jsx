import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_SERVICES } from '../data/servicesList';

export default function ServiceSidebar() {
  const location = useLocation();
  const [mobileExpanded, setMobileExpanded] = useState(false);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [location, mobileExpanded]);

  const activeService = ALL_SERVICES.find((s) => s.path === location.pathname);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm lg:sticky lg:top-32">
      <div 
        onClick={() => setMobileExpanded(!mobileExpanded)}
        className="flex items-center justify-between cursor-pointer lg:cursor-default select-none"
      >
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">All Services</h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              6 Lines
            </span>
          </div>
          {activeService && !mobileExpanded && (
            <p className="text-xs text-brand-accent font-medium mt-1 lg:hidden">
              Current: {activeService.name}
            </p>
          )}
        </div>
        
        {/* Toggle chevron visible only on mobile/tablet */}
        <button 
          type="button"
          className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:text-brand-accent hover:bg-slate-50 transition-colors"
          aria-label="Toggle all services list"
        >
          <svg className={`w-5 h-5 transition-transform duration-200 ${mobileExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <ul className={`${mobileExpanded ? 'block' : 'hidden lg:block'} space-y-2 mt-4 pt-4 border-t border-slate-100 lg:border-t-0 lg:pt-0 lg:mt-4`}>
        {ALL_SERVICES.map((service) => {
          const isActive = location.pathname === service.path;
          return (
            <li key={service.id}>
              <Link
                to={service.path}
                onClick={() => setMobileExpanded(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-brand-accent text-white font-semibold border-brand-accent shadow-md shadow-brand-accent/20'
                    : 'bg-[#f8fafc] text-slate-700 border-transparent hover:bg-orange-50 hover:text-brand-accent hover:border-brand-accent/40'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-brand-accent border border-slate-200'
                  }`}
                >
                  <i data-lucide={service.icon} className="w-3.5 h-3.5"></i>
                </div>
                <span className="truncate">{service.fullName || service.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
