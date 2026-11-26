import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { Heading, Text, Eyebrow } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { Textarea } from '../components/common/Textarea';
import { FeatureCard } from '../components/content/FeatureCard';
import { BentoCard } from '../components/content/BentoCard';
import { StatisticsCard } from '../components/content/StatisticsCard';
import { LogoMarquee } from '../components/content/LogoMarquee';
import { TestimonialCard } from '../components/content/TestimonialCard';
import { FaqAccordion } from '../components/content/FaqAccordion';
import { CtaBanner } from '../components/content/CtaBanner';
import { SplitSection } from '../components/content/SplitSection';
import {
  SparklesIcon,
  ShieldCheckIcon,
  ZapIcon,
  UsersIcon,
  ArrowRightIcon,
  CodeIcon,
  DatabaseIcon,
  CheckCircle2Icon,
} from 'lucide-react';

export const DesignSystemShowcase: React.FC = () => {
  const [theme, setTheme] = useState<'jade' | 'marigold' | 'champagne'>('marigold');
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const sampleLogos = [
    { name: 'National Fashion Retail' },
    { name: 'Apex Banking Corp' },
    { name: 'Grand Hospitality Group' },
    { name: 'Omni Commerce D2C' },
    { name: 'Universal Coalition' },
    { name: 'Fintech Express' },
  ];

  const sampleFaqs = [
    {
      question: 'What makes Punya Perks an enterprise-grade loyalty platform?',
      answer:
        'Punya Perks operates on an append-only ledger where every point issued, pending, or redeemed is tied to an immutable transaction lot. This guarantees that finance, marketing, and engineering all reconcile to the exact same numbers.',
    },
    {
      question: 'How does the platform handle regional compliance (DPDP, TRAI, Privacy Act)?',
      answer:
        'Punya Perks includes native regional cells with data residency in AWS Mumbai (India), UAE, and Australia. We support versioned consent under India DPDP Act, TRAI DLT template registration, and local currency billing in INR, AUD, NZD, and USD.',
    },
    {
      question: 'How fast can a new enterprise loyalty programme launch?',
      answer:
        'With our pre-built POS, payment, and e-commerce connectors plus white-label member apps, pilot programmes typically deploy in four weeks, not four quarters.',
    },
  ];

  return (
    <div data-theme={theme} className="transition-colors duration-200">
      <MainLayout currentTheme={theme} onThemeChange={(t) => setTheme(t as any)}>
        {/* Showcase Hero Banner */}
        <SectionWrapper background="panel" spacing="lg" withBorderBottom>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-pp-pill shadow-pp-sm border border-pp-border-subtle">
              <span className="w-2 h-2 rounded-full bg-pp-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-pp-ink">
                Phase 2 Foundation · Living Design System
              </span>
            </div>

            <Heading level="h1" visual="display">
              Punya Perks Design System & Component Library
            </Heading>

            <Text variant="bodyLarge" className="max-w-2xl mx-auto">
              Production-grade foundational tokens, typography scale, navigation mega-menus, and reusable
              content components engineered for the Punya Perks enterprise SaaS website.
            </Text>

            {/* Live Theme Controller */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs font-semibold text-pp-ink-muted uppercase tracking-wider">
                Active Theme:
              </span>
              <button
                onClick={() => setTheme('marigold')}
                className={`px-4 py-2 rounded-pp-pill text-xs font-semibold transition-all ${
                  theme === 'marigold'
                    ? 'bg-[#D9822B] text-white shadow-pp-md ring-2 ring-offset-2 ring-[#D9822B]'
                    : 'bg-white text-pp-ink border border-pp-border-strong hover:bg-pp-panel'
                }`}
              >
                Option A — Marigold (Brand Guidelines Active)
              </button>
              <button
                onClick={() => setTheme('champagne')}
                className={`px-4 py-2 rounded-pp-pill text-xs font-semibold transition-all ${
                  theme === 'champagne'
                    ? 'bg-[#6E1E2B] text-white shadow-pp-md ring-2 ring-offset-2 ring-[#6E1E2B]'
                    : 'bg-white text-pp-ink border border-pp-border-strong hover:bg-pp-panel'
                }`}
              >
                Option C — Champagne (Luxury)
              </button>
              <button
                onClick={() => setTheme('jade')}
                className={`px-4 py-2 rounded-pp-pill text-xs font-semibold transition-all ${
                  theme === 'jade'
                    ? 'bg-[#0F5C5A] text-white shadow-pp-md ring-2 ring-offset-2 ring-[#0F5C5A]'
                    : 'bg-white text-pp-ink border border-pp-border-strong hover:bg-pp-panel'
                }`}
              >
                Option B — Jade (Modern SaaS)
              </button>
            </div>
          </div>
        </SectionWrapper>

        {/* 1. Color Tokens Palette Showcase */}
        <SectionWrapper spacing="md" withBorderBottom>
          <Eyebrow badge="Foundations">Color Architecture</Eyebrow>
          <Heading level="h2">Semantic Design Tokens (--pp-*)</Heading>
          <Text className="mt-2 mb-8">
            Variables update dynamically based on the active brand direction without hardcoded styles.
          </Text>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'Ground Canvas', var: '--pp-ground', previewClass: 'bg-pp-ground border border-pp-border-strong' },
              { name: 'Panel Surface', var: '--pp-panel', previewClass: 'bg-pp-panel' },
              { name: 'Deep Panel', var: '--pp-panel-deep', previewClass: 'bg-pp-panel-deep' },
              { name: 'Ink Primary', var: '--pp-ink', previewClass: 'bg-pp-ink text-white' },
              { name: 'Brand Primary', var: '--pp-primary', previewClass: 'bg-pp-primary text-white' },
              { name: 'Brand Accent / Gold', var: '--pp-accent', previewClass: 'bg-pp-accent text-white' },
            ].map((token) => (
              <div key={token.name} className="p-3 bg-white rounded-pp-md border border-pp-border-subtle shadow-pp-sm">
                <div className={`w-full h-16 rounded-pp-sm mb-2 flex items-center justify-center font-mono text-[10px] ${token.previewClass}`}>
                  Sample
                </div>
                <h5 className="font-display font-semibold text-xs text-pp-ink">{token.name}</h5>
                <code className="text-[10px] text-pp-ink-muted block mt-0.5">{token.var}</code>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* 2. Typography Scale Showcase */}
        <SectionWrapper background="panel" spacing="md" withBorderBottom>
          <Eyebrow badge="Typography">Type System</Eyebrow>
          <Heading level="h2">Scale & Text Hierarchy</Heading>
          <Text className="mt-2 mb-8">
            Adaptive font family: Sora (Option B) / Newsreader (Option A) / DM Serif (Option C) with Plus Jakarta Sans body.
          </Text>

          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-pp-lg border border-pp-border-subtle shadow-pp-sm">
            <div className="border-b border-pp-border-subtle pb-4">
              <span className="text-xs text-pp-ink-muted block mb-1">Display Heading (56px)</span>
              <Heading level="h1" visual="display">Loyalty that pays for itself.</Heading>
            </div>
            <div className="border-b border-pp-border-subtle pb-4">
              <span className="text-xs text-pp-ink-muted block mb-1">Heading 1 (48px)</span>
              <Heading level="h1">One platform, four jobs.</Heading>
            </div>
            <div className="border-b border-pp-border-subtle pb-4">
              <span className="text-xs text-pp-ink-muted block mb-1">Heading 2 (36px)</span>
              <Heading level="h2">Everything a programme needs, nothing bolted on.</Heading>
            </div>
            <div className="border-b border-pp-border-subtle pb-4">
              <span className="text-xs text-pp-ink-muted block mb-1">Heading 3 (24px)</span>
              <Heading level="h3">White-label native app with live balance states</Heading>
            </div>
            <div className="border-b border-pp-border-subtle pb-4">
              <span className="text-xs text-pp-ink-muted block mb-1">Body Large (18px)</span>
              <Text variant="bodyLarge">
                Launch points, tiers, offers and a white-label member app in weeks. One platform for retailers, banks and enterprises, with the compliance each market demands.
              </Text>
            </div>
            <div>
              <span className="text-xs text-pp-ink-muted block mb-1">Tabular Figures (tnum)</span>
              <div className="font-display font-bold text-3xl pp-tabular text-pp-primary">
                ₹ 1,800 · 3,850 pts · 99.95% SLA · &lt; 120 ms
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 3. Button & Badge Inventory */}
        <SectionWrapper spacing="md" withBorderBottom>
          <Eyebrow badge="UI Atoms">Action Controls</Eyebrow>
          <Heading level="h2">Button Variants & Badge Chips</Heading>
          <Text className="mt-2 mb-8">
            Universal pill radius, high-contrast accessible states, icon slots, and active feedback.
          </Text>

          <div className="space-y-8">
            {/* Buttons */}
            <div>
              <h4 className="font-display font-semibold text-sm text-pp-ink mb-4">Button Variants</h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" iconRight={<ArrowRightIcon size={14} />}>
                  Primary Button
                </Button>
                <Button variant="ink">Ink Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="light">Light Primary</Button>
                <Button variant="accent">Accent Gold</Button>
                <Button variant="primary" isLoading>
                  Loading State
                </Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h4 className="font-display font-semibold text-sm text-pp-ink mb-4">Badge Chips</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default">Default Panel</Badge>
                <Badge variant="primary" icon={<SparklesIcon size={12} />}>
                  Self-serve Connector
                </Badge>
                <Badge variant="accent">Gold Tier</Badge>
                <Badge variant="success" icon={<CheckCircle2Icon size={12} />}>
                  DPDP Compliant
                </Badge>
                <Badge variant="warning">Pending Lot</Badge>
                <Badge variant="outline">OpenAPI 3.1</Badge>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 4. Form Controls */}
        <SectionWrapper background="panel" spacing="md" withBorderBottom>
          <Eyebrow badge="Forms">Lead Capture Components</Eyebrow>
          <Heading level="h2">Input, Select & Textarea Controls</Heading>
          <Text className="mt-2 mb-8">
            Foundational controls for Request a Demo, Sandbox Creation, and Partner Applications.
          </Text>

          <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-pp-lg border border-pp-border-subtle shadow-pp-sm space-y-4">
            <Input
              label="Work Email"
              type="email"
              placeholder="name@company.com"
              helperText="We never send marketing spam. Used for tenant qualification."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (e.target.value.includes('@gmail.com')) {
                  setInputError('Please enter a business work email.');
                } else {
                  setInputError('');
                }
              }}
              errorMessage={inputError}
            />

            <Select
              label="Target Industry & Playbook"
              options={[
                { label: 'Retail & Fashion (Omnichannel)', value: 'retail' },
                { label: 'Banks & Fintech (Card-Linked)', value: 'banking' },
                { label: 'Hospitality & QSR (Visits & Stamps)', value: 'hospitality' },
                { label: 'E-commerce & D2C (Shopify Plugin)', value: 'ecommerce' },
                { label: 'Coalition & Enterprise (Multi-Brand)', value: 'enterprise' },
              ]}
            />

            <Textarea
              label="Describe Your Current Programme & Timeline"
              placeholder="Tell us about your current member volume, POS stack, and launch target..."
              rows={3}
            />

            <div className="pt-2">
              <Button variant="primary" fullWidth size="lg">
                Submit Test Form
              </Button>
            </div>
          </div>
        </SectionWrapper>

        {/* 5. Logo Marquee Component */}
        <SectionWrapper spacing="sm" withBorderBottom>
          <LogoMarquee logos={sampleLogos} />
        </SectionWrapper>

        {/* 6. Content Bento & Feature Cards */}
        <SectionWrapper spacing="md" withBorderBottom>
          <Eyebrow badge="Content Blocks">Bento Architecture</Eyebrow>
          <Heading level="h2">Modular Bento Tiles & Feature Cards</Heading>
          <Text className="mt-2 mb-8">
            28px bento cards mapped directly to Punya Perks Sanity block schemas.
          </Text>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <BentoCard
              colSpan="2"
              eyebrow="LIVE LEDGER ENGINE"
              title="Append-only ledger where finance and marketing see the exact same numbers."
              description="Eliminates the multi-million dollar spreadsheet reconciliation gap between issued loyalty points and corporate balance sheet liability."
              metric="₹ 4.8 Cr"
              metricLabel="Points liability reconciled with zero breakage disputes"
              badge="Core Innovation"
            />
            <BentoCard
              colSpan="1"
              variant="primary"
              eyebrow="MULTI-TENANT SCALE"
              title="Sub-120ms rule evaluation latency at store POS checkout."
              metric="< 120 ms"
              metricLabel="SLA guaranteed globally across 4 regions"
            />
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<ZapIcon size={20} />}
              stepNumber="01"
              title="Earn & Rules Engine"
              description="Purchases, referrals, card-linked offers, receipt scans, and tier multipliers configured in a visual builder."
              href="/product/earn"
            />
            <FeatureCard
              icon={<ShieldCheckIcon size={20} />}
              stepNumber="02"
              title="Redemption & Catalog"
              description="Instant digital vouchers, merchandise, cash-out to UPI/bank, and partner currency swaps governed by quote/commit."
              href="/product/redeem"
            />
            <FeatureCard
              icon={<UsersIcon size={20} />}
              stepNumber="03"
              title="Tiers & Member App"
              description="Turnkey white-label iOS and Android member app with dynamic tier themes, balance cards, and Apple Wallet passes."
              href="/product/member-app"
            />
          </div>
        </SectionWrapper>

        {/* 7. Statistics Strip */}
        <SectionWrapper background="panel" spacing="md" withBorderBottom>
          <Eyebrow badge="Scale">By The Numbers</Eyebrow>
          <Heading level="h2">High-Throughput Scale Metrics</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <StatisticsCard value="4" label="Data Residency Regions" description="India (Mumbai), UAE, Australia, and United States." />
            <StatisticsCard value="99.95" suffix="%" label="Uptime Reliability SLA" description="Enterprise SLA backed by automated failover." />
            <StatisticsCard value="10" suffix="M+" label="Daily Events Evaluated" description="Transactions, check-ins, and reward redemptions." />
            <StatisticsCard value="4" suffix="wks" label="Average Time to Launch" description="Provisioning to pilot launch with pre-built connectors." />
          </div>
        </SectionWrapper>

        {/* 8. Split Section Showcase */}
        <SectionWrapper spacing="lg" withBorderBottom>
          <SplitSection
            eyebrow="OMNICHANNEL UNIFICATION"
            badge="Retail Case Study"
            title="How a national fashion retailer unified store and online loyalty in 4 weeks."
            description="Separate POS points in 140 physical stores and e-commerce points became a single append-only ledger with an adaptive member app and WhatsApp enrolment."
            bulletPoints={[
              '+34% repeat purchase lift measured over a 90-day cohort.',
              'Zero spreadsheet reconciliation between finance and marketing.',
              'Campaign launch turnaround reduced from 3 weeks to an afternoon.',
            ]}
            ctaText="Read the full customer story"
            ctaHref="/customers"
            imageNode={
              <div className="bg-pp-panel rounded-pp-bento p-8 border border-pp-border-subtle shadow-pp-sm space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-pp-border-strong/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-pp-ink">
                    Live Ledger Metric Feed
                  </span>
                  <Badge variant="success">Active Live</Badge>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white rounded-pp-md border border-pp-border-subtle flex justify-between">
                    <span className="text-pp-ink-muted">Transaction ID:</span>
                    <span className="font-semibold text-pp-ink">TXN-88219-IN</span>
                  </div>
                  <div className="p-3 bg-white rounded-pp-md border border-pp-border-subtle flex justify-between">
                    <span className="text-pp-ink-muted">Points Credited:</span>
                    <span className="font-bold text-pp-primary">+ 450 pts (Tier 2 Multiplier)</span>
                  </div>
                  <div className="p-3 bg-white rounded-pp-md border border-pp-border-subtle flex justify-between">
                    <span className="text-pp-ink-muted">Audit Hash:</span>
                    <span className="text-pp-ink truncate max-w-[200px]">SHA256:9f2e4a11...</span>
                  </div>
                </div>
              </div>
            }
          />
        </SectionWrapper>

        {/* 9. Testimonial & FAQ Components */}
        <SectionWrapper background="panel" spacing="lg" withBorderBottom>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <Eyebrow badge="Social Proof">What Operators Say</Eyebrow>
              <Heading level="h2" className="mb-6">
                Loved by loyalty heads and CTOs.
              </Heading>
              <TestimonialCard
                quote="Finance and marketing finally look at the exact same number. We stopped reconciling spreadsheets and launched WhatsApp enrolment in two days."
                name="Head of Loyalty & CX"
                role="Vice President"
                company="National Retail Enterprise"
                metric="+34%"
                metricLabel="Repeat Purchase Lift"
              />
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={sampleFaqs} />
            </div>
          </div>
        </SectionWrapper>

        {/* 10. Closing CTA Banner */}
        <SectionWrapper spacing="lg">
          <CtaBanner
            eyebrow="READY TO BUILD LOYALTY THAT PAYS FOR ITSELF?"
            title="Launch in four weeks, not four quarters."
            description="Schedule a 45-minute architectural walk-through with a solutions engineer who has deployed programmes in your industry and market."
            primaryCtaText="Request a demo"
            primaryCtaHref="/demo"
            secondaryCtaText="Start in sandbox"
            secondaryCtaHref="/start"
          />
        </SectionWrapper>
      </MainLayout>
    </div>
  );
};
