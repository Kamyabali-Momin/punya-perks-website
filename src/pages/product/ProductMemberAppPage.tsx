import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { PageCta } from '../../components/common/PageCta';
import { CheckCircle2Icon } from 'lucide-react';

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

const TIER_LADDER = [
  {
    tier: 'Silver Member',
    threshold: '₹0 – ₹14,999 Annual Spend',
    multiplier: '1.0x Base Earn',
    perks: ['Instant WhatsApp & Barcode Pass', 'Birthday Month 2x Multiplier', '7-day return escrow transparency'],
  },
  {
    tier: 'Gold Preferred',
    threshold: '₹15,000 – ₹49,999 Annual Spend',
    multiplier: '1.5x Earn Multiplier',
    perks: ['Adaptive Marigold Gold Card UI', '48h Early Festive Sale Access', 'Zero fee on gift voucher burns'],
  },
  {
    tier: 'Platinum Circle',
    threshold: '₹50,000+ Annual Spend',
    multiplier: '2.0x Earn Multiplier',
    perks: ['Obsidian VIP App Theme & Pass', 'Priority Concierge Support (<5m)', 'Annual Lounge & Partner Transfers'],
  },
];

const MEMBER_APP_FAQS = [
  {
    q: 'Can we embed the Member Portal inside our existing Flutter, React Native, or Shopify app?',
    a: 'Yes. Choose our turnkey hosted mobile web portal, drop-in Flutter/React Native SDK modules (<1.8 MB footprint), or full headless REST APIs paired with Apple Wallet & Google Wallet passes.',
  },
  {
    q: 'Why does the wallet show Available vs Pending vs Expiring balances separately?',
    a: 'Customers get frustrated when pending return-window orders look spendable and fail at store checkout. Clear three-bucket visibility reduces Tier-1 support tickets by over 40%.',
  },
  {
    q: 'Does Arabic Right-to-Left (RTL) mode work automatically for UAE & GCC rollouts?',
    a: 'Yes. Switching locale to Arabic mirrors navigation alignment, typography, and RTL date/numeral formatting automatically alongside English and Hindi.',
  },
];

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

      <section className="py-16 sm:py-20 bg-[#FAF5ED] border-b border-[#E2D3B5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block">
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
                          ? 'bg-[#8E5B13] text-white shadow-sm'
                          : 'bg-white text-[#1F1A17] border border-[#E2D3B5] hover:border-[#8E5B13]/40'
                      }`}
                    >
                      {APP_SCREENS[key].label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#5B534C]">{activeScreen.caption}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-[20px] border border-[#E2D3B5]">
                  <div className="font-display font-bold text-sm text-[#1F1A17]">Dynamic Tier Themes</div>
                  <div className="text-xs text-[#1F1A17]/70 mt-1">App UI transforms in real-time as members advance tiers.</div>
                </div>
                <div className="p-4 bg-white rounded-[20px] border border-[#E2D3B5]">
                  <div className="font-display font-bold text-sm text-[#1F1A17]">Multilingual by Default</div>
                  <div className="text-xs text-[#1F1A17]/70 mt-1">English, Hindi, and full Arabic RTL typography out of the box.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-[290px] sm:w-[310px] rounded-[42px] bg-[#1F1A17] p-3 shadow-2xl border-4 border-[#E2D3B5]">
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

      {/* Tier Ladder Architecture */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2D3B5] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block mb-2">
              CONFIGURABLE TIER LADDER
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#14100B]">
              Sample 3-Tier Progression &amp; Benefits Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIER_LADDER.map((item) => (
              <div
                key={item.tier}
                className="rounded-3xl bg-[#FAF5ED]/75 border border-[#E2D3B5] p-7 space-y-4"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#8E5B13] uppercase">
                    {item.multiplier}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#14100B] mt-1">{item.tier}</h3>
                  <div className="text-xs font-mono text-[#847C75] mt-1">{item.threshold}</div>
                </div>
                <ul className="space-y-2.5 pt-2 border-t border-[#E2D3B5]">
                  {item.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-xs sm:text-sm text-[#14100B]">
                      <CheckCircle2Icon size={15} className="text-[#8E5B13] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalPageFaq
        eyebrow="MEMBER EXPERIENCE FAQ"
        title="Frequently Asked Questions"
        faqs={MEMBER_APP_FAQS}
        helpTitle="Want to White-Label the Member Portal in Your Brand Palette?"
        helpDescription="Preview Silver, Gold, and Platinum adaptive UI states live with your brand logo in our sandbox."
        helpButtonText="Request UI Walkthrough"
        helpButtonHref="/demo"
      />

      <PageCta />
    </MainLayout>
  );
};
export default ProductMemberAppPage;
