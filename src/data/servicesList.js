// Master list of all 6 official service lines for Logistics Studio as per company capabilities
export const ALL_SERVICES = [
  {
    id: 'edi-services',
    name: 'EDI Services',
    fullName: 'EDI Services & Capabilities',
    path: '/edi-services',
    subtitle: 'Full-lifecycle onboarding, mapping, integration & support',
    icon: 'git-merge',
    badge: 'Flagship Service',
    inOneLine: 'Every part of EDI, from onboarding a new trading partner to support, mapping, integration and platform migration',
    bestFit: '3PLs, freight and warehousing teams with many trading partners',
  },
  {
    id: 'strategy-and-development',
    name: 'Strategy & Development',
    fullName: 'Strategy & Development',
    path: '/strategy-and-development',
    subtitle: 'Technology roadmaps, architecture & custom software',
    icon: 'compass',
    badge: 'Technology Strategy',
    inOneLine: 'Technology roadmaps, architecture and custom software, planned and built by the same team',
    bestFit: 'Companies planning a new platform or a large technology investment',
  },
  {
    id: 'dedicated-teams',
    name: 'Dedicated Teams',
    fullName: 'Dedicated Teams / Staff Augmentation',
    path: '/dedicated-teams',
    subtitle: 'Logistics-fluent engineers embedded inside your team',
    icon: 'users',
    badge: '400+ Engineers',
    inOneLine: 'Engineers who already know logistics, working inside your team',
    bestFit: 'Teams that need more capacity without a long ramp up',
  },
  {
    id: 'data-science',
    name: 'AI & Data Science',
    fullName: 'AI & Data Science',
    path: '/data-science',
    subtitle: 'Forecasting, pattern detection & operational automation',
    icon: 'cpu',
    badge: 'Predictive Intelligence',
    inOneLine: 'Forecasting, pattern detection and automation built on your operational data',
    bestFit: 'Freight forwarders and warehouse operators',
  },
  {
    id: 'legacy-migration-and-modernization',
    name: 'Legacy Migration',
    fullName: 'Legacy Migration & Modernization',
    path: '/legacy-migration-and-modernization',
    subtitle: 'Moving off ageing platforms without breaking live operations',
    icon: 'layers',
    badge: 'Zero Disruption',
    inOneLine: 'Moving off ageing applications and integration platforms without breaking live operations',
    bestFit: 'Companies on older BizTalk, Cleo or in-house EDI systems',
  },
  {
    id: 'supply-chain-sustainability',
    name: 'Sustainability',
    fullName: 'Supply Chain Sustainability',
    path: '/supply-chain-sustainability',
    subtitle: 'Technology support for emissions & ESG commitments',
    icon: 'leaf',
    badge: 'ESG & Green Tech',
    inOneLine: 'Technology support for sustainability commitments',
    bestFit: 'Logistics companies with emissions or reporting targets',
  },
];

// The 10 EDI Lifecycle Areas
export const EDI_AREAS = [
  {
    number: '01',
    id: 'edi-strategy-assessment',
    title: 'EDI Strategy & Assessment',
    shortTitle: 'Strategy & Assessment',
    icon: 'search',
    whatItIs: 'A review of how your EDI works today, and a plan for where it should go.',
    whoItsFor: 'Companies whose EDI has grown one partner at a time and now feels fragile, expensive or hard to change. Also companies about to choose or replace a platform.',
    howWeDeliverIt: 'We list every trading partner, document type, map and connection you run. We look at error rates, manual workarounds, VAN charges and platform licences. You get a written assessment covering what to keep, what to fix first, and whether a platform change or VAN reduction makes sense.',
    whyItMatters: 'Most EDI problems are hidden until a big customer goes live or a key engineer leaves. An assessment shows you the risk and the cost before either of those happens.',
  },
  {
    number: '02',
    id: 'trading-partner-onboarding',
    title: 'Trading Partner Onboarding',
    shortTitle: 'Partner Onboarding',
    icon: 'user-plus',
    whatItIs: 'Connecting a new trading partner, from first contact through testing, certification and go live.',
    whoItsFor: 'Companies adding carriers, shippers, vendors, retailers or other 3PLs who need the connection working without disturbing the partners already live.',
    howWeDeliverIt: 'Collect the partner’s implementation guide and agree on documents, versions and timing. Set up partner profiles, IDs and qualifiers. Set up connections (AS2, SFTP, VAN, API) and exchange certificates/keys. Build or adapt maps, run test cycles with real sample data until sign-off, and go live with close production monitoring.',
    whyItMatters: 'A slow onboarding delays revenue from a new customer. A rushed one creates chargebacks and rework from day one. A repeatable process gets partners live correctly the first time.',
  },
  {
    number: '03',
    id: 'edi-mapping-translation',
    title: 'EDI Mapping & Translation',
    shortTitle: 'Mapping & Translation',
    icon: 'shuffle',
    whatItIs: 'Building and maintaining the maps that turn a partner’s EDI into data your systems understand, and the other way round.',
    whoItsFor: 'Companies that need new maps, changes to existing maps when a partner updates its spec, or a cleanup of maps that nobody has touched in years.',
    howWeDeliverIt: 'Our engineers write and test maps every day in BizTalk Server, Cleo, IBM Sterling B2B Integrator and CData across X12 and other formats. Every map is tested against the partner’s guide, including split shipments, partial receipts, and multi-stop loads. Full documentation ensures zero reliance on one person’s memory.',
    whyItMatters: 'EDI is strict about format, sequence and acknowledgment. A map that is almost right still gets rejected. Maps built by people who know both EDI and logistics hold up under real volumes and partner audits.',
  },
  {
    number: '04',
    id: 'edi-integration-erp-wms-tms',
    title: 'EDI Integration with ERP, WMS & TMS',
    shortTitle: 'ERP/WMS/TMS Integration',
    icon: 'database',
    whatItIs: 'Connecting EDI to the systems that actually run your operation, so documents flow in and out with no re-keying.',
    whoItsFor: 'Companies where an ASN or load tender still arrives as EDI but gets typed into the WMS or TMS by hand. Also companies changing their ERP, WMS or TMS.',
    howWeDeliverIt: 'We build the integration layer between your EDI platform and your business systems via database and file integrations, message queues, and APIs. We also build API-to-EDI bridges so REST/JSON partners can trade with an EDI-based process seamlessly.',
    whyItMatters: 'EDI only saves money if data lands in the right system automatically. Manual entry brings back the delays and errors EDI was meant to remove.',
  },
  {
    number: '05',
    id: 'communication-connectivity',
    title: 'Communication & Connectivity',
    shortTitle: 'Connectivity & Protocols',
    icon: 'radio',
    whatItIs: 'Setting up and running the secure connections EDI travels over.',
    whoItsFor: 'Any company exchanging EDI with partners that each insist on a different connection method.',
    howWeDeliverIt: 'We set up, secure and maintain AS2 (with certificate management & MDN receipts), SFTP/FTPS (keys and folder conventions), VAN mailboxes (including migration to direct links where cheaper), APIs/HTTPS web services, and Cleo MFT.',
    whyItMatters: 'A certificate that expires on a Friday night can stop every shipment to a major customer. Connectivity is the part of EDI everyone forgets until it fails, so we track expiry dates and renewals proactively.',
  },
  {
    number: '06',
    id: 'testing-certification-compliance',
    title: 'Testing, Certification & Compliance',
    shortTitle: 'Testing & Compliance',
    icon: 'shield-check',
    whatItIs: 'Proving that every document meets the partner’s rules before it reaches production, and keeping it compliant afterwards.',
    whoItsFor: 'Companies facing partner certification, retailer compliance programmes, or chargebacks for late or wrong ASNs and invoices.',
    howWeDeliverIt: 'We check syntax and structure against the partner implementation guide. We manage acknowledgments (997, 999, TA1) so nothing is assumed delivered. We run end-to-end tests with realistic edge-case data and preserve test scripts for rapid re-certification.',
    whyItMatters: 'Compliance failures cost money directly through chargebacks and fines. They also cost goodwill with partners who expect EDI to just work.',
  },
  {
    number: '07',
    id: 'edi-support-monitoring',
    title: 'EDI Support & Monitoring',
    shortTitle: 'Support & Monitoring',
    icon: 'activity',
    whatItIs: 'Day to day support for live EDI: watching transactions, catching failures and fixing them.',
    whoItsFor: 'Companies running live EDI that need someone keeping documents moving and solving problems before customers notice.',
    howWeDeliverIt: 'Continuous transaction monitoring with alerts for failed, stuck or missing documents; error handling, reprocessing and resubmission; root cause analysis; missing acknowledgment tracking; small map changes; and volume/error SLA reporting.',
    whyItMatters: 'A failed EDI document is never just an IT problem. It stops orders, delays invoices and strains partner relationships. Fast support keeps the business running.',
  },
  {
    number: '08',
    id: 'managed-edi-services',
    title: 'Managed EDI Services',
    shortTitle: 'Managed EDI',
    icon: 'briefcase',
    whatItIs: 'We run your entire EDI operation as an outsourced service.',
    whoItsFor: 'Companies that want EDI to work reliably but don’t want to hire, train and keep a specialist in-house team.',
    howWeDeliverIt: 'We take end-to-end ownership of onboarding, mapping, connectivity, monitoring and support under one agreement with a named team that knows your partners, regular reporting, and a single point of contact under flexible commercial models.',
    whyItMatters: 'EDI skills are hard to hire and harder to keep. A managed service removes single-person risk and turns an unpredictable cost into a planned one.',
  },
  {
    number: '09',
    id: 'edi-migration-modernization',
    title: 'EDI Migration & Modernization',
    shortTitle: 'EDI Migration',
    icon: 'refresh-cw',
    whatItIs: 'Moving EDI from old platforms, ageing VAN arrangements or home grown scripts to a modern setup, without breaking live trading.',
    whoItsFor: 'Companies on older BizTalk Server versions, legacy Cleo or Sterling installs, or in-house EDI code that only one person understands.',
    howWeDeliverIt: 'We catalog what exists, rebuild maps and partner profiles on the target platform, run old and new side-by-side, and migrate partners across in planned waves without a risky big-bang cutover.',
    whyItMatters: 'Legacy EDI is often the riskiest system a logistics company runs. A phased migration lowers risk without interrupting trading operations.',
  },
  {
    number: '10',
    id: 'platforms-and-standards',
    title: 'Platforms & Standards We Support',
    shortTitle: 'Platforms & Standards',
    icon: 'server',
    whatItIs: 'Deep production experience on core logistics platforms and full X12/EDIFACT document standards.',
    whoItsFor: 'Enterprises running multi-platform environments or requiring standard compliance across truckload, ocean, rail, air, warehousing, and finance.',
    howWeDeliverIt: 'Certified development on BizTalk Server, Cleo, IBM Sterling B2B Integrator, and CData. Comprehensive handling of 20+ core transaction sets including 204, 214, 210, 850, 856, 940, and 945.',
    whyItMatters: 'Most logistics companies run two or three platforms side-by-side. You get engineers who know older versions and modern cloud integrations equally well.',
  },
];

// Production Platforms
export const PLATFORMS_DATA = [
  {
    name: 'BizTalk Server',
    summary: 'Integration and orchestration, including older BizTalk environments that many logistics companies still run',
    category: 'Enterprise Integration',
  },
  {
    name: 'Cleo',
    summary: 'B2B and EDI integration, managed file transfer (MFT)',
    category: 'B2B & MFT Platform',
  },
  {
    name: 'IBM Sterling B2B Integrator',
    summary: 'High volume B2B and EDI processing, trading partner management',
    category: 'High-Volume Enterprise EDI',
  },
  {
    name: 'CData',
    summary: 'Connectivity and data integration across systems and formats',
    category: 'Real-time Connectivity & Drivers',
  },
];

// Standards and Documents We Handle
export const STANDARDS_DOCUMENTS_DATA = [
  {
    area: 'Truckload and LTL',
    documents: [
      { code: '204', name: 'Load Tender' },
      { code: '990', name: 'Response to Load Tender' },
      { code: '214', name: 'Shipment Status' },
      { code: '210', name: 'Freight Invoice' },
      { code: '211', name: 'Bill of Lading' },
    ],
  },
  {
    area: 'Ocean and Intermodal',
    documents: [
      { code: '300', name: 'Booking Request' },
      { code: '301', name: 'Booking Confirmation' },
      { code: '304', name: 'Shipping Instructions' },
      { code: '310', name: 'Freight Receipt and Invoice' },
      { code: '315', name: 'Container Status' },
      { code: '322', name: 'Terminal Operations' },
    ],
  },
  {
    area: 'Rail and Customs',
    documents: [
      { code: '404', name: 'Rail Shipment Information' },
      { code: '309', name: 'Customs Manifest' },
    ],
  },
  {
    area: 'Warehousing',
    documents: [
      { code: '940', name: 'Warehouse Shipping Order' },
      { code: '945', name: 'Warehouse Shipping Advice' },
      { code: '943', name: 'Stock Transfer Shipment Advice' },
      { code: '944', name: 'Stock Transfer Receipt Advice' },
      { code: '947', name: 'Inventory Adjustment' },
      { code: '846', name: 'Inventory Advice' },
      { code: '861', name: 'Receiving Advice' },
    ],
  },
  {
    area: 'Orders and Retail',
    documents: [
      { code: '850', name: 'Purchase Order' },
      { code: '855', name: 'PO Acknowledgment' },
      { code: '860', name: 'PO Change' },
      { code: '856', name: 'Advance Ship Notice (ASN)' },
      { code: '830', name: 'Planning Schedule' },
      { code: '852', name: 'Product Activity' },
    ],
  },
  {
    area: 'Finance',
    documents: [
      { code: '810', name: 'Invoice' },
      { code: '812', name: 'Credit/Debit Adjustment' },
      { code: '820', name: 'Payment and Remittance Advice' },
    ],
  },
  {
    area: 'Acknowledgments',
    documents: [
      { code: '997', name: 'Functional Acknowledgment' },
      { code: '999', name: 'Implementation Acknowledgment' },
      { code: 'TA1', name: 'Interchange Acknowledgment' },
    ],
  },
];

// Engagement Models
export const ENGAGEMENT_MODELS = [
  {
    model: 'Project',
    howItWorks: 'Fixed scope and timeline, delivered by our team',
    goodFor: 'A platform migration, a batch of partner onboardings, a new integration',
    icon: 'folder-check',
  },
  {
    model: 'Dedicated Team',
    howItWorks: 'A team assigned to you, working to your priorities',
    goodFor: 'Ongoing development and long term product work',
    icon: 'users',
  },
  {
    model: 'Managed Service',
    howItWorks: 'We own the outcome under an ongoing agreement',
    goodFor: 'EDI support and monitoring, or fully managed EDI',
    icon: 'shield',
  },
];

// Five Engagement Steps
export const ENGAGEMENT_STEPS = [
  {
    step: 1,
    title: 'Discover',
    desc: 'We learn your operation, partners, systems and pain points.',
  },
  {
    step: 2,
    title: 'Plan',
    desc: 'We agree scope, priorities, timeline and how success will be measured.',
  },
  {
    step: 3,
    title: 'Build',
    desc: 'We deliver in short cycles, so you see progress early.',
  },
  {
    step: 4,
    title: 'Test & Go Live',
    desc: 'We test with your partners and real data, then go live with close support.',
  },
  {
    step: 5,
    title: 'Support & Improve',
    desc: 'We stay on to monitor, fix and improve, either as a managed service or alongside your team.',
  },
];

// Why Logistics Studio
export const WHY_LOGISTICS_STUDIO = [
  {
    title: 'Logistics only, for 14 years',
    desc: 'We don’t split our attention across banking, retail and healthcare. Everything we’ve learned has come from logistics.',
    icon: 'clock',
  },
  {
    title: '400 engineers who know the domain',
    desc: 'Our people understand freight, warehousing and EDI as well as they understand code.',
    icon: 'award',
  },
  {
    title: 'The whole EDI lifecycle under one roof',
    desc: 'Strategy, onboarding, mapping, integration, connectivity, testing, support, managed service and migration, all from one partner.',
    icon: 'maximize-2',
  },
  {
    title: 'Experience on the platforms you actually run',
    desc: 'Deep expertise in BizTalk Server, Cleo, IBM Sterling B2B Integrator and CData, older legacy versions included.',
    icon: 'cpu',
  },
  {
    title: 'Old and new together',
    desc: 'We keep legacy systems running and build what replaces them, so you never have to choose between stability and progress.',
    icon: 'git-pull-request',
  },
];
