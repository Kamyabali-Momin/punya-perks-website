import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { BLOG_ARTICLES } from '../../data/blogArticles';
import {
  Search,
  ArrowRight,
  Clock,
  ChevronRight,
  CheckCircle2,
  Mail,
} from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    'All',
    'Product Updates',
    'Engineering',
    'Compliance',
    'UI/UX Design',
    'Strategy',
  ];

  const filtered = BLOG_ARTICLES.filter((a) => {
    const matchesCat = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesQ = `${a.title} ${a.excerpt} ${a.category}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    return matchesCat && matchesQ;
  });

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
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-[#847C75] mb-4">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link to="/resources" className="hover:text-[#B5651A] transition-colors">
              Resources
            </Link>
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
                aria-label="Search blog articles"
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

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-[#EBDFC6] bg-[#FAF5ED] p-12 text-center space-y-3">
              <p className="text-sm sm:text-base text-[#5B534C]">
                No blog articles found matching “{searchQuery}”.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white text-xs font-semibold px-5 py-2.5 transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-[22px] bg-[#FCF8F2] border border-[#EBDFC6] hover:border-[#B5651A]/70 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all"
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
                        <div className="text-xs font-semibold text-[#17140F] truncate">
                          {post.author.name}
                        </div>
                        <div className="text-[10px] text-[#847C75] truncate">{post.author.role}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#B5651A] inline-flex items-center gap-1 shrink-0 group-hover:translate-x-0.5 transition-transform">
                      Read <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};

export default BlogPage;
