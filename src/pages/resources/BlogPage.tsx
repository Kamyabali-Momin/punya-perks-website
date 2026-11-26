import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  Search,
  ArrowRight,
  Clock,
  ChevronRight,
  CheckCircle2,
  X,
  BookOpen,
  Mail,
} from 'lucide-react';

interface BlogArticle {
  slug: string;
  category: 'Product Updates' | 'Engineering' | 'Compliance' | 'UI/UX Design' | 'Strategy';
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: Array<{
    id: string;
    heading: string;
    body: string;
  }>;
  takeaways: string[];
}

const BLOG_ARTICLES: BlogArticle[] = [
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
    },
    sections: [
      {
        id: 'honest-balances',
        heading: '1. Show Available, Pending, and Reserved Points Separately',
        body: 'Nothing erodes trust faster than displaying 3,850 points when 350 points are held in checkout or pending a return window. Splitting balances clearly on the home card reduces support tickets by over 40%.',
      },
      {
        id: 'tier-adaptation',
        heading: '2. Adaptive Tier Visual Identity',
        body: 'As members progress from Silver to Gold and Platinum, the interface itself should reward progression—subtle card guilloche textures, accent shifts, and priority perk trays reinforce status without noisy popups.',
      },
      {
        id: 'one-tap-burn',
        heading: '3. Frictionless Checkout & Counter QR Flows',
        body: 'Whether a customer is standing at a retail POS counter or checking out on mobile web, barcode lookup and voucher generation must complete in a single tap with instant confirmation.',
      },
    ],
    takeaways: [
      'Separate available, pending, reserved, and expiring balances clearly',
      'Tie UI card aesthetics directly to live Silver / Gold / Platinum tier state',
      'Keep in-store barcode and WhatsApp pass access one tap from home',
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
    },
    sections: [
      {
        id: 'dual-write',
        heading: '1. Shadow Dual-Write Ingestion Before Cutover',
        body: 'Instead of taking retail counters offline for 24 hours, Punya Perks ingests live POS and e-commerce transactions alongside your legacy vendor for 7 days, flagging any drift before traffic switches.',
      },
      {
        id: 'lot-replay',
        heading: '2. Preserving FIFO Expiry Lots & Pending Holds',
        body: 'Replaying historical earn and burn events rather than importing a single flat number guarantees that upcoming expiry dates and return-window holds remain intact after migration.',
      },
      {
        id: 'finance-signoff',
        heading: '3. Cryptographic Balance Sign-Off',
        body: 'Finance teams receive an automated pre-cutover reconciliation report matching every rupee, AUD, or NZD of unredeemed liability to the cent.',
      },
    ],
    takeaways: [
      'Zero POS downtime during Sunday night cutover windows',
      'Full FIFO expiry lot preservation across migrated accounts',
      'Automated finance sign-off pack before DNS/webhook switch',
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
    },
    sections: [
      {
        id: 'two-phase',
        heading: '1. Two-Phase Quote & Commit Protocol',
        body: 'Checkout payments fail or time out. Reserving points for 15 minutes with /v1/redemptions/quote and finalizing via /v1/redemptions/commit eliminates orphaned point deductions forever.',
      },
      {
        id: 'idempotency',
        heading: '2. Deterministic Idempotency Keys',
        body: 'Every POS retry or flaky mobile network request carries an idempotency key so duplicate network calls never double-credit or double-burn customer balances.',
      },
      {
        id: 'webhooks',
        heading: '3. Replayable HMAC-SHA256 Webhooks',
        body: 'Subscribe downstream CRM, ERP, and WhatsApp notification workers to signed event streams with automatic exponential backoff and dead-letter replay.',
      },
    ],
    takeaways: [
      'Two-phase quote/commit prevents lost points on abandoned carts',
      'Idempotency keys make POS offline sync completely safe',
      'Sub-120ms p99 quote latency during peak festive volume',
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
    },
    sections: [
      {
        id: 'explicit-consent',
        heading: '1. Unbundled, Purpose-Specific Consent',
        body: 'Under India’s DPDP Act, collecting a phone number for billing cannot automatically enroll a shopper into promotional loyalty broadcasts. Each purpose requires a clear, timestamped consent artifact.',
      },
      {
        id: 'dsr-automation',
        heading: '2. Right-to-Erasure Without Breaking Financial Audits',
        body: 'Punya Perks pseudonymizes personal identifiers on erasure requests while preserving anonymized double-entry ledger totals so statutory financial audits remain intact.',
      },
    ],
    takeaways: [
      'Capture unbundled consent via WhatsApp QR or POS prompt',
      'Use pre-approved TRAI DLT templates for all Indian SMS traffic',
      'Pseudonymize PII on DSR deletion while keeping ledger math intact',
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
    },
    sections: [
      {
        id: 'single-ledger',
        heading: '1. One Append-Only Truth for Both Teams',
        body: 'When marketing runs spreadsheets and finance waits for monthly ERP dumps, breakage estimates drift. A shared append-only ledger exposes live net liability and campaign ROI side by side.',
      },
      {
        id: 'holdout-proof',
        heading: '2. Proving Incrementality with 5% Holdouts',
        body: 'Automatic control cohorts prove whether a 2x weekend multiplier generated true net-new basket spend rather than subsidizing purchases that would have happened organically.',
      },
    ],
    takeaways: [
      'Reconcile deferred point revenue daily instead of quarterly',
      'Measure true lift with built-in 5%–10% campaign holdout groups',
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
    },
    sections: [
      {
        id: 'wa-qr',
        heading: '1. 10-Second WhatsApp Counter Enrolment',
        body: 'Shoppers scan a counter QR, tap send, and receive their live balance plus digital membership card in WhatsApp with zero app store friction.',
      },
      {
        id: 'clearinghouse',
        heading: '2. Cross-Border Coalition Settlement',
        body: 'Multi-brand groups operating across India, Australia, and New Zealand can now settle bilateral point redemptions automatically in local currencies.',
      },
    ],
    takeaways: [
      '85%+ open rates on automated WhatsApp transaction receipts',
      'Multi-currency bilateral settlement across INR, AUD, NZD, and AED',
    ],
  },
];

export const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  useEffect(() => {
    if (slug) {
      const found = BLOG_ARTICLES.find((a) => a.slug === slug);
      if (found) setActiveArticle(found);
    }
  }, [slug]);

  const categories = ['All', 'Product Updates', 'Engineering', 'Compliance', 'UI/UX Design', 'Strategy'];

  const filtered = BLOG_ARTICLES.filter((a) => {
    const matchesCat = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesQ = `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesCat && matchesQ;
  });

  const relatedArticles = activeArticle
    ? BLOG_ARTICLES.filter((a) => a.slug !== activeArticle.slug).slice(0, 2)
    : [];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <MainLayout>
      {/* Hero with Subscribe CTA per Sitemap */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-12 pb-16 sm:pb-20 text-center overflow-hidden font-body bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#847C75] mb-4">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/resources" className="hover:text-[#B5651A] transition-colors">Resources</Link>
            <ChevronRight size={12} />
            <span className="text-[#17140F] font-bold">Blog</span>
          </nav>

          <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-3">
            PUNYA PERKS BLOG
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17140F] tracking-tight mb-4 leading-tight">
            Engineering, compliance &amp; loyalty craft.
          </h1>
          <p className="text-sm sm:text-base text-[#5B534C] max-w-2xl mx-auto leading-relaxed mb-8">
            Deep dives on double-entry point ledgers, regional privacy laws across India and ANZ, product releases, and retention design.
          </p>

          {/* Subscribe Bar */}
          <div className="max-w-md mx-auto">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#B5651A]/40 text-xs font-semibold text-[#B5651A] shadow-xs">
                <CheckCircle2 size={15} />
                <span>Subscribed to Punya Perks monthly engineering &amp; loyalty notes.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#847C75]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email to subscribe"
                    className="w-full h-11 pl-10 pr-4 rounded-full bg-white border border-[#EBDFC6] text-xs sm:text-sm text-[#17140F] outline-none focus:border-[#B5651A]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Filter + Articles Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EBDFC6]">
            <div className="relative w-full lg:max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#847C75]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full h-11 pl-10 pr-4 rounded-full border border-[#EBDFC6] bg-[#FAF5ED]/50 text-sm outline-none focus:border-[#B5651A]"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#B5651A] text-white shadow-xs'
                      : 'bg-[#FAF5ED] text-[#5B534C] border border-[#EBDFC6] hover:text-[#17140F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post) => (
              <article
                key={post.slug}
                onClick={() => setActiveArticle(post)}
                className="group rounded-[22px] bg-[#FCF8F2] border border-[#EBDFC6] hover:border-[#B5651A]/60 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer"
              >
                <div>
                  <div className="h-48 rounded-[14px] overflow-hidden bg-[#F4ECDC] mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="font-bold text-[#B5651A]">{post.category}</span>
                    <span className="text-[#847C75]">·</span>
                    <span className="text-[#847C75]">{post.date}</span>
                    <span className="text-[#847C75]">·</span>
                    <span className="text-[#847C75] inline-flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBDFC6] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#EBDFC6] shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#17140F] truncate">{post.author.name}</div>
                      <div className="text-[10px] text-[#847C75] truncate">{post.author.role}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#B5651A] inline-flex items-center gap-1 shrink-0">
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal with Sidebar TOC, Author & Related per Sitemap */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-[#EBDFC6] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#17140F] text-white px-6 py-5 flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#E59846] mb-1">
                  {activeArticle.category} · {activeArticle.date} · {activeArticle.readTime}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold leading-snug">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Close article"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar TOC & Author */}
              <aside className="lg:col-span-4 space-y-6">
                <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#B5651A] flex items-center gap-1.5">
                    <BookOpen size={13} />
                    Table of Contents
                  </div>
                  <ul className="space-y-2 text-xs text-[#5B534C]">
                    {activeArticle.sections.map((s) => (
                      <li key={s.id} className="font-medium text-[#17140F]">
                        {s.heading}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border border-[#EBDFC6] flex items-center gap-3">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#EBDFC6]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#17140F]">{activeArticle.author.name}</div>
                    <div className="text-[11px] text-[#5B534C]">{activeArticle.author.role}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#847C75]">
                    Related Reading
                  </div>
                  {relatedArticles.map((rel) => (
                    <button
                      key={rel.slug}
                      type="button"
                      onClick={() => setActiveArticle(rel)}
                      className="w-full text-left p-3 rounded-xl bg-[#FAF5ED]/70 hover:bg-[#FAF5ED] border border-[#EBDFC6] text-xs font-semibold text-[#17140F] hover:text-[#B5651A] transition-colors cursor-pointer block"
                    >
                      {rel.title}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Article Content */}
              <div className="lg:col-span-8 space-y-6">
                {activeArticle.sections.map((s) => (
                  <div key={s.id} className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-[#17140F]">{s.heading}</h3>
                    <p className="text-sm text-[#5B534C] leading-relaxed">{s.body}</p>
                  </div>
                ))}

                <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B5651A]">
                    Key Takeaways
                  </div>
                  <ul className="space-y-2">
                    {activeArticle.takeaways.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs sm:text-sm text-[#17140F]">
                        <CheckCircle2 size={15} className="text-[#B5651A] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <PageCta />
    </MainLayout>
  );
};
export default BlogPage;
