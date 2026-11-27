import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  ALL_PUBLICATIONS,
  BLOG_ARTICLES,
  getBlogArticleBySlug,
} from '../../data/blogArticles';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Link2,
  Mail,
} from 'lucide-react';

export const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getBlogArticleBySlug(slug);
  const [copied, setCopied] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCopied(false);
  }, [slug]);

  const handleCopyLink = () => {
    if (navigator.clipboard && window.location.href) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail.trim()) {
      setSubscribed(true);
      setSubscribeEmail('');
    }
  };

  if (!article) {
    return (
      <MainLayout>
        <section className="bg-[#F6EFE2] border-b border-[#EADBC6] py-20 md:py-28 font-body text-[#220901]">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 text-center space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6EFE2] border border-[#F4D89C] px-3.5 py-1 text-xs font-mono font-bold text-[#BC3908] uppercase">
              ARTICLE NOT FOUND
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#220901]">
              We couldn’t find that blog article
            </h1>
            <p className="text-sm sm:text-base text-[#563E37]">
              The article you requested may have moved or been updated. Explore all engineering, compliance, and product posts below.
            </p>
            <div className="pt-2">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#BC3908] hover:bg-[#941B0C] px-6 py-3 text-xs font-semibold text-white transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to all blog posts</span>
              </Link>
            </div>
          </div>
        </section>
        <PageCta />
      </MainLayout>
    );
  }

  const currentIdx = BLOG_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prevArticle = currentIdx > 0 ? BLOG_ARTICLES[currentIdx - 1] : null;
  const nextArticle =
    currentIdx >= 0 && currentIdx < BLOG_ARTICLES.length - 1
      ? BLOG_ARTICLES[currentIdx + 1]
      : null;

  const relatedArticles = ALL_PUBLICATIONS.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <MainLayout>
      {/* Editorial Article Header */}
      <section
        className="relative w-full border-b border-[#EADBC6] pt-10 pb-14 sm:pt-12 sm:pb-18 font-body overflow-hidden text-[#220901]"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#826B63]">
              <li>
                <Link to="/" className="hover:text-[#BC3908] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} aria-hidden="true" />
                <Link to="/resources" className="hover:text-[#BC3908] transition-colors">
                  Resources
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} aria-hidden="true" />
                <Link to="/blog" className="hover:text-[#BC3908] transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-[#220901] font-semibold truncate max-w-[220px] sm:max-w-xs" aria-current="page">
                  {article.category}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Title + Meta */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center rounded-full bg-white/90 border border-[#EADBC6] px-3 py-1 font-mono font-bold uppercase tracking-wider text-[#BC3908] text-[11px]">
                  {article.category}
                </span>
                <span className="text-[#563E37] font-medium">{article.date}</span>
                <span className="text-[#826B63]">·</span>
                <span className="text-[#563E37] inline-flex items-center gap-1 font-mono text-[11px]">
                  <Clock size={12} className="text-[#BC3908]" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#220901] leading-[1.15] tracking-tight">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg text-[#563E37] leading-relaxed">
                {article.excerpt}
              </p>

              <div className="pt-3 border-t border-[#EADBC6]/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#EADBC6]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/blog/author-aryan.jpg';
                    }}
                  />
                  <div>
                    <div className="text-sm font-bold text-[#220901]">{article.author.name}</div>
                    <div className="text-xs text-[#563E37]">{article.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/90 hover:bg-white border border-[#EADBC6] px-3.5 py-2 text-xs font-semibold text-[#220901] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-emerald-700" />
                        <span className="text-emerald-700">Link copied</span>
                      </>
                    ) : (
                      <>
                        <Link2 size={13} className="text-[#BC3908]" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BC3908] hover:text-[#621708] transition-colors px-2"
                  >
                    <ArrowLeft size={14} />
                    <span>All Posts</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#EADBC6] bg-white shadow-xl aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
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

      {/* Main Two-Column Reading Experience */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#EADBC6] font-body text-[#220901]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Sticky Left Rail: TOC + Author + Newsletter */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Table of Contents */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F6EFE2] border border-[#EADBC6] space-y-3.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#BC3908] flex items-center gap-1.5">
                  <BookOpen size={13} />
                  <span>In This Article</span>
                </div>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {article.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block font-medium text-[#563E37] hover:text-[#BC3908] transition-colors leading-snug"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#key-takeaways"
                        className="block font-medium text-[#563E37] hover:text-[#BC3908] transition-colors leading-snug"
                      >
                        Key Takeaways
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Author Bio Box */}
              <div className="p-5 sm:p-6 rounded-2xl border border-[#EADBC6] bg-white space-y-3">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#826B63]">
                  About the Author
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#EADBC6]"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#220901]">{article.author.name}</div>
                    <div className="text-xs text-[#BC3908] font-medium">{article.author.role}</div>
                  </div>
                </div>
                <p className="text-xs text-[#563E37] leading-relaxed">{article.author.bio}</p>
              </div>

              {/* Mini Engineering Notes Subscribe */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#220901] text-white space-y-3.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F6AA1C]">
                  ENGINEERING &amp; PRODUCT NOTES
                </span>
                <h3 className="font-display font-bold text-lg text-white leading-snug">
                  Get new loyalty architecture posts once a month
                </h3>
                {subscribed ? (
                  <div className="rounded-xl bg-white/10 border border-white/15 p-3 text-xs text-[#F6AA1C] flex items-center gap-2">
                    <CheckCircle2 size={15} className="shrink-0" />
                    <span>Subscribed to monthly product &amp; ledger notes.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2.5">
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
                      <input
                        type="email"
                        required
                        value={subscribeEmail}
                        onChange={(e) => setSubscribeEmail(e.target.value)}
                        placeholder="Work email address"
                        className="w-full h-10 pl-9 pr-3 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/50 outline-none focus:border-[#F6AA1C]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full h-10 rounded-xl bg-[#F6AA1C] hover:bg-[#BC3908] text-xs font-semibold text-white transition-colors cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </aside>

            {/* Right Article Body */}
            <article className="lg:col-span-8 space-y-9">
              {article.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                  <h2 className="font-display font-bold text-2xl sm:text-[28px] text-[#220901] leading-snug">
                    {section.heading}
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-[#563E37] leading-[1.75]">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-1">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#220901] bg-[#F6EFE2]/70 border border-[#EADBC6] rounded-xl p-3.5"
                        >
                          <CheckCircle2 size={16} className="text-[#BC3908] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.codeSnippet && (
                    <div className="rounded-2xl bg-[#220901] text-white border border-[#4A1106] overflow-hidden shadow-sm">
                      <div className="px-4 py-2.5 border-b border-white/10 text-[11px] font-mono text-[#F6AA1C] flex items-center justify-between">
                        <span>{section.codeSnippet.title}</span>
                        <span className="text-emerald-400">verified spec</span>
                      </div>
                      <pre className="p-4 sm:p-5 text-xs font-mono text-white/90 overflow-x-auto leading-relaxed">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}

              {/* Key Takeaways Box */}
              <div
                id="key-takeaways"
                className="scroll-mt-28 p-6 sm:p-7 rounded-3xl bg-[#F6EFE2] border border-[#EADBC6] space-y-4"
              >
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#BC3908]">
                  Key Takeaways
                </div>
                <ul className="space-y-2.5">
                  {article.takeaways.map((takeaway) => (
                    <li
                      key={takeaway}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#220901]"
                    >
                      <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topic Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#F6EFE2] border border-[#EADBC6] px-3 py-1 text-[11px] font-mono font-medium text-[#563E37]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Prev / Next Navigation */}
              {(prevArticle || nextArticle) && (
                <div className="pt-6 border-t border-[#EADBC6] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevArticle ? (
                    <Link
                      to={`/blog/${prevArticle.slug}`}
                      className="group p-4 rounded-2xl border border-[#EADBC6] hover:border-[#BC3908] bg-[#FDFBF7] transition-all"
                    >
                      <div className="text-[11px] font-mono text-[#826B63] inline-flex items-center gap-1 mb-1">
                        <ArrowLeft size={12} />
                        <span>Previous Article</span>
                      </div>
                      <div className="font-display font-bold text-sm sm:text-base text-[#220901] group-hover:text-[#BC3908] transition-colors leading-snug">
                        {prevArticle.title}
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextArticle && (
                    <Link
                      to={`/blog/${nextArticle.slug}`}
                      className="group p-4 rounded-2xl border border-[#EADBC6] hover:border-[#BC3908] bg-[#FDFBF7] transition-all sm:text-right"
                    >
                      <div className="text-[11px] font-mono text-[#826B63] inline-flex items-center gap-1 mb-1">
                        <span>Next Article</span>
                        <ArrowRight size={12} />
                      </div>
                      <div className="font-display font-bold text-sm sm:text-base text-[#220901] group-hover:text-[#BC3908] transition-colors leading-snug">
                        {nextArticle.title}
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles Strip */}
      <section className="bg-[#F6EFE2]/60 py-12 sm:py-16 border-b border-[#EADBC6] font-body">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#BC3908]">
                MORE FROM THE BLOG
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#220901] mt-1">
                Continue Reading
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#BC3908] hover:text-[#621708] transition-colors"
            >
              <span>View all blog posts</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl bg-white border border-[#EADBC6] hover:border-[#BC3908] p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="h-40 rounded-xl overflow-hidden bg-[#F6EFE2] mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] mb-2">
                    <span className="font-bold text-[#BC3908]">{post.category}</span>
                    <span className="text-[#826B63]">·</span>
                    <span className="text-[#826B63]">{post.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EFE3D0] flex items-center justify-between text-xs font-semibold text-[#BC3908]">
                  <span className="text-[#563E37] font-normal">{post.author.name}</span>
                  <span className="inline-flex items-center gap-1">
                    Read <ArrowRight size={13} />
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

export default BlogPostDetailPage;
