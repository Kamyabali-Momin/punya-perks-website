import React, { useState } from 'react';
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  SparklesIcon,
  ShieldCheckIcon,
  ZapIcon,
  ChevronDownIcon,
  LayersIcon,
} from 'lucide-react';

export const ProgrammeFinderSection: React.FC = () => {
  const [industry, setIndustry] = useState('Retail & fashion');
  const [goal, setGoal] = useState('Repeat purchase');
  const [market, setMarket] = useState('India');
  const [showResult, setShowResult] = useState(false);

  const templates: Record<
    string,
    {
      name: string;
      mechanisms: string[];
      compliance: string;
      timeline: string;
      plan: string;
    }
  > = {
    'Retail & fashion': {
      name: 'Omnichannel Fashion & Retail Playbook',
      mechanisms: [
        'Receipt barcode scanning & instant point credit',
        'GST-excluded eligible spend calculation',
        'Tier multipliers (Silver 1x, Gold 1.5x, VIP 2x)',
        'WhatsApp member pass & digital statements',
      ],
      compliance:
        market === 'India'
          ? 'DPDP Act 2023 POS consent capture & TRAI DLT template registration'
          : 'Privacy Act 1988 compliance & transparent receipt opt-in',
      timeline: '3–4 weeks with Shopify & Lightspeed POS connectors',
      plan: 'Growth Plan',
    },
    'Banks & fintech': {
      name: 'Fintech & Card Rewards Playbook',
      mechanisms: [
        'Card-linked automated earn & settlement',
        'KYC-gated cash-out & catalog redemptions',
        'Maker-checker immutable audit ledger',
        'SSO authentication & role-based RBAC',
      ],
      compliance:
        market === 'India'
          ? 'RBI digital payment guidelines & localized data-residency'
          : 'APRA standards & Australian Privacy Principles',
      timeline: '6–8 weeks with core banking webhook pipeline',
      plan: 'Enterprise Plan',
    },
    'Hospitality & dining': {
      name: 'Dining & Frequent Visit Playbook',
      mechanisms: [
        'Visit frequency stamp cards & milestone unlocks',
        'Table QR ordering points & bill split earn',
        'Happy-hour multipliers & off-peak perks',
        'VIP priority table reservations',
      ],
      compliance: 'Spam Act commercial messaging consent & location-based opt-in',
      timeline: '2–3 weeks with tablet POS integration',
      plan: 'Growth Plan',
    },
    'E-commerce & D2C': {
      name: 'D2C Checkout & Referral Playbook',
      mechanisms: [
        'One-click cart points redemption slider',
        'Two-sided referral rewards with anti-abuse',
        'UGC photo review & social follow points',
        'VIP early drop access & tiered shipping perks',
      ],
      compliance: 'Cookie privacy compliance & multi-currency checkout tax isolation',
      timeline: '1–2 weeks with turnkey Shopify app',
      plan: 'Launch or Growth Plan',
    },
    'Coalition & enterprise': {
      name: 'Coalition Multi-Brand Clearinghouse',
      mechanisms: [
        'Cross-brand points exchange & bilateral rates',
        'Automated clearinghouse billing & settlement',
        'Unified member identity across retail brands',
        'Shared tier perks & enterprise partner catalog',
      ],
      compliance: 'Cross-border data protection & strict multi-tenant isolation',
      timeline: '8–12 weeks enterprise deployment',
      plan: 'Enterprise Custom',
    },
  };

  const currentTemplate = templates[industry] || templates['Retail & fashion'];

  return (
    <section className="w-full bg-[#FFFDF9] border-b border-[#EBDFC6] py-14 sm:py-16 lg:py-20 font-body" id="programme-finder">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Luxury Gold & Dark Container with compact padding */}
        <div className="rounded-[22px] bg-gradient-to-br from-[#1C1610] via-[#0D0A08] to-[#14100C] p-6 sm:p-8 lg:p-10 text-white shadow-xl overflow-hidden relative border border-[#B5651A]/35">
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#B5651A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#E0AE7B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B5651A]/20 border border-[#B5651A]/40 text-[#E0AE7B] font-mono text-[11px] font-bold tracking-[0.2em] uppercase">
                <SparklesIcon size={12} className="text-[#E0AE7B]" />
                <span>PROGRAMME FINDER</span>
              </div>

              <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-[1.18] text-white">
                Find your loyalty programme <br className="hidden sm:inline" />
                <span className="text-[#E0AE7B] italic">template in seconds.</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#D8CFBF] leading-relaxed max-w-lg font-body">
                Select your industry, business objective, and operating market to instantly preview recommended mechanisms, compliance requirements, and launch timeline.
              </p>

              {/* Three Value Highlights */}
              <div className="pt-1 space-y-2.5 max-w-md">
                <div className="flex items-center gap-2.5 text-xs text-[#F3EBDD]">
                  <div className="w-5 h-5 rounded-full bg-[#B5651A]/30 flex items-center justify-center shrink-0 border border-[#B5651A]/50">
                    <ZapIcon size={11} className="text-[#E0AE7B]" />
                  </div>
                  <span><strong>Sub-120ms SLA</strong> on POS and webhook transactions</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-[#F3EBDD]">
                  <div className="w-5 h-5 rounded-full bg-[#B5651A]/30 flex items-center justify-center shrink-0 border border-[#B5651A]/50">
                    <ShieldCheckIcon size={11} className="text-[#E0AE7B]" />
                  </div>
                  <span><strong>Compliant by default</strong> with DPDP Act 2023 & TRAI DLT</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-[#F3EBDD]">
                  <div className="w-5 h-5 rounded-full bg-[#B5651A]/30 flex items-center justify-center shrink-0 border border-[#B5651A]/50">
                    <LayersIcon size={11} className="text-[#E0AE7B]" />
                  </div>
                  <span><strong>50+ Connectors</strong> for Shopify, Lightspeed, Stripe & Razorpay</span>
                </div>
              </div>
            </div>

            {/* Right Form Card - Compact, clean and human-crafted */}
            <div className="lg:col-span-6">
              <div className="rounded-[18px] bg-white text-[#17140F] p-5 sm:p-6 md:p-7 shadow-lg border border-[#EBDFC6] space-y-4">
                <div>
                  <h3 className="font-display font-normal text-xl sm:text-2xl text-[#17140F]">
                    Find your template
                  </h3>
                  <p className="font-body text-xs text-[#847C75] mt-0.5">
                    Select your parameters to view the recommended architecture.
                  </p>
                </div>

                {/* Field 1: Industry */}
                <div>
                  <label className="block text-xs font-semibold text-[#17140F]/90 mb-1.5">
                    What is your industry?
                  </label>
                  <div className="relative">
                    <select
                      value={industry}
                      onChange={(e) => {
                        setIndustry(e.target.value);
                        setShowResult(false);
                      }}
                      className="w-full h-11 appearance-none rounded-[10px] bg-[#FAF6F0] border border-[#EBDFC6] px-3.5 pr-10 text-xs sm:text-sm text-[#17140F] font-medium focus:ring-2 focus:ring-[#B5651A]/20 focus:border-[#B5651A] outline-none cursor-pointer transition-all hover:border-[#B5651A]/50"
                    >
                      <option value="Retail & fashion">Retail & fashion</option>
                      <option value="Banks & fintech">Banks & fintech</option>
                      <option value="Hospitality & dining">Hospitality & dining</option>
                      <option value="E-commerce & D2C">E-commerce & D2C</option>
                      <option value="Coalition & enterprise">Coalition & enterprise</option>
                    </select>
                    <ChevronDownIcon
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#847C75]"
                    />
                  </div>
                </div>

                {/* Field 2: Objective */}
                <div>
                  <label className="block text-xs font-semibold text-[#17140F]/90 mb-1.5">
                    What do you want to improve?
                  </label>
                  <div className="relative">
                    <select
                      value={goal}
                      onChange={(e) => {
                        setGoal(e.target.value);
                        setShowResult(false);
                      }}
                      className="w-full h-11 appearance-none rounded-[10px] bg-[#FAF6F0] border border-[#EBDFC6] px-3.5 pr-10 text-xs sm:text-sm text-[#17140F] font-medium focus:ring-2 focus:ring-[#B5651A]/20 focus:border-[#B5651A] outline-none cursor-pointer transition-all hover:border-[#B5651A]/50"
                    >
                      <option value="Repeat purchase">Repeat purchase & retention</option>
                      <option value="Average order value">Average order value (AOV)</option>
                      <option value="Churn reduction">Churn reduction & win-back</option>
                      <option value="Customer acquisition">Customer acquisition & referrals</option>
                    </select>
                    <ChevronDownIcon
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#847C75]"
                    />
                  </div>
                </div>

                {/* Field 3: Market */}
                <div>
                  <label className="block text-xs font-semibold text-[#17140F]/90 mb-1.5">
                    Primary operating market
                  </label>
                  <div className="relative">
                    <select
                      value={market}
                      onChange={(e) => {
                        setMarket(e.target.value);
                        setShowResult(false);
                      }}
                      className="w-full h-11 appearance-none rounded-[10px] bg-[#FAF6F0] border border-[#EBDFC6] px-3.5 pr-10 text-xs sm:text-sm text-[#17140F] font-medium focus:ring-2 focus:ring-[#B5651A]/20 focus:border-[#B5651A] outline-none cursor-pointer transition-all hover:border-[#B5651A]/50"
                    >
                      <option value="India">India (DPDP, GST, UPI, WhatsApp)</option>
                      <option value="Australia">Australia (Privacy Act 1988, APPs)</option>
                      <option value="New Zealand">New Zealand (Privacy Act 2020)</option>
                    </select>
                    <ChevronDownIcon
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#847C75]"
                    />
                  </div>
                </div>

                {/* Primary Action Button */}
                <button
                  type="button"
                  onClick={() => setShowResult(true)}
                  className="w-full h-11 rounded-[10px] bg-[#B5651A] hover:bg-[#9a5413] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2 group"
                >
                  <span>Show my template</span>
                  <ArrowRightIcon size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Instant Output Blueprint Drawer */}
                {showResult && (
                  <div className="pt-4 border-t border-[#EBDFC6] space-y-3.5 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-normal text-base text-[#17140F]">
                        {currentTemplate.name}
                      </span>
                      <span className="bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA] px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold">
                        {currentTemplate.plan}
                      </span>
                    </div>

                    {/* Mechanisms Grid */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono uppercase font-bold text-[#847C75]">
                        RECOMMENDED MECHANISMS:
                      </div>
                      <div className="grid grid-cols-1 gap-1.5">
                        {currentTemplate.mechanisms.map((m, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#17140F]/85">
                            <CheckCircle2Icon size={14} className="text-[#B5651A] shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compliance & Timeline Box */}
                    <div className="p-3 rounded-[10px] bg-[#FAF6F0] border border-[#EBDFC6] space-y-1 text-xs">
                      <div className="text-[#17140F]">
                        <strong className="font-semibold text-[#B5651A]">Compliance:</strong>{' '}
                        {currentTemplate.compliance}
                      </div>
                      <div className="text-[#5A5248]">
                        <strong className="font-semibold text-[#17140F]">Estimated Go-Live:</strong>{' '}
                        {currentTemplate.timeline}
                      </div>
                    </div>

                    {/* Direct Sandbox CTA */}
                    <a
                      href="/start"
                      className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-[8px] bg-[#17140F] hover:bg-[#2C241B] text-[#FFFDF9] text-xs font-medium transition-colors"
                    >
                      <span>Start Sandbox with this Playbook</span>
                      <ArrowRightIcon size={13} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
