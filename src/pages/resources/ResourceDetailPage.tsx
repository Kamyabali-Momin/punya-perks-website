import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { getBlogArticleBySlug } from '../../data/blogArticles';
import { BlogPostDetailPage } from './BlogPostDetailPage';
import {
  getResourceById,
  RESOURCE_ITEMS,
} from '../../data/resourcesCatalog';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Sparkles,
} from 'lucide-react';

export const ResourceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = getResourceById(slug);
  const blogMatch = !resource ? getBlogArticleBySlug(slug) : undefined;

  const [gateName, setGateName] = useState('');
  const [gateEmail, setGateEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setDownloadSuccess(false);
  }, [slug]);

  if (!resource && blogMatch) {
    return <BlogPostDetailPage />;
  }

  if (!resource) {
    return (
      <MainLayout>
        <section className="bg-[#FAF5ED] border-b border-[#EBDFC6] py-20 md:py-28 font-body text-[#17140F]">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 text-center space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FEF0E1] border border-[#F3D7BD] px-3.5 py-1 text-xs font-mono font-bold text-[#B5651A] uppercase">
              RESOURCE NOT FOUND
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#17140F]">
              We couldn’t find that resource publication
            </h1>
            <p className="text-sm sm:text-base text-[#5B534C]">
              Browse our full library of playbooks, compliance guides, 2026 benchmarks, and architecture comparisons below.
            </p>
            <div className="pt-2">
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-6 py-3 text-xs font-semibold text-white transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Resources Hub</span>
              </Link>
            </div>
          </div>
        </section>
        <PageCta />
      </MainLayout>
    );
  }

  const relatedResources = RESOURCE_ITEMS.filter((r) => r.id !== resource.id).slice(0, 3);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (gateEmail.trim()) {
      setDownloadSuccess(true);
    }
  };

  return (
    <MainLayout>
      {/* Editorial Hero */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-10 pb-14 sm:pt-12 sm:pb-18 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#847C75]">
              <li>
                <Link to="/" className="hover:text-[#B5651A] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} aria-hidden="true" />
                <Link to="/resources" className="hover:text-[#B5651A] transition-colors">
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-[#17140F] font-semibold" aria-current="page">
                  {resource.tag}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-[#EBDFC6] px-3 py-1 font-mono font-bold uppercase tracking-wider text-[#B5651A] text-[11px]">
                  <Sparkles size={12} />
                  <span>{resource.tag}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[#5B534C] font-mono text-[11px]">
                  <Clock size={12} className="text-[#B5651A]" />
                  <span>{resource.meta}</span>
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#17140F] leading-[1.15] tracking-tight">
                {resource.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5B534C] leading-relaxed">
                {resource.text}
              </p>

              <div className="pt-3 border-t border-[#EBDFC6]/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FEF0E1] border border-[#F6DECA] text-[#B5651A] font-bold text-sm flex items-center justify-center font-display shrink-0">
                    {resource.author.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#17140F]">{resource.author.name}</div>
                    <div className="text-xs text-[#5B534C]">{resource.author.role}</div>
                  </div>
                </div>

                <Link
                  to="/resources"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B5651A] hover:text-[#9a5413] transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>All Resources Hub</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#EBDFC6] bg-white shadow-xl aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/blog/blog-featured.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip if present */}
      {resource.metrics && (
        <section className="bg-white border-b border-[#EBDFC6] py-8 font-body">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {resource.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] p-5">
                  <div className="font-display font-extrabold text-3xl text-[#B5651A]">{m.value}</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#5B534C] mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content + Gated Asset Sidebar */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#EBDFC6] font-body text-[#17140F]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Reading Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Executive Summary Callout */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] block">
                  Executive Summary
                </span>
                <p className="text-sm sm:text-base text-[#17140F] leading-relaxed font-medium">
                  {resource.summary}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display font-bold text-2xl sm:text-[28px] text-[#17140F] leading-snug">
                  {resource.content.heading1}
                </h2>
                <p className="text-sm sm:text-base text-[#5B534C] leading-[1.75]">
                  {resource.content.para1}
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display font-bold text-2xl sm:text-[28px] text-[#17140F] leading-snug">
                  {resource.content.heading2}
                </h2>
                <p className="text-sm sm:text-base text-[#5B534C] leading-[1.75]">
                  {resource.content.para2}
                </p>
              </div>

              {resource.content.heading3 && resource.content.para3 && (
                <div className="space-y-3">
                  <h2 className="font-display font-bold text-2xl sm:text-[28px] text-[#17140F] leading-snug">
                    {resource.content.heading3}
                  </h2>
                  <p className="text-sm sm:text-base text-[#5B534C] leading-[1.75]">
                    {resource.content.para3}
                  </p>
                </div>
              )}

              {/* Key Highlights Checklist */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] block">
                  Key Highlights &amp; Takeaways
                </span>
                <ul className="space-y-3">
                  {resource.content.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#17140F] bg-white rounded-xl border border-[#EBDFC6] p-3.5"
                    >
                      <CheckCircle2 size={16} className="text-[#1B8756] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sticky Download & Architecture Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Gated PDF Download Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A]">
                  <FileText size={16} />
                  <span>Full Publication PDF</span>
                </div>
                <p className="text-xs text-[#5B534C] leading-relaxed">
                  Download the complete guide with architecture diagrams, POS latency tables, and audit checklists.
                </p>

                {downloadSuccess ? (
                  <div className="rounded-2xl bg-white border border-emerald-200 p-4 space-y-2 text-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <Check size={16} />
                    </div>
                    <div className="text-xs font-bold text-[#17140F]">Download Link Dispatched</div>
                    <p className="text-[11px] text-[#5B534C]">
                      Sent to <span className="font-semibold text-[#17140F]">{gateEmail}</span>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDownload} className="space-y-2.5">
                    <input
                      type="text"
                      value={gateName}
                      onChange={(e) => setGateName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#EBDFC6] text-xs outline-none focus:border-[#B5651A]"
                    />
                    <input
                      type="email"
                      required
                      value={gateEmail}
                      onChange={(e) => setGateEmail(e.target.value)}
                      placeholder="Work email address"
                      className="w-full h-10 px-3.5 rounded-xl bg-white border border-[#EBDFC6] text-xs outline-none focus:border-[#B5651A]"
                    />
                    <button
                      type="submit"
                      className="w-full h-11 px-4 rounded-xl bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Download size={15} />
                      <span>{resource.downloadText || 'Download Free PDF'}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Dark Demo CTA Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#17140F] text-white border border-[#3E2C20] space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F5B06B] block">
                  DEPLOY PUNYA PERKS
                </span>
                <h3 className="font-display font-bold text-xl text-white leading-snug">
                  Implement this architecture in 4 weeks
                </h3>
                <p className="text-xs text-[#D8CFBF] leading-relaxed">
                  See append-only double-entry ledgers and sub-110ms POS sync in action with a tailored architecture session.
                </p>
                <div className="flex flex-col gap-2.5">
                  <Link
                    to="/demo"
                    className="w-full py-3 px-4 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Book Platform Demo</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    to="/start"
                    className="w-full py-2.5 px-4 rounded-full border border-white/20 hover:border-white/40 text-white/90 font-semibold text-xs text-center transition-colors"
                  >
                    Launch Free Sandbox
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Resources Grid */}
      <section className="bg-[#FAF5ED]/60 py-12 sm:py-16 border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#B5651A]">
                MORE PUBLICATIONS
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17140F] mt-1">
                Explore Other Guides &amp; Briefs
              </h2>
            </div>
            <Link
              to="/resources"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B5651A] hover:text-[#9a5413] transition-colors"
            >
              <span>Browse all resources</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedResources.map((rel) => (
              <Link
                key={rel.id}
                to={`/resources/${rel.id}`}
                className="group bg-white rounded-2xl border border-[#EBDFC6] hover:border-[#B5651A] p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-md bg-[#FEF0E1] border border-[#F6DECA] px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase text-[#B5651A]">
                      {rel.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[#847C75]">{rel.meta}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors leading-snug mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#5B534C] line-clamp-2 leading-relaxed">{rel.text}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F2EAE0] flex items-center justify-between text-xs font-semibold text-[#B5651A]">
                  <span className="text-[#5B534C] font-normal">{rel.author.name}</span>
                  <span className="inline-flex items-center gap-1">
                    {rel.actionLabel || 'Read'} <ArrowRight size={13} />
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

export default ResourceDetailPage;
