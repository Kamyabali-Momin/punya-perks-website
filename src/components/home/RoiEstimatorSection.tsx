import React, { useState } from 'react';
import {
  Users,
  IndianRupee,
  Repeat,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Landmark,
  UtensilsCrossed,
  ShoppingCart,
  Network,
} from 'lucide-react';

export const RoiEstimatorSection: React.FC = () => {
  const [industry, setIndustry] = useState('Retail');
  const [members, setMembers] = useState(250000);
  const [aov, setAov] = useState(1800);
  const [ordersPerYear, setOrdersPerYear] = useState(3.2);

  const industryPresets: Record<
    string,
    { label: string; members: number; aov: number; ordersPerYear: number; liftRate: number; icon: React.ElementType }
  > = {
    Retail: { label: 'Retail', members: 250000, aov: 1800, ordersPerYear: 3.2, liftRate: 0.045, icon: ShoppingBag },
    Banking: { label: 'Banking', members: 600000, aov: 4500, ordersPerYear: 6.8, liftRate: 0.052, icon: Landmark },
    Hospitality: { label: 'Hospitality', members: 150000, aov: 2400, ordersPerYear: 5.6, liftRate: 0.048, icon: UtensilsCrossed },
    'E commerce': { label: 'E commerce', members: 400000, aov: 1600, ordersPerYear: 4.2, liftRate: 0.05, icon: ShoppingCart },
    Coalition: { label: 'Coalition', members: 900000, aov: 3200, ordersPerYear: 6.0, liftRate: 0.055, icon: Network },
  };

  const handleIndustryChange = (ind: string) => {
    setIndustry(ind);
    const preset = industryPresets[ind];
    if (preset) {
      setMembers(preset.members);
      setAov(preset.aov);
      setOrdersPerYear(preset.ordersPerYear);
    }
  };

  // Calculations
  const preset = industryPresets[industry] || industryPresets['Retail'];
  const baseRevenue = members * aov * ordersPerYear;
  const incrementalRevenue = Math.round(baseRevenue * preset.liftRate);
  const pointsLiability = Math.round(baseRevenue * 0.02);
  const netLift = incrementalRevenue - pointsLiability;

  const recommendedPlan =
    members > 500000 || baseRevenue > 500000000
      ? 'Enterprise Custom'
      : members > 100000
      ? 'Growth Plan'
      : 'Launch Plan';

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 font-body border-b border-[#E2D3B5] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/roi-wave-bg.jpg')",
        backgroundColor: "#F7F1E4", backgroundSize: "56px 56px",
      }}
      id="roi-estimate"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
          <span className="font-body text-[11px] font-bold text-[#8E5B13] tracking-[0.2em] uppercase block mb-3">
            ROI ESTIMATE
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[46px] text-[#14100B] tracking-tight leading-[1.15] mb-3.5">
            What would a 4-point lift in <br className="hidden sm:inline" />
            repeat purchase be worth?
          </h2>
          <p className="font-body text-xs sm:text-[13px] text-[#7A7269] leading-relaxed max-w-xl mx-auto">
            Enter members, average order and frequency; the estimator returns incremental revenue, points liability and the plan that fits.
          </p>
        </div>

        {/* 2-Card Layout matching Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-[1440px] mx-auto reveal-on-scroll delay-100">
          
          {/* Left Vertical Industry Card (3 Cols on lg, compact pill grid on mobile/tablet) */}
          <div className="lg:col-span-3 rounded-[24px] sm:rounded-[32px] bg-white border border-[#EFE5D8]/90 shadow-sm p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <span className="block font-body text-[10px] font-bold text-[#847C75] tracking-[0.16em] uppercase mb-3 px-1">
                INDUSTRY PRESET
              </span>

              {/* Industry Selector List */}
              <div className="flex flex-wrap gap-2 lg:flex-col lg:space-y-1.5 lg:gap-0">
                {Object.keys(industryPresets).map((ind) => {
                  const isActive = industry === ind;
                  const item = industryPresets[ind];
                  const Icon = item.icon;
                  return (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => handleIndustryChange(ind)}
                      className={`py-2 px-3 lg:w-full lg:py-2.5 lg:px-3.5 transition-all cursor-pointer rounded-xl text-left select-none flex items-center gap-2.5 ${
                        isActive
                          ? 'border border-[#C26D1E] text-[#8E5B13] bg-[#F4E9D2]/70 shadow-2xs'
                          : 'text-[#14100B] hover:text-[#8E5B13] hover:bg-[#FAF5EE] bg-[#FAF5EE]/60 lg:bg-transparent border border-transparent'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#8E5B13] text-white'
                            : 'bg-[#FAF5EE] text-[#847C75] border border-[#EFE3D5]'
                        }`}
                      >
                        <Icon size={14} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs sm:text-sm font-display font-semibold leading-tight">
                          {ind}
                        </span>
                        <span className="hidden lg:block text-[11px] font-body text-[#847C75] mt-0.5">
                          ₹{item.aov.toLocaleString('en-IN')} AOV · +{Math.round(item.liftRate * 1000) / 10}% lift
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Benchmark Visual Card (Desktop sidebar) */}
            <div className="hidden lg:flex flex-col items-center text-center mt-4 p-4 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5]">
              <img
                src="/images/scale-bag-transparent.png"
                alt="Loyalty Rewards Graphic"
                className="w-28 h-auto object-contain select-none pointer-events-none drop-shadow-sm mb-2"
              />
              <span className="text-[10px] font-body font-bold uppercase tracking-[0.14em] text-[#8E5B13]">
                {industry} Benchmark
              </span>
              <p className="text-[11px] text-[#5B534C] leading-snug mt-1">
                Preloaded with +{Math.round(preset.liftRate * 1000) / 10}% repeat lift &amp; {preset.ordersPerYear}x annual frequency.
              </p>
            </div>
          </div>

          {/* Right Main Calculator Card (9 Cols) */}
          <div className="lg:col-span-9 rounded-[28px] sm:rounded-[32px] bg-white border border-[#EFE5D8]/90 shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full">
              
              {/* Left Sub-Column: 3 Sliders (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                {/* Lever 1: Active Members */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5] flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F4E9D2] border border-[#F6DECA] flex items-center justify-center text-[#8E5B13] shrink-0">
                        <Users size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase font-bold text-[#14100B] tracking-wider">
                          ACTIVE MEMBERS
                        </span>
                        <span className="text-[12px] text-[#847C75]">
                          Total transacting member base
                        </span>
                      </div>
                    </div>
                    <div className="font-display font-medium text-2xl sm:text-[26px] text-[#14100B] shrink-0">
                      {members.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <input
                    type="range"
                    min="10000"
                    max="1500000"
                    step="10000"
                    value={members}
                    onChange={(e) => setMembers(Number(e.target.value))}
                    className="w-full accent-[#8E5B13] cursor-pointer h-1.5 bg-[#EAE0D2] rounded-lg appearance-none my-2.5"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-[#847C75]">
                    <span>10,000</span>
                    <span>750,000</span>
                    <span>1,500,000+</span>
                  </div>
                </div>

                {/* Lever 2: Average Order (AOV) */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5] flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F4E9D2] border border-[#F6DECA] flex items-center justify-center text-[#8E5B13] shrink-0 font-bold">
                        <IndianRupee size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase font-bold text-[#14100B] tracking-wider">
                          AVERAGE ORDER (AOV)
                        </span>
                        <span className="text-[12px] text-[#847C75]">
                          Net basket spend per checkout
                        </span>
                      </div>
                    </div>
                    <div className="font-display font-medium text-2xl sm:text-[26px] text-[#14100B] shrink-0">
                      ₹ {aov.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={aov}
                    onChange={(e) => setAov(Number(e.target.value))}
                    className="w-full accent-[#8E5B13] cursor-pointer h-1.5 bg-[#EAE0D2] rounded-lg appearance-none my-2.5"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-[#847C75]">
                    <span>₹ 200</span>
                    <span>₹ 5,000</span>
                    <span>₹ 10,000</span>
                  </div>
                </div>

                {/* Lever 3: Annual Frequency */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5] flex flex-col justify-between">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F4E9D2] border border-[#F6DECA] flex items-center justify-center text-[#8E5B13] shrink-0">
                        <Repeat size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase font-bold text-[#14100B] tracking-wider">
                          ANNUAL FREQUENCY
                        </span>
                        <span className="text-[12px] text-[#847C75]">
                          Orders per member per year
                        </span>
                      </div>
                    </div>
                    <div className="font-display font-medium text-2xl sm:text-[26px] text-[#14100B] shrink-0">
                      {ordersPerYear.toFixed(1)}{' '}
                      <span className="text-xs sm:text-sm font-body text-[#847C75]">orders</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="1.0"
                    max="12.0"
                    step="0.1"
                    value={ordersPerYear}
                    onChange={(e) => setOrdersPerYear(Number(e.target.value))}
                    className="w-full accent-[#8E5B13] cursor-pointer h-1.5 bg-[#EAE0D2] rounded-lg appearance-none my-2.5"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-[#847C75]">
                    <span>1.0x</span>
                    <span>6.0x</span>
                    <span>12.0x / yr</span>
                  </div>
                </div>
              </div>

              {/* Right Sub-Column: Dark Financial Projection Card (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="rounded-[22px] bg-[#16120D] p-6 sm:p-7 text-white flex flex-col justify-between h-full border border-[#2A2118] shadow-lg relative overflow-hidden">
                  {/* Ambient warm light */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#8E5B13]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-5">
                    {/* Top Row: Eyebrow pill + top-line lift rate */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E5B13]/15 border border-[#8E5B13]/40 text-[#D89B5C] font-mono text-[10px] font-bold tracking-wider uppercase">
                        <Sparkles size={11} className="text-[#D89B5C]" />
                        <span>ANNUAL LIFT ESTIMATE</span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#D89B5C]">
                        +{Math.round(preset.liftRate * 1000) / 10}% Top-line
                      </span>
                    </div>

                    {/* Big Metric: Incremental Annual Revenue */}
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#9E9385] tracking-[0.18em] block mb-2">
                        INCREMENTAL ANNUAL REVENUE
                      </span>
                      <div className="font-display font-normal text-3xl sm:text-4xl lg:text-[44px] text-[#F3E5CF] tracking-tight leading-none">
                        {formatCurrency(incrementalRevenue)}
                      </div>
                    </div>

                    {/* Financial Breakdown Ledger */}
                    <div className="pt-4 border-t border-white/10 space-y-3.5 text-xs sm:text-[13px]">
                      <div className="flex justify-between items-center text-[#C5BCAD]">
                        <span>Points Liability Reserve (2%):</span>
                        <span className="font-mono text-white font-medium">
                          {formatCurrency(pointsLiability)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-[#C5BCAD]">
                        <span>Net Incremental Gain:</span>
                        <span className="font-mono text-[#52C485] font-bold">
                          +{formatCurrency(netLift)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-[#C5BCAD] pt-2 border-t border-white/10">
                        <span>Recommended Architecture:</span>
                        <span className="px-2.5 py-1 rounded-[8px] bg-white/5 border border-white/15 text-[#F3E5CF] font-mono text-[11px] font-semibold tracking-wide">
                          {recommendedPlan}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="relative z-10 pt-5 mt-5 border-t border-white/10">
                    <a
                      href="/demo"
                      className="w-full py-3.5 px-6 rounded-full bg-[#8E5B13] hover:bg-[#6E440B] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Get Detailed Financial Model</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoiEstimatorSection;
