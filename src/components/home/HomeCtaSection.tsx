import React from 'react';
import { ArrowRightIcon, CheckCircle2Icon, ClockIcon, ShieldCheckIcon } from 'lucide-react';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FDFBF7] py-16 sm:py-20 font-body" id="closing-cta">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-[28px] p-8 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#220901] via-[#621708] to-[#941B0C] border border-[#941B0C]/40 reveal-on-scroll">
          {/* Silk Radial Ambient Lighting */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(55% 85% at 88% 18%, rgba(246,170,28,0.16) 0%, transparent 65%), radial-gradient(45% 80% at 8% 95%, rgba(188,57,8,0.24) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#F6AA1C]">
                ARCHITECTURE &amp; PLAN REVIEW
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-[1.12] text-white">
                Not sure which plan or template fits?
              </h2>
              <p className="text-sm sm:text-base text-[#EADBC6]/90 leading-relaxed font-body max-w-lg">
                A solutions engineer who has launched programmes in your market will map your earn
                rules, compliance scope, and go-live timeline in 30 minutes.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/demo"
                  className="inline-flex h-12 items-center gap-2 px-7 rounded-full bg-white text-[#220901] font-body font-semibold text-sm hover:bg-[#F6EFE2] transition-all shadow-md cursor-pointer group"
                >
                  <span>Talk to an expert</span>
                  <ArrowRightIcon
                    size={16}
                    className="text-[#BC3908] group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
                <a
                  href="/start"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-6 text-sm font-semibold text-white transition-all cursor-pointer"
                >
                  Start in sandbox
                </a>
              </div>
            </div>

            {/* Right Structured Session Agenda Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-black/25 backdrop-blur-sm border border-white/15 p-6 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#F6AA1C] flex items-center gap-1.5">
                    <ClockIcon size={12} />
                    WHAT WE COVER IN 30 MINUTES
                  </span>
                  <span className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F6AA1C]/15 text-[#F6AA1C] border border-[#F6AA1C]/30">
                    IN · AU · NZ Specialists
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      step: '01',
                      title: 'Earn mechanics & margin fit',
                      desc: 'Model points liability, tier thresholds, and breakage buffers for your basket size.',
                    },
                    {
                      step: '02',
                      title: 'POS, storefront & WhatsApp wiring',
                      desc: 'Validate native connectors for Shopify Plus, Pine Labs, Lightspeed, or custom APIs.',
                    },
                    {
                      step: '03',
                      title: 'Plan sizing & compliance scope',
                      desc: 'Leave with a fixed-tier recommendation covering DPDP, APPs, or NZ Privacy Act 2020.',
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3"
                    >
                      <span className="font-mono text-[11px] font-bold text-[#F6AA1C] bg-[#F6AA1C]/10 border border-[#F6AA1C]/25 rounded-md px-2 py-0.5 shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div className="text-xs leading-relaxed">
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-[#EADBC6]/80 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#EADBC6]/80">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheckIcon size={13} className="text-[#F6AA1C]" />
                    Direct with engineering — zero cold handoffs
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white font-medium">
                    <CheckCircle2Icon size={13} className="text-[#F6AA1C]" />
                    Free sandbox included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
