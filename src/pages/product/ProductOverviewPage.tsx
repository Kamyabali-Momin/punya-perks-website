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
        className="relative w-full border-b border-[#EADBC6] pt-10 pb-20 lg:pt-14 lg:pb-24 font-body overflow-hidden text-[#220901]"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs text-[#826B63] font-medium flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-[#BC3908] transition-colors">Home</Link>
            <span className="text-[#826B63]/60">/</span>
            <Link to="/product" className="hover:text-[#BC3908] transition-colors">Product</Link>
            <span className="text-[#826B63]/60">/</span>
            <span className="text-[#220901] font-bold">All Features</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (6 Cols) */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#BC3908] mb-3">
                COMPLETE PRODUCT CATALOGUE
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.25] text-[#220901] mb-6">
                Every capability you need to run high-velocity loyalty.
              </h1>
              <p className="font-body text-base sm:text-lg text-[#563E37] leading-relaxed max-w-xl mb-8">
                Punya Perks unites dynamic earning rules, multi-brand reward catalogs, customer tier progression, and omnichannel POS checkouts into one append-only double-entry ledger. Grouped by the questions they answer.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#BC3908] hover:bg-[#941B0C] text-white font-extrabold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Start free trial</span>
                  <ArrowRightIcon className="w-4 h-4 ml-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#220901] font-bold text-xs sm:text-sm border border-[#EADBC6] transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                >
                  <span>Book an architectural demo</span>
                </Link>
              </div>
            </div>

            {/* Right Tablet / Mockup Card (6 Cols) */}
            <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
              <div className="rounded-3xl border border-[#EADBC6] bg-white/90 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#EADBC6]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#220901] uppercase tracking-wider">
                      OPERATIONAL LEDGER CONSOLE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#BC3908] bg-[#F6EFE2] px-2.5 py-0.5 rounded-full border border-[#F4D89C]">
                    Sub-120ms Latency
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F6EFE2] border border-[#EADBC6]">
                    <div className="text-[10px] font-mono text-[#826B63] uppercase">EARN RULES</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#220901] mt-1">Multipliers & Tiers</div>
                    <div className="text-xs text-[#563E37] mt-1 font-body">SKU-level margins with line-item rules</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F6EFE2] border border-[#EADBC6]">
                    <div className="text-[10px] font-mono text-[#826B63] uppercase">REDEEM CATALOG</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#BC3908] mt-1">Instant POS Burn</div>
                    <div className="text-xs text-[#563E37] mt-1 font-body">500+ digital vouchers & store discounts</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F6EFE2] border border-[#EADBC6]">
                    <div className="text-[10px] font-mono text-[#826B63] uppercase">DOUBLE-ENTRY AUDIT</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-700 mt-1">0.00% Drift</div>
                    <div className="text-xs text-[#563E37] mt-1 font-body">Cryptographically signed transaction journals</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F6EFE2] border border-[#EADBC6]">
                    <div className="text-[10px] font-mono text-[#826B63] uppercase">OMNICHANNEL CONNECTORS</div>
                    <div className="font-display font-extrabold text-xl sm:text-2xl text-[#BC3908] mt-1">50+ POS & ERPs</div>
                    <div className="text-xs text-[#563E37] mt-1 font-body">Pine Labs, Shopify, Posist & WhatsApp</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6EFE2]/80 border border-[#EADBC6] flex items-center justify-between text-xs font-mono text-[#563E37]">
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
                className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] text-white overflow-hidden border-y border-[#621708]"
              >
                <div className="absolute -left-24 top-0 w-96 h-96 bg-[#F6AA1C]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
                  {/* Centered Heading */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    <span className="font-mono text-[11px] font-bold text-[#F6AA1C] tracking-[0.2em] uppercase block mb-3">
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
                        className="group bg-white rounded-3xl p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-[#220901] border border-white/20 hover:-translate-y-1"
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

                          <h3 className="font-display font-bold text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors mb-2 leading-snug">
                            {item.title}
                          </h3>

                          <p className="font-body text-xs sm:text-sm text-[#563E37] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="mt-6 pt-3 flex items-center text-[11px] font-bold tracking-wider uppercase text-[#BC3908] group-hover:text-[#621708] transition-colors">
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
                className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#EADBC6]"
              >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                  {/* Centered Heading */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-3">
                      SECTION 02
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#220901] tracking-tight leading-tight">
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
                          className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#EADBC6] hover:border-[#BC3908] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md"
                        >
                          <div>
                            {/* Icon Top Left */}
                            <div className="w-10 h-10 rounded-xl bg-[#F6EFE2] border border-[#EADBC6] flex items-center justify-center text-[#BC3908] group-hover:bg-[#BC3908] group-hover:text-white transition-colors mb-5">
                              <IconComp className="w-5 h-5" />
                            </div>

                            <h3 className="font-display font-bold text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors mb-2.5 leading-snug">
                              {item.title}
                            </h3>

                            <p className="font-body text-xs sm:text-sm text-[#563E37] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          <div className="mt-6 pt-3 flex items-center justify-between text-xs text-[#826B63] group-hover:text-[#BC3908] transition-colors border-t border-[#F6EFE2]">
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
                className="w-full py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] border-b border-[#EADBC6]"
              >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                  {/* Centered Heading */}
                  <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-3">
                      SECTION {group.num}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#220901] tracking-tight leading-tight">
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
                        className="group bg-[#F6EFE2] rounded-3xl p-4.5 sm:p-5 border border-[#EADBC6] hover:border-[#BC3908]/60 hover:bg-[#FDFBF7] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-sm"
                      >
                        <div>
                          {/* Top Embedded Photo Thumbnail */}
                          {item.image && (
                            <div className="w-full h-36 rounded-2xl overflow-hidden bg-neutral-900 border border-[#EADBC6]/80 mb-4 shadow-2xs">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}

                          <h3 className="font-display font-bold text-base text-[#220901] group-hover:text-[#BC3908] transition-colors mb-2 leading-snug">
                            {item.title}
                          </h3>

                          <p className="font-body text-xs text-[#563E37] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        {/* Trailing Link */}
                        <div className="mt-5 pt-3 border-t border-[#EADBC6]/60 flex items-center justify-between">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-[#BC3908] group-hover:text-[#621708] transition-colors">
                            {isSec1 ? 'EXPLORE DETAILS >' : 'Explore details'}
                          </span>
                          {!isSec1 && (
                            <ArrowRightIcon className="w-3.5 h-3.5 text-[#826B63] group-hover:text-[#BC3908] group-hover:translate-x-1 transition-all" />
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
              className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] border-b border-[#EADBC6] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/images/modules/sec5-banner-bg.jpg')",
              }}
            >
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                  <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block mb-3">
                    SECTION {group.num}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#220901] tracking-tight leading-tight">
                    {group.question}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="group bg-white rounded-[26px] p-6 sm:p-7 border border-[#EADBC6] hover:border-[#BC3908] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg relative overflow-hidden"
                    >
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#220901] group-hover:text-[#BC3908] transition-colors mb-2.5 leading-snug">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-[#563E37] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#F6EFE2] flex items-end justify-between gap-2">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#BC3908] group-hover:text-[#621708] transition-colors pb-1">
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
      <section className="bg-[#F6EFE2] py-16 sm:py-24 border-b border-[#EADBC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EADBC6] shadow-sm">
            <div className="mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#BC3908] block mb-2">
                DEPLOYMENT TIERS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#220901] mb-2">
                Feature Availability by Architecture Tier
              </h2>
              <p className="font-body text-sm text-[#563E37] max-w-2xl leading-relaxed">
                Choose the architecture tier that matches your transacting member volume. Every tier includes our non-negotiable double-entry ledger guarantee.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-body">
                <thead>
                  <tr className="border-b border-[#EADBC6] text-[#826B63] font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 pr-4 font-bold text-[#220901]">Capability</th>
                    <th className="py-3.5 px-3 font-bold text-[#563E37] text-center">Starter</th>
                    <th className="py-3.5 px-3 font-bold text-[#BC3908] text-center bg-[#F6EFE2]/40 rounded-t-xl">Growth</th>
                    <th className="py-3.5 px-3 font-bold text-[#220901] text-center">Enterprise</th>
                    <th className="py-3.5 px-3 font-bold text-[#220901] text-center">Coalition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADBC6]/60 text-[#220901]">
                  {planComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F6EFE2]/50 transition-colors">
                      <td className="py-4 pr-4 font-medium text-[#220901]">
                        {row.feature}
                      </td>
                      <td className="py-4 px-3 text-center">
                        {row.starter ? (
                          <CheckIcon className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <XIcon className="w-4 h-4 text-neutral-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-3 text-center bg-[#F6EFE2]/20 font-semibold">
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

            <div className="mt-8 pt-6 border-t border-[#EADBC6] flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-body">
              <span>Need custom POS concurrency limits or specialized data isolation enclaves?</span>
              <Link
                to="/contact"
                className="font-bold text-[#BC3908] hover:text-[#BC3908] inline-flex items-center gap-1"
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
