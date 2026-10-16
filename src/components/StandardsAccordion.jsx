import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STANDARDS_DOCUMENTS_DATA } from '../data/servicesList';

// Domain metadata with icons and descriptions
const DOMAIN_METADATA = {
  'Truckload and LTL': {
    badge: 'Freight & Haulage',
    description: 'Tender dispatch, shipment status tracking, freight billing, and carrier settlement.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.24-4.05a1 1 0 0 0-.78-.38H14v7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  'Ocean and Intermodal': {
    badge: 'Global Maritime',
    description: 'Ocean carrier bookings, container status, shipping instructions, and terminal handling.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="22" x2="12" y2="8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      </svg>
    ),
  },
  'Rail and Customs': {
    badge: 'Intermodal & Customs',
    description: 'Class-I rail waybills, switch orders, equipment tracking, and cross-border manifests.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="16" rx="2" />
        <path d="M4 11h16" />
        <path d="M12 3v8" />
        <path d="m8 19-3 3" />
        <path d="m16 19 3 3" />
      </svg>
    ),
  },
  'Warehousing': {
    badge: 'WMS & Distribution',
    description: 'Shipping orders, warehouse advices, stock transfer notices, adjustments, and receipts.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  'Orders and Retail': {
    badge: 'B2B & Retail Dropship',
    description: 'Retailer purchase orders, PO acknowledgments, changes, ASNs, and scheduling.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  'Finance': {
    badge: 'Billing & Settlement',
    description: 'Electronic invoicing, credit/debit adjustments, and remittance payment advices.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  'Acknowledgments': {
    badge: 'Audit & Handshake',
    description: 'Technical TA1 and 997/999 functional receipts guaranteeing zero transmission drops.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 12 2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
};

export default function StandardsAccordion({ data = STANDARDS_DOCUMENTS_DATA }) {
  // Start with first item expanded for immediate discoverability
  const [expandedItems, setExpandedItems] = useState(() => new Set(['Truckload and LTL']));
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('accordion'); // 'accordion' or 'grid'

  const totalDocuments = useMemo(() => {
    return data.reduce((acc, item) => acc + item.documents.length, 0);
  }, [data]);

  // Filter items based on search query
  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return data;

    return data.map((item) => {
      const areaMatches = item.area.toLowerCase().includes(q);
      const matchingDocs = item.documents.filter(
        (doc) => doc.code.toLowerCase().includes(q) || doc.name.toLowerCase().includes(q)
      );

      if (areaMatches) {
        return item; // show all documents if the domain matches
      }

      if (matchingDocs.length > 0) {
        return {
          ...item,
          documents: matchingDocs,
        };
      }

      return null;
    }).filter(Boolean);
  }, [data, searchQuery]);

  // Automatically expand all when searching
  const effectiveExpanded = useMemo(() => {
    if (searchQuery.trim()) {
      return new Set(filteredData.map((item) => item.area));
    }
    return expandedItems;
  }, [searchQuery, filteredData, expandedItems]);

  const toggleItem = (area) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(area)) {
        next.delete(area);
      } else {
        next.add(area);
      }
      return next;
    });
  };

  const isAllExpanded = filteredData.length > 0 && filteredData.every((item) => effectiveExpanded.has(item.area));

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      setExpandedItems(new Set());
    } else {
      setExpandedItems(new Set(filteredData.map((item) => item.area)));
    }
  };

  return (
    <div className="w-full">
      {/* Top Controls & Summary Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200">
        {/* Search input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transaction set or code (e.g. 204, 850, invoice)..."
            className="w-full pl-9 pr-8 py-2 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              title="Clear search"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
          {/* View Mode Switcher */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => setViewMode('accordion')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                viewMode === 'accordion'
                  ? 'bg-brand-accent text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Vertical Accordion View (Compact & Fast to Scan)"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span>Accordion</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-accent text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Card Grid View"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              <span>Grid</span>
            </button>
          </div>

          {/* Expand/Collapse All (only relevant in accordion mode) */}
          {viewMode === 'accordion' && (
            <button
              type="button"
              onClick={toggleExpandAll}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isAllExpanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span>{isAllExpanded ? 'Collapse All' : 'Expand All'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Summary stats */}
      <div className="flex items-center justify-between px-2 mb-3 text-xs text-slate-500 font-medium">
        <span>
          Showing <strong className="text-slate-800">{filteredData.length}</strong> domains ·{' '}
          <strong className="text-brand-accent">{totalDocuments}</strong> total transaction sets
        </span>
        {viewMode === 'accordion' && (
          <span className="hidden sm:inline text-slate-400">
            Click any horizontal bar to toggle transaction sets
          </span>
        )}
      </div>

      {/* No results message */}
      {filteredData.length === 0 && (
        <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50">
          <p className="text-sm font-semibold text-slate-700">No transaction sets matching "{searchQuery}"</p>
          <p className="text-xs text-slate-500 mt-1">Try searching by code (e.g. 204, 850, 940) or document name.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-3 px-3 py-1.5 bg-brand-accent text-white text-xs font-semibold rounded-lg"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Accordion View (Clean Vertical List of Horizontal Collapsible Bars) */}
      {viewMode === 'accordion' ? (
        <div className="space-y-3" role="region" aria-label="Standards and Documents Handled Accordion">
          {filteredData.map((item, idx) => {
            const isOpen = effectiveExpanded.has(item.area);
            const meta = DOMAIN_METADATA[item.area] || {
              badge: 'Logistics Domain',
              description: 'Enterprise EDI transaction maps and standards.',
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ),
            };

            return (
              <div
                key={item.area}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-brand-accent/50 shadow-md ring-1 ring-brand-accent/10'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Horizontal Collapsible Bar Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.area)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${idx}`}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 md:p-5 text-left select-none cursor-pointer group transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {/* Left: Domain Indicator + Title + Optional Description */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-orange-50 border-brand-accent/30 text-brand-accent'
                          : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:border-brand-accent/30 group-hover:text-brand-accent group-hover:bg-orange-50/50'
                      }`}
                    >
                      {meta.icon}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-accent shrink-0"></span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base md:text-lg group-hover:text-brand-accent transition-colors truncate">
                          {item.area}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 hidden md:block truncate mt-0.5">
                        {meta.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Pill Counter + Chevron Toggle */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {/* Pill Counter */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border transition-all ${
                        isOpen
                          ? 'bg-orange-50 text-brand-accent border-brand-accent/30 font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200 group-hover:border-slate-300 group-hover:bg-slate-100'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent hidden sm:inline-block"></span>
                      <span className="font-bold text-slate-900 sm:text-inherit">{item.documents.length}</span>
                      <span className="hidden sm:inline">transaction sets</span>
                      <span className="sm:hidden">sets</span>
                    </span>

                    {/* Chevron Indicator */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'bg-brand-accent text-white border-brand-accent rotate-180 shadow-xs'
                          : 'bg-slate-50 text-slate-400 border-slate-200 group-hover:text-slate-700 group-hover:border-slate-300'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Collapsible Content Tray */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`accordion-body-${idx}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4 border-t border-slate-100 bg-slate-50/60">
                        {/* Domain description on mobile */}
                        <p className="text-xs text-slate-500 md:hidden mb-3 leading-relaxed">
                          {meta.description}
                        </p>

                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Transaction Sets Handled
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {item.documents.length} tested implementation guides
                          </span>
                        </div>

                        {/* Transaction Chips */}
                        <div className="flex flex-wrap gap-2">
                          {item.documents.map((doc) => (
                            <div
                              key={doc.code}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs hover:border-brand-accent/50 hover:bg-orange-50/30 transition-all cursor-default group/doc"
                            >
                              <strong className="text-brand-accent font-bold font-mono px-1.5 py-0.5 rounded bg-orange-50/70 border border-brand-accent/20 text-xs">
                                {doc.code}
                              </strong>
                              <span className="text-slate-800">{doc.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ) : (
        /* Original Grid View (preserves original option while defaulting to Accordion) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.area}
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm flex flex-col justify-between hover:border-brand-accent/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                    <h3 className="font-bold text-slate-900 text-base">{item.area}</h3>
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200">
                    {item.documents.length} transaction sets
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.documents.map((doc) => (
                    <span
                      key={doc.code}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      <strong className="text-brand-accent font-bold font-mono">{doc.code}</strong> {doc.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

