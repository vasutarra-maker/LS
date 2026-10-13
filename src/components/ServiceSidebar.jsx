import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ALL_SERVICES } from '../data/servicesList';

export default function ServiceSidebar() {
  const location = useLocation();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-32">
      <h3 className="font-display font-bold text-xl mb-4 text-slate-900">All Services</h3>
      <ul className="space-y-2">
        {ALL_SERVICES.map((service) => {
          const isActive = location.pathname === service.path;
          return (
            <li key={service.id}>
              <Link
                to={service.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors border ${
                  isActive
                    ? 'bg-brand-accent text-white font-semibold border-brand-accent shadow-sm'
                    : 'bg-[#f8fafc] text-slate-700 border-transparent hover:bg-brand-accent hover:text-white hover:border-brand-accent'
                }`}
              >
                {service.fullName || service.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 p-8 bg-[#0a1945] rounded-2xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/10"></div>
        <h4 className="text-white font-display font-bold text-xl mb-4 relative z-10">Need a Quote?</h4>
        <p className="text-slate-300 text-sm mb-6 relative z-10">
          Contact our logistics experts to get a tailored solution for your business.
        </p>
        <Link
          to="/quote"
          className="relative z-10 inline-block px-8 py-3 bg-brand-accent text-white font-bold rounded-full text-sm hover:bg-brand-accentHover transition-colors shadow-lg shadow-brand-accent/30"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
