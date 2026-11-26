import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
  currentTheme?: string;
  onThemeChange?: (theme: string) => void;
  showAnnouncement?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  currentTheme = 'marigold',
  onThemeChange,
  showAnnouncement = true,
}) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route navigation
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Set up scroll reveal observer
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    const setupObserver = () => {
      // 1. Explicit reveal elements
      document.querySelectorAll('.reveal-on-scroll, [data-reveal]').forEach((el) => {
        observer.observe(el);
      });

      // 2. Automatically enhance all major content sections across all 42 pages
      document.querySelectorAll('main section:not(.no-reveal)').forEach((sec) => {
        if (
          !sec.classList.contains('reveal-on-scroll') &&
          !sec.classList.contains('is-revealed') &&
          !sec.querySelector('.reveal-on-scroll') &&
          !sec.querySelector('.animate-fade-in-up')
        ) {
          sec.classList.add('reveal-on-scroll');
          observer.observe(sec);
        }
      });
    };

    // Immediate registration and short delay for dynamically rendered route DOM
    setupObserver();
    const timer = setTimeout(setupObserver, 80);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div
      data-theme={currentTheme}
      className="min-h-screen flex flex-col bg-pp-ground text-pp-ink font-body overflow-x-clip selection:bg-pp-primary-soft selection:text-pp-primary"
    >
      {showAnnouncement && <AnnouncementBar />}
      <Header currentTheme={currentTheme} onThemeChange={onThemeChange} />
      <main className="flex-1 w-full overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
};
