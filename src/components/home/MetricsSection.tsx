import React from 'react';
import { Globe2Icon, ActivityIcon, LayersIcon, ZapIcon, CheckCircle2Icon } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const stats = [
    {
      icon: Globe2Icon,
      value: '4',
      label: 'data-residency regions: India, UAE, Australia, US',
      tag: 'SOVEREIGN CLUSTERS',
    },
    {
      icon: LayersIcon,
      value: '3',
      label: 'transaction ingestion paths: plugin, webhook, batch',
      tag: 'INGESTION',
    },
    {
      icon: ActivityIcon,
      value: '9',
      label: 'API families with sandbox and signed webhooks',
      tag: 'OPENAPI 3.1',
    },
    {
      icon: ZapIcon,
      value: '<110ms',
      label: 'checkout quote & balance verify on edge cache',
      tag: 'P99 LATENCY',
    },
  ];

  const clusters = [
    { region: 'India · Mumbai', zone: 'ap-south-1', latency: '38ms' },
    { region: 'UAE · Dubai', zone: 'me-central-1', latency: '41ms' },
    { region: 'Australia · Sydney', zone: 'ap-southeast-2', latency: '42ms' },
    { region: 'United States · East', zone: 'us-east-1', latency: '46ms' },
  ];

  return (
    <section
      className="w-full bg-[#FDFBF7] border-b border-[#EADBC6] py-16 sm:py-20 lg:py-24 font-body overflow-hidden"
      id="by-the-numbers"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 cols): Eyebrow + Headline + Compact Infrastructure Telemetry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[11px] font-bold text-[#BC3908] tracking-[0.2em] uppercase block">
                BY THE NUMBERS
              </span>
              <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[44px] text-[#220901] tracking-tight leading-[1.12]">
                Built for scale, measured in the open.
              </h2>
              <p className="text-sm sm:text-base text-[#563E37] leading-relaxed max-w-lg">
                Every ledger write, POS cache lookup, and webhook dispatch publishes live operational SLAs across sovereign regional clusters.
              </p>
            </div>

            {/* Dark Espresso -> Chestnut Cluster Health Strip */}
            <div className="rounded-2xl bg-gradient-to-br from-[#220901] via-[#4A1106] to-[#621708] text-white p-5 sm:p-6 border border-[#621708] shadow-md space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#52C485] animate-pulse" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F6AA1C]">
                    Regional Telemetry
                  </span>
                </div>
                <span className="font-mono text-[11px] text-white/80">99.99% Uptime SLA</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {clusters.map((c) => (
                  <div
                    key={c.region}
                    className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">{c.region}</div>
                      <div className="text-[10px] font-mono text-white/60 mt-0.5">{c.zone}</div>
                    </div>
                    <span className="font-mono font-bold text-xs text-[#F6AA1C] bg-[#F6AA1C]/10 border border-[#F6AA1C]/25 px-2.5 py-1 rounded-full shrink-0">
                      {c.latency}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-white/85">
                <CheckCircle2Icon size={14} className="text-[#F6AA1C] shrink-0" />
                <span>Append-only double-entry audit variance: 0.00% verified daily</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): 2x2 Elevated Stat Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.tag}
                  className="rounded-2xl border border-[#EADBC6] hover:border-[#BC3908]/70 p-6 sm:p-7 flex flex-col justify-between min-h-[168px] bg-white shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-[#941B0C] bg-[#FDF0D5] px-2.5 py-1 rounded-full border border-[#F4D89C]">
                      {stat.tag}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#F6EFE2] text-[#BC3908] flex items-center justify-center group-hover:bg-[#BC3908] group-hover:text-white transition-colors">
                      <Icon size={15} />
                    </span>
                  </div>

                  <div className="pt-4">
                    <div className="font-display font-normal text-4xl sm:text-5xl text-[#BC3908] tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm text-[#563E37] mt-2.5 leading-snug font-normal">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
