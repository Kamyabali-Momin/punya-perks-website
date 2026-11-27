export type CustomerCategory =
  | 'Retail & Multi-Location'
  | 'Fintech & Banking'
  | 'Hospitality & QSR'
  | 'E-Commerce & D2C'
  | 'Coalition Programs';

export interface StoryMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface CustomerStory {
  slug: string;
  tag: CustomerCategory;
  region: string;
  companyArchetype: string;
  title: string;
  summary: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  meta: string;
  readTime: string;
  launchTime: string;
  image: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  metrics: StoryMetric[];
  challenge: string[];
  solution: {
    intro: string;
    pillars: { title: string; description: string }[];
  };
  results: string[];
  quote: {
    text: string;
    attribution: string;
  };
  complianceFramework: string;
  integrationsUsed: string[];
  modulesUsed: { name: string; href: string }[];
}

export const FEATURED_CUSTOMER_STORY: CustomerStory = {
  slug: 'national-fashion-omnichannel-ledger',
  tag: 'Retail & Multi-Location',
  region: 'India · 480+ Storefronts & Magento',
  companyArchetype: 'National Fashion & Apparel Conglomerate',
  title: 'A 480+ Store National Fashion Retailer Unified Physical & Digital Loyalty Ledgers',
  summary:
    'How an enterprise fashion group unified 480 storefronts and Magento commerce onto a single append-only double-entry ledger with zero checkout register freeze.',
  headlineMetric: '+34%',
  headlineMetricLabel: 'Repeat Purchase Lift',
  meta: '480+ Stores · ₹1,200 Cr GMV',
  readTime: '6 min read',
  launchTime: '4 Weeks',
  image:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  author: 'Vikram Malhotra',
  authorRole: 'VP of Retail Technology',
  authorAvatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  metrics: [
    { value: '+34%', label: 'Repeat Purchase Lift', detail: 'Within 90 days of omnichannel cutover' },
    { value: '<110ms', label: 'POS Checkout Sync', detail: 'P99 across 480 Pine Labs terminals' },
    { value: '480+', label: 'Unified Storefronts', detail: 'Connected with Magento e-commerce' },
    { value: '0.00%', label: 'Ledger Variance', detail: 'Between marketing & finance books' },
  ],
  challenge: [
    'The retail group operated 480 physical outlets across tier-1 and tier-2 Indian cities alongside a high-traffic Magento storefront. Store POS counters kept points in batched overnight scripts while online orders ran a separate discount rule engine.',
    'Shoppers earned points in store only to find zero balance when checking out online that evening, driving over 18,000 monthly customer care tickets. Meanwhile, finance teams spent 11 days each quarter reconciling point liability across 14 subsidiary GST entities.',
  ],
  solution: {
    intro:
      'Punya Perks replaced both legacy loyalty silos with a single immutable double-entry ledger hosted in AWS Mumbai, connected simultaneously to Pine Labs billing counters and Magento checkout hooks.',
    pillars: [
      {
        title: 'Sub-110ms Store Checkout & Offline Queueing',
        description:
          'Cashiers look up balances via mobile number or QR pass directly inside Pine Labs. When store internet degrades, signed offline tokens queue transactions cleanly and settle idempotently.',
      },
      {
        title: '1-Tap WhatsApp Enrolment & Dynamic Cards',
        description:
          'First-time buyers scan a counter QR to join via WhatsApp Business Cloud with DPDP consent logging—no forced app install at the billing queue.',
      },
      {
        title: 'Tax-Aware Return Window & Entity Accounting',
        description:
          'Online earns sit in Pending state through the 14-day return window and auto-journal by GST entity, giving statutory auditors clean Ind AS 115 breakage schedules.',
      },
    ],
  },
  results: [
    '+34% increase in 90-day repeat purchase frequency across cross-channel shoppers',
    'Sub-110ms checkout verification latency even during Diwali weekend traffic spikes',
    'Campaign rollout time compressed from 3 weeks of custom IT tickets to 20 minutes',
    '100% elimination of manual month-end loyalty liability spreadsheets for finance',
  ],
  quote: {
    text: 'Finance and merchandising finally read from the exact same ledger. Moving 480 stores onto Punya Perks in four weeks without slowing down Saturday queues was a breakthrough for us.',
    attribution: 'Vikram Malhotra · VP of Retail Technology',
  },
  complianceFramework: 'DPDP Act 2023 · Ind AS 115 · TRAI DLT',
  integrationsUsed: ['Pine Labs POS', 'Magento Commerce', 'WhatsApp Business Cloud', 'SAP S/4HANA'],
  modulesUsed: [
    { name: 'Earn & Rules Engine', href: '/product/earn' },
    { name: 'POS & Commerce Connectors', href: '/product/integrations' },
    { name: 'WhatsApp Loyalty Bot', href: '/product/whatsapp' },
    { name: 'Double-Entry Trust Ledger', href: '/product/trust' },
  ],
};

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    slug: 'apparel-conglomerate-pos-latency',
    tag: 'Retail & Multi-Location',
    region: 'India · Pan-India Retail',
    companyArchetype: 'Multi-Brand Fashion Group',
    title: 'National apparel group cut checkout loyalty latency under 110ms across 480 stores',
    summary:
      'Replaced overnight POS batching with real-time Pine Labs verification, offline queue resilience, and WhatsApp 1-tap voucher redemption.',
    headlineMetric: '<110ms',
    headlineMetricLabel: 'Checkout Sync Speed',
    meta: '480 Stores · +34% Repeat Lift',
    readTime: '5 min read',
    launchTime: '4 Weeks',
    image:
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80',
    author: 'Vikram Malhotra',
    authorRole: 'VP of Retail Technology',
    authorAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    metrics: [
      { value: '<110ms', label: 'P99 POS Sync', detail: 'Zero cashier terminal stalls' },
      { value: '+34%', label: 'Repeat Purchase Lift', detail: 'Across WhatsApp-enrolled buyers' },
      { value: '92%', label: 'Counter Adoption', detail: 'Up from 41% under legacy SMS OTPs' },
    ],
    challenge: [
      'During festive sales, legacy SMS OTP lookups routinely timed out after 8 to 12 seconds at store billing desks. Cashiers began skipping loyalty prompts altogether to keep queues moving.',
      'Marketing had no visibility into cross-brand basket affinities across the group’s four flagship apparel labels.',
    ],
    solution: {
      intro:
        'Using the Punya Perks edge-cached POS adapter, stores switched to encrypted barcode and WhatsApp token verification with automatic local retry.',
      pillars: [
        {
          title: 'Pre-Warmed Edge Balance Cache',
          description:
            'Regional edge POPs serve member tier and available balance checks in under 110ms while background webhooks commit immutable ledger writes.',
        },
        {
          title: 'OTP-Free WhatsApp Voucher Redemption',
          description:
            'Shoppers tap "Use 500 pts" inside an existing WhatsApp thread to reveal a single-use 6-digit counter code that clears without waiting for congested SMS gateways.',
        },
        {
          title: 'Cross-Brand Coalition Stacking Caps',
          description:
            'Deterministic rule ordering enforces maximum redemption percentages per brand margin profile while allowing cross-store earning.',
        },
      ],
    },
    results: [
      'POS loyalty participation climbed from 41% to 92% of billed invoices in 60 days',
      'Zero register freezes recorded across peak Diwali weekend (1.4M bills processed)',
      '3.1x faster point redemption at counter compared to legacy SMS OTP workflow',
    ],
    quote: {
      text: 'Cutting checkout lookup below 110 milliseconds turned cashiers from skeptics into our biggest loyalty advocates.',
      attribution: 'Vikram Malhotra · VP of Retail Technology',
    },
    complianceFramework: 'DPDP Act 2023 · TRAI DLT Compliant',
    integrationsUsed: ['Pine Labs POS', 'WhatsApp Cloud API', 'Shopify Plus'],
    modulesUsed: [
      { name: 'Earn & Rules Engine', href: '/product/earn' },
      { name: 'Redemption Engine', href: '/product/redeem' },
      { name: 'WhatsApp Loyalty Bot', href: '/product/whatsapp' },
    ],
  },
  {
    slug: 'islamic-digital-bank-audit-ledger',
    tag: 'Fintech & Banking',
    region: 'UAE · Dubai & Abu Dhabi',
    companyArchetype: 'Sharia-Compliant Digital Bank',
    title: 'Regional digital bank achieved 100% first-pass audit approval on reward journals',
    summary:
      'Dual-control maker-checker workflows, cryptographically sealed journals, and sovereign UAE residency eliminated year-end audit findings.',
    headlineMetric: '0.00%',
    headlineMetricLabel: 'Ledger Discrepancy',
    meta: '1.2M Cards · 100% Audit Pass',
    readTime: '6 min read',
    launchTime: '5 Weeks',
    image:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: 'Tariq Al-Mansoor',
    authorRole: 'Head of Digital Cards & Loyalty',
    authorAvatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    metrics: [
      { value: '1.2M', label: 'Active Cardholders', detail: 'Debit & covered card rewards' },
      { value: '0.00%', label: 'Ledger Variance', detail: 'Cryptographic hash-chain verified' },
      { value: '100%', label: 'First-Pass Audit', detail: 'Zero external auditor exceptions' },
    ],
    challenge: [
      'A fast-growing UAE digital bank needed to replace an internal rewards microservice that stored mutable integer balances—causing unexplainable point drift during concurrent reversals and manual agent goodwill credits.',
      'Central bank and Sharia supervisory board auditors required strict segregation of duties, immutable audit trails, and complete data residency inside AWS me-central-1 (UAE).',
    ],
    solution: {
      intro:
        'Punya Perks deployed a dedicated UAE tenant isolation cluster powering card-spend earn, airline mile conversions, and instant statement credit.',
      pillars: [
        {
          title: 'Append-Only Double-Entry Point Accounting',
          description:
            'Every point issued pairs with a liability account credit; voids and chargebacks post compensating reversing entries rather than overwriting historical rows.',
        },
        {
          title: 'Four-Eyes Maker-Checker Approvals',
          description:
            'Goodwill adjustments above threshold require dual sign-off from separate compliance and operations roles with full actor IP and reason logging.',
        },
        {
          title: 'Instant Partner & Miles Clearing',
          description:
            'Two-phase quote-and-commit APIs prevent double-spending when cardholders convert rewards into GCC airline miles or utility bill payments.',
        },
      ],
    },
    results: [
      'Passed statutory internal and external card-liability audit on first review with zero observations',
      'Reduced ops reconciliation close cycle from 9 business days to automated nightly CSV/JSON exports',
      'Scaled to 1.2M active cardholders with P99 balance inquiry latency under 45ms',
    ],
    quote: {
      text: 'Auditors asked for sample tracebacks across 40,000 reversed card settlements. We pulled the exact immutable double-entry trail in twelve seconds.',
      attribution: 'Tariq Al-Mansoor · Head of Digital Cards & Loyalty',
    },
    complianceFramework: 'AWS UAE Sovereign Residency · SOC 2 Type II',
    integrationsUsed: ['ISO-8583 Card Switch', 'Core Banking Ledger', 'Partner Airlines API'],
    modulesUsed: [
      { name: 'Trust & Double-Entry Ledger', href: '/product/trust' },
      { name: 'Platform Security', href: '/platform/security' },
      { name: 'Banking Solution', href: '/solutions/banking' },
    ],
  },
  {
    slug: 'qsr-franchise-visit-velocity',
    tag: 'Hospitality & QSR',
    region: 'Australia · Sydney & Melbourne',
    companyArchetype: 'Multi-Brand Quick Service Franchise',
    title: 'Multi-brand QSR franchise scaled repeat visit velocity 4.2x across 85 outlets',
    summary:
      'Velocity fraud controls, Privacy Act 1988 compliance, and offline counter queueing powered lunch-rush loyalty across 85 stores.',
    headlineMetric: '4.2x',
    headlineMetricLabel: 'Member Visit Velocity',
    meta: '85 Outlets · 4.2x Visit Velocity',
    readTime: '5 min read',
    launchTime: '3 Weeks',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    author: 'Liam Henderson',
    authorRole: 'Chief Commercial Officer',
    authorAvatar:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    metrics: [
      { value: '4.2x', label: 'Visit Frequency', detail: 'Among streak challenge members' },
      { value: '85', label: 'Connected Outlets', detail: 'Lightspeed K-Series & kiosks' },
      { value: '-89%', label: 'Collusive Fraud', detail: 'Via automated receipt velocity caps' },
    ],
    challenge: [
      'A 85-store specialty coffee and casual dining group in Australia discovered cashiers were scanning their own personal loyalty barcodes on unclaimed guest receipts—leaking nearly A$14,000/month in free drinks.',
      'Stores also needed instant digital stamp cards synced across Lightspeed POS and mobile pre-order kiosks without storing PII outside Sydney.',
    ],
    solution: {
      intro:
        'Punya Perks connected directly to Lightspeed POS and self-order kiosks in AWS Sydney, adding automated anti-abuse heuristics and gamified visit streaks.',
      pillars: [
        {
          title: 'Cashier & Terminal Velocity Guards',
          description:
            'Real-time rules cap scans per member per day, flag matching terminal-to-account patterns, and automatically place suspicious awards into review hold.',
        },
        {
          title: 'Cross-Brand Streak Campaigns',
          description:
            'Dynamic "3 morning coffees before Friday" challenges automatically boost afternoon attachment items across sister QSR brands.',
        },
        {
          title: 'Privacy Act 1988 Compliant Member Wallet',
          description:
            'Consent timestamps, instant data-export requests, and Sydney-only encrypted storage satisfy Australian APP requirements natively.',
        },
      ],
    },
    results: [
      'Rewarded members increased monthly store visits by 4.2x versus non-enrolled guests',
      'Fraudulent staff-scanned claims dropped 89% within two weeks of velocity rule activation',
      'Rolled out across all 85 franchise outlets in 21 days with zero counter hardware replacement',
    ],
    quote: {
      text: 'Blocking receipt-harvesting paid for the entire platform in month one, and our streak challenges turned Tuesday afternoon lulls into steady traffic.',
      attribution: 'Liam Henderson · Chief Commercial Officer',
    },
    complianceFramework: 'Australia Privacy Act 1988 (APPs) · AWS Sydney',
    integrationsUsed: ['Lightspeed POS', 'Self-Order Kiosks', 'Stripe Payments'],
    modulesUsed: [
      { name: 'Campaigns & Streaks', href: '/product/campaigns' },
      { name: 'Hospitality Solution', href: '/solutions/hospitality' },
      { name: 'Analytics & Fraud Signals', href: '/product/analytics' },
    ],
  },
  {
    slug: 'd2c-beauty-vip-lifetime-value',
    tag: 'E-Commerce & D2C',
    region: 'India · Direct-to-Consumer',
    companyArchetype: 'Clean Beauty & Skincare Brand',
    title: 'D2C beauty brand lifted customer lifetime value by +28% with dynamic VIP tiers',
    summary:
      'Shopify Plus checkout webhooks, return-aware pending holds, and automated FIFO expiry nudges lifted repeat cohort spend.',
    headlineMetric: '+28%',
    headlineMetricLabel: 'Customer LTV Lift',
    meta: '850K Members · +28% Customer LTV',
    readTime: '5 min read',
    launchTime: '2 Weeks',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    author: 'Pooja Sharma',
    authorRole: 'Director of Retention & Growth',
    authorAvatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    metrics: [
      { value: '+28%', label: '12-Month LTV', detail: 'Gold & Platinum tier cohorts' },
      { value: '850K', label: 'Active Members', detail: 'Synced live with Shopify Plus' },
      { value: '0ms', label: 'Storefront Bloat', detail: 'Zero blocking frontend scripts' },
    ],
    challenge: [
      'Legacy Shopify loyalty plugins injected heavy JavaScript bundles that degraded mobile Core Web Vitals and allowed shoppers to burn newly earned points right before cancelling Cash-on-Delivery orders.',
      'The retention team wanted bespoke tier themes and honest pending-vs-available balance cards embedded directly inside their React storefront.',
    ],
    solution: {
      intro:
        'Using Punya Perks headless REST APIs and Shopify Plus checkout extensions, the brand decoupled loyalty computation from storefront page loads.',
      pillars: [
        {
          title: 'COD & Return-Window Pending Escrows',
          description:
            'Points from Cash-on-Delivery and standard orders stay visibly marked Pending until delivery settlement + 7-day return clearance, eliminating clawback friction.',
        },
        {
          title: 'FIFO Expiry Nudges via Klaviyo & WhatsApp',
          description:
            'Lot-tracked expiry triggers notify shoppers 14 days before older point batches expire, recovering dormant replenishment cycles cleanly.',
        },
        {
          title: 'Tier-Adaptive Member Portal UI',
          description:
            'Embedded customer portal adapts dynamically across Blush Silver, Marigold Gold, and Obsidian Platinum tiers with zero third-party branding.',
        },
      ],
    },
    results: [
      '+28% higher 12-month customer lifetime value across tiered replenishment cohorts',
      'Recovered 19% of at-risk churned buyers through targeted FIFO expiry alerts',
      'Improved mobile PDP Lighthouse speed score by 14 points after removing legacy widget bloat',
    ],
    quote: {
      text: 'Showing Pending versus Available points honestly stopped return-clawback complaints overnight, and our Gold tier members now reorder 40 days earlier.',
      attribution: 'Pooja Sharma · Director of Retention & Growth',
    },
    complianceFramework: 'DPDP Consent Logging · GDPR Ready',
    integrationsUsed: ['Shopify Plus', 'Klaviyo', 'Razorpay', 'WhatsApp Cloud'],
    modulesUsed: [
      { name: 'Member App & Portal', href: '/product/member-app' },
      { name: 'E-Commerce Solution', href: '/solutions/ecommerce' },
      { name: 'Analytics & Cohorts', href: '/product/analytics' },
    ],
  },
  {
    slug: 'metro-mall-coalition-clearinghouse',
    tag: 'Coalition Programs',
    region: 'India · Flagship Destination Mall',
    companyArchetype: 'Multi-Merchant Shopping Destination',
    title: 'Metro lifestyle mall unlocked ₹4.8 Cr in cross-merchant spend across 160 tenants',
    summary:
      'Universal coalition clearinghouse with automated net daily settlement ledgers turned single-store shoppers into multi-zone visitors.',
    headlineMetric: '₹4.8 Cr',
    headlineMetricLabel: 'Cross-Merchant Spend',
    meta: '160 Merchants · ₹4.8 Cr Spend',
    readTime: '6 min read',
    launchTime: '5 Weeks',
    image:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80',
    author: 'Rajesh Kulkarni',
    authorRole: 'Mall General Manager',
    authorAvatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    metrics: [
      { value: '₹4.8 Cr', label: 'Coalition Volume', detail: 'Attributable cross-tenant spend' },
      { value: '160', label: 'Live Tenants', detail: 'Cinema, F&B, luxury & parking' },
      { value: 'T+1', label: 'Net Settlement', detail: 'Automated issuer vs redeemer payout' },
    ],
    challenge: [
      'Anchor cinema and hypermarket tenants attracted massive weekend footfall, yet specialty apparel and food-court tenants struggled to capture cross-visits without cumbersome paper parking coupons.',
      'Reconciling who funded points versus who honoured redemptions across 160 independent GST merchants was operationally impossible on spreadsheets.',
    ],
    solution: {
      intro:
        'Punya Perks provisioned a multi-tenant Coalition Clearinghouse where every earn and burn entry preserves originating and redeeming merchant IDs.',
      pillars: [
        {
          title: 'Automated Issuer vs Redeemer Settlement',
          description:
            'Nightly T+1 clearing computes exact net payable/receivable positions per tenant based on contracted point exchange rates and coalition breakage split.',
        },
        {
          title: 'Closed-Loop RBI Compliance Boundaries',
          description:
            'Configurable wallet rules enforce promotional loyalty caps without triggering prepaid payment instrument (PPI) licensing complexity.',
        },
        {
          title: 'Universal Mall WhatsApp Pass',
          description:
            'Visitors scan QR signage at valet, food court, or cinema kiosks to earn instantly from uploaded bills or integrated POS counters.',
        },
      ],
    },
    results: [
      'Unlocked ₹4.8 Cr in tracked cross-zone spending across F&B and specialty retail in 6 months',
      'Onboarded 160 independent mall merchants onto unified settlement statements',
      'Parking-to-dining redemption loops lifted weekend F&B average order size by 22%',
    ],
    quote: {
      text: 'Tenants love seeing movies and anchor stores actively subsidize footfall into the upper-floor dining court, backed by exact T+1 payout reports.',
      attribution: 'Rajesh Kulkarni · Mall General Manager',
    },
    complianceFramework: 'Closed-Loop Promotional Rules · GST Ready',
    integrationsUsed: ['Petpooja POS', 'Pine Labs', 'Parking ANPR', 'Razorpay Payouts'],
    modulesUsed: [
      { name: 'Enterprise Coalition', href: '/solutions/enterprise' },
      { name: 'Trust & Settlement Ledger', href: '/product/trust' },
      { name: 'Redemption Rules', href: '/product/redeem' },
    ],
  },
  {
    slug: 'supermarket-edge-pos-caching',
    tag: 'Retail & Multi-Location',
    region: 'India · Gujarat & Maharashtra',
    companyArchetype: 'Regional Grocery & Supermarket Chain',
    title: 'Supermarket chain eliminated 3-second cashier freezes using LAN edge POS caching',
    summary:
      'Local LAN edge caching, masked barcode lookup tokens, and legacy POS compatibility stabilized peak grocery checkout lanes.',
    headlineMetric: '<90ms',
    headlineMetricLabel: 'Billing Lane Lookup',
    meta: '62 Supermarkets · <90ms Lookup',
    readTime: '4 min read',
    launchTime: '3 Weeks',
    image:
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
    author: 'Sanjay Patel',
    authorRole: 'Chief Information Officer',
    authorAvatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    metrics: [
      { value: '<90ms', label: 'LAN Edge Lookup', detail: 'Even on congested 4G store uplinks' },
      { value: '62', label: 'Supermarkets', detail: 'Across 440+ billing counters' },
      { value: '100%', label: 'Phone Privacy', detail: 'Encrypted barcode tokens at counter' },
    ],
    challenge: [
      'Busy evening grocery queues cannot tolerate 3-second cloud round-trips on every basket scan. Worse, asking shoppers to shout phone numbers aloud raised privacy complaints at crowded counters.',
      'Many outlets ran older Windows-based billing terminals that could not be replaced mid-fiscal year.',
    ],
    solution: {
      intro:
        'Punya Perks deployed its lightweight Store Edge Relay alongside simple REST/socket hooks compatible with existing supermarket billing software.',
      pillars: [
        {
          title: 'Encrypted Token Scanners Without Verbal Phone Entry',
          description:
            'Shoppers present their dynamic member app or WhatsApp QR pass; cashiers scan silently in one pass with zero PII exposure.',
        },
        {
          title: 'Category Margin Exclusion Rules',
          description:
            'Automated SKU rules exclude low-margin staples like cooking oil and dairy from high bonus multipliers while boosting private-label organic aisles.',
        },
        {
          title: 'Resilient Store-Level Queueing',
          description:
            'Billing continues seamlessly during ISP packet loss with automatic sequence reconciliation when WAN connectivity recovers.',
        },
      ],
    },
    results: [
      'Checkout verification latency stabilized below 90ms across all 440 supermarket lanes',
      'Private-label basket share climbed 19% through targeted category earn multipliers',
      'Zero dropped transactions across monsoon telecom outages',
    ],
    quote: {
      text: 'Our evening lanes move faster than ever, and shifting bonus multipliers onto our private-label aisles immediately lifted gross store margin.',
      attribution: 'Sanjay Patel · Chief Information Officer',
    },
    complianceFramework: 'Masked PII Lookup · DPDP Ready',
    integrationsUsed: ['Legacy Windows POS', 'Tally ERP', 'WhatsApp Business Cloud'],
    modulesUsed: [
      { name: 'Earn & SKU Rules', href: '/product/earn' },
      { name: 'POS Integrations', href: '/product/integrations' },
      { name: 'Member App', href: '/product/member-app' },
    ],
  },
];

export const ALL_CUSTOMER_STORIES: CustomerStory[] = [
  FEATURED_CUSTOMER_STORY,
  ...CUSTOMER_STORIES,
];

export function getCustomerStoryBySlug(slug?: string): CustomerStory | undefined {
  if (!slug) return undefined;
  return ALL_CUSTOMER_STORIES.find((story) => story.slug === slug);
}
