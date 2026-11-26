import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { 
  SearchIcon, 
  ArrowRightIcon, 
  SparklesIcon, 
  ChevronRightIcon, 
  Building2Icon, 
  StoreIcon, 
  CreditCardIcon, 
  UtensilsIcon, 
  ShoppingBagIcon, 
  CheckCircle2Icon, 
  ShieldCheckIcon 
} from 'lucide-react';

interface CustomerStoryItem {
  tag: string;
  title: string;
  text: string;
  meta: string;
  image: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  actionLabel?: string;
  href?: string;
}

interface FeaturedStory {
  tag: string;
  title: string;
  text: string;
  meta: string;
  image: string;
  downloadText: string;
  href?: string;
}

const FEATURED_STORY: FeaturedStory = {
  tag: "Enterprise Impact",
  title: "A 480+ Store National Fashion Retailer Unified Physical & Digital Loyalty Ledgers",
  text: "How an enterprise fashion retail conglomerate scaled omnichannel loyalty across 480 physical storefronts and Magento online stores using Punya Perks' append-only double-entry ledger without cashier register delays or delayed balance syncs.",
  meta: "Omnichannel Retail · 480+ Stores · ₹1,200 Cr Annual Turnover",
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  downloadText: "Read Retail Case Study",
  href: "/contact"
};

const CUSTOMER_STORIES: CustomerStoryItem[] = [
  {
    tag: "Retail & Multi-Location",
    title: "National apparel conglomerate cut checkout loyalty latency to sub-110ms across 480 stores",
    text: "Sub-120ms Pine Labs POS synchronization, zero cashier register freezing, and automated WhatsApp 1-tap vouchers across 480 storefronts.",
    meta: "480 Stores · +34% Repeat Purchase Lift",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    author: "Vikram Malhotra",
    authorRole: "VP of Retail Technology",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    actionLabel: "Read Case Study",
    href: "/contact"
  },
  {
    tag: "Fintech & Banking",
    title: "Regional Islamic digital bank achieved 100% first-pass internal audit approval on double-entry point journals",
    text: "Automated maker-checker workflows for manual adjustments, cryptographically sealed journals, and sovereign regional data residency in AWS UAE.",
    meta: "1.2M Cardholders · 0.00% Ledger Discrepancy",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    author: "Tariq Al-Mansoor",
    authorRole: "Head of Digital Cards & Loyalty",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    actionLabel: "Read Case Study",
    href: "/contact"
  },
  {
    tag: "Hospitality & QSR",
    title: "Multi-brand quick service restaurant franchise scaled visit velocity 4.2x across 85 branches",
    text: "Automated velocity throttling against collusive cashier scans, Privacy Act 1988 compliance, and offline queue sync during lunch peak rushes.",
    meta: "85 Outlets · 4.2x Visit Velocity",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    author: "Liam Henderson",
    authorRole: "Chief Commercial Officer",
    authorAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
    actionLabel: "Read Case Study",
    href: "/contact"
  },
  {
    tag: "E-Commerce & D2C",
    title: "Direct-to-consumer beauty brand expanded member lifetime value by +28% through dynamic VIP tiers",
    text: "Shopify Plus checkout webhooks, FIFO point lot expiry reminders, and zero performance penalty on mobile web page speed.",
    meta: "850K Members · +28% Customer LTV",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    author: "Pooja Sharma",
    authorRole: "Director of Retention & Growth",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    actionLabel: "Read Case Study",
    href: "/contact"
  },
  {
    tag: "Coalition Programs",
    title: "Metro lifestyle mall unlocked ₹4.8 Cr in cross-merchant spend for 160 independent retailers",
    text: "Universal merchant clearinghouse with net daily settlement ledgers, automated RBI PPI compliance boundaries, and instant WhatsApp member activation.",
    meta: "160 Merchants · ₹4.8 Cr Coalition Spend",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80",
    author: "Rajesh Kulkarni",
    authorRole: "Mall General Manager",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    actionLabel: "Read Case Study",
    href: "/contact"
  },
  {
    tag: "Retail & Multi-Location",
    title: "Regional supermarket chain eliminated 3-second cashier freezes with edge POS loyalty caching",
    text: "Local LAN edge server cache, encrypted barcode tokens protecting phone numbers, and seamless compatibility with legacy POS registers.",
    meta: "62 Supermarkets · <90ms Checkout Verification",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    author: "Sanjay Patel",
    authorRole: "Chief Information Officer",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    actionLabel: "Read Case Study",
    href: "/contact"
  }
];

export const CustomersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tagList = useMemo(() => {
    return ['All', ...Array.from(new Set(CUSTOMER_STORIES.map(item => item.tag)))];
  }, []);

  const filteredStories = useMemo(() => {
    return CUSTOMER_STORIES.filter(item => {
      const matchesSearch = `${item.title} ${item.text} ${item.tag} ${item.meta}`
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
      const matchesTag = selectedTag === 'All' || item.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <MainLayout>
      {/* Hero Section matching Sqalible Ae component with Inner Hero BG */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pb-14 pt-20 md:pb-18 md:pt-24 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: "#FAF3E8",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb matching Sqalible */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#847C75] font-body">
              <li>
                <Link to="/" className="hover:text-[#B5651A] transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <Link to="/resources" className="hover:text-[#B5651A] transition-colors">Resources</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <span className="text-[#17140F] font-bold" aria-current="page">Customer Stories</span>
              </li>
            </ol>
          </nav>

          {/* Hero Grid with Mockup / Metric Card */}
          <div className="mt-6 grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
                CUSTOMER STORIES
              </p>
              <h1 id="page-title" className="font-display text-[32px] font-extrabold leading-[40px] tracking-tight text-[#17140F] md:text-[46px] md:leading-[54px]">
                Enterprise Customer Case Studies
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-2xl font-body">
                Discover how high-velocity retail conglomerates, digital banks, and modern consumer brands transform repeat purchase rates, ledger compliance, and member loyalty with Punya Perks.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-7 py-3.5 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Book a platform walkthrough</span>
                  <ArrowRightIcon size={15} />
                </Link>
                <Link
                  to="/platform/security"
                  className="rounded-full border border-[#EBDFC6] bg-white/80 hover:bg-white px-6 py-3.5 text-xs font-semibold text-[#17140F] transition-colors shadow-xs"
                >
                  Explore Security & Compliance
                </Link>
              </div>
            </div>

            {/* Right Interactive Mockup / Highlight Box */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px] rounded-2xl overflow-hidden border border-[#EBDFC6] bg-white/90 shadow-xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#EBDFC6]">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#17140F]">LIVE LEDGER TELEMETRY</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#B5651A] bg-[#FEF0E1] px-2.5 py-0.5 rounded-full border border-[#F3D7BD]">
                    99.99% Uptime SLA
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">Repeat Purchase Lift</div>
                    <div className="font-display font-extrabold text-2xl text-[#B5651A] mt-0.5">+34%</div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">Retail fashion cluster</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">Ledger Discrepancy</div>
                    <div className="font-display font-extrabold text-2xl text-emerald-700 mt-0.5">0.00%</div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">Double-entry audit verified</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">Visit Velocity</div>
                    <div className="font-display font-extrabold text-2xl text-[#B5651A] mt-0.5">4.2x</div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">Multi-outlet QSR chains</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">POS Response</div>
                    <div className="font-display font-extrabold text-2xl text-[#B5651A] mt-0.5">&lt;110ms</div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">Sub-second cash counter</div>
                  </div>
                </div>

                <div className="text-xs text-[#5B534C] font-body flex items-center gap-2 pt-1">
                  <CheckCircle2Icon size={14} className="text-emerald-700 shrink-0" />
                  <span>Verified across 3.4M+ transacting customer balance sheets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section matching Sqalible structure */}
      <section className="bg-white py-10 md:py-14" aria-label="Enterprise Customer Case Studies">
        <div className="mx-auto max-w-7xl px-6">
          {/* Search & Filter Header matching Sqalible */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
            {/* Search Input */}
            <div className="relative w-full max-w-xs shrink-0">
              <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search case studies..."
                className="w-full h-11 rounded-full border border-neutral-300 bg-white pl-11 pr-4 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#D9822B] focus:ring-2 focus:ring-[#D9822B]/20 transition-all shadow-xs font-body"
              />
            </div>

            {/* Filter Pills */}
            {tagList.length > 2 && (
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
                {tagList.map(tag => {
                  const isActive = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#D9822B] text-white shadow-xs font-bold'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Featured Case Study Card (matching Sqalible featured layout) */}
          {selectedTag === 'All' && !searchTerm.trim() && (
            <div className="mb-14 overflow-hidden rounded-none border border-neutral-300 hover:border-neutral-500 bg-white text-neutral-900 shadow-xs transition-colors grid md:grid-cols-12 items-stretch md:h-[440px]">
              {/* Left Column (7 cols) */}
              <div className="p-8 md:p-10 lg:p-12 md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF0E1] border border-[#F3D7BD] px-3.5 py-1 text-xs font-semibold text-[#B5651A] mb-4">
                    <SparklesIcon size={13} />
                    {FEATURED_STORY.tag}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-tight font-display">
                    {FEATURED_STORY.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed line-clamp-3 md:line-clamp-4 font-body">
                    {FEATURED_STORY.text}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    to={FEATURED_STORY.href || "/contact"}
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9822B] hover:bg-[#B5651A] px-6 py-3 text-xs font-semibold text-white shadow-xs transition-all hover:scale-105"
                  >
                    <span>{FEATURED_STORY.downloadText}</span>
                    <ArrowRightIcon size={14} />
                  </Link>

                  <span className="text-xs text-neutral-500 font-medium font-mono">
                    {FEATURED_STORY.meta}
                  </span>
                </div>
              </div>

              {/* Right Image Column (5 cols) */}
              <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden bg-neutral-100">
                <img
                  src={FEATURED_STORY.image}
                  alt={FEATURED_STORY.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          )}

          {/* Cards Grid matching Sqalible Lg cards */}
          {filteredStories.length === 0 ? (
            <div className="rounded-none border border-neutral-200 bg-neutral-50 p-12 text-center">
              <p className="text-sm sm:text-base text-neutral-600 font-body">
                No case studies found matching “{searchTerm}”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('All');
                }}
                className="mt-4 rounded-full bg-[#D9822B] text-white text-xs font-semibold px-4 py-2 hover:bg-[#B5651A] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((item, idx) => (
                <article
                  key={idx}
                  className="group flex h-full flex-col justify-between rounded-none border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs hover:border-[#D9822B]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Image Box */}
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-none bg-neutral-100 mb-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#B5651A] shadow-xs backdrop-blur-xs font-mono">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FEF0E1] text-[#B5651A] group-hover:bg-[#D9822B] group-hover:text-white transition-colors duration-200">
                            <StoreIcon size={12} />
                          </span>
                          <span>{item.tag}</span>
                        </span>
                      </div>

                      {/* Tag & Meta line */}
                      <p className="text-xs font-semibold text-[#B5651A] font-mono">
                        {item.tag} {item.meta ? `· ${item.meta}` : ''}
                      </p>

                      {/* Title */}
                      <h3 className="mt-2 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#D9822B] transition-colors line-clamp-2 leading-snug font-display">
                        {item.title}
                      </h3>

                      {/* Text */}
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed font-body">
                        {item.text}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={item.authorAvatar}
                          alt={item.author}
                          className="h-8 w-8 rounded-full object-cover border border-neutral-200 shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80";
                          }}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-neutral-900 leading-tight truncate font-body">
                            By {item.author}
                          </p>
                          <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 truncate font-body">
                            {item.authorRole}
                          </p>
                        </div>
                      </div>

                      <Link
                        to={item.href || "/contact"}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-transparent px-3.5 py-1.5 text-xs font-semibold text-neutral-900 group-hover:bg-[#1C1610] group-hover:text-white transition-all duration-200 shrink-0 font-body"
                      >
                        <span>{item.actionLabel || 'Read Case Study'}</span>
                        <ArrowRightIcon size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section matching Sqalible `be` component */}
      <section className="bg-white pt-6 pb-14 md:pt-8 md:pb-16" aria-labelledby="page-cta-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-none bg-[#B5651A] px-8 py-10 md:flex-row md:items-center md:px-12 shadow-md text-white">
            <div className="flex-1">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#FEF0E1]">
                Get Started
              </p>
              <h2 id="page-cta-title" className="mt-2 text-2xl sm:text-3xl font-extrabold text-white font-display">
                Ready to modernize your enterprise loyalty operations?
              </h2>
              <p className="mt-2 text-sm text-neutral-200 max-w-xl font-body">
                Join forward-thinking retailers and fintech leaders running on Punya Perks' append-only ledger architecture.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-xs font-bold text-[#1C1610] shadow-sm hover:scale-105 transition-all"
              >
                Start free trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-6 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-white"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standard global footer CTA */}
      <PageCta />
    </MainLayout>
  );
};

export default CustomersPage;
