import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { Link } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  X,
  Clock,
  Calendar,
  Tag,
  Share2,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Compliance',
    'Benchmarks',
    'Architecture',
    'Case Studies',
    'Integrations',
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'compliance-checklist-india',
      title: 'The Loyalty Compliance Checklist for India: DPDP, TRAI DLT & RBI',
      category: 'Compliance',
      readTime: '8 min read',
      date: 'Nov 20, 2026',
      excerpt:
        'What retail enterprises and banks must have in place before issuing cash-convertible points, running referral bonuses, or sending promotional WhatsApp messages under the DPDP Act 2023.',
      image: '/images/blog/blog-api.jpg',
      author: {
        name: 'Keyur Mehta',
        role: 'Managing Director & Founder',
        initials: 'KM',
      },
      summary:
        'Automatic ledger validation and granular member consent capture ensure 100% DPDP Act compliance while reducing customer privacy disputes to zero.',
      content: {
        heading1: 'The Strict Regulatory Shift in Indian Customer Loyalty',
        para1:
          'Under the Digital Personal Data Protection (DPDP) Act 2023 and updated TRAI messaging norms, customer consent for loyalty communications can no longer be bundled with standard POS billing terms. Retailers must maintain verifiable, timestamped consent artifacts for every mobile number enrolled.',
        heading2: 'Managing Financial Liability Under RBI Gift Instrument Directives',
        para2:
          'When loyalty points can be redeemed against gift cards, utility payments, or third-party partner products, the issuance operates under strict Prepaid Payment Instrument (PPI) guardrails. Punya Perks ensures unredeemed point liabilities are tracked down to the exact rupee with double-entry cryptographic reconciliation.',
        highlights: [
          'Granular opt-in consent captured via WhatsApp OTP and POS terminal e-sign',
          'Automated points liability reserve balance calculated at exact 2% breakage',
          'Strict database-level tenant isolation with primary hosting in AWS Mumbai / Hyderabad',
        ],
      },
    },
    {
      id: 'loyalty-benchmarks-apac-2026',
      title: 'Loyalty Benchmarks 2026: Australia, New Zealand & APAC Retail',
      category: 'Benchmarks',
      readTime: '6 min read',
      date: 'Nov 14, 2026',
      excerpt:
        'Comprehensive analysis of customer enrolment velocity, active member ratios, points burn velocity, and breakage reserves analyzed across 50M+ verified APAC transactions.',
      image: '/images/blog/blog-featured.jpg',
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
      id: 'architecture-deep-dive-comparison',
      title: 'Punya Perks vs Capillary, Xoxoday & EasyRewardz: Architecture Deep Dive',
      category: 'Architecture',
      readTime: '10 min read',
      date: 'Nov 08, 2026',
      excerpt:
        'An objective architectural breakdown comparing legacy centralized database schemas against append-only cryptographic transaction ledgers with sub-120ms POS syncing.',
      image: '/images/blog/blog-linear.jpg',
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
          'Legacy platforms rely on mutable relational database records where customer balances are updated via direct SQL write queries. In high-concurrency peak sales periods (such as Diwali or Black Friday), simultaneous earn and burn calls lead to race conditions, phantom points, or terminal timeouts.',
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
      id: 'case-study-national-fashion',
      title: 'How a National Fashion Brand Unified 140 Physical Stores in 4 Weeks',
      category: 'Case Studies',
      readTime: '5 min read',
      date: 'Oct 28, 2026',
      excerpt:
        'Merging disparate legacy billing terminals and Shopify storefront into an append-only double-entry ledger with zero transaction downtime and complete balance preservation.',
      image: '/images/blog/card-bottom-right.jpg',
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
      id: 'pos-latency-throughput-analysis',
      title: 'Why Sub-120ms Point-of-Sale Validation Decides Cash Counter Throughput',
      category: 'Architecture',
      readTime: '7 min read',
      date: 'Oct 19, 2026',
      excerpt:
        'How retail cash counter queues fail during holiday peak sales when loyalty lookups perform slow cloud roundtrips, and how local edge caches resolve it.',
      image: '/images/blog/card-left.jpg',
      author: {
        name: 'Shivani Mehta',
        role: 'Technical Project Manager',
        initials: 'SM',
      },
      summary:
        'Local edge caching and optimistic offline validation ensure cashiers can verify points and apply discounts even during regional internet outages.',
      content: {
        heading1: 'The Cost of Counter Delays During Festive Footfall Surges',
        para1:
          'During peak shopping festivals, a delay of just 3 seconds per customer at cash checkout translates to 45 additional minutes of queue wait times over an evening shift. Slow cloud round-trips for loyalty point authentication are the single biggest cause of billing register bottlenecks.',
        heading2: 'Edge Caching with Optimistic Offline Queueing',
        para2:
          'Punya Perks employs a distributed edge broker on local store servers that caches active tier rules and member tokens locally. Redemptions are validated instantly and synchronized asynchronously to the cloud master ledger.',
        highlights: [
          'Sub-120ms round-trip latency at physical cash registers guaranteed',
          'Offline mode ensures continuous loyalty operation during internet drops',
          'Automatic anti-fraud duplicate burn prevention with cryptographic tokens',
        ],
      },
    },
    {
      id: 'whatsapp-commerce-otp-redemption',
      title: 'WhatsApp Commerce & Interactive OTP Redemption for Tier-2/3 Retail',
      category: 'Integrations',
      readTime: '6 min read',
      date: 'Oct 11, 2026',
      excerpt:
        'Driving 42% higher coupon burn rates via verified WhatsApp Business API templates without requiring shoppers to download a dedicated mobile app.',
      image: '/images/workflow/step-connect.jpg',
      author: {
        name: 'Himali Jaiswal',
        role: 'Lead – Account Management',
        initials: 'HJ',
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
  ];

  // Filtering Logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredPost = blogPosts[0];
  const secondaryFeatured = [blogPosts[1], blogPosts[2]];

  return (
    <MainLayout>
      {/* 1. Hero Section with Inner Hero Background */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-12 pb-20 text-center overflow-hidden font-body bg-cover bg-bottom bg-no-repeat text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: "#FAF3E8",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3">
            KNOWLEDGE BASE & INDUSTRY BENCHMARKS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-[#17140F] tracking-tight mb-4">
            Blogs & Insights
          </h1>
          <p className="text-sm sm:text-base text-[#5B534C] max-w-2xl mx-auto mb-8 leading-relaxed">
            Stay ahead of the curve with the latest insights, benchmarks, and architecture reviews in customer loyalty, transaction ledgers, and privacy-first commerce.
          </p>

          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="w-5 h-5 text-[#847C75] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title, category, or keyword..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#EBDFC6] text-[#17140F] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#B5651A] focus:ring-2 focus:ring-[#B5651A]/10 shadow-md transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#B5651A] text-white font-bold shadow-xs'
                      : 'bg-white/80 hover:bg-white text-[#5B534C] hover:text-[#17140F] border border-[#EBDFC6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Highlights / Recent Blog Posts Section (Deskmerit 12-Col Grid) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-1">
            HIGHLIGHTS
          </div>
          <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#17140F]">
            Recent blog posts
          </h2>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Main Featured Article (7 Cols) */}
          <div
            onClick={() => setActiveArticle(featuredPost)}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#EBDFC6] hover:border-[#B5651A] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-[#FAF5ED] border border-[#EBDFC6]/60">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-[#847C75] mb-3 font-mono">
                <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA]">
                  {featuredPost.category}
                </span>
                <span>·</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-tight mb-3">
                {featuredPost.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EBDFC6]/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FEF0E1] border border-[#F6DECA] text-[#B5651A] font-bold text-xs flex items-center justify-center font-display">
                  {featuredPost.author.initials}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#17140F] block">
                    {featuredPost.author.name}
                  </span>
                  <span className="text-[11px] text-[#847C75]">
                    {featuredPost.author.role}
                  </span>
                </div>
              </div>

              <span className="text-xs font-semibold text-[#B5651A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>

          {/* Secondary 2 Featured Articles (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryFeatured.map((post) => (
              <div
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="bg-white rounded-3xl p-6 border border-[#EBDFC6] hover:border-[#B5651A] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group flex-1"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-xs text-[#847C75] mb-2 font-mono">
                    <span className="font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA] text-[10px]">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span className="text-[11px]">{post.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug mb-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-[#5B534C] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#EBDFC6]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FEF0E1] border border-[#F6DECA] text-[#B5651A] font-bold text-[10px] flex items-center justify-center font-display">
                      {post.author.initials}
                    </div>
                    <span className="text-xs font-medium text-[#17140F]">
                      {post.author.name}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#B5651A] flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. All Blog Posts Section (Deskmerit 3-Column Grid) */}
        <div>
          <div className="mb-10">
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#17140F]">
              All Blog Posts
            </h2>
            <p className="text-xs text-[#847C75] mt-1 font-mono">
              Showing {filteredPosts.length} articles in {selectedCategory}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="bg-white rounded-3xl p-6 border border-[#EBDFC6] hover:border-[#B5651A] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-[#FAF5ED] border border-[#EBDFC6]/60">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#847C75] mb-2 font-mono">
                    <span className="font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA] text-[9px]">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug mb-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5B534C] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBDFC6]/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FEF0E1] border border-[#F6DECA] text-[#B5651A] font-bold text-[10px] flex items-center justify-center font-display">
                      {post.author.initials}
                    </div>
                    <span className="text-xs font-medium text-[#17140F]">
                      {post.author.name}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#B5651A] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Article Modal (Deskmerit Modal Reader) */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-[#0B060F]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-[#EBDFC6] shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-[#1C1610] text-white p-8 sm:p-12 relative border-b border-[#3D3225]">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute right-6 top-6 p-2 rounded-full bg-white/10 hover:bg-[#B5651A] text-white transition-colors cursor-pointer"
                aria-label="Close article modal"
              >
                <X size={20} />
              </button>

              <div className="max-w-2xl space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FEF0E1]/20 text-[#E0AE7B] border border-[#E0AE7B]/30 inline-block">
                  {activeArticle.category}
                </span>
                <h2 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#D8CFBF] pt-2 font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#B5651A] text-white font-bold text-xs flex items-center justify-center font-display">
                      {activeArticle.author.initials}
                    </div>
                    <span className="text-white font-medium">
                      {activeArticle.author.name}
                    </span>
                  </div>
                  <span>·</span>
                  <span>{activeArticle.date}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-6 text-sm text-[#17140F] leading-relaxed">
                <p className="text-base font-medium text-[#5B534C] leading-relaxed">
                  {activeArticle.excerpt}
                </p>

                {/* Executive Summary Callout Box */}
                <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] block">
                    Executive Summary
                  </span>
                  <p className="text-xs sm:text-[13px] text-[#5B534C] leading-relaxed">
                    {activeArticle.summary}
                  </p>
                </div>

                {/* Article Section 1 */}
                <h3 className="font-display font-bold text-xl text-[#17140F] pt-2">
                  {activeArticle.content.heading1}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {activeArticle.content.para1}
                </p>

                {/* Article Section 2 */}
                <h3 className="font-display font-bold text-xl text-[#17140F] pt-2">
                  {activeArticle.content.heading2}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                  {activeArticle.content.para2}
                </p>
              </div>

              {/* Modal Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                {/* Article Highlights Box */}
                <div className="p-6 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] block">
                    Article Highlights
                  </span>
                  <div className="space-y-2.5">
                    {activeArticle.content.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#17140F]">
                        <CheckCircle2 size={14} className="text-[#1B8756] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ready to Deploy CTA Box */}
                <div className="p-6 rounded-2xl bg-[#1C1610] text-white border border-[#3D3225] space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E0AE7B] block">
                    Deploy Punya Perks
                  </span>
                  <p className="text-xs text-[#D8CFBF] leading-relaxed">
                    Deploy modern append-only loyalty ledgers across your retail or banking networks in 4 weeks.
                  </p>
                  <Link
                    to="/demo"
                    onClick={() => setActiveArticle(null)}
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

      {/* 5. Closing CTA */}
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
