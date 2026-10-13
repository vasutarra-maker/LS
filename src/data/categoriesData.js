// Service categories and detailed service data for Logistics Studio
import { ALL_SERVICES, EDI_AREAS, PLATFORMS_DATA, STANDARDS_DOCUMENTS_DATA } from './servicesList';

export const CATEGORIES_DATA = [
  {
    id: 'edi-services',
    slug: 'edi-services',
    path: '/edi-services',
    title: 'EDI Services & Capabilities',
    shortTitle: 'EDI Services',
    badge: 'Flagship Service',
    subtitle: 'Every part of EDI, from onboarding to support, mapping, integration & platform migration',
    navSubtitle: 'Full-lifecycle EDI, onboarding & 24/7 monitoring',
    icon: 'git-merge',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    headline: 'End-to-End EDI Lifecycle & Integration',
    intro: 'We cover the whole EDI lifecycle: planning, onboarding, mapping, integration, connectivity, testing, support, full management, and modernization.',
    description: 'A logistics company might trade with 40 partners or 400. Each partner has its own spec, its own preferred connection, and its own idea of what "on time" means. Most providers handle one part of that. We handle all of it, on the platforms you already run.',
    whoItsFor: '3PLs, freight forwarders, carriers and warehouse operators that send and receive large volumes of EDI with customers, carriers, vendors and retailers.',
    quote: "EDI gets the most space because it's the part of the business that our clients feel straight away when it breaks. A map that is almost right still gets rejected.",
    approach: [
      {
        title: 'Full Lifecycle Ownership',
        description: 'From first partner contact and AS2/SFTP setup to 24/7 error resolution and compliance audits.',
      },
      {
        title: 'Platform Flexibility',
        description: 'Certified engineers across BizTalk, Cleo, IBM Sterling B2B Integrator, and CData.',
      },
      {
        title: 'Zero-Disruption Migration',
        description: 'Phased partner cutovers and side-by-side execution to ensure live operations never stall.',
      },
      {
        title: '24/7 Proactive Monitoring',
        description: 'Automated alerts, root-cause troubleshooting, and immediate reprocessing before customers notice.',
      },
    ],
    services: EDI_AREAS.map((area) => ({
      id: area.id,
      slug: area.id,
      path: `/edi-services#${area.id}`,
      title: area.title,
      shortTitle: area.shortTitle,
      badge: `Area ${area.number}`,
      subtitle: area.whatItIs,
      navSubtitle: area.shortTitle,
      icon: area.icon,
      heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      headline: area.title,
      intro: area.whatItIs,
      description: area.howWeDeliverIt,
      quote: area.whyItMatters,
      approach: [
        { title: 'Who It’s For', description: area.whoItsFor },
        { title: 'How We Deliver It', description: area.howWeDeliverIt },
        { title: 'Why It Matters', description: area.whyItMatters },
      ],
    })),
  },
  {
    id: 'strategy-and-development',
    slug: 'strategy-and-development',
    path: '/strategy-and-development',
    title: 'Strategy & Development',
    shortTitle: 'Strategy & Dev',
    badge: 'Technology Strategy',
    subtitle: 'Technology roadmaps, architecture and custom software, planned and built by the same team',
    navSubtitle: 'Technology roadmaps & custom logistics software',
    icon: 'compass',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    headline: 'Strategy & Custom Software Development',
    intro: 'Technology planning and custom software for logistics operations, from roadmap and architecture through to build.',
    description: 'Architects with logistics experience work with our development teams, so the plan and the build come from one partner. We build in Java and Spring Boot, Python, Ruby on Rails, React, and native mobile for iOS and Android. Infrastructure is managed as code in Terraform.',
    whoItsFor: '3PL, freight and warehousing companies planning a new platform, a customer portal, or a major technology investment. Teams that want a partner who understands the business, not just the code.',
    quote: "When the strategy firm and the build team are different companies, a lot gets lost in the handover. One team that owns both delivers what was actually planned.",
    approach: [
      {
        title: 'Single-Team Continuity',
        description: 'Strategic architects and dev squads collaborate to ensure vision aligns directly with execution.',
      },
      {
        title: 'Logistics Domain Native',
        description: 'Engineers who know load tenders, customer portals, and dispatch workflows as well as modern code.',
      },
      {
        title: 'Modern Cloud Architecture',
        description: 'Java/Spring Boot, Python, Rails, React, native iOS/Android, and Terraform infrastructure.',
      },
      {
        title: 'Iterative Delivery',
        description: 'Short development cycles providing transparent visibility and rapid time to production value.',
      },
    ],
    services: [
      {
        id: 'tech-roadmaps',
        slug: 'tech-roadmaps',
        path: '/strategy-and-development',
        title: 'Technology Roadmaps & Architecture',
        shortTitle: 'Roadmaps',
        badge: 'Architecture',
        subtitle: 'Enterprise logistics architecture blueprints',
        navSubtitle: 'Enterprise blueprints & consulting',
        icon: 'compass',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        headline: 'Architecture Blueprints Built for Logistics Scale',
        intro: 'Design future-proof system architectures aligned with high-velocity supply chain requirements.',
        description: 'We eliminate technical debt and construct modular data flows across multi-modal freight networks.',
        quote: 'Modern logistics architecture demands modular scalability and zero single points of failure.',
        approach: [
          { title: 'System Audits', description: 'Pinpointing bottlenecks in existing TMS, WMS, and ERP systems.' },
          { title: 'Vendor-Agnostic Stacks', description: 'Selecting optimal platforms for long-term ROI.' },
        ],
      },
      {
        id: 'custom-software',
        slug: 'custom-software',
        path: '/strategy-and-development',
        title: 'Custom Logistics Software & Portals',
        shortTitle: 'Custom Software',
        badge: 'Engineering',
        subtitle: 'Customer portals, dispatch tools & mobile freight apps',
        navSubtitle: 'Portals & TMS/WMS software',
        icon: 'layers',
        heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
        headline: 'Custom Portals & Native Mobile Logistics Apps',
        intro: 'Custom freight applications engineered to streamline operations and delight shippers.',
        description: 'Tailored portals and mobile solutions built in React, iOS, Android, and secure backend microservices.',
        quote: 'Software built by logistics veterans delivers seamless adoption and eliminates manual friction.',
        approach: [
          { title: 'Shipper Portals', description: 'Self-service load booking, tracking, and invoice visibility.' },
          { title: 'Driver Mobile Apps', description: 'Electronic Proof of Delivery (ePOD) and geo-fencing.' },
        ],
      },
    ],
  },
  {
    id: 'dedicated-teams',
    slug: 'dedicated-teams',
    path: '/dedicated-teams',
    title: 'Dedicated Teams / Staff Augmentation',
    shortTitle: 'Dedicated Teams',
    badge: '400+ Engineers',
    subtitle: 'Experienced engineers who already understand logistics, working inside your team',
    navSubtitle: 'Logistics-fluent engineers & augmentation',
    icon: 'users',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    headline: 'Logistics Engineering Talent On-Demand',
    intro: 'Experienced engineers who already understand logistics, working as part of your team.',
    description: 'We draw from our 400 engineer bench, built over 14 years in this industry. Engineers come in already familiar with EDI, freight and warehousing systems. You can add a single specialist or a full team with its own lead, and change the size of the team as your workload changes.',
    whoItsFor: 'Logistics companies that need more engineering capacity quickly and don’t want to spend months teaching new people what an ASN or a load tender is.',
    quote: "Generalist contractors take time to learn the domain, and you pay for that learning. Domain experienced engineers are productive from the first sprint.",
    approach: [
      {
        title: '400+ Engineer Bench',
        description: 'Vetted engineers with deep experience in transportation, warehousing, and integration.',
      },
      {
        title: 'Zero Learning Latency',
        description: 'Our engineers know EDI X12, TMS workflows, and WMS nuances before they join your sprint.',
      },
      {
        title: 'Flexible Augmentation Models',
        description: 'Add a single subject-matter specialist or an entire pod complete with a technical lead.',
      },
      {
        title: 'Elastic Capacity',
        description: 'Scale headcount up or down smoothly to match project peaks and seasonal volumes.',
      },
    ],
    services: [
      {
        id: 'freight-engineers',
        slug: 'freight-engineers',
        path: '/dedicated-teams',
        title: 'Dedicated Logistics Developers',
        shortTitle: 'Software Engineers',
        badge: 'Engineering',
        subtitle: 'Full-stack & cloud engineers fluent in supply chain tech',
        navSubtitle: 'Full-stack supply chain developers',
        icon: 'users',
        heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
        headline: 'Engineers Productive From Day One',
        intro: 'Senior engineers proficient in freight workflows, APIs, and microservices.',
        description: 'Deploy pre-vetted engineers directly into your development sprints with zero hiring latency.',
        quote: 'Domain-experienced developers eliminate the costly learning curve of generic contracting.',
        approach: [
          { title: 'Immediate Integration', description: 'Embedded into your Jira, GitHub, and daily standups.' },
          { title: 'Full-Stack Proficiency', description: 'React, Node, Java, Python, and cloud infrastructure.' },
        ],
      },
    ],
  },
  {
    id: 'data-science',
    slug: 'data-science',
    path: '/data-science',
    title: 'AI & Data Science',
    shortTitle: 'AI & Data Science',
    badge: 'Applied AI',
    subtitle: 'Forecasting, pattern detection and automation built on your operational data',
    navSubtitle: 'Forecasting, exception detection & IBM watsonx',
    icon: 'cpu',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    headline: 'Applied AI & Data Science for Freight & Warehousing',
    intro: 'Applied AI and data science for freight and warehouse operations.',
    description: 'We start with the operational data you already have, much of which flows through EDI and your TMS and WMS. From there we build models and automation for forecasting, spotting patterns and exceptions, and cutting manual work. Where it fits, we use platforms such as IBM watsonx.',
    whoItsFor: 'Freight forwarders and warehouse operators who want to move from reacting to problems to predicting them.',
    quote: "Logistics produces huge amounts of data that rarely gets used beyond reporting. Using it well means fewer surprises, better planning and fewer people doing repetitive work.",
    approach: [
      {
        title: 'Operational Data Grounding',
        description: 'Extracting untapped value from live EDI streams, TMS shipment logs, and WMS inventory events.',
      },
      {
        title: 'Predictive Exception Detection',
        description: 'Catching delay risks, dwell anomalies, and lane disruptions before they escalate.',
      },
      {
        title: 'Cognitive Automation',
        description: 'Intelligent document processing and automated triage to cut repetitive manual effort.',
      },
      {
        title: 'Enterprise AI Stack',
        description: 'Deploying robust machine learning pipelines and platforms including IBM watsonx.',
      },
    ],
    services: [
      {
        id: 'predictive-forecasting',
        slug: 'predictive-forecasting',
        path: '/data-science',
        title: 'Freight Forecasting & Pattern Detection',
        shortTitle: 'Forecasting',
        badge: 'Machine Learning',
        subtitle: 'Demand sensing, dynamic capacity & dwell prediction',
        navSubtitle: 'Predictive models & analytics',
        icon: 'bar-chart-2',
        heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
        headline: 'Predictive Freight Analytics',
        intro: 'Anticipate network congestion, volume spikes, and equipment shortages.',
        description: 'Predictive models leveraging historical and live telemetry to safeguard margins.',
        quote: 'True intelligence predicts disruptions before shipments are delayed.',
        approach: [
          { title: 'Demand Forecasting', description: 'Anticipating lane capacity requirements weeks in advance.' },
          { title: 'Dwell Time Models', description: 'Predicting warehouse and port detention before pickup.' },
        ],
      },
    ],
  },
  {
    id: 'legacy-migration-and-modernization',
    slug: 'legacy-migration-and-modernization',
    path: '/legacy-migration-and-modernization',
    title: 'Legacy Migration & Modernization',
    shortTitle: 'Legacy Migration',
    badge: 'Zero Downtime',
    subtitle: 'Moving off ageing applications and integration platforms without breaking live operations',
    navSubtitle: 'Migrate off BizTalk, Cleo & older systems safely',
    icon: 'layers',
    heroImage: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop',
    headline: 'Modernize Core Logistics Without Operational Risk',
    intro: 'Moving from ageing applications and integration platforms to modern technology.',
    description: 'We know the legacy platforms well (BizTalk Server, Cleo, IBM Sterling B2B Integrator) and we know the modern stack that replaces them. We migrate in phases, run old and new side by side, and switch over only when the new system is proven, so live operations and trading partners are never put at risk.',
    whoItsFor: 'Companies running core operations on older BizTalk, Cleo or in house systems that are expensive to maintain and hard to change.',
    quote: "Waiting on legacy systems gets more expensive each year as skills disappear and vendors end support. A planned migration is cheaper and safer than an emergency one.",
    approach: [
      {
        title: 'Comprehensive Inventory',
        description: 'Cataloging every map, partner profile, translation rule, and interface before making changes.',
      },
      {
        title: 'Target Architecture Design',
        description: 'Designing modern cloud integration stacks, containerized services, and API gateways.',
      },
      {
        title: 'Side-by-Side Dual Run',
        description: 'Validating output transactions between old and new platforms in parallel for total accuracy.',
      },
      {
        title: 'Phased Partner Waves',
        description: 'Migrating trading partners in scheduled tranches without risking high-volume freight flow.',
      },
    ],
    services: [
      {
        id: 'biztalk-migration',
        slug: 'biztalk-migration',
        path: '/legacy-migration-and-modernization',
        title: 'BizTalk to Modern Integration Migration',
        shortTitle: 'BizTalk Migration',
        badge: 'Modernization',
        subtitle: 'Upgrade or transition ageing Microsoft BizTalk systems',
        navSubtitle: 'BizTalk modernization & cloud cutover',
        icon: 'refresh-cw',
        heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
        headline: 'Safe Transition Off Legacy Integration Platforms',
        intro: 'Modernize end-of-life platforms to resilient cloud architectures without business disruption.',
        description: 'Rebuild maps and pipelines with proven automated regression testing.',
        quote: 'Planned migrations protect business revenue and eliminate emergency outages.',
        approach: [
          { title: 'Map Re-engineering', description: 'Rebuilding legacy schemas into modern declarative maps.' },
          { title: 'Zero Partner Burden', description: 'Upgrades executed without requiring partners to change their protocols.' },
        ],
      },
    ],
  },
  {
    id: 'supply-chain-sustainability',
    slug: 'supply-chain-sustainability',
    path: '/supply-chain-sustainability',
    title: 'Supply Chain Sustainability',
    shortTitle: 'Sustainability',
    badge: 'ESG & Reporting',
    subtitle: 'Technology support for sustainability commitments and emissions reporting',
    navSubtitle: 'Emissions tracking, GLEC reporting & green routing',
    icon: 'leaf',
    heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    headline: 'Data-Driven Supply Chain Sustainability',
    intro: 'Technology that helps logistics companies meet their sustainability commitments.',
    description: 'We deliver technology solutions for emissions data capture and reporting, route and load optimisation, and pulling sustainability data directly from partner EDI and telematics streams.',
    whoItsFor: 'Logistics companies with emissions targets, customer sustainability requirements or reporting obligations.',
    quote: "Shippers increasingly choose logistics partners partly on sustainability performance. Reliable data and reporting are becoming a commercial requirement.",
    approach: [
      {
        title: 'Emissions Data Capture',
        description: 'Automated extraction of fuel, mileage, and weight data directly from EDI transactions and telematics.',
      },
      {
        title: 'GLEC & ESG Compliance',
        description: 'Audit-ready Scope 1, 2, and 3 emissions reports structured to satisfy customer mandates.',
      },
      {
        title: 'Route & Load Optimization',
        description: 'Intelligent routing and consolidation algorithms that minimize carbon per ton-mile.',
      },
      {
        title: 'Commercial Edge',
        description: 'Providing shippers with transparent ESG scorecards that win competitive bids.',
      },
    ],
    services: [
      {
        id: 'carbon-reporting',
        slug: 'carbon-reporting',
        path: '/supply-chain-sustainability',
        title: 'Emissions Telemetry & Reporting',
        shortTitle: 'Emissions Reporting',
        badge: 'ESG Telemetry',
        subtitle: 'Automated Scope 1, 2, and 3 emissions calculations',
        navSubtitle: 'GLEC framework emissions data',
        icon: 'leaf',
        heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
        headline: 'Automated Logistics Carbon Accounting',
        intro: 'Turn operational freight data into audit-ready emissions scorecards.',
        description: 'Extract emissions variables directly from 214, 210, and telematics streams.',
        quote: 'Reliable carbon reporting is becoming an essential commercial requirement for shippers.',
        approach: [
          { title: 'Automated Calculation', description: 'Emissions scored automatically per shipment.' },
          { title: 'Carrier Benchmarking', description: 'Identifying lowest-carbon transit corridors.' },
        ],
      },
    ],
  },
];

// Helper functions (with fallback/aliases for backwards compatibility)
export function getCategoryById(id) {
  // Direct match
  const found = CATEGORIES_DATA.find((c) => c.id === id || c.slug === id);
  if (found) return found;

  // Legacy dummy category alias mappings
  if (id === 'category-1') return CATEGORIES_DATA[0]; // EDI Services
  if (id === 'category-2') return CATEGORIES_DATA[1]; // Strategy & Dev
  if (id === 'category-3') return CATEGORIES_DATA[3]; // AI & Data Science
  if (id === 'category-4') return CATEGORIES_DATA[4]; // Legacy Migration

  return CATEGORIES_DATA[0];
}

export function getCategoryBySlug(slug) {
  return getCategoryById(slug);
}

export function getService(categoryId, serviceId) {
  const category = getCategoryById(categoryId);
  if (!category) return null;
  return category.services.find((s) => s.id === serviceId) || category.services[0];
}
