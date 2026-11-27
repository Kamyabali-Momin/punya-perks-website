import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export const RecentBlogPostsSection: React.FC = () => {
  const featuredPost = {
    category: 'UI/UX Design',
    date: '24 Feb 2026',
    title: 'UX review presentations',
    excerpt: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    image: '/images/blog/blog-featured.jpg',
    href: '/resources/ux-review-presentations',
    author: {
      name: 'Aryan Kantharia',
      role: 'Lead UI/UX Designer at Punya Perks',
      avatar: '/images/blog/author-aryan.jpg',
    },
  };

  const sidePosts = [
    {
      category: 'Technology',
      date: '23 Feb 2026',
      title: 'Migrating to Linear 101',
      excerpt: 'Linear helps streamline software projects, sprints, tasks, and bug..',
      image: '/images/blog/blog-linear.jpg',
      href: '/resources/migrating-to-linear-101',
      author: {
        name: 'Aryan Kantharia',
        role: 'Lead UI/UX Designer at Punya Perks',
        avatar: '/images/blog/author-aryan.jpg',
      },
    },
    {
      category: 'Technology',
      date: '23 Feb 2026',
      title: 'Building your API Stack',
      excerpt: 'The rise of RESTful APIs has been met by a rise in tools for creatin..',
      image: '/images/blog/blog-api.jpg',
      href: '/resources/building-your-api-stack',
      author: {
        name: 'Aryan Kantharia',
        role: 'Lead UI/UX Designer at Punya Perks',
        avatar: '/images/blog/author-aryan.jpg',
      },
    },
  ];

  return (
    <section className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-16 sm:py-20 lg:py-24 font-body" id="blogs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 reveal-on-scroll">
          <div>
            <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
              BLOGS
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[40px] text-[#220901] tracking-tight leading-[1.15]">
              Recent blog posts
            </h2>
          </div>

          <a
            href="/resources"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#220901] text-[#220901] font-body text-xs sm:text-sm font-medium hover:bg-[#220901] hover:text-[#FDFBF7] transition-all self-start sm:self-auto shrink-0 group"
          >
            <span>View all</span>
            <ArrowRightIcon size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 2-Column Responsive Layout - Equal Height on LG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 reveal-on-scroll delay-100">
          {/* Left Column: Big Featured Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <a
              href={featuredPost.href}
              className="group rounded-[20px] bg-white p-6 sm:p-7 border border-[#EADBC6] shadow-xs hover:shadow-md hover:border-[#BC3908]/40 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Featured Thumbnail */}
                <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] rounded-[16px] overflow-hidden bg-[#F6EFE2] mb-5 relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Meta Tag */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-body font-semibold text-xs text-[#BC3908]">
                    {featuredPost.category}
                  </span>
                  <span className="text-[#826B63] text-xs">·</span>
                  <span className="font-body text-xs text-[#826B63]">
                    {featuredPost.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-normal text-2xl sm:text-[26px] text-[#220901] group-hover:text-[#BC3908] transition-colors leading-[1.3] mb-3">
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-xs sm:text-sm text-[#563E37] leading-[1.6] mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Author Footer with clean divider line */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EADBC6] mt-auto">
                <img
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#EADBC6]"
                  loading="lazy"
                />
                <div>
                  <div className="font-body font-semibold text-xs text-[#220901]">
                    By {featuredPost.author.name}
                  </div>
                  <div className="font-body text-[11px] text-[#826B63]">
                    {featuredPost.author.role}
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: 2 Horizontal Stacked Cards (5 cols) matching Left Card Height */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            {sidePosts.map((post, idx) => (
              <a
                key={idx}
                href={post.href}
                className="group rounded-[20px] bg-white p-5 sm:p-6 border border-[#EADBC6] shadow-xs hover:shadow-md hover:border-[#BC3908]/40 transition-all duration-300 flex-1 flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start mb-4 min-w-0">
                  {/* Thumbnail Image */}
                  <div className="w-full h-44 sm:w-36 sm:h-28 rounded-[14px] overflow-hidden bg-[#F6EFE2] shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="font-body font-semibold text-xs text-[#BC3908]">
                        {post.category}
                      </span>
                      <span className="text-[#826B63] text-xs">·</span>
                      <span className="font-body text-xs text-[#826B63]">
                        {post.date}
                      </span>
                    </div>

                    <h4 className="font-display font-normal text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors leading-[1.3] mb-1.5 line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="font-body text-xs text-[#563E37] leading-[1.5] line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author Footer (Aligned at the bottom) */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-[#EADBC6]/60 mt-auto">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-[#EADBC6]"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-body font-semibold text-xs text-[#220901]">
                      By {post.author.name}
                    </div>
                    <div className="font-body text-[11px] text-[#826B63]">
                      {post.author.role}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
