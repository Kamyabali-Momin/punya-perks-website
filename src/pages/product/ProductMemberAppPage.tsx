import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { SmartphoneIcon, GlobeIcon, WalletIcon, SparklesIcon } from 'lucide-react';

export const ProductMemberAppPage: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader
        eyebrow="TIERS & MEMBER EXPERIENCE"
        title="A member app that changes with the member."
        description="Silver, Gold, Platinum, or your own ladder. The app adapts its accent to the tier, shows available, pending and reserved balances honestly, and runs in English, Hindi and Arabic with right-to-left layout."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Tiers & Member App' }]}
      />

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] font-bold text-[#D9822B] tracking-[0.2em] uppercase block">
                WHITE-LABEL EXCELLENCE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F1A17]">
                Your Brand. Native Performance. Zero Generic SaaS Clutter.
              </h2>
              <p className="text-sm sm:text-base text-[#1F1A17]/75 leading-relaxed">
                Publish native apps on the App Store and Google Play under your corporate developer accounts. Full brand theming, custom iconography, and automatic Apple Wallet / Google Wallet pass generation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-[20px] border border-[#E8DCC9]">
                  <div className="font-display font-bold text-sm text-[#1F1A17]">Dynamic Tier Themes</div>
                  <div className="text-xs text-[#1F1A17]/70 mt-1">App UI transforms in real-time as members advance tiers.</div>
                </div>
                <div className="p-4 bg-white rounded-[20px] border border-[#E8DCC9]">
                  <div className="font-display font-bold text-sm text-[#1F1A17]">Multilingual by Default</div>
                  <div className="text-xs text-[#1F1A17]/70 mt-1">English, Hindi, and full Arabic RTL typography out of the box.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              {/* Smartphone Frame */}
              <div className="w-[300px] rounded-[44px] bg-[#1F1A17] p-4 shadow-2xl border-4 border-[#E8DCC9]">
                <div className="rounded-[36px] bg-white p-5 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-display font-bold text-[#1F1A17]">Aryan Verma</span>
                    <span className="font-mono text-[10px] bg-[#C9A15B]/20 text-[#97732E] px-2 py-0.5 rounded-full font-bold">★ GOLD</span>
                  </div>
                  <div className="p-4 rounded-[20px] bg-[#D9822B] text-white">
                    <span className="text-[10px] text-white/70 block uppercase">AVAILABLE POINTS</span>
                    <span className="font-display font-extrabold text-3xl">3,850</span>
                    <span className="text-[10px] text-white/80 block mt-1">≈ ₹962 · 300 pending</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#1F1A17]">Recent Perks</div>
                    <div className="p-3 bg-[#F3EBDD] rounded-[14px] text-xs flex justify-between">
                      <span>Store Visit Multiplier</span>
                      <span className="font-bold text-[#D9822B]">+61 pts</span>
                    </div>
                  </div>
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
export default ProductMemberAppPage;
