import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServiceSidebar from '../components/ServiceSidebar';
import { getCategoryById, getService } from '../data/categoriesData';

export default function ServiceDetailPage({
  categoryId: propCategoryId,
  serviceId: propServiceId,
}) {
  const { categoryId: paramCategoryId, serviceId: paramServiceId } = useParams();
  const activeCategoryId = propCategoryId || paramCategoryId || 'category-1';
  const activeServiceId = propServiceId || paramServiceId || 'service-1';

  const category = getCategoryById(activeCategoryId) || getCategoryById('category-1');
  const service =
    getService(activeCategoryId, activeServiceId) || category.services[0];

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [category, service]);

  if (!service) return null;

  return (
    <>
      {/* Top Banner / Hero */}
      <section className="bg-[#f0f5fa] pt-40 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold uppercase tracking-wider text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span> Services
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
              {service.title}
            </h1>
            <p className="text-slate-500 font-medium mt-2">{service.subtitle}</p>
          </div>
          <div className="mt-8 md:mt-0 text-slate-500 font-medium text-sm">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link> /{' '}
            <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link> /{' '}
            <Link to={category.path} className="hover:text-brand-accent transition-colors">{category.title}</Link> /{' '}
            <span className="text-slate-800 font-semibold">{service.shortTitle}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ServiceSidebar />
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-8 text-slate-600 leading-relaxed text-lg">
            <img
              src={service.heroImage}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop';
              }}
              className="w-full max-w-2xl mx-auto mb-10 rounded-2xl shadow-2xl object-cover h-[300px]"
              alt={service.title}
            />

            <h2 className="text-3xl font-display font-bold text-slate-900 mt-8 mb-4">
              {service.headline}
            </h2>
            <p>{service.intro}</p>
            <p>{service.description}</p>

            {/* Quote Callout */}
            <div className="bg-[#f0f5fa] p-8 rounded-2xl border-l-4 border-brand-accent my-10">
              <p className="font-medium text-slate-800 italic">"{service.quote}"</p>
            </div>

            {/* Our Approach */}
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-8 mb-6">
              Our Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {service.approach.map((item, idx) => (
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

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900">Explore more under {category.title}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Discover additional capabilities and architecture solutions under this service category.
                </p>
              </div>
              <Link
                to={category.path}
                className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-brand-accent text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-2"
              >
                <span>View {category.title}</span>
                <i data-lucide="arrow-right" className="w-3.5 h-3.5"></i>
              </Link>
            </div>

            <p>
              From initial consultation to end-to-end execution, our team ensures you stay ahead of the curve. Partner with Logistics Studio to elevate your supply chain performance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

