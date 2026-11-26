import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  Search,
  ArrowRight,
  X,
  Clock,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Download,
  FileText,
  Share2,
  Check,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface ResourceItem {
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
    highlights: string[];
  };
}

export const ResourcesPage: React.FC = () => {
  const { pathname } = useLocation();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<ResourceItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const isGuidesRoute = pathname.includes('/guides');

  const pageMeta = isGuidesRoute
    ? {
        pretitle: 'LEARN & IMPLEMENT',
        title: 'Guides & eBooks',
        description:
          'In-depth operational playbooks, ledger architecture whitepapers, and compliance roadmaps for retail and fintech leaders.',
      }
    : {
        pretitle: 'RESOURCES & KNOWLEDGE HUB',
        title: 'Enterprise Loyalty Knowledge, Playbooks & Tools',
        description:
          'In-depth playbooks, regulatory compliance frameworks, retail benchmarks, and architectural blueprints for high-velocity customer loyalty programs.',
      };

  const featuredResource: ResourceItem = {
    id: 'enterprise-loyalty-ledger-blueprint',
    tag: 'Featured Playbook',
    title: 'The Enterprise Loyalty Ledger Blueprint: Architecture & Implementation',
    text: 'A comprehensive 48-page executive blueprint examining where append-only ledger architectures, double-entry reconciliation, and sub-120ms POS syncing create real financial leverage across multi-store retail and banking loyalty networks.',
    meta: '48 Pages · Executive PDF · Published November 2026',
    image: '/images/blog/blog-featured.jpg',
    downloadText: 'Download Free Playbook',
    author: {
      name: 'Keyur Mehta',
      role: 'Managing Director & Founder',
      initials: 'KM',
    },
    summary:
      'Double-entry cryptographic ledger reconciliation guarantees mathematical balance integrity across tens of thousands of stores, eliminating loyalty fraud and unverified points liability.',
    content: {
      heading1: 'The Financial Liability Risk of Mutable SQL Loyalty Records',
      para1:
        'When customer reward balances are stored as mutable database fields, race conditions during high-volume peak periods (e.g., festive shopping days) frequently lead to phantom points or terminal timeouts. In contrast, Punya Perks models every transaction as an immutable double-entry ledger event.',
      heading2: 'Deterministic Event Playback & Sub-120ms POS Syncing',
      para2:
        'By utilizing event sourcing with lightweight local POS edge proxies, customer balances and discount entitlements are verified in under 120ms, ensuring cashiers never face queue bottlenecks or dropped network transactions.',
      highlights: [
        'Immutable double-entry ledger eliminates balance-sheet liability discrepancies',
        'Sub-120ms response time at physical POS cash registers guaranteed by SLA',
        'Built-in support for RBI Gift/PPI, DPDP Act 2023, and Australian Privacy Act norms',
        'Ready-to-deploy connectors for SAP, Oracle Retail, Shopify Plus, and PineLabs',
      ],
    },
  };

  const resourceItems: ResourceItem[] = [
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
      tag: 'Architecture',
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
          'Native integration connectors for Shopify, Magento, SAP, Oracle, and PineLabs',
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
      text: 'Step-by-step field guide to transitioning legacy billing software (Shopify, SAP, PineLabs) to real-time event-sourced loyalty without missing a single counter transaction.',
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
      image: '/images/platform-console-mockup.png',
      downloadText: 'Access Free Estimator',
      actionLabel: 'Access Tool',
      author: {
        name: 'Keyur Mehta',
        role: 'Managing Director & Founder',
        initials: 'KM',
      },
      summary:
        'Accurately model expired points recovery and breakage provisions across multi-year loyalty contracts with IFRS 15 / Ind AS 115 compliant calculations.',
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
      tag: 'Migration',
      title: 'Legacy Platform Cutover Checklist: Capillary, Xoxoday & EasyRewardz',
      text: 'Data validation protocols, historical point balance playback, dry-run reconciliations, and staff training SOPs for a flawless zero-discrepancy cutover.',
      meta: '16 pages · Migration Toolkit',
      image: '/images/casestudy-console-mockup.png',
      downloadText: 'Download Migration Kit',
      actionLabel: 'Read Checklist',
      author: {
        name: 'Sohail Khan',
        role: 'Head of Strategy & Growth',
        initials: 'SK',
      },
      summary:
        'A comprehensive step-by-step checklist ensuring 100% customer balance preservation and zero POS downtime when migrating away from legacy monoliths.',
      content: {
        heading1: 'Eliminating the Downtime Window During Platform Migration',
        para1:
          'Traditional platform migrations require freezing member sign-ups and point redemptions for 24-48 hours. With Punya Perks dual-write event connectors, both old and new systems run synchronously until final cutover sign-off.',
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

  // Derive unique tags from items
  const tags = ['All', ...Array.from(new Set(resourceItems.map((item) => item.tag)))];

  // Filtering Logic
  const filteredItems = resourceItems.filter((item) => {
    const matchesTag = selectedTag === 'All' || item.tag === selectedTag;
    const matchesSearch =
      `${item.title} ${item.text} ${item.tag}`.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleOpenModal = (item: ResourceItem) => {
    setActiveItem(item);
    setDownloadSuccess(false);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <MainLayout>
      {/* 1. Hero Section with Inner Hero Background */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-12 pb-20 text-center overflow-hidden font-body bg-cover bg-bottom bg-no-repeat text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-[#847C75] mb-4">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#B5651A]/60" />
            <Link to="/resources" className="hover:text-[#B5651A] transition-colors">
              Resources
            </Link>
            <ChevronRight size={12} className="text-[#B5651A]/60" />
            <span className="text-[#B5651A] font-bold">
              {isGuidesRoute ? 'Guides & Playbooks' : 'Knowledge Hub'}
            </span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF0E1] border border-[#F6DECA] text-[#B5651A] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles size={13} className="text-[#B5651A]" />
            <span>{pageMeta.pretitle}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#17140F] tracking-tight mb-4 leading-tight">
            {pageMeta.title}
          </h1>

          <p className="text-sm sm:text-base text-[#5B534C] max-w-2xl mx-auto leading-relaxed">
            {pageMeta.description}
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="w-full py-12 sm:py-16 bg-white font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Search Bar & Tag Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EBDFC6]">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#847C75] pointer-events-none"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, topics, or keywords..."
                className="w-full h-11 pl-11 pr-10 rounded-full border border-[#EBDFC6] bg-[#FAF5ED]/50 text-sm text-[#17140F] placeholder-[#847C75] outline-none focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/15 focus:bg-white transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#847C75] hover:text-[#17140F] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category / Tag Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
              {tags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#B5651A] text-white shadow-xs font-bold'
                        : 'bg-[#FAF5ED] text-[#5B534C] hover:bg-[#F2E8D8] hover:text-[#17140F] border border-[#EBDFC6]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Featured Spotlight Card (Sqalible 12-Column Grid Layout) */}
          {selectedTag === 'All' && !searchQuery.trim() && (
            <div className="mb-14 overflow-hidden rounded-3xl border border-[#EBDFC6] hover:border-[#B5651A]/60 bg-white text-[#17140F] shadow-xs transition-all grid md:grid-cols-12 items-stretch group">
              {/* Left Column (7 Cols) */}
              <div className="p-8 md:p-10 lg:p-12 md:col-span-7 flex flex-col justify-between h-full bg-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF0E1] border border-[#F6DECA] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-4">
                    <Sparkles size={13} className="text-[#B5651A]" />
                    {featuredResource.tag}
                  </span>

                  <h3
                    onClick={() => handleOpenModal(featuredResource)}
                    className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#17140F] leading-tight cursor-pointer group-hover:text-[#B5651A] transition-colors"
                  >
                    {featuredResource.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#5B534C] leading-relaxed line-clamp-3 md:line-clamp-4">
                    {featuredResource.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#EBDFC6]/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(featuredResource)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-6 py-3 text-xs font-bold text-white shadow-xs transition-all hover:scale-105 cursor-pointer"
                    >
                      <Download size={14} />
                      <span>{featuredResource.downloadText || 'Download Free Playbook'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(featuredResource)}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-bold text-[#17140F] hover:text-[#B5651A] transition-colors cursor-pointer"
                    >
                      <span>Preview</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                  <span className="text-xs text-[#847C75] font-mono">
                    {featuredResource.meta}
                  </span>
                </div>
              </div>

              {/* Right Column (5 Cols) - High-res Preview Image */}
              <div
                onClick={() => handleOpenModal(featuredResource)}
                className="md:col-span-5 h-64 md:h-full relative overflow-hidden bg-[#FAF5ED] border-t md:border-t-0 md:border-l border-[#EBDFC6] cursor-pointer"
              >
                <img
                  src={featuredResource.image}
                  alt={featuredResource.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-mono font-bold text-[#17140F] border border-[#EBDFC6]">
                  Click to Read
                </div>
              </div>
            </div>
          )}

          {/* 4. Section Heading for Grid */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#17140F]">
                {selectedTag === 'All' ? 'All Guides & Resources' : `${selectedTag} Resources`}
              </h2>
              <p className="text-xs text-[#847C75] mt-1 font-mono">
                Showing {filteredItems.length} curated playbooks and publications
              </p>
            </div>
          </div>

          {/* 5. Resource Cards 3-Column Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenModal(item)}
                  className="bg-white rounded-3xl border border-[#EBDFC6] hover:border-[#B5651A] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Thumbnail Image Container */}
                    <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-[#FAF5ED] border-b border-[#EBDFC6]/60">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA] text-[10px] shadow-2xs">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-[#847C75] mb-2 font-mono">
                        <Clock size={12} className="text-[#B5651A]" />
                        <span>{item.meta}</span>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors line-clamp-2 leading-snug mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#5B534C] line-clamp-2 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 mt-2">
                    <div className="pt-4 border-t border-[#EBDFC6]/80 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-[#FEF0E1] border border-[#F6DECA] text-[#B5651A] font-bold text-xs flex items-center justify-center font-display shrink-0">
                          {item.author.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#17140F] leading-tight truncate">
                            {item.author.name}
                          </p>
                          <p className="text-[10px] text-[#847C75] leading-tight mt-0.5 truncate">
                            {item.author.role}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#17140F] bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#17140F] group-hover:bg-[#B5651A] group-hover:border-[#B5651A] group-hover:text-white transition-all duration-200 shrink-0">
                        <span>{item.actionLabel || 'Read'}</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* 6. Empty State */
            <div className="rounded-3xl border border-[#EBDFC6] bg-[#FAF5ED] p-12 text-center max-w-lg mx-auto">
              <BookOpen size={36} className="mx-auto text-[#B5651A] mb-3 opacity-80" />
              <h3 className="text-lg font-display font-bold text-[#17140F] mb-1">
                No matching resources found
              </h3>
              <p className="text-xs text-[#5B534C] mb-6">
                We couldn&apos;t find any publications matching “{searchQuery}” in the {selectedTag} category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('All');
                }}
                className="rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white text-xs font-bold px-5 py-2.5 transition-colors cursor-pointer"
              >
                Clear Filters & Show All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. Interactive Reader & Download Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-[#0B060F]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-[#EBDFC6] shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto font-body">
            {/* Modal Header */}
            <div className="bg-[#1C1610] text-white p-8 sm:p-12 relative border-b border-[#3D3225]">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute right-6 top-6 p-2 rounded-full bg-white/10 hover:bg-[#B5651A] text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="max-w-2xl space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FEF0E1]/20 text-[#E0AE7B] border border-[#E0AE7B]/30 inline-block">
                  {activeItem.tag}
                </span>

                <h2 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                  {activeItem.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#D8CFBF] pt-2 font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#B5651A] text-white font-bold text-xs flex items-center justify-center font-display">
                      {activeItem.author.initials}
                    </div>
                    <span className="text-white font-medium">{activeItem.author.name}</span>
                  </div>
                  <span>·</span>
                  <span>{activeItem.meta}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Article Body */}
              <div className="lg:col-span-8 space-y-6 text-sm text-[#17140F] leading-relaxed">
                <p className="text-base font-medium text-[#5B534C] leading-relaxed">
                  {activeItem.text}
                </p>

                {/* Executive Summary Callout Box */}
                <div className="p-6 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] block">
                    Executive Summary
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5B534C] leading-relaxed">
                    {activeItem.summary}
                  </p>
                </div>

                {/* Section 1 */}
                <h3 className="font-display font-bold text-xl text-[#17140F] pt-2">
                  {activeItem.content.heading1}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {activeItem.content.para1}
                </p>

                {/* Section 2 */}
                <h3 className="font-display font-bold text-xl text-[#17140F] pt-2">
                  {activeItem.content.heading2}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {activeItem.content.para2}
                </p>
              </div>

              {/* Right Column: Actions & Highlights */}
              <div className="lg:col-span-4 space-y-6">
                {/* Download PDF Box */}
                <div className="p-6 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A]">
                    <FileText size={16} />
                    <span>Resource Asset</span>
                  </div>
                  <p className="text-xs text-[#5B534C] leading-relaxed">
                    Download the complete publication including diagrams, code samples, and regulatory checklists.
                  </p>
                  <button
                    type="button"
                    onClick={handleDownload}
                    className={`w-full py-3 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      downloadSuccess
                        ? 'bg-[#1B8756]'
                        : 'bg-[#B5651A] hover:bg-[#9a5413] shadow-xs'
                    }`}
                  >
                    {downloadSuccess ? (
                      <>
                        <Check size={16} />
                        <span>Downloaded PDF</span>
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        <span>{activeItem.downloadText || 'Download Free PDF'}</span>
                      </>
                    )}
                  </button>
                  {downloadSuccess && (
                    <p className="text-[11px] text-[#1B8756] text-center font-medium animate-fade-in">
                      ✓ PDF package prepared successfully!
                    </p>
                  )}
                </div>

                {/* Highlights Checklist */}
                <div className="p-6 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] block">
                    Key Highlights
                  </span>
                  <div className="space-y-2.5">
                    {activeItem.content.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#17140F]">
                        <CheckCircle2 size={14} className="text-[#1B8756] shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deploy Punya Perks Box */}
                <div className="p-6 rounded-2xl bg-[#1C1610] text-white border border-[#3D3225] space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0AE7B] block">
                    Deploy Punya Perks
                  </span>
                  <p className="text-xs text-[#D8CFBF] leading-relaxed">
                    Deploy modern append-only loyalty ledgers across your retail or banking networks in 4 weeks.
                  </p>
                  <Link
                    to="/demo"
                    onClick={() => setActiveItem(null)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Book a platform demo</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. Closing CTA */}
      <PageCta
        title="Join forward-thinking brands operating on Punya Perks."
        subtitle="ENTERPRISE LOYALTY INFRASTRUCTURE"
        description="Whether you run 10 physical stores or 10,000 POS terminals nationwide, discover how Punya Perks unifies your loyalty stack."
        buttonText="Book a platform walkthrough"
        buttonHref="/demo"
        secondaryText="Explore platform docs"
        secondaryHref="/platform"
      />
    </MainLayout>
  );
};

export default ResourcesPage;
