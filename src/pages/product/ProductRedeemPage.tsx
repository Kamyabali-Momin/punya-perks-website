import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';
import { GiftIcon, LandmarkIcon, PlaneIcon, HeartHandshakeIcon } from 'lucide-react';

const REWARD_CATALOG_SAMPLES = [
  {
    channel: 'Instant Store Discount',
    example: 'Burn at Pine Labs / Shopify Checkout',
    conversion: '₹0.25 per point',
    minThreshold: '100 pts (₹25)',
    sla: '<110ms Real-time',
  },
  {
    channel: 'Digital Brand Voucher',
    example: 'Amazon Pay, Swiggy, Flipkart, Zomato',
    conversion: '₹0.25 per point',
    minThreshold: '400 pts (₹100)',
    sla: '<1.2s Code Issue',
  },
  {
    channel: 'UPI / Bank Cash-Out',
    example: 'Verified NPCI VPA Transfer',
    conversion: '₹0.20 per point',
    minThreshold: '500 pts (₹100)',
    sla: 'Instant IMPS / UPI',
  },
  {
    channel: 'Partner Travel Miles',
    example: 'GCC & ANZ Airline Transfer Partners',
    conversion: '4 pts = 1 Mile',
    minThreshold: '1,600 pts',
    sla: 'Two-Phase Commit',
  },
];

const REDEEM_FAQS = [
  {
    q: 'How does Quote & Commit prevent shoppers from losing points on failed UPI or card payments?',
    a: 'Calling /v1/redemptions/quote places a temporary 15-minute reservation on the member’s available balance. Only when payment capture succeeds does /commit burn the points; abandoned checkouts expire cleanly back to Available status.',
  },
  {
    q: 'Can we set different point conversion ratios for in-store burn vs UPI cash-out?',
    a: 'Yes. Each reward catalog item or channel supports independent earn-to-burn economics, margin spreads, GST handling, and minimum tier gating.',
  },
  {
    q: 'Do we need pre-paid agreements with 500 gift card brands ourselves?',
    a: 'No. Punya Perks connects natively to turnkey digital voucher aggregators across India, Australia, New Zealand, and UAE—or lets you settle directly against your own first-party SKU catalog.',
  },
];

export const ProductRedeemPage: React.FC = () => {
  const options = [
    { title: 'Digital Brand Vouchers', icon: GiftIcon, desc: 'Instant gift codes for Amazon, Flipkart, Starbucks, Zomato, and 500+ global brands.' },
    { title: 'Bank / UPI Cash-Out', icon: LandmarkIcon, desc: 'Direct cash-out to verified bank accounts or UPI VPA via licensed payment switch partners.' },
    { title: 'Airline & Hotel Currencies', icon: PlaneIcon, desc: 'Two-way points transfer agreements with major airline frequent flyer and hotel clubs.' },
    { title: 'Charitable Donations', icon: HeartHandshakeIcon, desc: 'Allow members to donate their points balance to verified environmental and social NGOs.' },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="REWARDS CATALOG & POINTS REDEMPTION"
        title="Points that buy what members actually want."
        description="Vouchers, merchandise, cash-out to bank or UPI, donations, partner currencies, experiences, and paid tiers. Real-time quote reservation ensures liability stays balanced."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Redeem & Catalog' }]}
        image="/images/products/user-web-redeem.png"
        imageAlt="Kombee User Side Web — Redeem Rewards Catalog"
      />

      <section className="py-16 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-2">
              REDEMPTION CHANNELS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#220901]">
              Fulfill Across Every Desire
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title} className="rounded-3xl bg-white p-7 sm:p-8 border border-[#EADBC6] shadow-xs hover:shadow-md hover:border-[#BC3908]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F6EFE2] text-[#BC3908] border border-[#EADBC6] flex items-center justify-center mb-6 group-hover:bg-[#BC3908] group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#220901] mb-3 group-hover:text-[#BC3908] transition-colors">{opt.title}</h3>
                    <p className="text-xs sm:text-sm text-[#563E37] leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reward Economics & Sample Catalog Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#BC3908] uppercase tracking-widest">
                SAMPLE CATALOG ECONOMICS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#220901]">
                Configurable Valuation Across Fulfillment Channels
              </h2>
            </div>
            <span className="text-xs font-mono text-[#826B63]">Example Program Matrix</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#EADBC6] bg-[#F6EFE2]/40">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F6EFE2] border-b border-[#EADBC6] font-mono text-[11px] uppercase text-[#563E37]">
                <tr>
                  <th className="py-3.5 px-4">Fulfillment Channel</th>
                  <th className="py-3.5 px-4">Sample Reward Options</th>
                  <th className="py-3.5 px-4">Point Valuation</th>
                  <th className="py-3.5 px-4">Minimum Burn</th>
                  <th className="py-3.5 px-4 text-right">Settlement SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADBC6] bg-white text-[#220901]">
                {REWARD_CATALOG_SAMPLES.map((row) => (
                  <tr key={row.channel} className="hover:bg-[#F6EFE2]/40">
                    <td className="py-3.5 px-4 font-bold">{row.channel}</td>
                    <td className="py-3.5 px-4 text-[#563E37]">{row.example}</td>
                    <td className="py-3.5 px-4 font-mono text-[#BC3908] font-semibold">{row.conversion}</td>
                    <td className="py-3.5 px-4 font-mono">{row.minThreshold}</td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700">{row.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote & Commit Protocol */}
      <section
        className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] text-white border-b border-[#621708] overflow-hidden"
      >
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#F6AA1C]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-[11px] font-bold text-[#F6AA1C] tracking-[0.2em] uppercase block">
                CHECKOUT RESERVATION PROTOCOL
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Two-Phase Commit: Quote &amp; Burn
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-body">
                When a customer applies 500 points at checkout, Punya Perks holds a temporary 15-minute reservation. If checkout succeeds, the points burn is committed. If the session expires or is abandoned, the reservation releases automatically without support tickets.
              </p>
            </div>
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-8 rounded-[28px] border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="p-4 bg-white/95 rounded-[16px] border border-white/30 flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="font-bold text-[#BC3908]">POST /v1/redemptions/quote</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">200 OK · 15m Held</span>
                </div>
                <div className="p-4 bg-white/95 rounded-[16px] border border-white/30 flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="font-bold text-[#BC3908]">POST /v1/redemptions/commit</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">200 OK · Ledger Debited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="REDEMPTION FAQ"
        title="Frequently Asked Questions"
        faqs={REDEEM_FAQS}
        helpTitle="Explore Turnkey Brand Voucher Feeds"
        helpDescription="See regional gift card margins across India, Australia, New Zealand, and GCC partners."
        helpButtonText="Book Catalog Walkthrough"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductRedeemPage;
