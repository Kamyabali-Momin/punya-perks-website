import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { HeroSection } from '../components/home/HeroSection';
import { CustomerTrustSection } from '../components/home/CustomerTrustSection';
import { PlatformJobsSection } from '../components/home/PlatformJobsSection';
import { ModulesGridSection } from '../components/home/ModulesGridSection';
import { MetricsSection } from '../components/home/MetricsSection';
import { CaseStudySection } from '../components/home/CaseStudySection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { ProgrammeFinderSection } from '../components/home/ProgrammeFinderSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { RoiEstimatorSection } from '../components/home/RoiEstimatorSection';
import { RecentBlogPostsSection } from '../components/home/RecentBlogPostsSection';
import { IntegrationsSection } from '../components/home/IntegrationsSection';
import { HomeFaqSection } from '../components/home/HomeFaqSection';
import { HomeCtaSection } from '../components/home/HomeCtaSection';

export const HomePage: React.FC = () => {
  return (
    <MainLayout currentTheme="marigold" onThemeChange={() => {}}>
      {/* 1. Hero with Value Prop, Dual CTAs & 5-Tile Bento Showcase */}
      <HeroSection />

      {/* 2. Customer Trust: PROGRAMMES RUN ON PUNYA PERKS + 5 Client Logos */}
      <CustomerTrustSection />

      {/* 3. One Platform, Four Jobs: Earn, redeem, engage, operate + 5 Industry Pill Tabs + Portal Preview */}
      <PlatformJobsSection />

      {/* 4. Modules: Everything a programme needs, nothing bolted on (4 Bento Cards) */}
      <ModulesGridSection />

      {/* 5. By The Numbers: 4 Stats + 7 Client Logos */}
      <MetricsSection />

      {/* 6. Customer Stories: Programmes that moved the numbers (Retail National Case Study) */}
      <CaseStudySection />

      {/* 7. How It Works: Live in four weeks, not four quarters (01–04) */}
      <HowItWorksSection />

      {/* 8. Programme Finder: Deep Jade Container with 3-Dropdown Selector Card */}
      <ProgrammeFinderSection />

      {/* 9. What Operators Say: 3 Testimonial Cards with Gold Quotation Marks */}
      <TestimonialsSection />

      {/* 10. ROI Estimate: What would a 4-point lift in repeat purchase be worth? */}
      <RoiEstimatorSection />

      {/* 11. Recent Blog Posts */}
      <RecentBlogPostsSection />

      {/* 12. Integration Partners: Pill Cloud */}
      <IntegrationsSection />

      {/* 14. FAQ: Questions buyers ask first (5 Accordions) */}
      <HomeFaqSection />

      {/* 15. Closing CTA: Not sure which plan or template fits? Talk to an expert */}
      <HomeCtaSection />
    </MainLayout>
  );
};

export default HomePage;
