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
        className="py-20 sm:py-28 font-body border-b border-[#EADBC6]"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#EADBC6] shadow-xs mb-4">
            <ShieldAlert className="w-4 h-4 text-[#BC3908]" />
            <span className="font-mono text-xs font-bold text-[#BC3908] tracking-[0.2em] uppercase">
              Error 404 · Page Not Found
            </span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-[#220901] tracking-tight max-w-2xl mx-auto">
            That page has expired or moved.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#563E37] max-w-lg mx-auto leading-relaxed">
            Unlike your members' earned loyalty points, we cannot restore this exact URL. Search our public sitemap below to find what you need.
          </p>

          {/* Interactive Live Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-[#826B63] absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 44 pages (e.g. pricing, whatsapp, help)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-2 border-[#EADBC6] text-sm sm:text-base text-[#220901] placeholder-[#826B63] outline-none shadow-md focus:border-[#BC3908] focus:ring-2 focus:ring-[#BC3908]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-semibold text-[#826B63] hover:text-[#220901] bg-[#F6EFE2] px-2.5 py-1 rounded-full cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Top Links matching Sitemap Specifications */}
      <section className="py-16 md:py-20 bg-[#FDFBF7] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-8">
          <div className="flex items-center justify-between border-b border-[#EADBC6] pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#BC3908]" />
              <h2 className="font-display font-bold text-lg text-[#220901]">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Recommended Destinations'}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#826B63]">
              {filteredLinks.length} destinations available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="p-5 rounded-2xl bg-white border border-[#EADBC6] hover:border-[#BC3908] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[#BC3908] bg-[#F6EFE2] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {item.section}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#826B63] group-hover:text-[#BC3908] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#220901] group-hover:text-[#BC3908] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#563E37] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F6EFE2] text-[11px] font-mono text-[#826B63]">
                  {item.href}
                </div>
              </a>
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#EADBC6]">
              <HelpCircle className="w-10 h-10 text-[#826B63] mx-auto mb-3" />
              <p className="text-base font-bold text-[#220901]">No pages found matching "{searchQuery}"</p>
              <p className="text-xs text-[#563E37] mt-1">Try checking your spelling or visit our homepage.</p>
              <a
                href="/"
                className="mt-4 inline-block px-5 py-2 rounded-full bg-[#220901] text-white text-xs font-semibold"
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
