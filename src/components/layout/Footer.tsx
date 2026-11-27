import React, { useState } from 'react';
import { LinkedinIcon, YoutubeIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const productLinks = [
    { label: 'Earn & rules', href: '/product/earn' },
    { label: 'Campaigns & offers', href: '/product/campaigns' },
    { label: 'Redemption', href: '/product/redeem' },
    { label: 'Tiers & member app', href: '/product/member-app' },
    { label: 'Analytics & CDP', href: '/product/analytics' },
    { label: 'Trust & compliance', href: '/product/trust' },
    { label: 'WhatsApp', href: '/product/whatsapp' },
    { label: 'Integrations', href: '/product/integrations' },
  ];

  const solutionsLinks = [
    { label: 'Retail & fashion', href: '/solutions/retail' },
    { label: 'Banks & fintech', href: '/solutions/banking' },
    { label: 'Hospitality & QSR', href: '/solutions/hospitality' },
    { label: 'E-commerce & D2C', href: '/solutions/ecommerce' },
    { label: 'Coalition & enterprise', href: '/solutions/enterprise' },
    { label: 'India · Australia · NZ', href: '/regions/india' },
  ];

  const resourcesLinks = [
    { label: 'Resources hub', href: '/resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'Guides & reports', href: '/guides' },
    { label: 'Benchmarks', href: '/benchmarks' },
    { label: 'Comparisons', href: '/comparisons' },
    { label: 'Webinars & events', href: '/events' },
    { label: 'Customer stories', href: '/customers' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Help Centre', href: '/help' },
    { label: 'Developers', href: '/developers' },
  ];

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Trust centre', href: '/trust-centre' },
    { label: 'System status', href: '/status' },
    { label: 'Privacy', href: '/privacy' },
  ];

  return (
    <footer className="w-full bg-[#F6EFE2] border-t border-[#EADBC6] text-[#220901] font-body pt-14 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
        {/* Top Follow & Social Strip matching Figma Node 5737:1198 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#EADBC6]">
          <span className="font-body text-sm font-medium text-[#220901]">
            Follow Punya Perks for loyalty benchmarks and regulatory updates across India, Australia and New Zealand.
          </span>
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-[#EADBC6] bg-white flex items-center justify-center text-[#563E37] hover:text-[#BC3908] hover:border-[#BC3908] transition-colors shadow-2xs"
            >
              <span className="text-xs font-bold">in</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full border border-[#EADBC6] bg-white flex items-center justify-center text-[#563E37] hover:text-[#BC3908] hover:border-[#BC3908] transition-colors shadow-2xs"
            >
              <YoutubeIcon size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-[#EADBC6] bg-white flex items-center justify-center text-[#563E37] hover:text-[#BC3908] hover:border-[#BC3908] transition-colors shadow-2xs"
            >
              <InstagramIcon size={14} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="w-8 h-8 rounded-full border border-[#EADBC6] bg-white flex items-center justify-center text-[#563E37] hover:text-[#BC3908] hover:border-[#BC3908] transition-colors shadow-2xs"
            >
              <span className="text-xs font-bold">✕</span>
            </a>
          </div>
        </div>

        {/* 5-Column Sitemap Grid matching Option C */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <a href="/" className="inline-flex items-center gap-2.5 group">
              <svg
                className="w-6 h-6 text-[#BC3908] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="3.2" />
                <ellipse cx="12" cy="4" rx="2" ry="3.5" />
                <ellipse cx="12" cy="20" rx="2" ry="3.5" />
                <ellipse cx="4" cy="12" rx="3.5" ry="2" />
                <ellipse cx="20" cy="12" rx="3.5" ry="2" />
                <ellipse cx="6.34" cy="6.34" rx="2.2" ry="3.2" transform="rotate(-45 6.34 6.34)" />
                <ellipse cx="17.66" cy="17.66" rx="2.2" ry="3.2" transform="rotate(-45 17.66 17.66)" />
                <ellipse cx="17.66" cy="6.34" rx="2.2" ry="3.2" transform="rotate(45 17.66 6.34)" />
                <ellipse cx="6.34" cy="17.66" rx="2.2" ry="3.2" transform="rotate(45 6.34 17.66)" />
              </svg>
              <span className="font-display text-2xl text-[#220901]">
                Punya <span className="italic text-[#BC3908]">Perks</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#563E37] leading-relaxed max-w-sm">
              Loyalty programme software for retailers, banks, hospitality groups and coalitions in India, Australia and New Zealand. Built and operated by Punya Perks Platform.
            </p>

            {/* Newsletter Subscription field */}
            <div className="pt-2 max-w-sm">
              {subscribed ? (
                <div className="text-xs font-semibold text-[#BC3908] bg-[#F6EFE2] border border-[#BC3908]/20 py-2.5 px-4 rounded-full">
                  ✓ Thank you for subscribing to Punya Perks updates.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work email"
                    className="flex-1 rounded-full bg-white border border-[#EADBC6] px-4 py-2.5 text-xs sm:text-sm text-[#220901] outline-none focus:border-[#BC3908] focus:ring-1 focus:ring-[#BC3908]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#BC3908] hover:bg-[#941B0C] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 4 Link Columns (8 cols: 2 each) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* PRODUCT */}
            <div className="space-y-3">
              <h5 className="font-mono text-[11px] font-bold text-[#220901] uppercase tracking-wider">
                PRODUCT
              </h5>
              <ul className="space-y-2 text-xs">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#563E37] hover:text-[#BC3908] transition-colors block py-0.5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div className="space-y-3">
              <h5 className="font-mono text-[11px] font-bold text-[#220901] uppercase tracking-wider">
                SOLUTIONS
              </h5>
              <ul className="space-y-2 text-xs">
                {solutionsLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#563E37] hover:text-[#BC3908] transition-colors block py-0.5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-3">
              <h5 className="font-mono text-[11px] font-bold text-[#220901] uppercase tracking-wider">
                RESOURCES
              </h5>
              <ul className="space-y-2 text-xs">
                {resourcesLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#563E37] hover:text-[#BC3908] transition-colors block py-0.5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-3">
              <h5 className="font-mono text-[11px] font-bold text-[#220901] uppercase tracking-wider">
                COMPANY
              </h5>
              <ul className="space-y-2 text-xs">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#563E37] hover:text-[#BC3908] transition-colors block py-0.5">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Localization Bar matching Option C */}
        <div className="pt-8 border-t border-[#EADBC6] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#563E37]">
          <div>
            © 2026 Punya Perks · Enterprise Loyalty Platform · Surat · Dubai · Melbourne · Auckland
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="/privacy" className="hover:text-[#BC3908] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#BC3908] transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-[#BC3908] transition-colors">Cookies</a>
            <a href="/security" className="hover:text-[#BC3908] transition-colors">Security</a>
            <a href="/status" className="hover:text-[#BC3908] transition-colors">Status</a>
            <a href="/help" className="hover:text-[#BC3908] transition-colors">Help</a>
            <a href="/404" className="hover:text-[#BC3908] transition-colors">404</a>
          </div>

          <div className="text-[11px] text-[#563E37] font-medium">
            English · हिन्दी · العربية
          </div>
        </div>
      </div>
    </footer>
  );
};
