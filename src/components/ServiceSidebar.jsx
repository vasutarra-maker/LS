import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_SERVICES } from '../data/servicesList';

export default function ServiceSidebar() {
  const location = useLocation();

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [location]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-32">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-bold text-xl text-slate-900">All Services</h3>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
          6 Lines
        </span>
      </div>
      <ul className="space-y-2">
        {ALL_SERVICES.map((service) => {
          const isActive = location.pathname === service.path;
          return (
            <li key={service.id}>
              <Link
                to={service.path}
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
