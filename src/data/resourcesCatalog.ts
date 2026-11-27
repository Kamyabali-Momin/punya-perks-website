export interface ResourceItem {
  id: string;
  tag: string;
  title: string;
  text: string;
  meta: string;
  image: string;
  downloadText?: string;
  actionLabel?: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  summary: string;
  content: {
    heading1: string;
    para1: string;
    heading2: string;
    para2: string;
    heading3?: string;
    para3?: string;
    highlights: string[];
  };
  metrics?: { label: string; value: string }[];
}

export const FEATURED_RESOURCE: ResourceItem = {
  id: 'enterprise-loyalty-ledger-blueprint',
  tag: 'Featured Playbook',
  title: 'The Enterprise Loyalty Ledger Blueprint: Architecture & Implementation',
  text: 'A comprehensive 48-page executive blueprint examining where append-only ledger architectures, double-entry reconciliation, and sub-120ms POS syncing create real financial leverage across multi-store retail and banking loyalty networks.',
  meta: '48 Pages · Executive PDF · Published November 2026',
  image: '/images/blog/blog-featured.jpg',
  downloadText: 'Download Free Playbook',
  actionLabel: 'Read Playbook',
  author: {
    name: 'Keyur Mehta',
    role: 'Managing Director & Founder',
    initials: 'KM',
  },
  summary:
    'Double-entry cryptographic ledger reconciliation guarantees mathematical balance integrity across tens of thousands of stores, eliminating loyalty fraud and unverified points liability.',
  metrics: [
    { label: 'Target POS Lookup Latency', value: '<110ms' },
    { label: 'Reconciliation Drift', value: '0.00%' },
    { label: 'Average Time to Live', value: '4 Weeks' },
  ],
  content: {
    heading1: 'The Financial Liability Risk of Mutable SQL Loyalty Records',
    para1:
      'When customer reward balances are stored as mutable database fields, race conditions during high-volume peak periods (e.g., festive shopping days) frequently lead to phantom points or terminal timeouts. In contrast, Punya Perks models every transaction as an immutable double-entry ledger event.',
    heading2: 'Deterministic Event Playback & Sub-120ms POS Syncing',
    para2:
      'By utilizing event sourcing with lightweight local POS edge proxies, customer balances and discount entitlements are verified in under 120ms, ensuring cashiers never face queue bottlenecks or dropped network transactions.',
    heading3: 'End-to-End Statutory Audit Readiness (Ind AS 115 / IFRS 15)',
    para3:
      'Every earn batch records origin entity, FIFO expiry timestamp, and promotional cost allocation so CFOs close quarterly deferred-revenue schedules directly from trial balance exports rather than ad-hoc spreadsheets.',
    highlights: [
      'Immutable double-entry ledger eliminates balance-sheet liability discrepancies',
      'Sub-120ms response time at physical POS cash registers guaranteed by SLA',
      'Built-in support for RBI Gift/PPI, DPDP Act 2023, and Australian Privacy Act norms',
      'Ready-to-deploy connectors for SAP, Oracle Retail, Shopify Plus, and Pine Labs',
    ],
  },
};

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: 'compliance-checklist-india',
    tag: 'Compliance',
    title: 'The India Loyalty Compliance Handbook: DPDP Act, TRAI DLT & RBI Directives',
    text: 'What retail enterprises and fintechs must establish before issuing cash-convertible points, running referral bonuses, or sending promotional WhatsApp notifications under the DPDP Act 2023.',
    meta: '24 pages · Practical Guide',
    image: '/images/blog/blog-api.jpg',
    downloadText: 'Download Compliance Guide',
    actionLabel: 'Read Guide',
    author: {
      name: 'Dishant Mehta',
      role: 'Chief Technology Officer',
      initials: 'DM',
    },
    summary:
      'Detailed statutory analysis covering explicit customer consent protocols, DLT message templates, and automated points breakage accounting under RBI regulations.',
    metrics: [
      { label: 'Consent Capture', value: 'Unbundled' },
      { label: 'Data Residency', value: 'AWS Mumbai' },
      { label: 'DLT Coverage', value: 'Pre-Approved' },
    ],
    content: {
      heading1: 'The Strict Regulatory Shift in Indian Customer Loyalty',
      para1:
        'Under the Digital Personal Data Protection (DPDP) Act 2023 and updated TRAI messaging norms, customer consent for loyalty communications can no longer be bundled with standard POS billing terms. Retailers must maintain verifiable, timestamped consent artifacts for every mobile number enrolled.',
      heading2: 'Managing Financial Liability Under RBI Gift Instrument Directives',
      para2:
        'When loyalty points can be redeemed against gift cards, utility payments, or third-party partner products, the issuance operates under strict Prepaid Payment Instrument (PPI) guardrails. Punya Perks ensures unredeemed point liabilities are tracked down to the exact rupee with double-entry cryptographic reconciliation.',
      highlights: [
        'Granular opt-in consent captured via WhatsApp OTP and POS terminal e-sign',
        'Automated points liability reserve balance calculated at exact breakage models',
        'Strict database-level tenant isolation with primary hosting in AWS Mumbai / Hyderabad',
      ],
    },
  },
  {
    id: 'architecture-deep-dive-comparison',
    tag: 'Comparisons',
    title: 'Punya Perks vs Capillary, Xoxoday & EasyRewardz: Architecture Deep Dive',
    text: 'An objective architectural breakdown comparing legacy centralized database schemas against append-only cryptographic transaction ledgers with sub-120ms POS syncing.',
    meta: '28 pages · Architecture Brief',
    image: '/images/blog/blog-linear.jpg',
    downloadText: 'Download Architecture Brief',
    actionLabel: 'Read Whitepaper',
    author: {
      name: 'Sohail Khan',
      role: 'Head of Strategy & Growth',
      initials: 'SK',
    },
    summary:
      'Append-only immutable ledgers eliminate balance sheet reconciliation discrepancies and enable instant point redemption without distributed deadlocks.',
    metrics: [
      { label: 'Lock Contention', value: 'Zero' },
      { label: 'Cutover Window', value: '4 Weeks' },
      { label: 'Audit Variance', value: '0.00%' },
    ],
    content: {
      heading1: 'The Hidden Tax of Legacy Monolithic Loyalty Platforms',
      para1:
        'Legacy platforms rely on mutable relational database records where customer balances are updated via direct SQL write queries. In high-concurrency peak sales periods, simultaneous earn and burn calls lead to race conditions, phantom points, or terminal timeouts.',
      heading2: 'Cryptographic Ledger Precision with Event Sourcing',
      para2:
        'Punya Perks treats every point transaction as an immutable event in a cryptographically signed ledger. Balances are derived from deterministic event playback, providing mathematical proof of liability that financial auditors can sign off on within minutes.',
      highlights: [
        'Zero database lock contention during 10,000+ simultaneous checkout requests',
        'Immutable audit trail with dual-authorization ledger corrections',
        'Native integration connectors for Shopify, Magento, SAP, Oracle, and Pine Labs',
      ],
    },
  },
  {
    id: 'loyalty-benchmarks-apac-2026',
    tag: 'Benchmarks',
    title: 'Loyalty Benchmarks 2026: Australia, New Zealand & APAC Retail',
    text: 'Comprehensive analysis of customer enrolment velocity, active member ratios, points burn velocity, and breakage reserves analyzed across 50M+ verified APAC transactions.',
    meta: '40 pages · Research Report',
    image: '/images/blog/blog-featured.jpg',
    downloadText: 'Download Benchmark Report',
    actionLabel: 'Read Report',
    author: {
      name: 'Dishant Mehta',
      role: 'Chief Technology Officer',
      initials: 'DM',
    },
    summary:
      'Retail programs with instant sub-120ms checkout redemptions see 3.4x higher repeat visit frequency compared to delayed voucher issuance models.',
    metrics: [
      { label: 'Active Member Ratio', value: '58.4%' },
      { label: 'Basket Lift on Burn', value: '+24.8%' },
      { label: 'Sample Transactions', value: '50M+' },
    ],
    content: {
      heading1: 'Repeat Purchase Elasticity Across APAC Retailers',
      para1:
        'Our 2026 benchmark dataset reveals that consumer patience at retail cash counters caps at 2.5 seconds. When loyalty lookup or points redemption exceeds 120ms, cashiers bypass the loyalty prompt in up to 31% of checkout cycles, severely suppressing customer retention metrics.',
      heading2: 'The Shift to Real-Time Point Multipliers and Tier Upgrades',
      para2:
        'Modern consumers in Australia and New Zealand expect tier transitions and reward multipliers to apply instantaneously on the active transaction receipt. Batch-processed overnight recalculations lead to significant customer support friction and lower perceived program value.',
      highlights: [
        'Average active member ratio in omnichannel retail: 58.4%',
        'Net basket spend increase when redeeming points: +24.8%',
        'Sub-120ms edge latency benchmark at physical POS cash registers',
      ],
    },
  },
  {
    id: 'case-study-national-fashion',
    tag: 'Playbook',
    title: 'The Zero-Downtime POS Migration Playbook: 140+ Outlets in 4 Weeks',
    text: 'Step-by-step field guide to transitioning legacy billing software (Shopify, SAP, Pine Labs) to real-time event-sourced loyalty without missing a single counter transaction.',
    meta: '32 pages · Implementation Kit',
    image: '/images/blog/card-bottom-right.jpg',
    downloadText: 'Download Migration Playbook',
    actionLabel: 'Read Playbook',
    author: {
      name: 'Zil Mehta',
      role: 'Sr. Product Operations Lead',
      initials: 'ZM',
    },
    summary:
      'Migrated 2.4 million legacy customer accounts and 140 store terminals over a single weekend with zero downtime and 100% balance reconciliation.',
    metrics: [
      { label: 'Outlets Migrated', value: '140+' },
      { label: 'Accounts Replayed', value: '2.4M' },
      { label: 'Burn Velocity Lift', value: '+42%' },
    ],
    content: {
      heading1: 'Unifying Fragmented POS Systems Across Nationwide Stores',
      para1:
        'Operating across 140 retail outlets with three different POS software versions created severe loyalty fragmentation. Points earned in physical stores took up to 48 hours to reflect on the brand’s e-commerce website, alienating high-value omnichannel shoppers.',
      heading2: 'Zero-Downtime Ledger Cutover and Instant Cash Counter Sync',
      para2:
        'By deploying lightweight Punya Perks local POS connectors and pre-populating customer balance ledgers through automated ETL pipelines, the brand transitioned all 140 stores seamlessly over a single Sunday night maintenance window.',
      highlights: [
        '140 physical outlets live on unified real-time ledger in under 30 days',
        'Omnichannel point burn velocity increased by 42% within 60 days',
        'Zero cashier training downtime with automatic barcode/phone lookup',
      ],
    },
  },
  {
    id: 'whatsapp-commerce-otp-redemption',
    tag: 'Guide',
    title: 'WhatsApp Commerce & Interactive OTP Redemption for Tier-2/3 Retail',
    text: 'Driving 42% higher coupon burn rates via verified WhatsApp Business API templates without requiring shoppers to download a dedicated mobile app.',
    meta: '18 pages · Strategy Guide',
    image: '/images/workflow/step-connect.jpg',
    downloadText: 'Download WhatsApp Guide',
    actionLabel: 'Read Guide',
    author: {
      name: 'Shivani Mehta',
      role: 'Technical Project Manager',
      initials: 'SM',
    },
    summary:
      'Replacing clunky SMS links with interactive WhatsApp message cards delivers 92% open rates and instant point redemption at retail counters.',
    metrics: [
      { label: 'Message Open Rate', value: '92%' },
      { label: 'Coupon Burn Lift', value: '+42%' },
      { label: 'App Install Needed', value: 'Zero' },
    ],
    content: {
      heading1: 'Overcoming Mobile App Fatigue in Retail Loyalty',
      para1:
        'Over 70% of shoppers abandon loyalty sign-ups when instructed to download a 50MB mobile app at checkout. In contrast, WhatsApp boasts near-universal penetration in India, UAE, and APAC with zero onboarding friction.',
      heading2: 'Interactive Carousels, Dynamic QR Codes and One-Tap Burns',
      para2:
        'With Punya Perks WhatsApp integration, customers receive an automated greeting containing their live point balance, dynamic barcode for counter scanning, and interactive reward buttons immediately following their transaction.',
      highlights: [
        '92% message open rates within 15 minutes of transaction completion',
        '1-tap interactive point redemption without mobile app installations',
        'Pre-approved TRAI DLT and Meta Cloud API templates included out-of-the-box',
      ],
    },
  },
  {
    id: 'pos-latency-throughput-analysis',
    tag: 'Security',
    title: 'Bank-Grade Loyalty Security: SOC 2, KMS Encryption & Tenant Isolation',
    text: 'Protecting point balances and customer PII with AES-256 KMS encryption, dual-authorization ledger modifications, and sovereign regional data residency.',
    meta: '22 pages · Security Whitepaper',
    image: '/images/blog/card-left.jpg',
    downloadText: 'Download Security Whitepaper',
    actionLabel: 'Read Whitepaper',
    author: {
      name: 'Dishant Mehta',
      role: 'Chief Technology Officer',
      initials: 'DM',
    },
    summary:
      'Cryptographic KMS key isolation and sovereign AWS Mumbai hosting guarantee zero cross-tenant data exposure and rapid SOC 2 Type II audit readiness.',
    metrics: [
      { label: 'Encryption Spec', value: 'AES-256 KMS' },
      { label: 'Schema Isolation', value: 'Per-Tenant' },
      { label: 'Control Readiness', value: 'SOC 2 Type II' },
    ],
    content: {
      heading1: 'Treating Loyalty Points as Legal Financial Liabilities',
      para1:
        'Loyalty points on corporate balance sheets are audited under standard liability provisions. Unsecured database entries or loose API credentials represent major audit flags. Punya Perks isolates every enterprise client in its own dedicated KMS enclave.',
      heading2: 'Dual-Authorization Maker-Checker Protocol for Manual Adjustments',
      para2:
        'No single loyalty manager or engineer can manually credit or debit customer point balances exceeding threshold amounts without secondary cryptographic sign-off from finance or compliance administrators.',
      highlights: [
        'AES-256 KMS key rotation and database-level schema isolation',
        'Automated audit logs streamed to client Datadog/Splunk endpoints',
        'Full conformity with DPDP Act 2023 right-to-be-forgotten directives',
      ],
    },
  },
  {
    id: 'breakage-liability-calculator',
    tag: 'Tools',
    title: 'Interactive Loyalty Breakage & Liability Reserve Estimator',
    text: 'Financial modeling workbook for CFOs and loyalty leaders to forecast unredeemed points liability, breakage curve amortization, and balance sheet tax optimization.',
    meta: 'Interactive Workbook & Model',
    image: '/images/products/user-web-home.png',
    downloadText: 'Access Free Estimator',
    actionLabel: 'Access Tool',
    author: {
      name: 'Keyur Mehta',
      role: 'Managing Director & Founder',
      initials: 'KM',
    },
    summary:
      'Accurately model expired points recovery and breakage provisions across multi-year loyalty contracts with IFRS 15 / Ind AS 115 compliant calculations.',
    metrics: [
      { label: 'Accounting Standard', value: 'Ind AS 115' },
      { label: 'Model Baseline', value: '50M+ Txns' },
      { label: 'Recovery Window', value: '30-Day Alerts' },
    ],
    content: {
      heading1: 'The Financial Impact of Points Breakage Miscalculations',
      para1:
        'Under-reserving for point redemptions creates unexpected fiscal year-end budget shortfalls, while over-reserving unnecessarily ties up operating cash reserves. Our verified econometric model estimates steady-state redemption curves based on 50M+ verified transactions.',
      heading2: 'Dynamic Expiry Rules & Customer Reactivation Sequences',
      para2:
        'Rather than letting points quietly expire—which triggers customer churn—Punya Perks orchestrates automated expiry reminder campaigns that drive high-margin incremental purchases in the final 30 days before expiration.',
      highlights: [
        'Ready-to-use Excel / Google Sheets financial liability model',
        'IFRS 15 / Ind AS 115 revenue recognition guidance included',
        'Simulate tier velocity impacts on gross margin and repeat basket size',
      ],
    },
  },
  {
    id: 'legacy-cutover-checklist',
    tag: 'Comparisons',
    title: 'Legacy Platform Cutover Checklist: Capillary, Xoxoday & EasyRewardz',
    text: 'Data validation protocols, historical point balance playback, dry-run reconciliations, and staff training SOPs for a flawless zero-discrepancy cutover.',
    meta: '16 pages · Migration Toolkit',
    image: '/images/products/user-web-campaigns.png',
    downloadText: 'Download Migration Kit',
    actionLabel: 'Read Checklist',
    author: {
      name: 'Sohail Khan',
      role: 'Head of Strategy & Growth',
      initials: 'SK',
    },
    summary:
      'A comprehensive step-by-step checklist ensuring 100% customer balance preservation and zero POS downtime when migrating away from legacy monoliths.',
    metrics: [
      { label: 'Cutover Downtime', value: 'Zero' },
      { label: 'Lot Preservation', value: '100% FIFO' },
      { label: 'Store Rollout SOP', value: 'Included' },
    ],
    content: {
      heading1: 'Eliminating the Downtime Window During Platform Migration',
      para1:
        'Traditional platform migrations require freezing member sign-ups and point redemptions for 24–48 hours. With Punya Perks dual-write event connectors, both old and new systems run synchronously until final cutover sign-off.',
      heading2: 'Auditing Historical Customer Balances and Tier Status',
      para2:
        'Before switching over, our automated reconciliation engine validates all historical member credits, debits, and tier qualifiers against your raw POS transaction logs to guarantee zero missing points.',
      highlights: [
        'Pre-migration data hygiene checklist and schema mapping matrix',
        'Dry-run reconciliation scripts for historical transaction replay',
        'Cashier quick-reference guide and terminal training template',
      ],
    },
  },
];

export const ALL_RESOURCES: ResourceItem[] = [
  FEATURED_RESOURCE,
  ...RESOURCE_ITEMS,
];

export function getResourceById(id?: string): ResourceItem | undefined {
  if (!id) return undefined;
  return ALL_RESOURCES.find((item) => item.id === id);
}
