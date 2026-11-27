export type BlogCategory =
  | 'Product Updates'
  | 'Engineering'
  | 'Compliance'
  | 'UI/UX Design'
  | 'Strategy'
  | 'Benchmark'
  | 'Comparison';

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  codeSnippet?: {
    title: string;
    code: string;
  };
}

export interface BlogArticle {
  slug: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  sections: BlogSection[];
  takeaways: string[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: 'ux-review-presentations',
    category: 'UI/UX Design',
    date: '24 Feb 2026',
    readTime: '6 min read',
    title: 'Designing Loyalty Experiences Members Actually Keep',
    excerpt:
      'How adaptive tier theming, honest pending-vs-available point states, and zero-clutter redemption trays lift member retention.',
    image: '/images/blog/blog-featured.jpg',
    author: {
      name: 'Aryan Kantharia',
      role: 'Lead UI/UX Designer at Punya Perks',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Leads member wallet UX, adaptive tier identity systems, and multi-channel redemption flows at Punya Perks.',
    },
    tags: ['Member App UI', 'Tier Identity', 'Retention UX', 'WhatsApp Pass'],
    sections: [
      {
        id: 'honest-balances',
        heading: '1. Show Available, Pending, and Reserved Points Separately',
        paragraphs: [
          'Nothing erodes customer trust faster than displaying 3,850 redeemable points on the home banner when 350 of those points are actually frozen inside an active COD return window or pending checkout hold.',
          'When legacy portals collapse all balances into one optimistic number, shoppers get rejected at the billing counter or cart checkout—driving over 40% of tier-1 loyalty support tickets. Splitting Available, Pending, and Expiring Soon visually on the wallet card turns ledger honesty into a brand strength.',
        ],
        bullets: [
          'Available Balance: Instantly redeemable in-store via QR/barcode or online at checkout.',
          'Pending Escrow: Earned on Cash-on-Delivery or returnable baskets with an exact unlock date.',
          'Expiring Lot Banner: FIFO batch alerts 14 days before older promotional points roll off.',
        ],
      },
      {
        id: 'tier-adaptation',
        heading: '2. Adaptive Tier Visual Identity',
        paragraphs: [
          'As members advance from Silver to Gold and Platinum, the wallet interface itself should acknowledge their status without noisy confetti modals. Subtle guilloche background patterns, warm marigold metallic borders, and prioritized concierge perks reinforce progression naturally.',
          'Every UI surface in Punya Perks derives its palette and perk ordering directly from the member’s real-time tier evaluation state, ensuring zero visual lag after qualifying transactions.',
        ],
      },
      {
        id: 'one-tap-burn',
        heading: '3. Frictionless Checkout & Counter QR Flows',
        paragraphs: [
          'Whether a customer is standing at a busy weekend POS counter or paying inside a mobile checkout sheet, scanning their loyalty barcode or applying a voucher code must finish in a single deliberate tap.',
          'By pairing high-contrast counter barcodes with mirror parity inside WhatsApp Business Cloud, brands see 3x higher active redemption rates without forcing every walk-in buyer to install a standalone app.',
        ],
      },
    ],
    takeaways: [
      'Separate available, pending, reserved, and expiring balances clearly on every wallet screen',
      'Tie UI card aesthetics and perk trays directly to live Silver, Gold, and Platinum tier state',
      'Keep in-store barcode scanning and WhatsApp pass access one tap away from home',
    ],
  },
  {
    slug: 'migrating-to-linear-101',
    category: 'Engineering',
    date: '23 Feb 2026',
    readTime: '8 min read',
    title: 'Zero-Downtime Loyalty Migrations: Dual-Write & Ledger Replay',
    excerpt:
      'How engineering teams cut over 2M+ active members from legacy monoliths in 4 weeks with zero POS counter freeze.',
    image: '/images/blog/blog-linear.jpg',
    author: {
      name: 'Dishant Mehta',
      role: 'Chief Technology Officer',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Architects Punya Perks’ append-only double-entry point ledger, distributed edge cache, and high-throughput POS connectors.',
    },
    tags: ['Migrations', 'Double-Entry Ledger', 'Dual-Write', 'POS Sync'],
    sections: [
      {
        id: 'dual-write',
        heading: '1. Shadow Dual-Write Ingestion Before Cutover',
        paragraphs: [
          'Enterprise retail and QSR operators cannot shut down 400+ store checkout counters for a 48-hour maintenance window just to switch loyalty vendors. Instead, Punya Perks starts in shadow dual-write mode seven days prior to cutover.',
          'Every POS bill and e-commerce webhook hits your existing vendor synchronously while mirroring an asynchronous shadow event into our sandbox ledger. Automated diff monitors compare computed earn, tier upgrades, and exclusions transaction by transaction.',
        ],
        codeSnippet: {
          title: 'shadow_reconciliation_diff.json',
          code: `{
  "window": "2026-02-18T00:00:00Z/2026-02-22T23:59:59Z",
  "replayed_events": 1482910,
  "exact_balance_match": "99.998%",
  "fifo_lot_drift": 0,
  "status": "READY_FOR_DNS_CUTOVER"
}`,
        },
      },
      {
        id: 'lot-replay',
        heading: '2. Preserving FIFO Expiry Lots & Pending Holds',
        paragraphs: [
          'Most migration scripts make a fatal shortcut: importing a single flat integer per customer mobile number. That erases when each batch of points was earned, breaking FIFO expiry schedules and violating statutory Ind AS 115 / IFRS 15 breakage forecasts.',
          'Our migration runner replays historical earn credits, burn debits, and active expiry lots sequentially so members keep their exact expiry calendar and pending return holds after cutover.',
        ],
        bullets: [
          'Deterministic idempotency keys prevent double-import on retried batches',
          'Tier anniversaries and rolling 12-month spend accumulators reconstruct cleanly',
          'Unclaimed guest phone profiles merge automatically under unified DPDP consent logs',
        ],
      },
      {
        id: 'finance-signoff',
        heading: '3. Cryptographic Balance Sign-Off',
        paragraphs: [
          'Before production traffic flips, finance controllers receive an automated opening-balance trial sheet matching unredeemed point liability to the exact paise, cent, or fil against legacy exports.',
          'With cryptographic hash verification across all migrated accounts, statutory auditors can trace opening journal balances straight back to historical source records.',
        ],
      },
    ],
    takeaways: [
      'Zero POS downtime during Sunday night cutover windows via 7-day shadow dual-write',
      'Full FIFO expiry lot and rolling tier window preservation across migrated accounts',
      'Automated finance opening-balance sign-off pack before production DNS/webhook switch',
    ],
  },
  {
    slug: 'building-your-api-stack',
    category: 'Engineering',
    date: '23 Feb 2026',
    readTime: '7 min read',
    title: 'Building a Sub-120ms Checkout Quote & Commit API Stack',
    excerpt:
      'Designing idempotent redemption holds, HMAC-signed webhooks, and edge-cached catalogs for high-concurrency flash sales.',
    image: '/images/blog/blog-api.jpg',
    author: {
      name: 'Sohail Khan',
      role: 'Head of Strategy & Growth',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Advises omnichannel retail and banking architecture teams on sub-second POS integrations and coalition settlement models.',
    },
    tags: ['REST APIs', 'Two-Phase Commit', 'Idempotency', 'Webhooks'],
    sections: [
      {
        id: 'two-phase',
        heading: '1. Two-Phase Quote & Commit Protocol',
        paragraphs: [
          'Real-world payments fail mid-flight—UPI apps time out, card 3DS challenges are abandoned, and store terminals lose carrier signal right after tapping Pay. If a loyalty engine burns points on initial checkout selection, every failed payment leaves an angry shopper missing rewards.',
          'Punya Perks enforces a strict two-phase protocol: `/v1/redemptions/quote` locks the exact point value in reserved status for a configurable TTL (15 minutes by default), and `/v1/redemptions/commit` atomically settles the debit only once payment settlement succeeds.',
        ],
        codeSnippet: {
          title: 'POST /v1/redemptions/quote -> /commit',
          code: `// 1. Reserve points before opening payment sheet
POST /v1/redemptions/quote
{ "member_id": "mem_9481", "points": 500, "order_ref": "ORD-8821", "ttl_seconds": 900 }

// 2. Finalize atomically after UPI/Card capture webhook
POST /v1/redemptions/commit
{ "quote_id": "qt_71b9c", "idempotency_key": "pay_capture_ord_8821" }`,
        },
      },
      {
        id: 'idempotency',
        heading: '2. Deterministic Idempotency Keys',
        paragraphs: [
          'Mobile retail networks drop packets constantly during evening peaks. Every earn, quote, commit, and void endpoint accepts an explicit `Idempotency-Key` header.',
          'If a store register retries the exact same bill payload three times after a Wi-Fi blip, Punya Perks replays the original HTTP response cleanly from the idempotency store without issuing duplicate points.',
        ],
      },
      {
        id: 'webhooks',
        heading: '3. Replayable HMAC-SHA256 Webhooks',
        paragraphs: [
          'Downstream CRM workflows, ERP accounting jobs, and WhatsApp receipt bots subscribe to versioned event streams signed with HMAC-SHA256 headers.',
          'Failed webhook deliveries retry with jittered exponential backoff and preserve full dead-letter queue visibility inside the developer console.',
        ],
      },
    ],
    takeaways: [
      'Two-phase quote and commit protocol prevents orphaned point deductions on abandoned carts',
      'Mandatory idempotency keys make flaky store POS and mobile retries completely safe',
      'Sub-120ms p99 quote latency holds steady even during Diwali and flash-sale spikes',
    ],
  },
  {
    slug: 'dpdp-act-loyalty-consent',
    category: 'Compliance',
    date: '14 Nov 2026',
    readTime: '9 min read',
    title: 'DPDP Act 2023 & TRAI DLT: What Loyalty Teams Must Change',
    excerpt:
      'Why bundled POS receipts no longer qualify as valid consent—and how to automate explicit opt-ins and erasure requests.',
    image: '/images/blog/card-left.jpg',
    author: {
      name: 'Keyur Mehta',
      role: 'Managing Director & Founder',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Founder at Kombee & Punya Perks, focused on compliant enterprise loyalty infrastructure across India, ANZ, and the GCC.',
    },
    tags: ['DPDP Act 2023', 'TRAI DLT', 'Data Erasure', 'Consent Ledger'],
    sections: [
      {
        id: 'explicit-consent',
        heading: '1. Unbundled, Purpose-Specific Consent',
        paragraphs: [
          'Under India’s Digital Personal Data Protection (DPDP) Act 2023, asking for a customer’s mobile number at billing to print an e-receipt no longer authorizes marketing teams to silently enroll that shopper into promotional loyalty broadcasts.',
          'Consent notices must be itemized, timestamped, and unbundled. Punya Perks embeds explicit one-tap opt-in hooks directly into counter WhatsApp QR scans and checkout sheets, recording an immutable consent artifact per purpose.',
        ],
        bullets: [
          'Separate "Transactional Point Updates" from "Promotional Offers & Campaigns"',
          'Store timestamp, channel source, notice version, and withdrawal history',
          'Enforce pre-registered TRAI DLT header & template IDs automatically on Indian SMS traffic',
        ],
      },
      {
        id: 'dsr-automation',
        heading: '2. Right-to-Erasure Without Breaking Financial Audits',
        paragraphs: [
          'When a member exercises their right to data erasure, engineering teams face a classic conflict: privacy law requires purging PII, while financial accounting law requires retaining point issuance and tax liability journals for seven years.',
          'Punya Perks resolves this cleanly by cryptographically erasing personal identifiers (name, mobile, email) into irreversible pseudonymous tokens while leaving aggregate financial ledger math intact.',
        ],
      },
    ],
    takeaways: [
      'Capture unbundled, timestamped consent via WhatsApp QR or checkout checkboxes',
      'Enforce pre-approved TRAI DLT templates across all Indian promotional & OTP SMS routes',
      'Pseudonymize PII on erasure requests so statutory double-entry finance audits stay valid',
    ],
  },
  {
    slug: 'ind-as-115-breakage-accounting',
    category: 'Strategy',
    date: '05 Nov 2026',
    readTime: '6 min read',
    title: 'Why Finance & Marketing Disagree on Loyalty Liability (And How to Fix It)',
    excerpt:
      'Bridging Ind AS 115 / IFRS 15 deferred revenue accounting with real-time campaign agility using one shared ledger.',
    image: '/images/blog/card-top-right.jpg',
    author: {
      name: 'Zil Mehta',
      role: 'Sr. Product Operations Lead',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Partners with enterprise finance controllers and retention teams to standardize FIFO breakage reporting and campaign holdouts.',
    },
    tags: ['Ind AS 115', 'IFRS 15', 'Breakage Modeling', 'Finance Alignment'],
    sections: [
      {
        id: 'single-ledger',
        heading: '1. One Append-Only Truth for Both Teams',
        paragraphs: [
          'In most mid-to-large retailers, marketing evaluates loyalty using an export from a campaign tool while finance books quarterly point provisions from ERP summaries. Because voids, expiry write-backs, and partner settlements land asynchronously, those numbers rarely agree.',
          'When both teams inspect the same append-only double-entry ledger, every point issued immediately maps to deferred liability, redeemed cost, or recognized breakage revenue.',
        ],
      },
      {
        id: 'holdout-proof',
        heading: '2. Proving Incrementality with 5% Holdouts',
        paragraphs: [
          'Finance leaders rightly ask whether a 2x weekend point multiplier actually generated net-new orders or simply gave margin away to customers who were already buying.',
          'Built-in 5%–10% randomized control holdout cohorts measure true incremental basket lift automatically so CFOs and CMOs evaluate ROI using verified control data.',
        ],
      },
    ],
    takeaways: [
      'Reconcile deferred point revenue daily with Ind AS 115 / IFRS 15 ready FIFO ledgers',
      'Prove true campaign margin lift using automated 5%–10% control holdout groups',
      'Separate funded partner liability cleanly from first-party promotional budgets',
    ],
  },
  {
    slug: 'whatsapp-qr-tier2-adoption',
    category: 'Product Updates',
    date: '28 Oct 2026',
    readTime: '5 min read',
    title: 'Shipping v2.4: WhatsApp QR Enrolment & Multi-Currency Clearinghouse',
    excerpt:
      'What shipped this month: instant billing-counter WhatsApp onboarding, Apple Wallet bundling, and INR/AUD/NZD settlement.',
    image: '/images/blog/card-bottom-right.jpg',
    author: {
      name: 'Shivani Mehta',
      role: 'Technical Project Manager',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Coordinates platform releases, regional clearinghouse launches, and enterprise rollout schedules at Punya Perks.',
    },
    tags: ['Release v2.4', 'WhatsApp QR', 'Apple Wallet', 'Multi-Currency'],
    sections: [
      {
        id: 'wa-qr',
        heading: '1. 10-Second WhatsApp Counter Enrolment',
        paragraphs: [
          'Retail shoppers rarely pause at checkout to download a 45 MB native app, verify email, and fill out an onboarding wizard. With Release v2.4, stores place a dynamic countertop QR code tied to the terminal session.',
          'Shoppers scan once, tap Send on the pre-filled WhatsApp message, and immediately receive their digital membership card, available points balance, and redeemable voucher list inside WhatsApp.',
        ],
      },
      {
        id: 'clearinghouse',
        heading: '2. Cross-Border Coalition Settlement',
        paragraphs: [
          'Enterprise hospitality and retail groups operating across India, Australia, New Zealand, and the UAE can now define regional base currencies and automated T+1 bilateral coalition clearing rates.',
          'Every earn and burn entry preserves original FX rates alongside net merchant settlement statements ready for SAP or Tally import.',
        ],
      },
    ],
    takeaways: [
      '85%+ message read rates on automated WhatsApp transaction receipts and balance alerts',
      'Zero app-download friction at physical billing counters across tier-1 and tier-2 stores',
      'Multi-currency bilateral coalition settlement across INR, AUD, NZD, and AED',
    ],
  },
];

export const EXTRA_RESOURCE_ARTICLES: BlogArticle[] = [
  {
    slug: 'anz-benchmarks-2026',
    category: 'Benchmark',
    date: '18 Nov 2026',
    readTime: '6 min read',
    title: 'Loyalty Benchmarks 2026: Australia & New Zealand Retail',
    excerpt:
      'Enrolment rates, active 90-day member participation, redemption velocity, and breakage norms across ANZ retail and QSR programmes.',
    image: '/images/blog/card-top-right.jpg',
    author: {
      name: 'Zil Mehta',
      role: 'Sr. Product Operations Lead',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Leads regional benchmarking research and lifecycle retention modeling across India and ANZ deployments.',
    },
    tags: ['ANZ Benchmarks', 'Australia', 'New Zealand', 'Breakage'],
    sections: [
      {
        id: 'anz-enrolment',
        heading: '1. Counter Enrolment & Active 90-Day Participation',
        paragraphs: [
          'Across 40+ multi-location ANZ retail and hospitality networks analyzed in 2026, programmes offering barcode-first digital passes achieved a median 64% checkout enrolment rate—nearly double email-only sign-up forms.',
          'Active 90-day participation stays healthiest (52%+) when members reach their first tangible reward inside three visits rather than saving toward distant annual thresholds.',
        ],
      },
      {
        id: 'anz-privacy',
        heading: '2. Privacy Act 1988 & Privacy Act 2020 Readiness',
        paragraphs: [
          'Australian and New Zealand shoppers increasingly scrutinize unnecessary date-of-birth and address fields at store counters. Progressive profiling—starting strictly with mobile or email—lifted completed enrolments by 31%.',
        ],
      },
    ],
    takeaways: [
      'Target first-reward reachability within 2–3 average customer visits',
      'Pair Apple/Google Wallet passes with Lightspeed & Square counter barcodes',
      'Collect progressive profile fields post-enrolment to minimize counter drop-off',
    ],
  },
  {
    slug: 'punya-perks-vs-competitors',
    category: 'Comparison',
    date: '12 Nov 2026',
    readTime: '10 min read',
    title: 'Punya Perks vs Capillary, Xoxoday & EasyRewardz',
    excerpt:
      'An architectural, deployment-speed, and total cost of ownership comparison for modern Indian & ANZ enterprises.',
    image: '/images/blog/blog-linear.jpg',
    author: {
      name: 'Sohail Khan',
      role: 'Head of Strategy & Growth',
      avatar: '/images/blog/author-aryan.jpg',
      bio: 'Advises retail, banking, and consumer brands on vendor selection and TCO analysis.',
    },
    tags: ['Vendor Comparison', 'TCO', 'Double-Entry Ledger', '4-Week Launch'],
    sections: [
      {
        id: 'architecture-diff',
        heading: '1. Append-Only Double-Entry Ledger vs Mutable Point Counters',
        paragraphs: [
          'Many legacy suites treat loyalty balances as a single mutable counter column. When reversals, partial returns, or manual agent credits collide, marketing dashboards drift out of sync with statutory finance books.',
          'Punya Perks stores every earn, hold, expiry lot, and burn as immutable double-entry postings from day one—giving CFOs audit-grade reconciliation out of the box.',
        ],
      },
      {
        id: 'speed-to-launch',
        heading: '2. 4-Week Turnkey Cutover vs 6-Month Custom Services',
        paragraphs: [
          'Pre-built Pine Labs, Lightspeed, Petpooja, Shopify Plus, Magento, and WhatsApp Business Cloud adapters allow mid-market and enterprise brands to go live in 4 weeks without large system-integrator retainers.',
        ],
      },
    ],
    takeaways: [
      'Launch omnichannel store + web loyalty in 4 weeks using pre-built POS & WhatsApp adapters',
      'Zero custom SI bloat or forced multi-year bundled messaging markups',
      'Native Ind AS 115 / IFRS 15 financial journals and DPDP consent tracking included',
    ],
  },
];

export const ALL_PUBLICATIONS: BlogArticle[] = [
  ...BLOG_ARTICLES,
  ...EXTRA_RESOURCE_ARTICLES,
];

export function getBlogArticleBySlug(slug?: string): BlogArticle | undefined {
  if (!slug) return undefined;
  return ALL_PUBLICATIONS.find((article) => article.slug === slug);
}
