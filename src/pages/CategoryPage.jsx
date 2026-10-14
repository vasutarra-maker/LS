import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';
import { getCategoryById } from '../data/categoriesData';

export default function CategoryPage({ categoryId: propCategoryId }) {
  const { categoryId: paramCategoryId } = useParams();
  const activeCategoryId = propCategoryId || paramCategoryId || 'category-1';
  const category = getCategoryById(activeCategoryId) || getCategoryById('category-1');

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [category]);

  if (!category) return null;

  return (
    <>
      {/* Top Banner / Hero */}
      <section className="bg-[#f0f5fa] pt-32 sm:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900">
              {category.title}
            </h1>
            <p className="text-slate-500 font-medium mt-2 text-sm sm:text-base">{category.subtitle}</p>
          </div>
          <div className="mt-2 md:mt-0 text-slate-500 font-medium text-xs sm:text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <span className="text-slate-800 font-semibold">{category.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ServiceSidebar />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-slate-600 leading-relaxed text-base sm:text-lg">
            <img
              src={category.heroImage}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop';
              }}
              className="w-full max-w-2xl mx-auto mb-6 sm:mb-10 rounded-2xl shadow-2xl object-cover h-[220px] sm:h-[300px]"
              alt={category.title}
            />

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-6 sm:mt-8 mb-4">
              {category.headline}
            </h2>
            <p>{category.intro}</p>
            <p>{category.description}</p>

            {/* Services under this Category */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 my-6 sm:my-8">
              <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
                Services Under {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Explore specialized service modules under {category.title} engineered to enhance your supply chain operations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.services.map((srv) => (
                  <Link
                    key={srv.id}
                    to={srv.path}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-accent hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                          {srv.shortTitle}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-orange-50 text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                          <i data-lucide="arrow-right" className="w-3.5 h-3.5"></i>
                        </div>
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-brand-accent transition-colors mb-1 text-base">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{srv.subtitle}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-accent">
                      <span>Explore {srv.shortTitle}</span>
                      <i data-lucide="arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-5 sm:p-8 rounded-2xl border-l-4 border-brand-accent my-6 sm:my-10">
              <p className="font-medium text-slate-800 italic text-base sm:text-lg">"{category.quote}"</p>
            </div>

            {/* Our Approach */}
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-6 sm:mt-8 mb-4 sm:mb-6">
              Our Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {category.approach.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2 bg-orange-50 rounded-full text-brand-accent mt-1 shrink-0">
                    <i data-lucide="check" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              From initial consultation to full execution, our {category.title} team ensures you stay ahead of the curve. Partner with Logistics Studio to future-proof your logistics backbone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

