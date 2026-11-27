import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Search, ArrowRight, Compass, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

interface QuickLink {
  title: string;
  href: string;
  section: string;
  description: string;
}

export const NotFoundPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const directory: QuickLink[] = [
    { title: 'Product Overview', href: '/product', section: 'Product', description: 'Tour of the 4 operational pillars: Earn, Burn, Engage, Operate.' },
    { title: 'Earn & Rules Engine', href: '/product/earn', section: 'Product', description: 'Multi-rule earning, tier multipliers, card linking.' },
    { title: 'WhatsApp Loyalty', href: '/product/whatsapp', section: 'Product', description: 'Zero-app friction points balance and QR redemption in chat.' },
    { title: 'Retail & Fashion', href: '/solutions/retail', section: 'Solutions', description: 'POS omnichannel loyalty for apparel, jewelry, and departmental stores.' },
    { title: 'Banking & Cards', href: '/solutions/banking', section: 'Solutions', description: 'Co-branded credit card reward programs with real-time accruals.' },
    { title: 'Developers Portal', href: '/developers', section: 'Platform', description: 'REST APIs, webhooks, rate limits, and Postman collections.' },
    { title: 'System Status', href: '/status', section: 'Platform', description: '99.99% real-time uptime across AWS Mumbai, UAE, and Sydney.' },
    { title: 'Help Centre', href: '/help', section: 'Resources', description: 'Troubleshooting guides, FAQs, and ticket submission.' },
    { title: 'Pricing & Tiers', href: '/pricing', section: 'Pricing', description: 'Transparent pricing with active member tiers and enterprise SLAs.' },
    { title: 'Customer Stories', href: '/customers', section: 'Resources', description: 'Case studies from retail and enterprise brands.' },
    { title: 'About Punya Perks', href: '/about', section: 'Company', description: 'Our mission, leadership team, and regional hubs.' },
    { title: 'Contact Us', href: '/contact', section: 'Company', description: 'Speak with our regional loyalty architects in Surat, Dubai, or Melbourne.' },
  ];

  const filteredLinks = directory.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.section.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });

  return (
    <MainLayout>
      <section
        className="py-20 sm:py-28 font-body border-b border-[#E2D3B5]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(142, 91, 19, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(142, 91, 19, 0.045) 1px, transparent 1px)",
          backgroundColor: '#F7F1E4', backgroundSize: '56px 56px',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E2D3B5] shadow-xs mb-4">
            <ShieldAlert className="w-4 h-4 text-[#8E5B13]" />
            <span className="font-mono text-xs font-bold text-[#8E5B13] tracking-[0.2em] uppercase">
              Error 404 · Page Not Found
            </span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-[#14100B] tracking-tight max-w-2xl mx-auto">
            That page has expired or moved.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#5B534C] max-w-lg mx-auto leading-relaxed">
            Unlike your members' earned loyalty points, we cannot restore this exact URL. Search our public sitemap below to find what you need.
          </p>

          {/* Interactive Live Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#8C827A] absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 44 pages (e.g. pricing, whatsapp, help)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-2 border-[#E2D3B5] text-sm sm:text-base text-[#14100B] placeholder-[#8C827A] outline-none shadow-md focus:border-[#8E5B13] focus:ring-2 focus:ring-[#8E5B13]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-semibold text-[#8C827A] hover:text-[#14100B] bg-[#FAF3E8] px-2.5 py-1 rounded-full cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Top Links matching Sitemap Specifications */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E2D3B5] pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#8E5B13]" />
              <h2 className="font-display font-bold text-lg text-[#14100B]">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Recommended Destinations'}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#8C827A]">
              {filteredLinks.length} destinations available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="p-5 rounded-2xl bg-white border border-[#E2D3B5] hover:border-[#8E5B13] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[#8E5B13] bg-[#FAF3E8] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.section}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#8C827A] group-hover:text-[#8E5B13] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#14100B] group-hover:text-[#8E5B13] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5B534C] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#FAF3E8] text-[11px] font-mono text-[#8C827A]">
                  {item.href}
                </div>
              </a>
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#E2D3B5]">
              <HelpCircle className="w-10 h-10 text-[#8C827A] mx-auto mb-3" />
              <p className="text-base font-bold text-[#14100B]">No pages found matching "{searchQuery}"</p>
              <p className="text-xs text-[#5B534C] mt-1">Try checking your spelling or visit our homepage.</p>
              <a
                href="/"
                className="mt-4 inline-block px-5 py-2 rounded-full bg-[#14100B] text-white text-xs font-semibold"
              >
                Return to Homepage
              </a>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default NotFoundPage;
