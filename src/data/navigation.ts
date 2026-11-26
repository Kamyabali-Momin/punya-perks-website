export interface NavSubItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavCategory {
  categoryTitle?: string;
  items: NavSubItem[];
}

export interface NavPillar {
  title: string;
  href: string;
  categories: NavCategory[];
  featuredCallout?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    linkText: string;
    bgImage?: string;
  };
}

export const navigationData: NavPillar[] = [
  {
    title: "Product",
    href: "/product",
    categories: [
      {
        categoryTitle: "Core Engines",
        items: [
          {
            title: "Product Overview",
            href: "/product",
            description: "Tour of the 4 operational pillars: Earn, Burn, Engage, Operate.",
          },
          {
            title: "Earn & Rules Engine",
            href: "/product/earn",
            description: "Purchases, referrals, card-linked, receipt scans, tier multipliers.",
          },
          {
            title: "Campaigns & Offers",
            href: "/product/campaigns",
            description: "6-step builder, lifecycle targeting, A/B testing, and automation.",
          },
          {
            title: "Redemption & Catalog",
            href: "/product/redeem",
            description: "Vouchers, merchandise, cash-out, donations, partner currencies.",
          },
          {
            title: "Tiers & Member App",
            href: "/product/member-app",
            description: "White-label native apps, tier ladders, and Apple Wallet passes.",
            badge: "Popular",
          },
        ],
      },
      {
        categoryTitle: "Experience & Trust",
        items: [
          {
            title: "Analytics, CDP & AI",
            href: "/product/analytics",
            description: "Segment builder, predictive RFM modeling, and BI connectors.",
          },
          {
            title: "Fraud, Trust & Compliance",
            href: "/product/trust",
            description: "Append-only ledger, maker-checker, anomaly detection, DSR.",
          },
          {
            title: "WhatsApp Loyalty",
            href: "/product/whatsapp",
            description: "Enrolment, balance checks, and instant redemption in chat.",
            badge: "High Growth",
          },
          {
            title: "Integrations Directory",
            href: "/product/integrations",
            description: "50+ pre-built connectors for POS, payments, and e-commerce.",
          },
        ],
      },
    ],
    featuredCallout: {
      eyebrow: "Interactive Showcase",
      title: "Explore the Live Ledger",
      description: "See how finance and marketing view the exact same points liability in real-time.",
      href: "/product/earn",
      linkText: "See Rules in Action →",
    },
  },
  {
    title: "Solutions",
    href: "/solutions/retail",
    categories: [
      {
        categoryTitle: "By Industry",
        items: [
          {
            title: "Retail & Fashion",
            href: "/solutions/retail",
            description: "Unified omnichannel loyalty across physical stores and online.",
          },
          {
            title: "Banks & Fintech",
            href: "/solutions/banking",
            description: "Card-linked earning, cash-convertible points with KYC gating.",
          },
          {
            title: "Hospitality & QSR",
            href: "/solutions/hospitality",
            description: "Visit-based earning, digital stamp cards, and dining perks.",
          },
          {
            title: "E-commerce & D2C",
            href: "/solutions/ecommerce",
            description: "Shopify, Magento, WooCommerce plugins; referral loops.",
          },
        ],
      },
      {
        categoryTitle: "Regional & Enterprise",
        items: [
          {
            title: "Coalition & Enterprise",
            href: "/solutions/enterprise",
            description: "Multi-brand, multi-region partner currency exchange networks.",
          },
          {
            title: "India Market Edition",
            href: "/india",
            description: "DPDP compliance, TRAI DLT, WhatsApp onboarding, and UPI cash-out.",
            badge: "DPDP Ready",
          },
          {
            title: "Australia & New Zealand",
            href: "/solutions/retail",
            description: "Privacy Act 2020, Spam Act consent, and AUD/NZD settlement.",
          },
        ],
      },
    ],
    featuredCallout: {
      eyebrow: "Retail Benchmark",
      title: "+34% Repeat Purchase Lift",
      description: "How a national fashion retailer unified store and online loyalty in 4 weeks.",
      href: "/customers",
      linkText: "Read Case Study →",
      bgImage: "/images/case-study-banner-bg.jpg",
    },
  },
  {
    title: "Platform",
    href: "/platform",
    categories: [
      {
        categoryTitle: "Architecture & Scale",
        items: [
          {
            title: "Architecture & Multi-Tenancy",
            href: "/platform",
            description: "Tenant isolation, data residency, sub-120ms latency, 99.95% SLA.",
          },
          {
            title: "Security, Privacy & Trust",
            href: "/platform/security",
            description: "SOC2 roadmap, AES-256 encryption, role RBAC, immutable audit.",
          },
          {
            title: "Developers & API Hub",
            href: "/platform/developers",
            description: "OpenAPI 3.1 reference, TypeScript/Python SDKs, signed webhooks.",
            badge: "Dev Portal",
          },
          {
            title: "Connector Marketplace",
            href: "/platform/connectors",
            description: "Browse self-serve vs. assisted activation models for 50+ tools.",
          },
        ],
      },
    ],
    featuredCallout: {
      eyebrow: "Developer Sandbox",
      title: "Provision in 2 Minutes",
      description: "Instant cloud sandbox with synthetic members and recorded vendor responses.",
      href: "/start",
      linkText: "Start Free Sandbox →",
    },
  },
  {
    title: "Pricing",
    href: "/pricing",
    categories: [
      {
        categoryTitle: "Plans & Transparency",
        items: [
          {
            title: "Plans & Metering",
            href: "/pricing",
            description: "Launch, Growth, Enterprise. Pay for active members, not database size.",
          },
          {
            title: "Full Feature Comparison",
            href: "/pricing/compare",
            description: "Complete RFP feature matrix and technical capability breakdown.",
          },
        ],
      },
    ],
    featuredCallout: {
      eyebrow: "ROI Estimator",
      title: "Calculate Incremental Lift",
      description: "Estimate annual revenue lift and points liability reserves for your database.",
      href: "/pricing",
      linkText: "Launch Calculator →",
    },
  },
  {
    title: "Resources",
    href: "/resources",
    categories: [
      {
        categoryTitle: "Learn & Benchmark",
        items: [
          {
            title: "Resources Hub",
            href: "/resources",
            description: "Central library of loyalty benchmarks, playbooks, and guides.",
          },
          {
            title: "Customer Success Stories",
            href: "/customers",
            description: "Real enterprise programmes and verified metrics from the field.",
          },
          {
            title: "Loyalty Blog",
            href: "/blog",
            description: "Product updates, compliance breakdowns, and engineering notes.",
          },
          {
            title: "Platform Changelog",
            href: "/changelog",
            description: "What shipped: release notes and platform enhancements by version.",
          },
          {
            title: "Loyalty Glossary",
            href: "/glossary",
            description: "Clear definitions for breakage, escheatment, tier multipliers, and lots.",
          },
          {
            title: "Help Centre",
            href: "/help",
            description: "Knowledge base, quick-start guides, troubleshooting, and ticket submission.",
          },
        ],
      },
    ],
    featuredCallout: {
      eyebrow: "Enterprise Case Studies",
      title: "Proven Loyalty Lift",
      description: "Explore verified customer stories, implementation guides, and regional regulatory playbooks.",
      href: "/customers",
      linkText: "View Customer Stories →",
    },
  },
  {
    title: "Company",
    href: "/about",
    categories: [
      {
        categoryTitle: "Company Overview",
        items: [
          {
            title: "About Punya Perks",
            href: "/about",
            description: "Our mission, leadership team, and enterprise loyalty operating system.",
          },
          {
            title: "Partner Program",
            href: "/partners",
            description: "Join agencies, SIs, and tech vendors building on Punya Perks.",
          },
          {
            title: "Careers",
            href: "/careers",
            description: "Join our distributed engineering and product teams worldwide.",
          },
          {
            title: "Contact Us",
            href: "/contact",
            description: "Talk to regional sales and support teams in Surat, Dubai, Melbourne, US.",
          },
          {
            title: "Trust Centre",
            href: "/trust-centre",
            description: "Security briefs, DPA, sub-processor list, and compliance roadmaps.",
          },
        ],
      },
    ],
    featuredCallout: {
      eyebrow: "About Punya Perks",
      title: "High-Trust Software",
      description: "Learn about our founding mission, append-only ledger architecture, and global engineering team.",
      href: "/about",
      linkText: "Read Company Story →",
    },
  },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Earn & rules", href: "/product/earn" },
      { label: "Campaigns & offers", href: "/product/campaigns" },
      { label: "Redemption catalog", href: "/product/redeem" },
      { label: "Tiers & member app", href: "/product/member-app" },
      { label: "Analytics & CDP", href: "/product/analytics" },
      { label: "Trust & compliance", href: "/product/trust" },
      { label: "WhatsApp loyalty", href: "/product/whatsapp" },
      { label: "Integrations directory", href: "/product/integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Retail & fashion", href: "/solutions/retail" },
      { label: "Banks & fintech", href: "/solutions/banking" },
      { label: "Hospitality & QSR", href: "/solutions/hospitality" },
      { label: "E-commerce & D2C", href: "/solutions/ecommerce" },
      { label: "Coalition & enterprise", href: "/solutions/enterprise" },
      { label: "India edition (DPDP & UPI)", href: "/india" },
      { label: "Australia & New Zealand", href: "/solutions/retail" },
    ],
  },
  {
    title: "Resources & Devs",
    links: [
      { label: "Resources hub", href: "/resources" },
      { label: "Customer stories", href: "/customers" },
      { label: "Loyalty benchmarks 2026", href: "/resources" },
      { label: "Capillary & EasyRewardz comparison", href: "/resources" },
      { label: "Changelog", href: "/changelog" },
      { label: "Loyalty glossary", href: "/glossary" },
      { label: "Help centre", href: "/help" },
      { label: "Developer portal", href: "/platform/developers" },
    ],
  },
  {
    title: "Company & Trust",
    links: [
      { label: "About Punya Perks", href: "/about" },
      { label: "Partner program", href: "/partners" },
      { label: "Careers", href: "/careers" },
      { label: "Contact sales & support", href: "/contact" },
      { label: "Trust centre & DPA", href: "/trust-centre" },
      { label: "System status", href: "/status" },
    ],
  },
];

export const regionalOffices = [
  { city: "Surat & Mumbai", country: "India", address: "Punya Perks Tech Hub, Surat / BKC, Mumbai", phone: "+91 261 [Number]" },
  { city: "Dubai", country: "United Arab Emirates", address: "DIFC Innovation One, Dubai", phone: "+971 4 [Number]" },
  { city: "Melbourne", country: "Australia", address: "Collins St, Melbourne VIC 3000", phone: "+61 3 [Number]" },
  { city: "Delaware", country: "United States", address: "Punya Perks Technologies Inc, Wilmington, DE", phone: "+1 [Number]" },
];
