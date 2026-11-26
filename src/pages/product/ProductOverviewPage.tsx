import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  ZapIcon,
  GiftIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  BarChart3Icon,
  MessageSquareIcon,
  BlocksIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  CheckIcon,
  XIcon,
  LayersIcon,
  PercentIcon,
  UsersIcon,
  AwardIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  CpuIcon,
  StoreIcon
} from 'lucide-react';

interface FeatureItem {
  title: string;
  href: string;
  desc: string;
  icon?: React.ElementType;
  image?: string;
  badge?: string;
}

interface FeatureGroup {
  num: string;
  question: string;
  items: FeatureItem[];
}

interface PlanRow {
  feature: string;
  starter: boolean;
  growth: boolean;
  enterprise: boolean;
  coalition: boolean;
}

export const ProductOverviewPage: React.FC = () => {
  // Collapsible state for each feature group (initially all open for immediate discoverability)
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '03': true,
    '04': true,
    '05': true,
  });

  const toggleGroup = (num: string) => {
    setOpenGroups((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const featureGroups: FeatureGroup[] = [
    {
      num: '01',
      question: 'How do members earn — and how do we protect gross margins?',
      items: [
        {
          title: 'Dynamic Multiplier Engine',
          href: '/product/earn',
          desc: 'SKU-level margins, category exclusions, and time-window point multipliers configured without code.',
          image: '/images/modules/sec1-card1.jpg',
        },
        {
          title: 'Rolling Tier Ladders',
          href: '/product/earn',
          desc: 'Automated 12-month rolling spend qualifications with soft downgrades and grace periods.',
          image: '/images/modules/sec1-card2.jpg',
        },
        {
          title: 'Card-Linked & POS Tracking',
          href: '/product/earn',
          desc: 'Earn points directly at card swipe or POS cash counters with zero cashier friction.',
          image: '/images/modules/sec1-card3.jpg',
        },
        {
          title: 'Gamified Challenges & Streaks',
          href: '/product/campaigns',
          desc: 'Engage frequent shoppers with visit milestones, seasonal quests, and personalized referral loops.',
          image: '/images/modules/sec1-card4.jpg',
        }
      ]
    },
    {
      num: '02',
      question: 'How do customers burn — and what is the ledger impact?',
      items: [
        {
          title: 'Sub-120ms POS Vouchers',
          href: '/product/redeem',
          desc: 'Instant barcode vouchers generated via WhatsApp or app, scanned directly at store checkout.',
          icon: GiftIcon,
          badge: 'Core'
        },
        {
          title: '500+ Digital Brand Catalog',
          href: '/product/redeem',
          desc: 'Direct API integrations for Amazon, Swiggy, Zomato, and Uber vouchers with net-margin clearing.',
          icon: ShoppingBagIcon
        },
        {
          title: 'Cash-Back & UPI Payouts',
          href: '/product/redeem',
          desc: 'Automated, bank-grade payout settlements governed by RBI Prepaid Instrument regulations.',
          icon: PercentIcon
        }
      ]
    },
    {
      num: '03',
      question: 'How do we orchestrate campaigns without developer bottlenecks?',
      items: [
        {
          title: 'Visual 6-Step Campaign Wizard',
          href: '/product/campaigns',
          desc: 'Configure triggers, audience segments, budget quotas, and expiration rules in under 10 minutes.',
          image: '/images/modules/campaign-wizard-icon.png',
        },
        {
          title: 'RFM Predictive Micro-Segments',
          href: '/product/analytics',
          desc: 'Dynamic customer clusters based on recency, frequency, and monetary spend percentiles.',
          image: '/images/modules/rfm-segments-icon.png',
        },
        {
          title: 'Incrementality & Holdout Testing',
          href: '/product/analytics',
          desc: 'Automatic 5% holdout control groups so finance can isolate true incremental revenue lift.',
          image: '/images/modules/holdout-testing-icon.png',
        }
      ]
    },
    {
      num: '04',
      question: 'How do we guarantee financial auditability and prevent fraud?',
      items: [
        {
          title: 'Append-Only Double-Entry Journal',
          href: '/product/trust',
          desc: 'Cryptographically sealed ledger. Transactions can never be edited or deleted, ensuring zero drift.',
          image: '/images/modules/sec4-card1.jpg',
        },
        {
          title: 'Maker-Checker Authorizations',
          href: '/product/trust',
          desc: 'Mandatory dual-operator sign-off on manual adjustments exceeding pre-set financial thresholds.',
          image: '/images/modules/sec4-card2.jpg',
        },
        {
          title: 'Actuarial Breakage Forecasting',
          href: '/product/analytics',
          desc: 'Ind AS 115 and IFRS 15 compliant schedules that calculate deferred liabilities to the penny.',
          image: '/images/modules/sec4-card3.jpg',
        }
      ]
    },
    {
      num: '05',
      question: 'How does it fit into our retail & digital stack?',
      items: [
        {
          title: 'Omnichannel POS Connectors',
          href: '/product/integrations',
          desc: 'Native plugins for Pine Labs, Posist, Shopify Plus, Magento, SAP, and custom store registers.',
          image: '/images/modules/sec5-pos-hq.png',
        },
        {
          title: 'WhatsApp Conversational Loyalty',
          href: '/product/whatsapp',
          desc: 'Turnkey WhatsApp flow for zero-download registration, balance lookups, and OTP redemptions.',
          image: '/images/modules/sec5-whatsapp-hq.png',
        },
        {
          title: 'White Label Member Apps',
          href: '/product/member-app',
          desc: 'Tier-adaptive native iOS and Android apps with Apple Wallet and Google Pay pass integration.',
          image: '/images/modules/sec5-app-hq.png',
        },
        {
          title: 'Developer REST APIs & Webhooks',
          href: '/platform/developers',
          desc: 'Sub-120ms p99 latency SLA with granular API keys, sandbox environments, and webhooks.',
          image: '/images/modules/sec5-api-hq.png',
        }
      ]
    }
  ];

  const planComparison: PlanRow[] = [
    {
      feature: 'Append-Only Double-Entry Ledger (Zero Balance Drift)',
      starter: true,
      growth: true,
      enterprise: true,
      coalition: true
    },
    {
      feature: 'Instant WhatsApp Onboarding & Digital Pass',
      starter: true,
      growth: true,
      enterprise: true,
      coalition: true
    },
    {
      feature: 'Sub-120ms POS Cash Counter Integration (Pine Labs, Shopify)',
      starter: false,
      growth: true,
      enterprise: true,
      coalition: true
    },
    {
      feature: 'Rolling VIP Tier Ladders & Margin Multipliers',
      starter: false,
      growth: true,
      enterprise: true,
      coalition: true
    },
    {
      feature: 'Maker-Checker Four-Eyes Approval Workflows',
      starter: false,
      growth: false,
      enterprise: true,
      coalition: true
    },
    {
      feature: 'Actuarial Ind AS 115 / IFRS 15 Breakage Reserve Reporting',
      starter: false,
      growth: false,
      enterprise: true,
      coalition: true
    },
    {
      feature: 'Multi-Tenant Inter-Merchant Clearinghouse & Settlement',
      starter: false,
      growth: false,
      enterprise: false,
      coalition: true
    },
    {
      feature: 'Dedicated Regional Data Residency (AWS Mumbai, Sydney, UAE)',
      starter: false,
      growth: false,
      enterprise: true,
      coalition: true
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section matching Deskmerit Features with Light Luxury Image BG */}
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-10 pb-20 lg:pt-14 lg:pb-24 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: "#FAF3E8",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#847C75] font-medium flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">Home</Link>
            <span className="text-[#847C75]/60">/</span>
            <Link to="/product" className="hover:text-[#B5651A] transition-colors">Product</Link>
            <span className="text-[#847C75]/60">/</span>
            <span className="text-[#17140F] font-bold">All Features</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (6 Cols) */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-3">
                COMPLETE PRODUCT CATALOGUE
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.25] text-[#17140F] mb-6">
                Every capability you need to run high-velocity loyalty.
              </h1>
              <p className="font-body text-base sm:text-lg text-[#5B534C] leading-relaxed max-w-xl mb-8">
                Punya Perks unites dynamic earning rules, multi-brand reward catalogs, customer tier progression, and omnichannel POS checkouts into one append-only double-entry ledger. Grouped by the questions they answer.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Start free trial</span>
                  <ArrowRightIcon className="w-4 h-4 ml-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#17140F] font-bold text-xs sm:text-sm border border-[#EBDFC6] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Book an architectural demo</span>
                </Link>
              </div>
            </div>

            {/* Right Tablet / Mockup Card (6 Cols) */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="rounded-3xl border border-[#EBDFC6] bg-white/90 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#EBDFC6]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#17140F] uppercase tracking-wider">
                      OPERATIONAL LEDGER CONSOLE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#B5651A] bg-[#FEF0E1] px-2.5 py-0.5 rounded-full border border-[#F3D7BD]">
                    Sub-120ms Latency
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">EARN RULES</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#17140F] mt-1">Multipliers & Tiers</div>
                    <div className="text-xs text-[#5B534C] mt-1 font-body">SKU-level margins with line-item rules</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">REDEEM CATALOG</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#B5651A] mt-1">Instant POS Burn</div>
                    <div className="text-xs text-[#5B534C] mt-1 font-body">500+ digital vouchers & store discounts</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">DOUBLE-ENTRY AUDIT</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-700 mt-1">0.00% Drift</div>
                    <div className="text-xs text-[#5B534C] mt-1 font-body">Cryptographically signed transaction journals</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6]">
                    <div className="text-[10px] font-mono text-[#847C75] uppercase">OMNICHANNEL CONNECTORS</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#B5651A] mt-1">50+ POS & ERPs</div>
                    <div className="text-xs text-[#5B534C] mt-1 font-body">Pine Labs, Shopify, Posist & WhatsApp</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF5ED]/80 border border-[#EBDFC6] flex items-center justify-between text-xs font-mono text-[#5B534C]">
                  <span>Architecture: Append-Only Event Stream</span>
                  <span className="text-emerald-700 font-bold">SOC 2 Type II Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Groups Layout styled according to Reference */}
      <div className="w-full bg-white">
        {featureGroups.map((group) => {
          const isSec1 = group.num === '01';
          const isSec2 = group.num === '02';
          const isSec3 = group.num === '03';
          const isSec4 = group.num === '04';

          if (isSec3) {
            return (
              <section
                key={group.num}
                className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#1F0E05] text-white overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/modules/sec3-dark-rewards-bg.jpg')",
                }}
              >
                {/* Subtle dark gradient overlay for optimal text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 pointer-events-none" />

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
                  {/* Centered Heading */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    <span className="font-mono text-[11px] font-bold text-[#E59846] tracking-[0.2em] uppercase block mb-3">
                      SECTION 03
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-tight">
                      {group.question}
                    </h2>
                  </div>

                  {/* 3 White Curved Feature Cards with Icons */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="group bg-white rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-[#17140F] border border-white/20 hover:-translate-y-1"
                      >
                        <div>
                          {/* 3D Illustration / Graphic */}
                          <div className="h-16 flex items-center mb-4">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-14 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
                              />
                            ) : null}
                          </div>

                          <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors mb-2 leading-snug">
                            {item.title}
                          </h3>

                          <p className="font-body text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="mt-6 pt-3 flex items-center text-[11px] font-bold tracking-wider uppercase text-[#B5651A] group-hover:text-[#9a5413] transition-colors">
                          <span>EXPLORE DETAILS &gt;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (isSec2) {
            return (
              <section
                key={group.num}
                className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EBDFC6]"
              >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                  {/* Centered Heading */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-3">
                      SECTION 02
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17140F] tracking-tight leading-tight">
                      {group.question}
                    </h2>
                  </div>

                  {/* 3 Clean Rounded White Cards with Outline */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto">
                    {group.items.map((item) => {
                      const IconComp = item.icon || GiftIcon;
                      return (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#EBDFC6] hover:border-[#B5651A] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
                        >
                          <div>
                            {/* Icon Top Left */}
                            <div className="w-10 h-10 rounded-xl bg-[#FAF5ED] border border-[#EBDFC6] flex items-center justify-center text-[#B5651A] group-hover:bg-[#B5651A] group-hover:text-white transition-colors mb-5">
                              <IconComp className="w-5 h-5" />
                            </div>

                            <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors mb-2.5 leading-snug">
                              {item.title}
                            </h3>

                            <p className="font-body text-xs sm:text-sm text-[#5B534C] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <div className="mt-6 pt-3 flex items-center justify-between text-xs text-[#847C75] group-hover:text-[#B5651A] transition-colors border-t border-[#FAF5ED]">
                            <span className="font-medium text-[11px]">Explore details</span>
                            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          }

          if (isSec1 || isSec4) {
            const isFourCol = isSec1;
            return (
              <section
                key={group.num}
                className="w-full py-16 sm:py-20 lg:py-24 bg-[#FCF8F2] border-b border-[#EBDFC6]"
              >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                  {/* Centered Heading */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-3">
                      SECTION {group.num}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17140F] tracking-tight leading-tight">
                      {group.question}
                    </h2>
                  </div>

                  {/* Cards Grid with Warm Beige Background and Top Image Thumbnail */}
                  <div
                    className={`grid grid-cols-1 ${
                      isFourCol
                        ? 'sm:grid-cols-2 lg:grid-cols-4 gap-6'
                        : 'md:grid-cols-3 gap-6 w-full mx-auto'
                    }`}
                  >
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="group bg-[#F7EFE4] rounded-3xl p-4.5 sm:p-5 border border-[#EBDFC6] hover:border-[#B5651A]/60 hover:bg-[#FAF4EB] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-sm"
                      >
                        <div>
                          {/* Top Embedded Photo Thumbnail */}
                          {item.image && (
                            <div className="w-full h-36 rounded-2xl overflow-hidden bg-neutral-900 border border-[#EBDFC6]/80 mb-4 shadow-2xs">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}

                          <h3 className="font-display font-bold text-base text-[#17140F] group-hover:text-[#B5651A] transition-colors mb-2 leading-snug">
                            {item.title}
                          </h3>

                          <p className="font-body text-xs text-[#5B534C] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        {/* Trailing Link */}
                        <div className="mt-5 pt-3 border-t border-[#EBDFC6]/60 flex items-center justify-between">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-[#B5651A] group-hover:text-[#9a5413] transition-colors">
                            {isSec1 ? 'EXPLORE DETAILS >' : 'Explore details'}
                          </span>
                          {!isSec1 && (
                            <ArrowRightIcon className="w-3.5 h-3.5 text-[#847C75] group-hover:text-[#B5651A] group-hover:translate-x-1 transition-all" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Section 05: Warm wave banner background with 4 cards and bottom-right 3D badge icons
          return (
            <section
              key={group.num}
              className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FFF8EE] border-b border-[#EBDFC6] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/images/modules/sec5-banner-bg.jpg')",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                  <span className="font-mono text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-3">
                    SECTION {group.num}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17140F] tracking-tight leading-tight">
                    {group.question}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="group bg-white rounded-[26px] p-6 sm:p-7 border border-[#EBDFC6] hover:border-[#B5651A] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg relative overflow-hidden"
                    >
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#17140F] group-hover:text-[#B5651A] transition-colors mb-2.5 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-[#5B534C] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#FAF5ED] flex items-end justify-between gap-2">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#B5651A] group-hover:text-[#9a5413] transition-colors pb-1">
                          EXPLORE DETAILS &gt;
                        </span>
                        {item.image && (
                          <div className="w-20 h-20 -mr-1 -mb-1 flex items-end justify-end shrink-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="max-h-20 w-auto max-w-[85px] object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Feature Availability by Plan Matrix (1440px Container) */}
      <section className="bg-[#FAF4EC] py-16 sm:py-24 border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="bg-white rounded-[28px] p-8 sm:p-12 border border-[#E8DCC9] shadow-sm">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B5651A] block mb-2">
                DEPLOYMENT TIERS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1C1610] mb-2">
                Feature Availability by Architecture Tier
              </h2>
              <p className="font-body text-sm text-neutral-600 max-w-2xl leading-relaxed">
                Choose the architecture tier that matches your transacting member volume. Every tier includes our non-negotiable double-entry ledger guarantee.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-body">
                <thead>
                  <tr className="border-b border-[#E8DCC9] text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 pr-4 font-bold text-neutral-800">Capability</th>
                    <th className="py-3.5 px-3 font-bold text-neutral-700 text-center">Starter</th>
                    <th className="py-3.5 px-3 font-bold text-[#D9822B] text-center bg-[#FEF0E1]/40 rounded-t-xl">Growth</th>
                    <th className="py-3.5 px-3 font-bold text-neutral-800 text-center">Enterprise</th>
                    <th className="py-3.5 px-3 font-bold text-neutral-800 text-center">Coalition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DCC9]/60 text-[#1C1610]">
                  {planComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF4EC]/40 transition-colors">
                      <td className="py-4 pr-4 font-medium text-neutral-800">
                        {row.feature}
                      </td>
                      <td className="py-4 px-3 text-center">
                        {row.starter ? (
                          <CheckIcon className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <XIcon className="w-4 h-4 text-neutral-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-3 text-center bg-[#FEF0E1]/40 font-semibold">
                        {row.growth ? (
                          <CheckIcon className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <XIcon className="w-4 h-4 text-neutral-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-3 text-center">
                        {row.enterprise ? (
                          <CheckIcon className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <XIcon className="w-4 h-4 text-neutral-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-3 text-center">
                        {row.coalition ? (
                          <CheckIcon className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <XIcon className="w-4 h-4 text-neutral-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DCC9] flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-body">
              <span>Need custom POS concurrency limits or specialized data isolation enclaves?</span>
              <Link
                to="/contact"
                className="font-bold text-[#D9822B] hover:text-[#B5651A] inline-flex items-center gap-1"
              >
                <span>Talk to our enterprise solution architects</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Page CTA */}
      <PageCta
        title="Launch your loyalty operating system in weeks."
        subtitle="TURNKEY INFRASTRUCTURE"
        description="Experience how Punya Perks unifies your earning rules, reward catalogs, customer tiers, and WhatsApp notifications."
        buttonText="Request a demo"
        buttonHref="/contact"
        secondaryText="Explore documentation"
        secondaryHref="/platform/developers"
      />
    </MainLayout>
  );
};

export default ProductOverviewPage;
