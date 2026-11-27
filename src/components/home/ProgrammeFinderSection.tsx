import React, { useState } from 'react';
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  ChevronDownIcon,
  ClockIcon,
  SparklesIcon,
} from 'lucide-react';

export const ProgrammeFinderSection: React.FC = () => {
  const [industry, setIndustry] = useState('Retail & fashion');
  const [goal, setGoal] = useState('Repeat purchase');
  const [market, setMarket] = useState('India');
  const [highlighted, setHighlighted] = useState(false);

  const templates: Record<
    string,
    {
      name: string;
      mechanisms: string[];
      compliance: Record<string, string>;
      timeline: string;
      plan: string;
    }
  > = {
    'Retail & fashion': {
      name: 'Omnichannel Fashion & Retail',
      mechanisms: [
        'Instant POS receipt & barcode point credit',
        'Adaptive Silver / Gold / Platinum tier multipliers',
        'WhatsApp counter QR pass & live balance updates',
      ],
      compliance: {
        India: 'DPDP + TRAI DLT ready',
        Australia: 'Privacy Act 1988 ready',
        'New Zealand': 'NZ Privacy Act 2020 ready',
      },
      timeline: '3–4 weeks go-live',
      plan: 'Growth Plan',
    },
    'Banks & fintech': {
      name: 'Fintech & Card Rewards',
      mechanisms: [
        'Card-linked MCC earn & double-entry ledger',
        'KYC-gated bank, UPI & miles redemption',
        'Maker-checker controls with 0.00% audit variance',
      ],
      compliance: {
        India: 'RBI guardrails · Mumbai cell',
        Australia: 'APRA & APPs residency',
        'New Zealand': 'FMA audit-grade trail',
      },
      timeline: '6–8 weeks go-live',
      plan: 'Enterprise Plan',
    },
    'Hospitality & dining': {
      name: 'QSR & Frequent Visit',
      mechanisms: [
        'Visit streak unlocks & milestone free items',
        'Table QR earn & off-peak happy-hour boosts',
        'Terminal scan throttling against receipt abuse',
      ],
      compliance: {
        India: 'TRAI DLT & DPDP masking',
        Australia: 'Spam Act & APPs ready',
        'New Zealand': 'NZ messaging & NZD ready',
      },
      timeline: '2–3 weeks go-live',
      plan: 'Growth Plan',
    },
    'E-commerce & D2C': {
      name: 'D2C Checkout & Referrals',
      mechanisms: [
        'In-cart points slider with 15-min balance lock',
        'Return-window & COD Pending points escrow',
        'Delivery-triggered two-sided referral bonuses',
      ],
      compliance: {
        India: 'DPDP opt-in & COD guardrails',
        Australia: 'ACCC & AUD multi-currency',
        'New Zealand': 'NZ Privacy Act 2020 ready',
      },
      timeline: '1–2 weeks go-live',
      plan: 'Launch or Growth',
    },
    'Coalition & enterprise': {
      name: 'Coalition Multi-Brand',
      mechanisms: [
        'Unified member wallet across sister banners',
        'Automated T+1 issuer vs. redeemer settlement',
        'Configurable tenant exchange rates & margin splits',
      ],
      compliance: {
        India: 'Closed-loop PPI & GST trails',
        Australia: 'Cross-entity APPs isolation',
        'New Zealand': 'Multi-entity NZD clearing',
      },
      timeline: '6–10 weeks go-live',
      plan: 'Enterprise Custom',
    },
  };

  const goalBoosts: Record<string, string> = {
    'Repeat purchase': '2× second-order streak boost',
    'Average order value': 'Category spend-threshold bonus',
    'Churn reduction': '14-day expiry & win-back nudge',
    'Customer acquisition': 'Delivery-verified referral bonus',
  };

  const currentTemplate = templates[industry] || templates['Retail & fashion'];
  const complianceText =
    currentTemplate.compliance[market] || currentTemplate.compliance.India;

  const handleHighlight = () => {
    setHighlighted(true);
    setTimeout(() => setHighlighted(false), 700);
  };

  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] overflow-hidden border-b border-[#621708] font-body"
      id="programme-finder"
    >
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F6AA1C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Narrative Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <span className="font-mono text-[11px] font-bold text-[#F6AA1C] tracking-[0.2em] uppercase block">
              PROGRAMME FINDER
            </span>

            <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.14] text-white">
              Find your programme template in seconds.
            </h2>

            <p className="text-sm sm:text-base text-[#EADBC6]/90 leading-relaxed font-body">
              Pick your vertical, target metric, and market to preview the matching blueprint.
            </p>
          </div>

          {/* Right Split Builder + Concise Blueprint Preview (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-[28px] bg-white text-[#220901] p-6 sm:p-8 shadow-2xl border border-white/20 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Selector Inputs (5 cols inside card) */}
              <div className="md:col-span-5 space-y-4">
                <div>
                  <label
                    htmlFor="pf-industry"
                    className="block font-mono text-[10px] font-bold text-[#826B63] tracking-wider uppercase mb-1.5"
                  >
                    WHAT IS YOUR INDUSTRY?
                  </label>
                  <div className="relative">
                    <select
                      id="pf-industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full h-11 appearance-none rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-semibold focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] outline-none cursor-pointer transition-all hover:border-[#BC3908]/60"
                    >
                      <option value="Retail & fashion">Retail &amp; fashion</option>
                      <option value="Banks & fintech">Banks &amp; fintech</option>
                      <option value="Hospitality & dining">Hospitality &amp; dining</option>
                      <option value="E-commerce & D2C">E-commerce &amp; D2C</option>
                      <option value="Coalition & enterprise">Coalition &amp; enterprise</option>
                    </select>
                    <ChevronDownIcon
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="pf-goal"
                    className="block font-mono text-[10px] font-bold text-[#826B63] tracking-wider uppercase mb-1.5"
                  >
                    WHAT DO YOU WANT TO IMPROVE?
                  </label>
                  <div className="relative">
                    <select
                      id="pf-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full h-11 appearance-none rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-semibold focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] outline-none cursor-pointer transition-all hover:border-[#BC3908]/60"
                    >
                      <option value="Repeat purchase">Repeat purchase</option>
                      <option value="Average order value">Average order value (AOV)</option>
                      <option value="Churn reduction">Churn reduction &amp; win-back</option>
                      <option value="Customer acquisition">Customer acquisition &amp; referrals</option>
                    </select>
                    <ChevronDownIcon
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="pf-market"
                    className="block font-mono text-[10px] font-bold text-[#826B63] tracking-wider uppercase mb-1.5"
                  >
                    TARGET MARKET
                  </label>
                  <div className="relative">
                    <select
                      id="pf-market"
                      value={market}
                      onChange={(e) => setMarket(e.target.value)}
                      className="w-full h-11 appearance-none rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-semibold focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] outline-none cursor-pointer transition-all hover:border-[#BC3908]/60"
                    >
                      <option value="India">India</option>
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                    </select>
                    <ChevronDownIcon
                      size={16}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleHighlight}
                  className="w-full h-11 rounded-xl bg-[#BC3908] hover:bg-[#941B0C] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <SparklesIcon size={14} />
                  <span>Refresh Blueprint</span>
                </button>
              </div>

              {/* Live Blueprint Preview Panel (7 cols inside card — concise & scannable) */}
              <div
                className={`md:col-span-7 rounded-2xl bg-[#FDFBF7] border p-5 sm:p-6 flex flex-col justify-between gap-4 transition-all duration-300 ${
                  highlighted ? 'border-[#BC3908] ring-2 ring-[#BC3908]/20' : 'border-[#EADBC6]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#EADBC6]">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#941B0C] block">
                        BLUEPRINT · {market.toUpperCase()}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[#220901] mt-0.5 leading-snug">
                        {currentTemplate.name}
                      </h3>
                    </div>
                    <span className="bg-[#FDF0D5] text-[#941B0C] border border-[#F4D89C] px-2.5 py-1 rounded-full text-[11px] font-mono font-bold shrink-0">
                      {currentTemplate.plan}
                    </span>
                  </div>

                  {/* Concise Mechanisms List + Selected Goal Lever */}
                  <div className="space-y-2.5">
                    {currentTemplate.mechanisms.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#563E37]">
                        <CheckCircle2Icon size={14} className="text-[#BC3908] shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-xs text-[#220901] font-semibold">
                      <SparklesIcon size={14} className="text-[#F6AA1C] shrink-0" />
                      <span>Goal focus: {goalBoosts[goal]}</span>
                    </div>
                  </div>

                  {/* Compact Meta Pills */}
                  <div className="pt-3 border-t border-[#EADBC6] flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-[#563E37]">
                    <span className="inline-flex items-center gap-1.5 text-[#220901]">
                      <ShieldCheckIcon size={14} className="text-[#941B0C] shrink-0" />
                      {complianceText}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon size={14} className="text-[#BC3908] shrink-0" />
                      {currentTemplate.timeline}
                    </span>
                  </div>
                </div>

                <a
                  href="/start"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#220901] hover:bg-[#621708] text-white text-xs font-semibold transition-colors group"
                >
                  <span>Start Sandbox with this Playbook</span>
                  <ArrowRightIcon
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
