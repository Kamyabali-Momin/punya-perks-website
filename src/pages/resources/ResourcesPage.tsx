import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { FEATURED_RESOURCE, RESOURCE_ITEMS } from '../../data/resourcesCatalog';
import {
  Search,
  ArrowRight,
  X,
  Clock,
  BookOpen,
  Sparkles,
  Download,
  ChevronRight,
} from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const { pathname } = useLocation();
  const isGuidesRoute = pathname.includes('/guides');
  const isBenchmarksRoute = pathname.includes('/benchmarks');
  const isComparisonsRoute = pathname.includes('/comparisons');

  const getInitialTag = () => {
    if (isBenchmarksRoute) return 'Benchmarks';
    if (isComparisonsRoute) return 'Comparisons';
    if (isGuidesRoute) return 'Guide';
    return 'All';
  };

  const [selectedTag, setSelectedTag] = useState<string>(getInitialTag);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setSelectedTag(getInitialTag());
  }, [pathname]);

  const pageMeta = isBenchmarksRoute
    ? {
        pretitle: 'RESEARCH & BENCHMARKS',
        title: 'Loyalty Benchmarks 2026',
        description:
          'Verified retention rates, burn velocity, POS latency, and breakage reserve benchmarks across India, Australia, and New Zealand.',
      }
    : isComparisonsRoute
    ? {
        pretitle: 'PLATFORM COMPARISONS',
        title: 'Architecture & Vendor Comparisons',
        description:
          'Technical evaluations and zero-downtime cutover playbooks comparing Punya Perks with Capillary, Xoxoday, and EasyRewardz.',
      }
    : isGuidesRoute
    ? {
        pretitle: 'LEARN & IMPLEMENT',
        title: 'Guides & Reports',
        description:
          'In-depth operational playbooks, ledger architecture whitepapers, and compliance roadmaps for retail and fintech leaders.',
      }
    : {
        pretitle: 'RESOURCES & KNOWLEDGE HUB',
        title: 'Enterprise Loyalty Knowledge, Playbooks & Tools',
        description:
          'Central entry to all loyalty blogs, case studies, guides, 2026 benchmarks, webinars, release notes, and developer docs.',
      };

  const tags = ['All', ...Array.from(new Set(RESOURCE_ITEMS.map((item) => item.tag)))];

  const filteredItems = RESOURCE_ITEMS.filter((item) => {
    const matchesTag = selectedTag === 'All' || item.tag === selectedTag;
    const matchesSearch =
      `${item.title} ${item.text} ${item.tag}`
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <MainLayout>
      {/* 1. Hero Section */}
      <section
        className="relative w-full border-b border-[#EADBC6] pt-12 pb-20 text-center overflow-hidden font-body text-[#220901]"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-[#826B63] mb-4">
            <Link to="/" className="hover:text-[#BC3908] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#BC3908]/60" />
            <Link to="/resources" className="hover:text-[#BC3908] transition-colors">
              Resources
            </Link>
            <ChevronRight size={12} className="text-[#BC3908]/60" />
            <span className="text-[#BC3908] font-bold">
              {isBenchmarksRoute
                ? 'Benchmarks'
                : isComparisonsRoute
                ? 'Comparisons'
                : isGuidesRoute
                ? 'Guides & Reports'
                : 'Knowledge Hub'}
            </span>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6EFE2] border border-[#F4D89C] text-[#BC3908] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles size={13} className="text-[#BC3908]" />
            <span>{pageMeta.pretitle}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-[#220901] tracking-tight mb-4 leading-tight">
            {pageMeta.title}
          </h1>

          <p className="text-sm sm:text-base text-[#563E37] max-w-2xl mx-auto leading-relaxed">
            {pageMeta.description}
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="w-full py-12 sm:py-16 bg-white font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Explore by Resource Type */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
            {[
              { label: 'Blog', href: '/blog' },
              { label: 'Case Studies', href: '/customers' },
              { label: 'Guides', href: '/guides' },
              { label: 'Benchmarks', href: '/benchmarks' },
              { label: 'Comparisons', href: '/comparisons' },
              { label: 'Webinars', href: '/events' },
              { label: 'Changelog', href: '/changelog' },
              { label: 'Glossary', href: '/glossary' },
            ].map((hubLink) => {
              const active = pathname === hubLink.href;
              return (
                <Link
                  key={hubLink.href}
                  to={hubLink.href}
                  className={`px-3 py-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                    active
                      ? 'bg-[#BC3908] text-white border-[#BC3908] shadow-xs'
                      : 'bg-[#F6EFE2]/70 text-[#220901] border-[#EADBC6] hover:border-[#BC3908]/50 hover:bg-[#F6EFE2]'
                  }`}
                >
                  {hubLink.label}
                </Link>
              );
            })}
          </div>

          {/* Search Bar & Tag Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EADBC6]">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#826B63] pointer-events-none"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, topics, or keywords..."
                aria-label="Search guides and resources"
                className="w-full h-11 pl-11 pr-10 rounded-full border border-[#EADBC6] bg-[#F6EFE2]/50 text-sm text-[#220901] placeholder-[#826B63] outline-none focus:border-[#BC3908] focus:ring-2 focus:ring-[#BC3908]/15 focus:bg-white transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#826B63] hover:text-[#220901] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

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
                        ? 'bg-[#BC3908] text-white shadow-xs font-bold'
                        : 'bg-[#F6EFE2] text-[#563E37] hover:bg-[#F6EFE2] hover:text-[#220901] border border-[#EADBC6]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Featured Spotlight Card (Clickable Link to Dedicated Page) */}
          {selectedTag === 'All' && !searchQuery.trim() && (
            <Link
              to={`/resources/${FEATURED_RESOURCE.id}`}
              className="mb-14 overflow-hidden rounded-3xl border border-[#EADBC6] hover:border-[#BC3908]/60 bg-white text-[#220901] shadow-xs hover:shadow-md transition-all grid md:grid-cols-12 items-stretch group"
            >
              <div className="p-8 md:p-10 lg:p-12 md:col-span-7 flex flex-col justify-between h-full bg-white">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6EFE2] border border-[#F4D89C] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#BC3908] mb-4">
                    <Sparkles size={13} className="text-[#BC3908]" />
                    {FEATURED_RESOURCE.tag}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#220901] leading-tight group-hover:text-[#BC3908] transition-colors">
                    {FEATURED_RESOURCE.title}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-[#563E37] leading-relaxed line-clamp-3 md:line-clamp-4">
                    {FEATURED_RESOURCE.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#EADBC6]/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#BC3908] group-hover:bg-[#621708] px-6 py-3 text-xs font-bold text-white shadow-xs transition-all">
                      <Download size={14} />
                      <span>{FEATURED_RESOURCE.downloadText || 'Download Free Playbook'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-3 rounded-full text-xs font-bold text-[#220901] group-hover:text-[#BC3908] transition-colors">
                      <span>Read Playbook</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>

                  <span className="text-xs text-[#826B63] font-mono">
                    {FEATURED_RESOURCE.meta}
                  </span>
                </div>
              </div>

              <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden bg-[#F6EFE2] border-t md:border-t-0 md:border-l border-[#EADBC6]">
                <img
                  src={FEATURED_RESOURCE.image}
                  alt={FEATURED_RESOURCE.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-mono font-bold text-[#220901] border border-[#EADBC6]">
                  Read Full Guide →
                </div>
              </div>
            </Link>
          )}

          {/* 4. Section Heading */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#220901]">
                {selectedTag === 'All' ? 'All Guides & Resources' : `${selectedTag} Resources`}
              </h2>
              <p className="text-xs text-[#826B63] mt-1 font-mono">
                Showing {filteredItems.length} curated playbooks and publications
              </p>
            </div>
          </div>

          {/* 5. Resource Cards 3-Column Grid (Each Card Clicks Through to Dedicated Page) */}
          {filteredItems.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/resources/${item.id}`}
                  className="bg-white rounded-3xl border border-[#EADBC6] hover:border-[#BC3908] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-[#F6EFE2] border-b border-[#EADBC6]/60">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F6EFE2] text-[#BC3908] border border-[#F4D89C] text-[10px] shadow-2xs">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[11px] text-[#826B63] mb-2 font-mono">
                        <Clock size={12} className="text-[#BC3908]" />
                        <span>{item.meta}</span>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors leading-snug mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#563E37] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-2">
                    <div className="pt-4 border-t border-[#EADBC6]/80 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-[#F6EFE2] border border-[#F4D89C] text-[#BC3908] font-bold text-xs flex items-center justify-center font-display shrink-0">
                          {item.author.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#220901] leading-tight truncate">
                            {item.author.name}
                          </p>
                          <p className="text-[10px] text-[#826B63] leading-tight mt-0.5 truncate">
                            {item.author.role}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#220901] bg-transparent px-3.5 py-1.5 text-xs font-semibold text-[#220901] group-hover:bg-[#BC3908] group-hover:border-[#BC3908] group-hover:text-white transition-all duration-200 shrink-0 whitespace-nowrap">
                        <span>{item.actionLabel || 'Read'}</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-[#EADBC6] bg-[#F6EFE2] p-12 text-center max-w-lg mx-auto">
              <BookOpen size={36} className="mx-auto text-[#BC3908] mb-3 opacity-80" />
              <h3 className="text-lg font-display font-bold text-[#220901] mb-1">
                No matching resources found
              </h3>
              <p className="text-xs text-[#563E37] mb-6">
                We couldn&apos;t find any publications matching “{searchQuery}” in the {selectedTag} category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('All');
                }}
                className="rounded-full bg-[#BC3908] hover:bg-[#941B0C] text-white text-xs font-bold px-5 py-2.5 transition-colors cursor-pointer"
              >
                Clear Filters &amp; Show All
              </button>
            </div>
          )}
        </div>
      </section>

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
