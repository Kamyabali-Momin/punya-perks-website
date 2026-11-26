import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon, MenuIcon, XIcon, GlobeIcon, ArrowRightIcon } from 'lucide-react';
import { navigationData, NavPillar } from '../../data/navigation';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { MobileNav } from './MobileNav';

export interface HeaderProps {
  currentTheme?: string;
  onThemeChange?: (theme: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme = 'marigold', onThemeChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track window scroll for sticky visual elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape closes any open menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside closes open menus
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (pillarTitle: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(pillarTitle);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const activePillarData = navigationData.find((p) => p.title === activeMenu);

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-[#FBF7F0]/95 backdrop-blur-md shadow-md border-b border-[#E8DCC9] py-2.5'
            : 'bg-[#FBF7F0] border-b border-[#E8DCC9] py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex items-center justify-between">
          {/* Brand Logo - Marigold floret + Punya Perks */}
          <a href="/" className="flex items-center gap-2.5 shrink-0 group">
            <svg
              className="w-7 h-7 text-[#D9822B] shrink-0"
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
            <span className="font-display text-2xl tracking-tight text-[#1F1A17]">
              Punya <span className="italic text-[#D9822B]">Perks</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navigationData.map((pillar) => {
              const isOpen = activeMenu === pillar.title;
              return (
                <div
                  key={pillar.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(pillar.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={pillar.href}
                    className={`inline-flex items-center text-sm font-medium font-body transition-colors py-1 cursor-pointer ${
                      isOpen
                        ? 'text-[#B5651A] font-semibold'
                        : 'text-[#17140F] hover:text-[#B5651A]'
                    }`}
                  >
                    <span>{pillar.title}</span>
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Right Action Utilities & CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="/start"
              className="text-sm font-medium text-[#17140F] hover:text-[#B5651A] transition-colors"
            >
              Sign in
            </a>

            <Button href="/demo" variant="primary" size="md" className="rounded-full px-5 py-2.5 font-semibold shadow-sm">
              Request a demo
            </Button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            className="lg:hidden p-2 rounded-xl text-[#17140F] hover:bg-[#FAF5ED] transition-colors"
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Desktop Mega-Menu Overlay Container */}
        {activeMenu && activePillarData && (
          <div
            className="absolute top-full left-0 w-full bg-white border-b border-[#EBDFC6] shadow-xl transition-all animate-in fade-in slide-in-from-top-1 duration-200 z-50 font-body"
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 py-8 grid grid-cols-12 gap-8 items-stretch">
              {/* Category Area: Full-width or with Featured Callout Card */}
              <div
                className={
                  activePillarData.featuredCallout ? 'col-span-8' : 'col-span-12'
                }
              >
                {/* 1. PLATFORM: 4 items arranged horizontally in 2 lines (2x2 grid) */}
                {activePillarData.title === 'Platform' ? (
                  <div className="space-y-4">
                    {activePillarData.categories[0]?.categoryTitle && (
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5651A] border-b border-[#EBDFC6] pb-2 font-body">
                        {activePillarData.categories[0].categoryTitle}
                      </h4>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                      {activePillarData.categories[0].items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group block p-4 rounded-2xl bg-[#FAF5ED]/60 hover:bg-[#FAF5ED] border border-[#EBDFC6]/70 hover:border-[#B5651A]/40 transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="font-body text-[10px] font-bold bg-[#FBE9D6] text-[#B5651A] px-2 py-0.5 rounded-full border border-[#B5651A]/20">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#5B534C] mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : /* 2. PRICING: 2 items arranged horizontally side-by-side */
                activePillarData.title === 'Pricing' ? (
                  <div className="space-y-4">
                    {activePillarData.categories[0]?.categoryTitle && (
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5651A] border-b border-[#EBDFC6] pb-2 font-body">
                        {activePillarData.categories[0].categoryTitle}
                      </h4>
                    )}
                    <div className="grid grid-cols-2 gap-5">
                      {activePillarData.categories[0].items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group block p-4 rounded-2xl bg-[#FAF5ED]/60 hover:bg-[#FAF5ED] border border-[#EBDFC6]/70 hover:border-[#B5651A]/40 transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-display text-base font-bold text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="font-body text-[10px] font-bold bg-[#FBE9D6] text-[#B5651A] px-2 py-0.5 rounded-full border border-[#B5651A]/20">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#5B534C] mt-1.5 leading-relaxed">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : /* 3. RESOURCES: 6 items arranged in 2 columns (3x2 grid) */
                activePillarData.title === 'Resources' ? (
                  <div className="space-y-4">
                    {activePillarData.categories[0]?.categoryTitle && (
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5651A] border-b border-[#EBDFC6] pb-2 font-body">
                        {activePillarData.categories[0].categoryTitle}
                      </h4>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                      {activePillarData.categories[0].items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group block p-4 rounded-2xl bg-[#FAF5ED]/60 hover:bg-[#FAF5ED] border border-[#EBDFC6]/70 hover:border-[#B5651A]/40 transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="font-body text-[10px] font-bold bg-[#FBE9D6] text-[#B5651A] px-2 py-0.5 rounded-full border border-[#B5651A]/20">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#5B534C] mt-1.5 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : /* 4. COMPANY: 5 items arranged in 2 columns */
                activePillarData.title === 'Company' ? (
                  <div className="space-y-4">
                    {activePillarData.categories[0]?.categoryTitle && (
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5651A] border-b border-[#EBDFC6] pb-2 font-body">
                        {activePillarData.categories[0].categoryTitle}
                      </h4>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                      {activePillarData.categories[0].items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group block p-4 rounded-2xl bg-[#FAF5ED]/60 hover:bg-[#FAF5ED] border border-[#EBDFC6]/70 hover:border-[#B5651A]/40 transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="font-body text-[10px] font-bold bg-[#FBE9D6] text-[#B5651A] px-2 py-0.5 rounded-full border border-[#B5651A]/20">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#5B534C] mt-1.5 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* 5. MULTI-CATEGORY (PRODUCT & SOLUTIONS): 2-Column Category Grid with Cards */
                  <div className="grid grid-cols-2 gap-6">
                    {activePillarData.categories.map((cat, idx) => (
                      <div key={idx} className="space-y-3">
                        {cat.categoryTitle && (
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B5651A] border-b border-[#EBDFC6] pb-2 font-body">
                            {cat.categoryTitle}
                          </h4>
                        )}
                        <div className="space-y-2.5">
                          {cat.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="group block p-3 rounded-2xl bg-[#FAF5ED]/60 hover:bg-[#FAF5ED] border border-[#EBDFC6]/70 hover:border-[#B5651A]/40 transition-all shadow-2xs"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-display text-sm font-bold text-[#17140F] group-hover:text-[#B5651A] transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="font-body text-[10px] font-bold bg-[#FBE9D6] text-[#B5651A] px-2 py-0.5 rounded-full border border-[#B5651A]/20">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[#5B534C] mt-1 leading-normal line-clamp-2">
                                {item.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Featured Callout Card */}
              {activePillarData.featuredCallout && (
                <div
                  className="col-span-4 rounded-3xl p-6 sm:p-8 border border-[#EBDFC6] flex flex-col justify-between shadow-xs relative overflow-hidden bg-cover bg-bottom bg-no-repeat group h-full min-h-full"
                  style={{
                    backgroundImage: "url('/images/inner-hero-bg.jpg')",
                    backgroundColor: "#FAF3E8",
                  }}
                >
                  <div className="relative z-10">
                    <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.16em] uppercase block">
                      {activePillarData.featuredCallout.eyebrow}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#17140F] mt-2 group-hover:text-[#B5651A] transition-colors leading-snug">
                      {activePillarData.featuredCallout.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] mt-2.5 leading-relaxed">
                      {activePillarData.featuredCallout.description}
                    </p>
                  </div>
                  <div className="relative z-10 mt-6 pt-4 border-t border-[#EBDFC6]">
                    <a
                      href={activePillarData.featuredCallout.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B5651A] hover:text-[#9a5413] transition-colors"
                    >
                      <span>{activePillarData.featuredCallout.linkText}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pillars={navigationData}
      />
    </>
  );
};
