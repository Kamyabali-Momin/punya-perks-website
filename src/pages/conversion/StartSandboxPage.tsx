import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ServerIcon,
  TerminalIcon,
} from 'lucide-react';

const REGION_CONFIG: Record<string, { cluster: string; currency: string; residence: string }> = {
  'India (Mumbai) · INR': {
    cluster: 'ap-south-1',
    currency: 'INR',
    residence: 'Mumbai DPDP Sovereign Cell',
  },
  'Australia (Sydney) · AUD': {
    cluster: 'ap-southeast-2',
    currency: 'AUD',
    residence: 'Sydney Privacy Act Cell',
  },
  'New Zealand (Auckland) · NZD': {
    cluster: 'nz-akl-1',
    currency: 'NZD',
    residence: 'Auckland NZ Privacy Act 2020',
  },
  'Global (US East) · USD': {
    cluster: 'us-east-1',
    currency: 'USD',
    residence: 'Multi-Region Global Sandbox',
  },
};

export const StartSandboxPage: React.FC = () => {
  const [provisioned, setProvisioned] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [region, setRegion] = useState('Australia (Sydney) · AUD');
  const [template, setTemplate] = useState('Omnichannel Retail & Fashion');

  const activeRegion = REGION_CONFIG[region] || REGION_CONFIG['India (Mumbai) · INR'];
  const endpointUrl = `https://sandbox-${activeRegion.cluster}.punyaperks.com/v1`;

  return (
    <MainLayout>
      <PageHeader
        eyebrow="START IN SANDBOX"
        title="A sandbox tenant in two minutes."
        description="Synthetic members, recorded vendor responses, replayable webhooks and the full admin console. Free, no credit card required."
        breadcrumbs={[{ label: 'Developer Sandbox' }]}
        primaryCtaText=""
        secondaryCtaText=""
        microcopy=""
      />

      <section className="py-14 sm:py-20 bg-[#F6EFE2] border-b border-[#EADBC6]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: What's Inside + Live Endpoint Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#BC3908] block mb-2">
                INCLUDED IN SANDBOX
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#220901] leading-tight">
                Pre-seeded ledger, live APIs &amp; webhook inspector.
              </h2>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-[#563E37]">
              {[
                '5,000 synthetic members with append-only double-entry audit trails',
                'Full Earn, Quote/Commit checkout lock, and Tier Engine endpoints',
                'Replayable HMAC webhooks for POS, Shopify Plus, and WhatsApp events',
                'Isolated regional routing with instant schema reset anytime',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2Icon size={17} className="text-[#BC3908] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Reactive Cluster Summary Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#220901] to-[#621708] text-white p-5 border border-[#941B0C]/40 shadow-lg space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-[#F6AA1C] font-bold">
                  <ServerIcon size={12} />
                  TARGET ENVIRONMENT
                </span>
                <span className="text-[#EADBC6]/80">{activeRegion.currency} MODE</span>
              </div>
              <div className="font-mono text-xs text-white/95 bg-black/25 border border-white/10 rounded-xl px-3.5 py-2.5 truncate">
                {endpointUrl}
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#EADBC6]/85 pt-0.5">
                <span>{activeRegion.residence}</span>
                <span className="text-[#F6AA1C] font-semibold">No card required</span>
              </div>
            </div>
          </div>

          {/* Right Column: Provisioning Form Card */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-[28px] border border-[#EADBC6] shadow-xl">
            {provisioned ? (
              <div className="py-4 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#FDF0D5] text-[#941B0C] border border-[#F4D89C] flex items-center justify-center font-bold text-lg shrink-0">
                    ✓
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#BC3908] block">
                      TENANT ACTIVE · {activeRegion.cluster.toUpperCase()}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#220901]">
                      Sandbox Ready{company ? ` for ${company}` : ''}!
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#563E37] leading-relaxed">
                  We have provisioned your isolated tenant console, seeded starter playbook (
                  <strong className="text-[#220901]">{template}</strong>), and dispatched credentials to{' '}
                  <strong className="text-[#220901]">{email || 'your work email'}</strong>.
                </p>

                <div className="rounded-2xl bg-[#220901] text-[#FDFBF7] p-4 font-mono text-xs space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#F6AA1C]">
                    <TerminalIcon size={12} />
                    <span>TENANT CREDENTIALS PREVIEW</span>
                  </div>
                  <div className="text-[#EADBC6] break-all">Endpoint: {endpointUrl}</div>
                  <div className="text-[#EADBC6]">
                    Public Key: pk_sandbox_{activeRegion.cluster.replace(/-/g, '')}_9f42a8
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="/platform/developers"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#BC3908] hover:bg-[#941B0C] px-6 text-xs sm:text-sm font-semibold text-white transition-all shadow-sm"
                  >
                    <span>Explore API Documentation</span>
                    <ArrowRightIcon size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setProvisioned(false)}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[#EADBC6] bg-[#FDFBF7] hover:border-[#BC3908]/50 px-5 text-xs sm:text-sm font-semibold text-[#220901] transition-colors cursor-pointer"
                  >
                    Configure Another Region
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setProvisioned(true);
                }}
                className="space-y-4"
              >
                <div className="pb-2 border-b border-[#EADBC6]">
                  <h3 className="font-display font-bold text-xl text-[#220901]">
                    Create your free developer sandbox
                  </h3>
                  <p className="text-xs text-[#563E37] mt-1">
                    Instant API keys &amp; admin console credentials sent straight to your inbox.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sb-email"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      id="sb-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@brand.com"
                      className="w-full h-11 rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 text-xs sm:text-sm text-[#220901] placeholder:text-[#826B63]/70 outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sb-company"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5"
                    >
                      Company / Brand Name
                    </label>
                    <input
                      id="sb-company"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nova Brands"
                      className="w-full h-11 rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 text-xs sm:text-sm text-[#220901] placeholder:text-[#826B63]/70 outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sb-region"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5"
                    >
                      Primary Market Region
                    </label>
                    <div className="relative">
                      <select
                        id="sb-region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full h-11 appearance-none rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-medium outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] cursor-pointer transition-all"
                      >
                        <option>India (Mumbai) · INR</option>
                        <option>Australia (Sydney) · AUD</option>
                        <option>New Zealand (Auckland) · NZD</option>
                        <option>Global (US East) · USD</option>
                      </select>
                      <ChevronDownIcon
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="sb-template"
                      className="block font-mono text-[10px] font-bold uppercase tracking-wider text-[#826B63] mb-1.5"
                    >
                      Seeded Starter Playbook
                    </label>
                    <div className="relative">
                      <select
                        id="sb-template"
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        className="w-full h-11 appearance-none rounded-xl bg-[#FDFBF7] border border-[#EADBC6] px-4 pr-10 text-xs sm:text-sm text-[#220901] font-medium outline-none focus:ring-2 focus:ring-[#BC3908]/20 focus:border-[#BC3908] cursor-pointer transition-all"
                      >
                        <option>Omnichannel Retail &amp; Fashion</option>
                        <option>D2C Checkout &amp; Referrals</option>
                        <option>QSR &amp; Hospitality Visits</option>
                        <option>Fintech &amp; Card Rewards</option>
                      </select>
                      <ChevronDownIcon
                        size={16}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#826B63]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full h-12 px-6 rounded-xl bg-[#BC3908] hover:bg-[#941B0C] text-white font-body font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Provision Instant Free Sandbox</span>
                    <ArrowRightIcon
                      size={15}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                  <p className="text-[11px] text-center text-[#826B63]">
                    Unlimited sandbox resets · Postman &amp; OpenAPI 3.1 specs included
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default StartSandboxPage;
