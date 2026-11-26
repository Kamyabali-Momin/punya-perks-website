import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { BarChart3Icon, TrendingUpIcon, ActivityIcon, UsersIcon } from 'lucide-react';

export const ProductAnalyticsPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="ANALYTICS, CDP & PERSONALISATION"
        title="Understand customer value, not just point velocity."
        description="Unified customer profiles, RFM segmentation, predictive churn scoring, and native cohort retention analytics across your entire ecosystem."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Analytics & CDP' }]}
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3">
              <span className="font-mono text-xs font-bold text-[#B5651A]">COHORT RETENTION</span>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">Month-over-Month Curves</h3>
              <p className="text-xs sm:text-sm text-[#1F1A17]/75">Track repeat order behavior 30, 60, 90, and 365 days after programme enrollment.</p>
            </div>
            <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3">
              <span className="font-mono text-xs font-bold text-[#B5651A]">RFM SEGMENTATION</span>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">Autonomous Value Tiers</h3>
              <p className="text-xs sm:text-sm text-[#1F1A17]/75">Recency, Frequency, and Monetary metrics computed nightly without manual SQL queries.</p>
            </div>
            <div className="rounded-[28px] bg-white p-8 border border-[#EBDFC6] space-y-3">
              <span className="font-mono text-xs font-bold text-[#B5651A]">BREAKAGE MODELING</span>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">Actuarial Accounting</h3>
              <p className="text-xs sm:text-sm text-[#1F1A17]/75">Forecast unredeemed points expiration and breakage reserves according to local GAAP.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default ProductAnalyticsPage;
