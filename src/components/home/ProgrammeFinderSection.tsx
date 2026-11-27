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
    <section
      className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] overflow-hidden border-b border-[#621708] font-body"
      id="programme-finder"
    >
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F6AA1C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-4 reveal-on-scroll">
            <span className="font-mono text-[11px] font-bold text-[#F6AA1C] tracking-[0.2em] uppercase block">
              PROGRAMME FINDER
            </span>

            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[44px] tracking-tight leading-[1.14] text-white">
              Find your programme <br className="hidden sm:inline" />
              template in seconds.
            </h2>

            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
              Two answers and we show the mechanisms, compliance notes and a launch plan for your industry and market.
            </p>
          </div>

          {/* Right Form Card matching user reference image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end reveal-on-scroll delay-100">
            <div className="w-full max-w-[480px] rounded-[28px] bg-white text-[#220901] p-6 sm:p-8 shadow-2xl border border-white/20 space-y-4">
              {/* Field 1: Industry */}
              <div>
                <label className="block font-mono text-[10px] font-bold text-[#826B63] tracking-wider uppercase mb-1.5">
                  WHAT IS YOUR INDUSTRY?
                </label>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => {
                      setIndustry(e.target.value);
                      setShowResult(false);
                    }}
                    className="w-full h-12 appearance-none rounded-xl bg-white border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-semibold focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] outline-none cursor-pointer transition-all hover:border-[#BC3908]/60"
                  >
                    <option value="Retail & fashion">Retail & fashion</option>
                    <option value="Banks & fintech">Banks & fintech</option>
                    <option value="Hospitality & dining">Hospitality & dining</option>
                    <option value="E-commerce & D2C">E-commerce & D2C</option>
                    <option value="Coalition & enterprise">Coalition & enterprise</option>
                  </select>
                  <ChevronDownIcon
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                  />
                </div>
              </div>

              {/* Field 2: Objective */}
              <div>
                <label className="block font-mono text-[10px] font-bold text-[#826B63] tracking-wider uppercase mb-1.5">
                  WHAT DO YOU WANT TO IMPROVE?
                </label>
                <div className="relative">
                  <select
                    value={goal}
                    onChange={(e) => {
                      setGoal(e.target.value);
                      setShowResult(false);
                    }}
                    className="w-full h-12 appearance-none rounded-xl bg-white border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-semibold focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] outline-none cursor-pointer transition-all hover:border-[#BC3908]/60"
                  >
                    <option value="Repeat purchase">Repeat purchase</option>
                    <option value="Average order value">Average order value (AOV)</option>
                    <option value="Churn reduction">Churn reduction & win-back</option>
                    <option value="Customer acquisition">Customer acquisition & referrals</option>
                  </select>
                  <ChevronDownIcon
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                  />
                </div>
              </div>

              {/* Field 3: Market */}
              <div>
                <label className="block font-mono text-[10px] font-bold text-[#826B63] tracking-wider uppercase mb-1.5">
                  MARKET
                </label>
                <div className="relative">
                  <select
                    value={market}
                    onChange={(e) => {
                      setMarket(e.target.value);
                      setShowResult(false);
                    }}
                    className="w-full h-12 appearance-none rounded-xl bg-white border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-semibold focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] outline-none cursor-pointer transition-all hover:border-[#BC3908]/60"
                  >
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                  </select>
                  <ChevronDownIcon
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                  />
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => setShowResult(true)}
                className="w-full h-12 rounded-xl bg-[#BC3908] hover:bg-[#941B0C] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 mt-2 group"
              >
                <span>Show my template</span>
                <ArrowRightIcon size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Instant Output Blueprint Drawer */}
              {showResult && (
                <div className="pt-4 border-t border-[#EADBC6] space-y-3.5 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-normal text-base text-[#220901]">
                      {currentTemplate.name}
                    </span>
                    <span className="bg-[#F6EFE2] text-[#BC3908] border border-[#F4D89C] px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold">
                      {currentTemplate.plan}
                    </span>
                  </div>

                  {/* Mechanisms Grid */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#826B63]">
                      RECOMMENDED MECHANISMS:
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {currentTemplate.mechanisms.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#220901]/85">
                          <CheckCircle2Icon size={14} className="text-[#BC3908] shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compliance & Timeline Box */}
                  <div className="p-3 rounded-[10px] bg-[#FDFBF7] border border-[#EADBC6] space-y-1 text-xs">
                    <div className="text-[#220901]">
                      <strong className="font-semibold text-[#BC3908]">Compliance:</strong>{' '}
                      {currentTemplate.compliance}
                    </div>
                    <div className="text-[#563E37]">
                      <strong className="font-semibold text-[#220901]">Estimated Go-Live:</strong>{' '}
                      {currentTemplate.timeline}
                    </div>
                  </div>

                  {/* Direct Sandbox CTA */}
                  <a
                    href="/start"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-[#220901] hover:bg-black text-[#FDFBF7] text-xs font-semibold transition-colors"
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
    </section>
  );
};
