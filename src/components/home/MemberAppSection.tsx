import React, { useState } from 'react';
import { SectionWrapper } from '../common/SectionWrapper';
import { Eyebrow, Heading, Text } from '../common/Typography';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { homeData, LoyaltyTier } from '../../data/home';
import { QrCodeIcon, SparklesIcon, CheckCircle2Icon, ShieldCheckIcon, SmartphoneIcon } from 'lucide-react';

export const MemberAppSection: React.FC = () => {
  const { tiers } = homeData;
  const [selectedTierId, setSelectedTierId] = useState<'silver' | 'gold' | 'platinum'>('gold');

  const activeTier = tiers.find((t) => t.id === selectedTierId) || tiers[1];

  return (
    <SectionWrapper background="ground" spacing="lg" withBorderBottom id="member-app">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <Eyebrow badge="Turnkey Experience">MEMBER EXPERIENCE</Eyebrow>
        <Heading level="h2" className="mt-2 text-3xl sm:text-4xl">
          A member app your customers will actually keep.
        </Heading>
        <Text variant="bodyLarge" className="mt-3">
          Turnkey white-label iOS and Android app. Adaptive tier themes, instant QR membership barcodes, personalized offer trays, and native Apple Wallet passes.
        </Text>
      </div>

      {/* Tier Selector Buttons */}
      <div className="flex items-center justify-center gap-2.5 mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-pp-ink-muted mr-2">
          Select Tier Theme:
        </span>
        {tiers.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTierId(t.id)}
            className={`px-4 py-2 rounded-pp-pill text-xs sm:text-sm font-semibold transition-all ${
              selectedTierId === t.id
                ? 'bg-pp-primary text-white shadow-pp-sm'
                : 'bg-white text-pp-ink border border-pp-border-strong hover:bg-pp-panel'
            }`}
          >
            {t.name} ({t.multiplier})
          </button>
        ))}
      </div>

      {/* Showcase Grid */}
      <div className="max-w-[1440px] mx-auto rounded-pp-bento bg-pp-panel p-6 sm:p-10 lg:p-12 border border-pp-border-subtle shadow-pp-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Phone Frame */}
            <div className="w-full max-w-[300px] rounded-[36px] bg-pp-ink p-3 shadow-2xl border-4 border-pp-ink">
              {/* Inner Screen */}
              <div className="rounded-[28px] bg-white overflow-hidden text-pp-ink font-body p-4 space-y-4">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] font-semibold text-pp-ink-muted px-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <div className="w-4 h-2 rounded-sm border border-pp-ink-muted flex items-center p-0.5">
                      <div className="w-full h-full bg-pp-ink-muted" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Tier Membership Card */}
                <div
                  className="rounded-pp-lg p-4 text-white shadow-pp-md transition-all duration-300"
                  style={{ backgroundColor: activeTier.accentColor }}
                >
                  <div className="flex justify-between items-center text-xs opacity-90">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">
                      {activeTier.name}
                    </span>
                    <span className="text-[10px] font-mono">{activeTier.mockCardNumber}</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] uppercase opacity-75 block">Available Points</span>
                    <span className="font-display font-bold text-2xl tracking-tight pp-tabular">
                      {activeTier.mockPoints}
                    </span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/20 flex justify-between items-center text-[10px] opacity-80">
                    <span>{activeTier.mockExpiring}</span>
                    <span className="font-bold">{activeTier.multiplier} Earn</span>
                  </div>
                </div>

                {/* QR Barcode Identifier Slot */}
                <div className="bg-pp-panel p-3 rounded-pp-md border border-pp-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCodeIcon size={24} className="text-pp-primary" />
                    <div>
                      <span className="text-[11px] font-semibold text-pp-ink block">In-Store Barcode</span>
                      <span className="text-[9px] text-pp-ink-muted">Scan at checkout register</span>
                    </div>
                  </div>
                  <Badge variant="primary" size="sm">Live</Badge>
                </div>

                {/* Offer Mini Tray */}
                <div className="space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-pp-ink-muted block">
                    Exclusive Tier Perks
                  </span>
                  <div className="p-2.5 rounded-pp-md bg-pp-panel text-xs space-y-1">
                    <span className="font-semibold text-pp-primary text-[11px] block">
                      {activeTier.perks[0]}
                    </span>
                    <span className="text-[10px] text-pp-ink-muted block">
                      Valid in all retail stores & web
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tier Details & Capabilities */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="pp-eyebrow text-pp-primary">Tier Ladder Architecture</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-pp-ink mt-1">
                {activeTier.name} Experience
              </h3>
              <p className="text-xs sm:text-sm text-pp-ink-muted mt-1">
                Requirement: <strong className="text-pp-ink">{activeTier.requirement}</strong>
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-pp-ink block">
                Active Member Perks for {activeTier.name}:
              </span>
              <ul className="space-y-2">
                {activeTier.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-pp-ink">
                    <CheckCircle2Icon size={16} className="text-pp-primary shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-pp-md bg-white border border-pp-border-subtle text-xs space-y-1">
              <strong className="text-pp-ink font-semibold block">Turnkey White-Label Provisioning:</strong>
              <p className="text-pp-ink-secondary">
                Your brand colors, logo, typography, and tier nomenclature apply automatically across iOS, Android, and mobile web. No custom app development required.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/product/member-app" variant="primary" size="md">
                Explore member app features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
