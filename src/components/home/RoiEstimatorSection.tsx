import React, { useState } from 'react';
import {
  Users,
  IndianRupee,
  Repeat,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const RoiEstimatorSection: React.FC = () => {
  const [industry, setIndustry] = useState('Retail');
  const [members, setMembers] = useState(250000);
  const [aov, setAov] = useState(1800);
  const [ordersPerYear, setOrdersPerYear] = useState(3.2);

  const industryPresets: Record<
    string,
    { label: string; members: number; aov: number; ordersPerYear: number; liftRate: number }
  > = {
    Retail: { label: 'Retail', members: 250000, aov: 1800, ordersPerYear: 3.2, liftRate: 0.045 },
    Banking: { label: 'Banking', members: 600000, aov: 4500, ordersPerYear: 6.8, liftRate: 0.052 },
    Hospitality: { label: 'Hospitality', members: 150000, aov: 2400, ordersPerYear: 5.6, liftRate: 0.048 },
    'E commerce': { label: 'E commerce', members: 400000, aov: 1600, ordersPerYear: 4.2, liftRate: 0.05 },
    Coalition: { label: 'Coalition', members: 900000, aov: 3200, ordersPerYear: 6.0, liftRate: 0.055 },
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
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FFF9F2] bg-cover bg-center overflow-hidden border-b border-[#EBDFC6] font-body"
      style={{
        backgroundImage: "url('/images/roi-banner-bg.jpg')",
      }}
      id="roi-estimate"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-serif text-[11px] font-bold text-[#B5651A] tracking-[0.25em] uppercase block mb-3">
            ROI ESTIMATE
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[46px] text-[#17140F] tracking-tight leading-[1.15] mb-3.5">
            What would a 4-point lift in <br className="hidden sm:inline" />
            repeat purchase be worth?
          </h2>
          <p className="font-body text-xs sm:text-[13px] text-[#7A7269] leading-relaxed max-w-xl mx-auto">
            Enter members, average order and frequency; the estimator returns incremental revenue, points liability and the plan that fits.
          </p>
        </div>

        {/* 2-Card Layout matching Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-[1440px] mx-auto">
          
          {/* Left Vertical Industry Card (3 Cols) */}
          <div className="lg:col-span-3 rounded-[28px] sm:rounded-[32px] bg-white border border-[#EBDFC6] shadow-lg hover:shadow-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300">
            {/* Industry Selector List */}
            <div className="space-y-2">
              {Object.keys(industryPresets).map((ind) => {
                const isActive = industry === ind;
                return (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => handleIndustryChange(ind)}
                    className={`w-full py-2.5 px-4 text-sm font-display transition-all cursor-pointer rounded-xl text-left select-none ${
                      isActive
                        ? 'border border-[#C26D1E] text-[#B5651A] bg-white shadow-xs font-semibold'
                        : 'text-[#17140F] hover:text-[#B5651A] hover:bg-[#FAF5EE] bg-transparent border border-transparent font-medium'
                    }`}
                  >
                    {ind}
                  </button>
                );
              })}
            </div>

            {/* Bottom 3D Graphic (Shopping Bag + Rewards) */}
            <div className="pt-8 pb-2 flex justify-center items-end">
              <img
                src="/images/scale-bag-transparent.png"
                alt="Loyalty Rewards Graphic"
                className="w-36 sm:w-40 h-auto object-contain select-none pointer-events-none drop-shadow-md"
              />
            </div>
          </div>

          {/* Right Main Calculator Card (9 Cols) */}
          <div className="lg:col-span-9 rounded-[28px] sm:rounded-[32px] bg-white border border-[#EBDFC6] shadow-lg hover:shadow-xl p-6 sm:p-8 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full">
              
              {/* Left Sub-Column: 3 Sliders (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                {/* Lever 1: Active Members */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5] flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FEF0E1] border border-[#F6DECA] flex items-center justify-center text-[#B5651A] shrink-0">
                        <Users size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase font-bold text-[#17140F] tracking-wider">
                          ACTIVE MEMBERS
                        </span>
                        <span className="text-[12px] text-[#847C75]">
                          Total transacting member base
                        </span>
                      </div>
                    </div>
                    <div className="font-display font-medium text-2xl sm:text-[26px] text-[#17140F] shrink-0">
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
                    className="w-full accent-[#B5651A] cursor-pointer h-1.5 bg-[#EAE0D2] rounded-lg appearance-none my-2.5"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-[#847C75]">
                    <span>10,000</span>
                    <span>750,000</span>
                    <span>1,500,000+</span>
                  </div>
                </div>

                {/* Lever 2: Average Order (AOV) */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5] flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FEF0E1] border border-[#F6DECA] flex items-center justify-center text-[#B5651A] shrink-0 font-bold">
                        <IndianRupee size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase font-bold text-[#17140F] tracking-wider">
                          AVERAGE ORDER (AOV)
                        </span>
                        <span className="text-[12px] text-[#847C75]">
                          Net basket spend per checkout
                        </span>
                      </div>
                    </div>
                    <div className="font-display font-medium text-2xl sm:text-[26px] text-[#17140F] shrink-0">
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
                    className="w-full accent-[#B5651A] cursor-pointer h-1.5 bg-[#EAE0D2] rounded-lg appearance-none my-2.5"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-[#847C75]">
                    <span>₹ 200</span>
                    <span>₹ 5,000</span>
                    <span>₹ 10,000</span>
                  </div>
                </div>

                {/* Lever 3: Annual Frequency */}
                <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF5EE] border border-[#EFE3D5] flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FEF0E1] border border-[#F6DECA] flex items-center justify-center text-[#B5651A] shrink-0">
                        <Repeat size={16} />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase font-bold text-[#17140F] tracking-wider">
                          ANNUAL FREQUENCY
                        </span>
                        <span className="text-[12px] text-[#847C75]">
                          Orders per member per year
                        </span>
                      </div>
                    </div>
                    <div className="font-display font-medium text-2xl sm:text-[26px] text-[#17140F] shrink-0">
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
                    className="w-full accent-[#B5651A] cursor-pointer h-1.5 bg-[#EAE0D2] rounded-lg appearance-none my-2.5"
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
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#B5651A]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-5">
                    {/* Top Row: Eyebrow pill + top-line lift rate */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B5651A]/15 border border-[#B5651A]/40 text-[#D89B5C] font-mono text-[10px] font-bold tracking-wider uppercase">
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
                      className="w-full py-3.5 px-6 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
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
