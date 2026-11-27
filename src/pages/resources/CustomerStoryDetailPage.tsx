import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  ALL_CUSTOMER_STORIES,
  CUSTOMER_STORIES,
  getCustomerStoryBySlug,
} from '../../data/customerStories';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  ChevronRightIcon,
  ClockIcon,
  Globe2Icon,
  LayersIcon,
  QuoteIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from 'lucide-react';

export const CustomerStoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = getCustomerStoryBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!story) {
    return (
      <MainLayout>
        <section className="bg-[#FAF5ED] border-b border-[#E2D3B5] py-20 md:py-28 font-body text-[#14100B]">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4E9D2] border border-[#F3D7BD] px-3.5 py-1 text-xs font-mono font-bold text-[#8E5B13] uppercase">
              CASE STUDY NOT FOUND
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#14100B]">
              We couldn’t find that customer story
            </h1>
            <p className="text-sm sm:text-base text-[#5B534C]">
              This case study link may have moved. Browse all verified enterprise customer stories below.
            </p>
            <div className="pt-2">
              <Link
                to="/customers"
                className="inline-flex items-center gap-2 rounded-full bg-[#8E5B13] hover:bg-[#6E440B] px-6 py-3 text-xs font-semibold text-white transition-colors"
              >
                <ArrowLeftIcon size={14} />
                <span>Back to all Customer Stories</span>
              </Link>
            </div>
          </div>
        </section>
        <PageCta />
      </MainLayout>
    );
  }

  const relatedStories = CUSTOMER_STORIES.filter((item) => item.slug !== story.slug).slice(0, 3);

  return (
    <MainLayout>
      {/* Editorial Hero */}
      <section
        className="relative w-full border-b border-[#E2D3B5] pt-10 pb-14 sm:pt-12 sm:pb-18 font-body overflow-hidden text-[#14100B]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(142, 91, 19, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(142, 91, 19, 0.045) 1px, transparent 1px)",
          backgroundColor: '#F7F1E4', backgroundSize: '56px 56px',
        }}
      >
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#847C75] font-body">
              <li>
                <Link to="/" className="hover:text-[#8E5B13] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <Link to="/resources" className="hover:text-[#8E5B13] transition-colors">
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <Link to="/customers" className="hover:text-[#8E5B13] transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                <span className="text-[#14100B] font-semibold truncate max-w-[240px] sm:max-w-xs" aria-current="page">
                  {story.tag}
                </span>
              </li>
            </ol>
          </nav>

          <div className="mt-7 grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-[#E2D3B5] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#8E5B13]">
                  <SparklesIcon size={12} />
                  <span>{story.tag}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/75 border border-[#E2D3B5] px-3 py-1 text-[11px] font-mono font-medium text-[#5B534C]">
                  <Globe2Icon size={12} className="text-[#8E5B13]" />
                  <span>{story.region}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#847C75]">
                  <ClockIcon size={12} />
                  <span>{story.readTime}</span>
                </span>
              </div>

              <h1 className="font-display text-[30px] sm:text-[42px] font-bold leading-[1.16] tracking-tight text-[#14100B]">
                {story.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-2xl">
                {story.summary}
              </p>

              {/* Author & Back strip */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2D3B5]/80">
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={story.authorAvatar}
                    alt={story.author}
                    className="h-10 w-10 rounded-full object-cover border border-[#E2D3B5]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                  <div>
                    <div className="text-sm font-bold text-[#14100B]">{story.author}</div>
                    <div className="text-xs text-[#5B534C]">
                      {story.authorRole} · {story.companyArchetype}
                    </div>
                  </div>
                </div>

                <Link
                  to="/customers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E5B13] hover:text-[#6E440B] transition-colors pt-2"
                >
                  <ArrowLeftIcon size={14} />
                  <span>All Customer Stories ({ALL_CUSTOMER_STORIES.length})</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E2D3B5] bg-white shadow-xl aspect-[4/3]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-[#14100B]/85 backdrop-blur-md px-4 py-3 text-white flex items-center justify-between gap-3 border border-white/10">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#F3D7BD]">
                      {story.headlineMetricLabel}
                    </div>
                    <div className="text-xs text-white/80 font-body">{story.meta}</div>
                  </div>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#D4A147] shrink-0">
                    {story.headlineMetric}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Metrics Strip */}
      <section className="bg-white border-b border-[#E2D3B5] py-8 sm:py-10 font-body">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
              story.metrics.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
            }`}
          >
            {story.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-[#FAF5ED] border border-[#E2D3B5] p-5 sm:p-6"
              >
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#8E5B13] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#14100B] mt-1.5">
                  {metric.label}
                </div>
                {metric.detail && (
                  <p className="text-xs text-[#5B534C] mt-1">{metric.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Story + Sidebar */}
      <section className="bg-white py-12 sm:py-16 font-body text-[#14100B] border-b border-[#E2D3B5]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Main Narrative */}
            <div className="lg:col-span-8 space-y-10">
              {/* Challenge */}
              <div className="space-y-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8E5B13]">
                  01 · The Challenge
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#14100B]">
                  Why legacy workflows were holding loyalty back
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#5B534C] leading-relaxed">
                  {story.challenge.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Solution Architecture */}
              <div className="space-y-5 pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8E5B13]">
                  02 · The Solution
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#14100B]">
                  How Punya Perks was deployed
                </h2>
                <p className="text-sm sm:text-base text-[#5B534C] leading-relaxed">
                  {story.solution.intro}
                </p>

                <div className="grid gap-4 sm:grid-cols-1 pt-2">
                  {story.solution.pillars.map((pillar, idx) => (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-[#E2D3B5] bg-[#FAF5ED]/70 p-5 sm:p-6 flex gap-4 items-start"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8E5B13] text-white font-mono text-xs font-bold">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1.5">
                        <h3 className="font-display font-bold text-lg text-[#14100B]">
                          {pillar.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measured Results */}
              <div className="space-y-4 pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8E5B13]">
                  03 · Verified Business Outcomes
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#14100B]">
                  Measured results after launch
                </h2>
                <ul className="space-y-3 pt-1">
                  {story.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-3 rounded-xl border border-[#E2D3B5] bg-white p-4 text-sm text-[#14100B] font-medium shadow-2xs"
                    >
                      <CheckCircle2Icon size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Callout */}
              <div className="rounded-3xl bg-[#FAF5ED] border border-[#E2D3B5] p-7 sm:p-9 space-y-4">
                <QuoteIcon size={24} className="text-[#8E5B13]" />
                <blockquote className="font-display italic text-xl sm:text-2xl text-[#14100B] leading-snug">
                  “{story.quote.text}”
                </blockquote>
                <div className="text-xs font-mono font-semibold text-[#5B534C]">
                  {story.quote.attribution}
                </div>
              </div>
            </div>

            {/* Sticky Deployment Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-[#E2D3B5] bg-[#FAF5ED]/75 p-6 sm:p-7 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8E5B13]">
                  <LayersIcon size={15} />
                  <span>Deployment Profile</span>
                </div>

                <dl className="space-y-4 text-xs sm:text-sm divide-y divide-[#E2D3B5]">
                  <div className="pt-1">
                    <dt className="text-[#847C75] text-[11px] font-mono uppercase">Customer</dt>
                    <dd className="font-semibold text-[#14100B] mt-0.5">{story.companyArchetype}</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-[#847C75] text-[11px] font-mono uppercase">Time to Go-Live</dt>
                    <dd className="font-semibold text-[#14100B] mt-0.5">{story.launchTime}</dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-[#847C75] text-[11px] font-mono uppercase">Compliance &amp; Security</dt>
                    <dd className="font-semibold text-[#14100B] mt-0.5 flex items-center gap-1.5">
                      <ShieldCheckIcon size={14} className="text-emerald-700 shrink-0" />
                      <span>{story.complianceFramework}</span>
                    </dd>
                  </div>
                  <div className="pt-3">
                    <dt className="text-[#847C75] text-[11px] font-mono uppercase mb-2">
                      Connected Stack
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {story.integrationsUsed.map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full bg-white border border-[#E2D3B5] px-2.5 py-1 text-[11px] font-medium text-[#14100B]"
                        >
                          {stack}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="pt-2 space-y-2.5 border-t border-[#E2D3B5]">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#847C75]">
                    Modules Deployed
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {story.modulesUsed.map((mod) => (
                      <Link
                        key={mod.href}
                        to={mod.href}
                        className="rounded-full bg-white hover:bg-[#F4E9D2] border border-[#E2D3B5] hover:border-[#8E5B13] px-3 py-1.5 text-xs font-semibold text-[#14100B] hover:text-[#8E5B13] transition-colors inline-flex items-center gap-1"
                      >
                        <span>{mod.name}</span>
                        <ArrowRightIcon size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Walkthrough CTA */}
              <div className="rounded-3xl bg-[#14100B] text-white p-6 sm:p-7 space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D4A147]">
                  ARCHITECTURE WALKTHROUGH
                </span>
                <h3 className="font-display font-bold text-xl text-white leading-snug">
                  Planning a similar loyalty rollout?
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Review live POS latency benchmarks, ledger schema, and migration timelines with a solutions architect.
                </p>
                <div className="flex flex-col gap-2.5 pt-1">
                  <Link
                    to="/demo"
                    className="w-full rounded-full bg-[#A36D1C] hover:bg-[#8E5B13] py-3 px-5 text-xs font-semibold text-white text-center transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Book Architecture Demo</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                  <Link
                    to="/start"
                    className="w-full rounded-full border border-white/20 hover:border-white/40 py-2.5 px-5 text-xs font-semibold text-white/90 text-center transition-colors"
                  >
                    Launch Sandbox Tenant
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Customer Stories */}
      <section className="bg-[#FAF5ED]/60 py-12 sm:py-16 font-body border-b border-[#E2D3B5]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8E5B13]">
                CONTINUE EXPLORING
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#14100B] mt-1">
                More Enterprise Customer Stories
              </h2>
            </div>
            <Link
              to="/customers"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8E5B13] hover:text-[#6E440B] transition-colors"
            >
              <span>View all stories</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedStories.map((item) => (
              <Link
                key={item.slug}
                to={`/customers/${item.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-[#E2D3B5] bg-white p-5 hover:border-[#8E5B13] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-[#F4E9D2] border border-[#F3D7BD] px-2.5 py-0.5 text-[11px] font-mono font-semibold text-[#8E5B13]">
                      {item.tag}
                    </span>
                    <span className="font-display font-bold text-lg text-[#8E5B13]">
                      {item.headlineMetric}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#14100B] group-hover:text-[#8E5B13] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#5B534C] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F2EAE0] flex items-center justify-between text-xs font-semibold text-[#14100B] group-hover:text-[#8E5B13]">
                  <span>{item.meta}</span>
                  <span className="inline-flex items-center gap-1">
                    Read Case Study <ArrowRightIcon size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};

export default CustomerStoryDetailPage;
