import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  ALL_CUSTOMER_STORIES,
  CUSTOMER_STORIES,
  CustomerCategory,
  FEATURED_CUSTOMER_STORY,
} from '../../data/customerStories';
import {
  ArrowRightIcon,
  Building2Icon,
  CheckCircle2Icon,
  ChevronRightIcon,
  ClockIcon,
  CreditCardIcon,
  SearchIcon,
  ShoppingBagIcon,
  SparklesIcon,
  StoreIcon,
  UtensilsIcon,
} from 'lucide-react';

function getCategoryIcon(tag: CustomerCategory) {
  switch (tag) {
    case 'Fintech & Banking':
      return CreditCardIcon;
    case 'Hospitality & QSR':
      return UtensilsIcon;
    case 'E-Commerce & D2C':
      return ShoppingBagIcon;
    case 'Coalition Programs':
      return Building2Icon;
    case 'Retail & Multi-Location':
    default:
      return StoreIcon;
  }
}

export const CustomersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = { All: CUSTOMER_STORIES.length };
    for (const item of CUSTOMER_STORIES) {
      counts[item.tag] = (counts[item.tag] || 0) + 1;
    }
    return counts;
  }, []);

  const tagList = useMemo(() => {
    return ['All', ...Array.from(new Set(CUSTOMER_STORIES.map((item) => item.tag)))];
  }, []);

  const filteredStories = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return CUSTOMER_STORIES.filter((item) => {
      const matchesSearch =
        !query ||
        `${item.title} ${item.summary} ${item.tag} ${item.meta} ${item.author} ${item.region}`
          .toLowerCase()
          .includes(query);
      const matchesTag = selectedTag === 'All' || item.tag === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-10 pb-20 md:pt-12 md:pb-24 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#847C75] font-body">
              <li>
                <Link to="/" className="hover:text-[#B5651A] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <Link to="/resources" className="hover:text-[#B5651A] transition-colors">
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <span className="text-[#17140F] font-bold" aria-current="page">
                  Customer Stories
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero Grid */}
          <div className="mt-6 grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 border border-[#EBDFC6] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3">
                <SparklesIcon size={12} />
                <span>CUSTOMER STORIES &amp; CASE STUDIES</span>
              </span>
              <h1
                id="page-title"
                className="font-display text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#17140F] md:text-[46px]"
              >
                Enterprise loyalty programmes that moved the numbers
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-2xl font-body">
                Explore verified rollouts across multi-store fashion retail, digital banking, QSR franchises, D2C brands, and coalition malls running on Punya Perks.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#stories-catalog"
                  className="rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Browse {ALL_CUSTOMER_STORIES.length} Case Studies</span>
                  <ArrowRightIcon size={14} />
                </a>
                <Link
                  to="/demo"
                  className="rounded-full border border-[#EBDFC6] bg-white/85 hover:bg-white px-6 py-3 text-xs font-semibold text-[#17140F] transition-colors shadow-2xs"
                >
                  Book a platform walkthrough
                </Link>
              </div>
            </div>

            {/* Right Telemetry Summary Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px] rounded-3xl overflow-hidden border border-[#EBDFC6] bg-white/95 shadow-xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#EBDFC6]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#17140F]">
                      VERIFIED CUSTOMER TELEMETRY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#B5651A] bg-[#FEF0E1] px-2.5 py-0.5 rounded-full border border-[#F3D7BD]">
                    99.99% Uptime SLA
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">
                      Repeat Purchase Lift
                    </div>
                    <div className="font-display font-extrabold text-2xl text-[#B5651A] mt-0.5">
                      +34%
                    </div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">
                      480-store fashion retail
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">
                      Ledger Discrepancy
                    </div>
                    <div className="font-display font-extrabold text-2xl text-emerald-700 mt-0.5">
                      0.00%
                    </div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">
                      Double-entry audit verified
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">
                      Visit Velocity
                    </div>
                    <div className="font-display font-extrabold text-2xl text-[#B5651A] mt-0.5">
                      4.2x
                    </div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">
                      Multi-outlet QSR chains
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">
                      POS Response
                    </div>
                    <div className="font-display font-extrabold text-2xl text-[#B5651A] mt-0.5">
                      &lt;110ms
                    </div>
                    <div className="text-[11px] text-[#5B534C] mt-0.5">
                      Sub-second cash counter
                    </div>
                  </div>
                </div>

                <div className="text-xs text-[#5B534C] font-body flex items-center gap-2 pt-0.5">
                  <CheckCircle2Icon size={14} className="text-emerald-700 shrink-0" />
                  <span>Verified across 3.4M+ transacting customer balance sheets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section
        id="stories-catalog"
        className="bg-white py-12 md:py-16"
        aria-label="Enterprise Customer Case Studies"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Search & Industry Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
            <div className="relative w-full lg:max-w-xs shrink-0">
              <SearchIcon
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#847C75] pointer-events-none"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search stories, POS, banking..."
                aria-label="Search customer stories"
                className="w-full h-11 rounded-full border border-[#DFD2BA] bg-[#FAF7F2] pl-11 pr-4 text-xs sm:text-sm text-[#17140F] placeholder:text-[#847C75] outline-none focus:border-[#B5651A] focus:bg-white focus:ring-2 focus:ring-[#B5651A]/15 transition-all font-body"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
              {tagList.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-full px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#B5651A] text-white shadow-xs font-bold'
                        : 'bg-[#FAF5ED] border border-[#EBDFC6] text-[#5B534C] hover:border-[#B5651A] hover:text-[#17140F]'
                    }`}
                  >
                    <span>{tag}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-white text-[#847C75]'
                      }`}
                    >
                      {tagCounts[tag]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Case Study Card (Clickable Link) */}
          {selectedTag === 'All' && !searchTerm.trim() && (
            <Link
              to={`/customers/${FEATURED_CUSTOMER_STORY.slug}`}
              className="group mb-12 overflow-hidden rounded-3xl border border-[#EBDFC6] hover:border-[#B5651A] bg-[#FAF7F2] text-[#17140F] shadow-sm hover:shadow-lg transition-all duration-300 grid lg:grid-cols-12 items-stretch"
            >
              {/* Left Narrative Column */}
              <div className="p-6 sm:p-8 lg:p-11 lg:col-span-7 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF0E1] border border-[#F3D7BD] px-3 py-1 text-xs font-semibold text-[#B5651A]">
                      <SparklesIcon size={13} />
                      <span>Featured Case Study</span>
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white border border-[#EBDFC6] px-3 py-1 text-[11px] font-mono text-[#5B534C]">
                      {FEATURED_CUSTOMER_STORY.meta}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-tight font-display">
                    {FEATURED_CUSTOMER_STORY.title}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-[#5B534C] leading-relaxed font-body">
                    {FEATURED_CUSTOMER_STORY.summary}
                  </p>

                  {/* Mini KPI Row */}
                  <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                    {FEATURED_CUSTOMER_STORY.metrics.slice(0, 3).map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl bg-white border border-[#EBDFC6] px-3.5 py-2.5"
                      >
                        <div className="font-display font-bold text-lg sm:text-xl text-[#B5651A]">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#5B534C] font-medium truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EBDFC6] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={FEATURED_CUSTOMER_STORY.authorAvatar}
                      alt={FEATURED_CUSTOMER_STORY.author}
                      className="h-9 w-9 rounded-full object-cover border border-[#EBDFC6]"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#17140F]">
                        {FEATURED_CUSTOMER_STORY.author}
                      </div>
                      <div className="text-[11px] text-[#5B534C]">
                        {FEATURED_CUSTOMER_STORY.authorRole}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#B5651A] group-hover:bg-[#9a5413] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all">
                    <span>Read Full Case Study</span>
                    <ArrowRightIcon
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 min-h-[260px] lg:min-h-[420px] relative overflow-hidden bg-neutral-100">
                <img
                  src={FEATURED_CUSTOMER_STORY.image}
                  alt={FEATURED_CUSTOMER_STORY.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-xs px-3 py-1 text-[11px] font-mono font-bold text-[#17140F] border border-[#EBDFC6] shadow-xs">
                  <ClockIcon size={12} className="text-[#B5651A]" />
                  <span>{FEATURED_CUSTOMER_STORY.readTime}</span>
                </span>
              </div>
            </Link>
          )}

          {/* Section Subheader */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-[#17140F]">
              {selectedTag === 'All' ? 'All Enterprise Case Studies' : selectedTag}
            </h2>
            <span className="text-xs font-mono text-[#847C75]">
              Showing {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
            </span>
          </div>

          {/* Case Study Grid */}
          {filteredStories.length === 0 ? (
            <div className="rounded-2xl border border-[#EBDFC6] bg-[#FAF5ED] p-12 text-center">
              <p className="text-sm sm:text-base text-[#5B534C] font-body">
                No case studies found matching “{searchTerm}”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('All');
                }}
                className="mt-4 rounded-full bg-[#B5651A] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#9a5413] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((item) => {
                const TagIcon = getCategoryIcon(item.tag);
                return (
                  <Link
                    key={item.slug}
                    to={`/customers/${item.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-[#EBDFC6] bg-white p-5 sm:p-6 shadow-2xs hover:border-[#B5651A] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B5651A]/40"
                  >
                    <div>
                      {/* Image Box */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 mb-4 border border-[#F2EAE0]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80';
                          }}
                        />

                        {/* Industry Badge */}
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#17140F] shadow-xs backdrop-blur-xs font-body border border-[#EBDFC6]">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FEF0E1] text-[#B5651A] group-hover:bg-[#B5651A] group-hover:text-white transition-colors duration-200">
                            <TagIcon size={12} />
                          </span>
                          <span>{item.tag}</span>
                        </span>

                        {/* Key Result Overlay Pill */}
                        <span className="absolute bottom-3 right-3 rounded-xl bg-[#17140F]/85 backdrop-blur-xs px-3 py-1.5 text-white border border-white/15 shadow-sm">
                          <span className="font-display font-bold text-sm text-[#F5B06B]">
                            {item.headlineMetric}
                          </span>
                          <span className="ml-1.5 text-[10px] font-mono text-white/85">
                            {item.headlineMetricLabel}
                          </span>
                        </span>
                      </div>

                      {/* Single-line Meta + Read Time */}
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                        <span className="font-semibold text-[#B5651A] truncate">{item.meta}</span>
                        <span className="text-[#847C75] shrink-0">{item.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-2.5 text-lg font-bold text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug font-display">
                        {item.title}
                      </h3>

                      {/* Concise Summary */}
                      <p className="mt-2 text-xs sm:text-sm text-[#5B534C] leading-relaxed font-body">
                        {item.summary}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-6 pt-4 border-t border-[#F2EAE0] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={item.authorAvatar}
                          alt={item.author}
                          className="h-8 w-8 rounded-full object-cover border border-[#EBDFC6] shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80';
                          }}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#17140F] leading-tight truncate font-body">
                            {item.author}
                          </p>
                          <p className="text-[11px] text-[#847C75] leading-tight mt-0.5 truncate font-body">
                            {item.authorRole}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EBDFC6] bg-[#FAF5ED] px-3.5 py-1.5 text-xs font-semibold text-[#17140F] group-hover:bg-[#B5651A] group-hover:border-[#B5651A] group-hover:text-white transition-all duration-200 shrink-0 whitespace-nowrap font-body">
                        <span>Read Case Study</span>
                        <ArrowRightIcon
                          size={13}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Cross-Industry Proof Banner */}
      <section className="bg-[#FAF5ED] border-t border-b border-[#EBDFC6] py-12 font-body">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="rounded-3xl bg-white border border-[#EBDFC6] p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#B5651A]">
                MIGRATE WITHOUT POS DOWNTIME
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17140F]">
                Want to benchmark your loyalty architecture before switching?
              </h2>
              <p className="text-sm text-[#5B534C] leading-relaxed">
                Our engineering team provides shadow dual-write testing, FIFO expiry lot replay, and store POS latency profiling tailored to your stack.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/benchmarks"
                className="rounded-full border border-[#EBDFC6] bg-[#FAF5ED] hover:border-[#B5651A] px-5 py-3 text-xs font-semibold text-[#17140F] transition-colors"
              >
                Read Industry Benchmarks
              </Link>
              <Link
                to="/demo"
                className="rounded-full bg-[#17140F] hover:bg-[#B5651A] px-6 py-3 text-xs font-semibold text-white transition-colors inline-flex items-center gap-2"
              >
                <span>Request Custom Case Study</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};

export default CustomersPage;
