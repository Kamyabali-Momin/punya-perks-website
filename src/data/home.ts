export interface IndustryPlaybook {
  id: string;
  name: string;
  tagline: string;
  description: string;
  coreMechanisms: string[];
  complianceFocus: string;
  sampleMetric: string;
  previewData: {
    activeMembers: string;
    avgOrderValue: string;
    pointsMultiplier: string;
    popularReward: string;
  };
}

export interface LoyaltyTier {
  id: 'silver' | 'gold' | 'platinum';
  name: string;
  accentColor: string;
  badgeBg: string;
  multiplier: string;
  requirement: string;
  perks: string[];
  mockCardNumber: string;
  mockPoints: string;
  mockExpiring: string;
}

export interface FinderRecommendation {
  playbookName: string;
  recommendedTemplate: string;
  mechanisms: string[];
  complianceNotes: string;
  timeToLaunch: string;
  suggestedPlan: string;
}

export const homeData = {
  hero: {
    eyebrow: "LOYALTY PROGRAMME SOFTWARE · INDIA · AUSTRALIA · NEW ZEALAND",
    title: "Loyalty that pays for itself.",
    description:
      "Launch points, tiers, offers and a white-label member app in weeks. One platform for retailers, banks and enterprises, with the compliance each market demands.",
    primaryCta: { text: "Request a demo", href: "/demo" },
    secondaryCta: { text: "Start in sandbox", href: "/start" },
    microcopy: "Free sandbox, no credit card. Pricing in INR, AUD and NZD.",
    ledgerPreview: {
      availablePoints: "3,850",
      pendingPoints: "300",
      expiringPoints: "120",
      launchWeeks: "4 wks",
      socialProof: "Finance and marketing finally look at the same number.",
      socialProofAuthor: "Head of Loyalty, Enterprise Retail",
      markets: [
        { name: "India", details: "DPDP · DLT · UPI" },
        { name: "Australia", details: "Privacy Act · AUD" },
        { name: "New Zealand", details: "Privacy Act 2020 · NZD" },
      ],
    },
  },

  logos: [
    { name: "National Fashion Retail", category: "Retail & Apparel" },
    { name: "Apex Banking Corp", category: "Banking & Fintech" },
    { name: "Grand Hospitality Group", category: "Hospitality & QSR" },
    { name: "Omni Commerce D2C", category: "E-commerce & D2C" },
    { name: "Universal Coalition", category: "Enterprise Coalition" },
  ],

  fourJobs: {
    eyebrow: "ONE PLATFORM, FOUR JOBS",
    title: "Earn, redeem, engage, operate.",
    description:
      "Every mechanism your programme needs is built in and governed by one ledger, so finance, marketing and engineering see the same number. Retail wants omnichannel earning; banks need cash-convertible points with KYC; hospitality runs on visits. Choose the playbook, keep the platform.",
    playbooks: [
      {
        id: "retail",
        name: "Retail & Fashion",
        tagline: "Omnichannel retail programme across physical stores and online checkout.",
        description:
          "Unify POS receipts, e-commerce transactions, and return reconciliations. Tier-adaptive member apps, instant WhatsApp points credit, and line-item eligible spend rules excluding taxes.",
        coreMechanisms: [
          "In-store receipt scan & barcode identification",
          "GST-aware eligible spend calculation",
          "Automated return reconciliation & point rollback",
          "Omnichannel tier multipliers",
        ],
        complianceFocus: "DPDP versioned consent at POS, TRAI DLT transactional SMS.",
        sampleMetric: "+34% Repeat Purchase Lift",
        previewData: {
          activeMembers: "340,000",
          avgOrderValue: "₹ 1,850",
          pointsMultiplier: "1.5x in Tier 2",
          popularReward: "Instant ₹500 In-Store Voucher",
        },
      },
      {
        id: "banking",
        name: "Banks & Fintech",
        tagline: "Card-linked points with KYC gating, bank-grade encryption, and cash-out.",
        description:
          "Issue points on card transactions, credit card bill payments, or loan originations. Convert loyalty balances to cash or bill waivers via licensed payment gateways.",
        coreMechanisms: [
          "Card-linked automatic earning on transaction feeds",
          "KYC-verified cash-out to bank account or UPI",
          "Append-only ledger with maker-checker audit controls",
          "Single Sign-On (SSO) & mPIN integration",
        ],
        complianceFocus: "RBI payment compliance, bank data residency cells, AES-256 encryption.",
        sampleMetric: "4.8x Active Card Spend",
        previewData: {
          activeMembers: "1,250,000",
          avgOrderValue: "₹ 4,200",
          pointsMultiplier: "2.0x on Dining",
          popularReward: "Direct Account Credit / Bill Offset",
        },
      },
      {
        id: "hospitality",
        name: "Hospitality & QSR",
        tagline: "Visit-based earning, dining stamps, and experiential member rewards.",
        description:
          "Reward table visits, food delivery orders, and hotel stays with visit stamps, secret VIP menus, and room tier upgrades.",
        coreMechanisms: [
          "Visit-frequency digital stamp cards",
          "Table QR ordering points accumulation",
          "Time-decay expiration rules for seasonal promotions",
          "Exclusive VIP dining experiences",
        ],
        complianceFocus: "Location-aware consent, Spam Act promotional messaging opt-in.",
        sampleMetric: "+42% Midweek Visit Frequency",
        previewData: {
          activeMembers: "180,000",
          avgOrderValue: "₹ 950",
          pointsMultiplier: "Double Stamps on Tuesdays",
          popularReward: "Complimentary Chef Tasting Menu",
        },
      },
      {
        id: "ecommerce",
        name: "E-commerce & D2C",
        tagline: "Turnkey Shopify, Magento & WooCommerce plugins with referral loops.",
        description:
          "Embed points balances directly into shopping carts with quote/commit reservation. Reward product reviews, friend referrals, and social sharing.",
        coreMechanisms: [
          "Cart slider for partial points redemption",
          "Two-sided referral rewards (Earn ₹200 / Give ₹200)",
          "UGC photo review points rewarding",
          "VIP early access to product drop sales",
        ],
        complianceFocus: "Cookie consent banner integration, global currency support (USD, AUD, INR).",
        sampleMetric: "28% Referral Share Rate",
        previewData: {
          activeMembers: "95,000",
          avgOrderValue: "₹ 2,400",
          pointsMultiplier: "1.0 pt per ₹1 spent",
          popularReward: "Free Express Shipping Perk",
        },
      },
      {
        id: "coalition",
        name: "Coalition & Enterprise",
        tagline: "Multi-brand, multi-country partner currency exchange networks.",
        description:
          "Allow members to earn at airlines, fuel stations, and supermarkets, and redeem across a unified reward network with automated inter-tenant billing.",
        coreMechanisms: [
          "Inter-tenant currency exchange exchange rates",
          "Automated partner fee clearinghouse reconciliation",
          "Shared member identity across distinct brand apps",
          "Multi-currency financial liability accounting",
        ],
        complianceFocus: "Cross-border data transfer agreements, multi-jurisdiction privacy.",
        sampleMetric: "3.2 Brands Visited per Member",
        previewData: {
          activeMembers: "4,500,000",
          avgOrderValue: "₹ 3,100",
          pointsMultiplier: "Dynamic Network Rate",
          popularReward: "Partner Airline Flight Miles",
        },
      },
    ] as IndustryPlaybook[],
  },

  modules: [
    {
      step: "01",
      title: "Earn & rules",
      description:
        "Purchases, referrals, card-linked offers, receipt scans, birthdays, challenges. Tier multipliers and a visual rule builder with real-time simulation.",
      href: "/product/earn",
    },
    {
      step: "02",
      title: "Redeem & catalog",
      description:
        "Digital gift cards, brand merchandise, cash-out via UPI, charity donations, partner currencies. Governed by two-phase checkout quote/commit.",
      href: "/product/redeem",
    },
    {
      step: "03",
      title: "Campaigns & offers",
      description:
        "6-step campaign builder, targeted customer segments, lifecycle states, personalized coupon codes, and A/B performance tracking.",
      href: "/product/campaigns",
    },
    {
      step: "04",
      title: "Tiers & member app",
      description:
        "Turnkey white-label iOS and Android member app. Dynamic tier ladders, digital membership barcode, personalized offer trays, and Apple Wallet passes.",
      href: "/product/member-app",
    },
    {
      step: "05",
      title: "Analytics, CDP & AI",
      description:
        "Real-time RFM segment builder, predictive churn scoring, points liability forecasting, and automated data exports to Snowflake, BigQuery and Segment.",
      href: "/product/analytics",
    },
    {
      step: "06",
      title: "Trust & compliance",
      description:
        "Live append-only ledger, maker-checker authorization for point adjustments, fraud anomaly detection, versioned consent centre and DSR automation.",
      href: "/product/trust",
    },
    {
      step: "07",
      title: "WhatsApp loyalty",
      description:
        "Native enrolment, balance check, personalized offer tray, and voucher redemption directly inside WhatsApp chat with Meta DLT compliance.",
      href: "/product/whatsapp",
    },
    {
      step: "08",
      title: "Integrations directory",
      description:
        "50+ pre-built connectors for physical POS terminals, e-commerce platforms, payment gateways, KYC registries, and marketing automation.",
      href: "/product/integrations",
    },
  ],

  numbers: [
    { value: "4", label: "Data-residency regions", detail: "India (AWS Mumbai), UAE, Australia, United States." },
    { value: "99.95", suffix: "%", label: "Uptime SLA", detail: "High-availability multi-tenant cloud infrastructure." },
    { value: "< 120", suffix: "ms", label: "Rule evaluation latency", detail: "Instant checkout point calculations at store POS." },
    { value: "10", suffix: "M+", label: "Daily events evaluated", detail: "Transactions, app visits, and point redemptions." },
  ],

  caseStudy: {
    eyebrow: "CUSTOMER STORIES · RETAIL · INDIA",
    title: "A national fashion retailer unified store and online loyalty.",
    metric: "+34%",
    metricLabel: "Repeat Purchase Lift",
    description:
      "Separate POS systems in 140 physical stores and Shopify e-commerce became one unified append-only ledger. Enabled WhatsApp phone-number enrolment at store registers and dynamic tier rewards in the white-label app.",
    outcomes: [
      "Zero spreadsheet reconciliation between finance and marketing.",
      "Campaign launch turnaround reduced from 3 weeks to an afternoon.",
      "Over 450,000 members onboarded via WhatsApp in 90 days.",
    ],
    quote: "Finance and marketing finally look at the exact same number. We eliminated breakage disputes and launched campaigns in an afternoon.",
    authorName: "Vice President of Marketing",
    authorCompany: "National Fashion Retail Enterprise",
  },

  howItWorks: [
    {
      step: "01",
      title: "Provision",
      description: "Dedicated cloud tenant, residency region, base currency, and core plan provisioned in minutes.",
    },
    {
      step: "02",
      title: "Configure",
      description: "Custom earn rules, tier multipliers, reward catalog, and brand colors configured in Tenant Admin.",
    },
    {
      step: "03",
      title: "Connect",
      description: "POS terminals, Shopify store, payment gateway, and WhatsApp Business API connected via secure keys.",
    },
    {
      step: "04",
      title: "Launch",
      description: "Pilot launch to selected store locations, followed by nationwide member onboarding.",
    },
  ],

  tiers: [
    {
      id: "silver",
      name: "Silver Tier",
      accentColor: "#847C75",
      badgeBg: "bg-neutral-100 text-neutral-700",
      multiplier: "1.0x",
      requirement: "Entry on sign-up",
      perks: ["1 pt per ₹100 spent", "Birthday surprise voucher", "Member-only flash sales"],
      mockCardNumber: "•••• 0192",
      mockPoints: "1,250",
      mockExpiring: "0 expiring soon",
    },
    {
      id: "gold",
      name: "Gold Tier",
      accentColor: "#C9A15B",
      badgeBg: "bg-amber-100 text-amber-800",
      multiplier: "1.5x",
      requirement: "Spend ₹25,000 / year",
      perks: ["1.5 pts per ₹100 spent", "Free express delivery", "Priority checkout lane", "Exclusive partner perks"],
      mockCardNumber: "•••• 4821",
      mockPoints: "3,850",
      mockExpiring: "120 expiring in 30 days",
    },
    {
      id: "platinum",
      name: "Platinum Tier",
      accentColor: "#A36D1C",
      badgeBg: "bg-emerald-100 text-emerald-900",
      multiplier: "2.0x",
      requirement: "Spend ₹75,000 / year",
      perks: ["2.0 pts per ₹100 spent", "Dedicated concierge support", "Zero point expiration", "VIP event invitations"],
      mockCardNumber: "•••• 9940",
      mockPoints: "12,400",
      mockExpiring: "Never expires",
    },
  ] as LoyaltyTier[],

  testimonials: [
    {
      quote: "Finance and marketing finally look at the exact same number. We eliminated spreadsheet disputes and launched WhatsApp enrolment in two days.",
      name: "Priya Sharma",
      role: "Head of Loyalty & CRM",
      company: "National Retail Enterprise",
      metric: "+34%",
      metricLabel: "Repeat Purchase Lift",
    },
    {
      quote: "Cash-out to UPI through licensed partners gave our credit card members a real reason to keep our app on their home screen.",
      name: "Vikramaditya Roy",
      role: "VP of Product, Cards & Payments",
      company: "Apex Fintech Bank",
      metric: "4.8x",
      metricLabel: "Card Spend Multiplier",
    },
    {
      quote: "The sub-120ms rule evaluation latency was what sold engineering. Checkout queues at physical stores never stall.",
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Grand Hospitality Group ANZ",
      metric: "< 120ms",
      metricLabel: "POS Checkout SLA",
    },
  ],

  byMarket: [
    {
      country: "India",
      regionTag: "DPDP · TRAI DLT · UPI",
      currency: "INR (₹)",
      flagCode: "IN",
      highlights: [
        "Versioned consent under DPDP Act 2023 with DSR export & erase endpoints.",
        "TRAI DLT registered messaging headers for transactional and service SMS.",
        "Instant cash-out to UPI or bank account via licensed RBI payment partners.",
        "GST-aware eligible spend rules excluding taxes and gift cards.",
      ],
      linkText: "Loyalty software for India →",
      linkHref: "/india",
    },
    {
      country: "Australia",
      regionTag: "Privacy Act · Spam Act · AUD",
      currency: "AUD ($)",
      flagCode: "AU",
      highlights: [
        "Full adherence to Australian Privacy Principles (APP) with local data residency.",
        "Spam Act 2003 consent management with instant opt-out handling.",
        "State unclaimed-money escheatment compliance for cash-convertible points.",
        "Native integration with Square, Lightspeed and Xero commonly used in ANZ retail.",
      ],
      linkText: "Loyalty software for Australia →",
      linkHref: "/solutions/retail",
    },
    {
      country: "New Zealand",
      regionTag: "Privacy Act 2020 · NZD",
      currency: "NZD ($)",
      flagCode: "NZ",
      highlights: [
        "Privacy Act 2020 mandatory privacy notification and data safeguards.",
        "Unsolicited Electronic Messages Act commercial messaging compliance.",
        "Shopify, Vend/Lightspeed POS connectors with NZD local billing.",
        "Seamless cross-Tasman points reciprocity between AU and NZ programs.",
      ],
      linkText: "Loyalty software for New Zealand →",
      linkHref: "/solutions/retail",
    },
  ],

  resources: [
    {
      type: "GUIDE",
      regionTime: "INDIA · 8 MIN",
      title: "The loyalty compliance checklist for India: DPDP, TRAI DLT, RBI",
      description: "What a retailer or bank must have in place before issuing cash-convertible points.",
      href: "/resources",
    },
    {
      type: "BENCHMARK",
      regionTime: "ANZ · 6 MIN",
      title: "Loyalty benchmarks 2026: Australia and New Zealand retail",
      description: "Enrolment, active rates, redemption velocity and breakage across 80+ enterprise programmes.",
      href: "/resources",
    },
    {
      type: "COMPARISON",
      regionTime: "ENTERPRISE · 10 MIN",
      title: "Punya Perks vs Capillary, Xoxoday and EasyRewardz",
      description: "An objective feature, tenancy model and pricing comparison for enterprise decision-makers.",
      href: "/resources",
    },
  ],

  integrations: [
    "Shopify", "Magento", "WooCommerce", "Razorpay", "Stripe", "Pine Labs",
    "Square", "Lightspeed", "Twilio", "WhatsApp Business", "DigiLocker", "Xero",
    "Salesforce", "Segment", "BigCommerce", "Klaviyo", "Zendesk", "Oracle NetSuite"
  ],

  faqs: [
    {
      question: "What is enterprise loyalty program software?",
      answer:
        "Enterprise loyalty software governs the rules, calculations, and financial ledger for customer rewards across omnichannel touchpoints (in-store POS, website checkout, mobile apps, and messaging). Punya Perks replaces fragmented point systems with a single append-only ledger.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Because Punya Perks includes pre-built connectors for major POS systems (Pine Labs, Lightspeed, Square) and e-commerce platforms (Shopify, Magento), pilot deployments typically launch in 4 weeks. Full enterprise migrations with custom ERP integrations average 8 to 12 weeks.",
    },
    {
      question: "Can we run multiple brands or countries on one tenant?",
      answer:
        "Yes. Punya Perks was architected for multi-brand coalitions and multinational conglomerates. You can isolate brand catalogs while enabling shared currency exchange or keep each sub-brand strictly sandboxed.",
    },
    {
      question: "How does Punya Perks handle data residency in India and the UAE?",
      answer:
        "We operate isolated regional cloud cells in AWS Mumbai (ap-south-1) for India, AWS UAE/Bahrain for the Middle East, AWS Sydney for ANZ, and AWS Virginia for the US. Member PII never leaves its legal jurisdiction.",
    },
    {
      question: "What makes your ledger append-only?",
      answer:
        "Similar to financial accounting ledgers, point balances are never updated in-place via simple database overwrites. Every transaction creates an immutable credit or debit lot with an HMAC signature. This guarantees auditability for financial auditors and tax authorities.",
    },
    {
      question: "How do you price active members vs total database size?",
      answer:
        "You only pay for members who have actual ledger activity in a given billing month (earning points, redeeming a reward, or changing tiers). Inactive members in your database cost zero, eliminating the unfair penalties charged by legacy marketing clouds.",
    },
  ],
};
