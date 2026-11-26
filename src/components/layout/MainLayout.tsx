import React from 'react';
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
