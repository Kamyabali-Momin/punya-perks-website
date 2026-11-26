import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { Check, Sliders, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'AUD' | 'NZD' | 'USD'>('INR');
  const [annual, setAnnual] = useState(true);
  const [memberCount, setMemberCount] = useState<number>(50000);

  const currencyConfig = {
    INR: {
      symbol: '₹',
      launchBase: 24999,
      growthBase: 69999,
      growthPer10k: 4500,
      annualDiscount: 0.85,
    },
    AUD: {
      symbol: 'A$',
      launchBase: 499,
      growthBase: 1399,
      growthPer10k: 95,
      annualDiscount: 0.85,
    },
    NZD: {
      symbol: 'NZ$',
      launchBase: 549,
      growthBase: 1499,
      growthPer10k: 105,
      annualDiscount: 0.85,
    },
    USD: {
      symbol: '$',
      launchBase: 349,
      growthBase: 949,
      growthPer10k: 65,
      annualDiscount: 0.85,
    },
  };

  const curr = currencyConfig[currency];

  // Price calculations with annual discount
  const launchPrice = Math.round(annual ? curr.launchBase * curr.annualDiscount : curr.launchBase);
  const growthPrice = Math.round(
    annual
      ? (curr.growthBase + Math.max(0, Math.floor((memberCount - 25000) / 10000)) * curr.growthPer10k) * curr.annualDiscount
      : curr.growthBase + Math.max(0, Math.floor((memberCount - 25000) / 10000)) * curr.growthPer10k
  );

  const plans = [
    {
      name: 'Launch',
      price: `${curr.symbol}${launchPrice.toLocaleString()}`,
      period: '/month',
      desc: 'Ideal for fast-growing D2C and emerging single-market retail brands.',
      features: [
        'Up to 25,000 active members',
        'Full rules engine & tier multipliers',
        'WhatsApp enrolment & balance bot',
        'Shopify & WooCommerce native plugins',
        'Append-only ledger with standard export',
        'Standard email & Slack support',
      ],
      cta: 'Start in sandbox',
      href: '/start',
      featured: false,
    },
    {
      name: 'Growth',
      price: `${curr.symbol}${growthPrice.toLocaleString()}`,
      period: '/month',
      desc: 'Engineered for multi-store retail, omnichannel chains and regional banks.',
      features: [
        `Up to ${memberCount.toLocaleString()} active members`,
        'White-label mobile app with tier progression',
        'Holdout group incrementality & A/B testing',
        'Maker-checker financial controls',
        'POS hardware connectors (Pine Labs, Lightspeed)',
        'Sub-120ms offline sync & idempotency',
        'Priority 24/7 SLA with dedicated engineer',
      ],
      cta: 'Request a demo',
      href: '/demo',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For national banks, large retail conglomerates and coalition loyalty networks.',
      features: [
        'Unlimited active members & multi-tier brands',
        'Dedicated isolated VPC / regional cloud cell',
        'Multi-tenant clearinghouse settlement engine',
        'Custom ERP & core banking integration pipeline',
        'Custom regulatory compliance & data escrow',
        'Dedicated Principal Architect & 99.95% SLA',
      ],
      cta: 'Talk to enterprise sales',
      href: '/contact',
      featured: false,
    },
  ];

  const matrixSections = [
    {
      category: 'Core Ledger & Architecture',
      features: [
        { name: 'Append-only double-entry audit ledger', launch: true, growth: true, enterprise: true },
        { name: 'Sub-120ms POS transaction processing', launch: true, growth: true, enterprise: true },
        { name: 'Maker-checker manual point adjustments', launch: false, growth: true, enterprise: true },
        { name: 'Multi-tender split redemptions', launch: 'Basic', growth: 'Advanced', enterprise: 'Unlimited' },
        { name: 'Offline POS queueing with replay protection', launch: true, growth: true, enterprise: true },
      ],
    },
    {
      category: 'Channels & Member Apps',
      features: [
        { name: 'WhatsApp bot (OTP enrolment & balance statements)', launch: true, growth: true, enterprise: true },
        { name: 'White-label iOS & Android apps (React Native)', launch: false, growth: true, enterprise: true },
        { name: 'Apple Wallet & Google Pay digital loyalty passes', launch: false, growth: true, enterprise: true },
        { name: 'Web customer portal widget', launch: true, growth: true, enterprise: true },
      ],
    },
    {
      category: 'Campaigns & Intelligence',
      features: [
        { name: 'Visual rulebook builder with tier multipliers', launch: true, growth: true, enterprise: true },
        { name: 'Automated holdout groups & incrementality lift', launch: false, growth: true, enterprise: true },
        { name: 'Predictive churn & RFM segmentation', launch: false, growth: true, enterprise: true },
        { name: 'Coalition partner currency clearinghouse', launch: false, growth: false, enterprise: true },
      ],
    },
    {
      category: 'Security & Enterprise SLAs',
      features: [
        { name: 'Scoped API tokens & deterministic webhooks', launch: true, growth: true, enterprise: true },
        { name: 'SAML 2.0 / OIDC SSO & SCIM directory sync', launch: false, growth: false, enterprise: true },
        { name: 'Regional data residency (India, Australia, NZ, UAE)', launch: false, growth: true, enterprise: true },
        { name: 'Production uptime SLA guarantee', launch: '99.5%', growth: '99.9%', enterprise: '99.95%' },
      ],
    },
  ];

  const pricingFaqs = [
    {
      q: 'How do you define an "active member"?',
      a: 'An active member is any unique customer who earned points, redeemed a voucher, logged into the member app, or engaged via WhatsApp during the monthly billing cycle. Inactive database records incur zero cost.',
    },
    {
      q: 'Can we change plans or add members as our footprint expands?',
      a: 'Yes. Seat and member volume adjustments are prorated automatically. Any unused credits apply directly toward your next billing cycle with zero penalties.',
    },
    {
      q: 'Do you offer local GST-compliant invoicing in India and regional tax compliance?',
      a: 'Yes. Indian organizations receive automated GST-compliant tax invoices with GSTIN reverse-charge validation. Australian and New Zealand entities receive GST-compliant tax invoices in AUD and NZD respectively.',
    },
    {
      q: 'Is there a free sandbox for testing before contracting?',
      a: 'Yes. Every team starts with full access to our developer sandbox with mock POS terminals, OpenAPI specifications, and test WhatsApp flows. No credit card required.',
    },
    {
      q: 'What happens during a pilot rollout?',
      a: 'During your pilot (typically 2 to 4 weeks), you can launch in selected flagship stores or digital segments with full access to our engineering team before expanding nationwide.',
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="TRANSPARENT PRICING"
        title="Predictable plans. Scaled by member volume."
        description="Every plan includes our append-only double-entry ledger, visual rule engine, and developer sandbox. Pay for active members, not for seat surcharges."
        breadcrumbs={[{ label: 'Pricing' }]}
        primaryCtaText="Compare plans"
        primaryCtaHref="#comparison-matrix"
        secondaryCtaText="Talk to sales"
        secondaryCtaHref="/contact"
        image="/images/platform-portal-tablet.png"
        imageAlt="Punya Perks Pricing & Ledger Overview"
      />

      {/* Currency Switcher & Billing Interval */}
      <section className="py-12 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Currency Pill Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#847C75] uppercase tracking-wider mr-1">Currency:</span>
            <div className="flex items-center bg-[#FAF5ED] p-1 rounded-full border border-[#EBDFC6] text-xs font-semibold">
              {(['INR', 'AUD', 'NZD', 'USD'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    currency === c
                      ? 'bg-[#B5651A] text-white shadow-xs'
                      : 'text-[#17140F] hover:text-[#B5651A]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center gap-3 text-xs font-semibold text-[#17140F]">
            <span className={!annual ? 'text-[#B5651A] font-bold' : 'text-[#847C75]'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                annual ? 'bg-[#B5651A]' : 'bg-[#EBDFC6]'
              }`}
              aria-label="Toggle annual billing"
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={annual ? 'text-[#B5651A] font-bold' : 'text-[#847C75]'}>
              Annual <span className="bg-[#FBE9D6] text-[#B5651A] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#B5651A]/20">Save 15%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Member Size Slider Calculator (Deskmerit Feature) */}
      <section className="py-12 sm:py-16 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#EBDFC6] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#B5651A] font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Sliders size={15} />
                  <span>Interactive Member Calculator</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#17140F]">
                  Estimate your Growth plan investment
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-[#847C75]">Active Loyalty Members:</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#B5651A]">
                  {memberCount.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2.5">
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={memberCount}
                onChange={(e) => setMemberCount(Number(e.target.value))}
                className="w-full h-2.5 bg-[#EBDFC6] rounded-lg appearance-none cursor-pointer accent-[#B5651A]"
              />
              <div className="flex justify-between text-[11px] text-[#847C75] font-mono">
                <span>10,000 members</span>
                <span>100,000</span>
                <span>200,000</span>
                <span>300,000+ members</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EBDFC6]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5B534C]">
              <span>Need over 300,000 active members? Our Enterprise tier offers custom volume tiers.</span>
              <a href="/contact" className="font-bold text-[#B5651A] hover:underline whitespace-nowrap">
                Talk to Enterprise Sales →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pricing Cards */}
      <section
        className="relative w-full py-16 sm:py-24 bg-[#1F0E05] bg-cover bg-center overflow-hidden border-b border-[#3E2413] font-body"
        style={{
          backgroundImage: "url('/images/modules/sec3-dark-rewards-bg.jpg')",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((p, idx) => (
              <div
                key={p.name}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all relative reveal-on-scroll ${
                  idx === 1 ? 'delay-100' : idx === 2 ? 'delay-200' : ''
                } ${
                  p.featured
                    ? 'bg-[#FFFDF9] border-2 border-[#B5651A] shadow-2xl'
                    : 'bg-white border border-[#EBDFC6] shadow-xl hover:shadow-2xl'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B5651A] text-white font-body text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                    MOST RECOMMENDED
                  </span>
                )}

                <div>
                  <h3 className="font-display font-bold text-2xl text-[#17140F]">{p.name}</h3>
                  <p className="text-xs text-[#5B534C] mt-2 min-h-[34px] leading-relaxed">{p.desc}</p>

                  <div className="my-6 pb-6 border-b border-[#EBDFC6]/70">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#17140F]">
                        {p.price}
                      </span>
                      {p.period && <span className="text-xs text-[#847C75]">{p.period}</span>}
                    </div>
                    {annual && p.price !== 'Custom' && (
                      <span className="text-[11px] text-[#B5651A] font-semibold block mt-1">
                        Billed annually (15% savings applied)
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-[#5B534C]">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check size={16} className="text-[#B5651A] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href={p.href}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                      p.featured
                        ? 'bg-[#B5651A] hover:bg-[#9a5413] text-white shadow-md hover:scale-102'
                        : 'bg-[#FAF5ED] hover:bg-[#EBDFC6] text-[#17140F] border border-[#EBDFC6]'
                    }`}
                  >
                    <span>{p.cta}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix (Deskmerit Table Structure) */}
      <section id="comparison-matrix" className="py-16 sm:py-24 bg-[#FAF5ED] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-12">
            <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.16em] uppercase block mb-2">
              DEEP COMPARISON
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17140F]">
              Feature comparison matrix
            </h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl border border-[#EBDFC6] shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EBDFC6] bg-[#FAF5ED]/50 text-[#17140F]">
                  <th className="py-4 px-6 font-display font-bold text-base sm:text-lg">Capabilities</th>
                  <th className="py-4 px-4 font-bold text-center w-36">Launch</th>
                  <th className="py-4 px-4 font-bold text-center w-36 text-[#B5651A] bg-[#FBE9D6]/30">Growth</th>
                  <th className="py-4 px-4 font-bold text-center w-36">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBDFC6]/60">
                {matrixSections.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-[#FAF5ED]/80">
                      <td colSpan={4} className="py-3 px-6 font-bold text-xs uppercase tracking-wider text-[#B5651A]">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="hover:bg-[#FAF5ED]/30 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-[#17140F]">{feat.name}</td>
                        <td className="py-3.5 px-4 text-center text-[#5B534C]">
                          {typeof feat.launch === 'boolean' ? (
                            feat.launch ? <Check size={16} className="text-[#B5651A] mx-auto" /> : <span className="text-gray-300">—</span>
                          ) : (
                            feat.launch
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-semibold text-[#17140F] bg-[#FBE9D6]/20">
                          {typeof feat.growth === 'boolean' ? (
                            feat.growth ? <Check size={16} className="text-[#B5651A] mx-auto" /> : <span className="text-gray-300">—</span>
                          ) : (
                            feat.growth
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center font-semibold text-[#17140F]">
                          {typeof feat.enterprise === 'boolean' ? (
                            feat.enterprise ? <Check size={16} className="text-[#B5651A] mx-auto" /> : <span className="text-gray-300">—</span>
                          ) : (
                            feat.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Split FAQ Section */}
      <InternalPageFaq
        title="Frequently asked pricing & contract questions"
        eyebrow="BILLING FAQ"
        faqs={pricingFaqs}
        helpTitle="Need a custom enterprise SLA or coalition quotes?"
        helpDescription="Speak directly with our commercial team for multi-market licensing, invoice terms, and pilot rollouts across India, Australia and New Zealand."
        helpButtonText="Request enterprise quote"
        helpButtonHref="/contact"
      />

      {/* Modern Dark Gradient CTA Band */}
      <PageCta
        title="Get started in your dedicated sandbox today."
        subtitle="NO LOCK-IN CONTRACTS"
        description="Experience Punya Perks hands-on. Create rulebooks, simulate tier multipliers, and connect mock POS transactions within minutes."
        buttonText="Start in sandbox"
        buttonHref="/start"
        secondaryText="Book a 30-min walkthrough"
        secondaryHref="/demo"
      />
    </MainLayout>
  );
};
export default PricingPage;
