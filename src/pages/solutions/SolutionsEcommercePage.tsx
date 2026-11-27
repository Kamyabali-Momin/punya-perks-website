import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { ShoppingCartIcon, UsersIcon, SparklesIcon, RefreshCwIcon } from 'lucide-react';

export const SolutionsEcommercePage: React.FC = () => {
  const pillars = [
    {
      title: 'Cart Redemption Slider',
      desc: 'Shoppers slide points to discount orders directly inside checkout with real-time 15-minute quote reservation and zero checkout latency.',
    },
    {
      title: 'Automated Referral Loops',
      desc: 'Two-sided referral links credit both parties only after the referred order clears your COD/return window, eliminating referral farming.',
    },
    {
      title: 'Turnkey Plugin Installs',
      desc: 'Install in 5 minutes on Shopify, Magento, BigCommerce, or WooCommerce with pre-built member account widgets and webhooks.',
    },
  ];

  const capabilities = [
    {
      icon: ShoppingCartIcon,
      title: 'Zero-Latency Checkout Quote & Commit',
      desc: 'Points are reserved for 15 minutes during payment gateway handoffs (Razorpay, Stripe) and committed only on confirmed capture.',
    },
    {
      icon: UsersIcon,
      title: 'Anti-Abuse Referral & Review Rewards',
      desc: 'Reward verified photo reviews, Instagram tags, and friend referrals while blocking duplicate devices, cancelled orders, and self-referrals.',
    },
    {
      icon: SparklesIcon,
      title: 'VIP Early Drop Access & Free Shipping',
      desc: 'Gate limited-edition product drops and free express shipping to Gold and Platinum members instead of eroding brand value with site-wide coupon codes.',
    },
    {
      icon: RefreshCwIcon,
      title: 'Pending → Confirmed Release Windows',
      desc: 'Hold earned points as Pending during your 7-day or 14-day return window so customers see transparent balances without post-return clawbacks.',
    },
  ];

  const faqs = [
    {
      q: 'Does the Shopify / WooCommerce widget slow down our storefront?',
      a: 'No. Our storefront script is under 12 KB gzipped, loads asynchronously, and evaluates checkout quotes in under 120ms via edge-cached catalogs.',
    },
    {
      q: 'How do you prevent points abuse on Cash-on-Delivery (COD) or returned orders?',
      a: 'Points from COD or newly placed orders enter a Pending state automatically and only move to Available once delivery confirmation and your return window pass.',
    },
    {
      q: 'Can we migrate our existing customer points from Smile.io, LoyaltyLion, or Yotpo?',
      a: 'Yes. We provide automated CSV/API balance playback scripts that preserve every customer’s exact point balance and tier status with zero downtime.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="SOLUTIONS · E-COMMERCE & D2C"
        title="Turn one-off cart conversions into lifelong brand advocates."
        description="Native Shopify & WooCommerce plugins, seamless cart redemption sliders, two-sided referral rewards, and zero checkout latency."
        breadcrumbs={[{ label: 'Solutions' }, { label: 'E-commerce & D2C' }]}
        image="/images/products/user-web-earn.png"
        imageAlt="Punya Perks D2C & E-commerce Earning Portal"
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, idx) => (
              <div key={p.title} className="rounded-[28px] bg-white p-8 border border-[#E2D3B5] space-y-3 shadow-xs">
                <span className="font-body text-xs font-bold text-[#8E5B13]">0{idx + 1} // D2C RETENTION</span>
                <h3 className="font-display font-bold text-xl text-[#1F1A17]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#1F1A17]/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '+22%', label: 'Lift in 2nd-order conversion rate' },
              { metric: '5 min', label: 'Shopify & WooCommerce setup' },
              { metric: '15 min', label: 'Checkout hold window on abandoned carts' },
              { metric: '3.1x', label: 'Higher LTV for referred members' },
            ].map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-white border border-[#E2D3B5] text-center">
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#8E5B13]">{s.metric}</div>
                <p className="text-xs text-[#5B534C] mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-2xl mb-10">
            <span className="font-body text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block mb-2">
              STOREFRONT CAPABILITIES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#14100B]">
              Built for Modern D2C Margins and Return Windows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="p-7 rounded-3xl bg-[#FCF8F2] border border-[#E2D3B5] flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2D3B5] flex items-center justify-center text-[#8E5B13] shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-[#14100B]">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="E-COMMERCE FAQ"
        title="Questions D2C & growth teams ask"
        faqs={faqs}
        helpTitle="Replacing coupon codes with margin-safe loyalty?"
        helpDescription="Test our Shopify & WooCommerce checkout slider in a live sandbox with synthetic order streams."
        helpButtonText="Start in sandbox"
        helpButtonHref="/start"
      />

      <PageCta />
    </MainLayout>
  );
};
export default SolutionsEcommercePage;
