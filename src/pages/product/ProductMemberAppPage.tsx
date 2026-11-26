import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

type AppScreen = 'home' | 'redeem' | 'offers';

const APP_SCREENS: Record<AppScreen, { label: string; src: string; caption: string }> = {
  home: {
    label: 'Member Home',
    src: '/images/products/kombee-app-home.png',
    caption: 'Live available, pending & expiring points with dynamic Gold tier guilloche card.',
  },
  redeem: {
    label: 'Redeem Catalog',
    src: '/images/products/kombee-app-redeem.png',
    caption: 'Bank/UPI cash-out, charity donations, partner transfers & digital gift vouchers.',
  },
  offers: {
    label: 'Campaigns & Offers',
    src: '/images/products/kombee-app-offers.png',
    caption: 'Real-time multiplier campaigns and tier fast-track challenges.',
  },
};

export const ProductMemberAppPage: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('home');
  const activeScreen = APP_SCREENS[screen];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="TIERS & MEMBER EXPERIENCE"
        title="A member app that changes with the member."
        description="Silver, Gold, Platinum, or your own ladder. The app adapts its accent to the tier, shows available, pending and reserved balances honestly, and runs in English, Hindi and Arabic with right-to-left layout."
        breadcrumbs={[{ label: 'Product', href: '/product' }, { label: 'Tiers & Member App' }]}
        image="/images/products/user-web-home.png"
        imageAlt="Kombee User Side Web Member Portal"
      />

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block">
                WHITE-LABEL EXCELLENCE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F1A17]">
                Your Brand. Native Performance. Zero Generic SaaS Clutter.
              </h2>
              <p className="text-sm sm:text-base text-[#1F1A17]/75 leading-relaxed">
                Publish native apps on the App Store and Google Play under your corporate developer accounts. Full brand theming, custom iconography, and automatic Apple Wallet / Google Wallet pass generation.
              </p>

              {/* Interactive App Screen Switcher */}
              <div className="space-y-3 pt-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#847C75] block">
                  PREVIEW ACTUAL KOMBEE LOYALTY APP SCREENS
                </span>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(APP_SCREENS) as AppScreen[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setScreen(key)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        screen === key
                          ? 'bg-[#B5651A] text-white shadow-sm'
                          : 'bg-white text-[#1F1A17] border border-[#EBDFC6] hover:border-[#B5651A]/40'
                      }`}
                    >
                      {APP_SCREENS[key].label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#5B534C]">{activeScreen.caption}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-[20px] border border-[#EBDFC6]">
                  <div className="font-display font-bold text-sm text-[#1F1A17]">Dynamic Tier Themes</div>
                  <div className="text-xs text-[#1F1A17]/70 mt-1">App UI transforms in real-time as members advance tiers.</div>
                </div>
                <div className="p-4 bg-white rounded-[20px] border border-[#EBDFC6]">
                  <div className="font-display font-bold text-sm text-[#1F1A17]">Multilingual by Default</div>
                  <div className="text-xs text-[#1F1A17]/70 mt-1">English, Hindi, and full Arabic RTL typography out of the box.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              {/* Actual Kombee Loyalty App Smartphone Frame */}
              <div className="w-[290px] sm:w-[310px] rounded-[42px] bg-[#1F1A17] p-3 shadow-2xl border-4 border-[#EBDFC6]">
                <div className="rounded-[32px] overflow-hidden bg-white">
                  <img
                    src={activeScreen.src}
                    alt={`Kombee Loyalty App — ${activeScreen.label}`}
                    className="w-full h-auto object-cover object-top"
                  />
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
