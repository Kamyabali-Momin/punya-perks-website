import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { GiftIcon, LandmarkIcon, PlaneIcon, HeartHandshakeIcon, ShoppingCartIcon } from 'lucide-react';

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
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-2">
              REDEMPTION CHANNELS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17140F]">
              Fulfill Across Every Desire
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <div key={opt.title} className="rounded-3xl bg-white p-7 sm:p-8 border border-[#EBDFC6] shadow-xs hover:shadow-md hover:border-[#B5651A]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] text-[#B5651A] border border-[#EBDFC6] flex items-center justify-center mb-6 group-hover:bg-[#B5651A] group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#17140F] mb-3 group-hover:text-[#B5651A] transition-colors">{opt.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote & Commit Protocol */}
      <section
        className="relative w-full py-16 sm:py-24 bg-[#1F0E05] text-white border-b border-[#3E2413] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/modules/sec3-dark-rewards-bg.jpg')",
        }}
      >
        {/* Subtle dark gradient overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/75 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-[11px] font-bold text-[#E59846] tracking-[0.2em] uppercase block">
                CHECKOUT RESERVATION PROTOCOL
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Two-Phase Commit: Quote & Burn
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-body">
                When a customer applies 500 points at checkout, Punya Perks holds a temporary 15-minute reservation. If checkout succeeds, the points burn is committed. If the session expires or is abandoned, the reservation releases automatically without customer support tickets.
              </p>
            </div>
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-8 rounded-[28px] border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="p-4 bg-white/95 rounded-[16px] border border-white/30 flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="font-bold text-[#B5651A]">POST /v1/redemptions/quote</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">200 OK · 15m Held</span>
                </div>
                <div className="p-4 bg-white/95 rounded-[16px] border border-white/30 flex items-center justify-between text-xs font-mono shadow-sm">
                  <span className="font-bold text-[#B5651A]">POST /v1/redemptions/commit</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">200 OK · Ledger Debited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default ProductRedeemPage;
