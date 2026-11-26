import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

export const SolutionsEcommercePage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · E-COMMERCE & D2C"
        title="Turn one-off cart conversions into lifelong brand advocates."
        description="Native Shopify & WooCommerce plugins, seamless cart redemption sliders, two-sided referral rewards, and zero checkout latency."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'E-commerce & D2C' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Cart Redemption Slider</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Shoppers slide points to discount orders directly in checkout with real-time quote validation.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Automated Referral Loops</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Two-sided referral links credit both parties only when the referred order passes return windows.</p>
          </div>
          <div className="rounded-[28px] bg-white p-8 border border-[#E8DCC9] space-y-3">
            <h3 className="font-display font-bold text-xl text-[#1F1A17]">Turnkey Plugin Installs</h3>
            <p className="text-xs sm:text-sm text-[#1F1A17]/75">Install in 5 minutes on Shopify, Magento, or WooCommerce with zero developer friction.</p>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsEcommercePage;
