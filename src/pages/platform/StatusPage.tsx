import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Server, 
  Globe2, 
  Clock, 
  Bell, 
  AlertCircle, 
  ArrowUpRight,
  Database,
  Smartphone,
  Cpu
} from 'lucide-react';

interface ClusterInfo {
  region: string;
  name: string;
  code: string;
  status: 'Operational' | 'Degraded' | 'Maintenance';
  latency: string;
  uptime30d: string;
}

interface ServiceStatus {
  name: string;
  description: string;
  status: 'Operational' | 'Degraded';
  uptime90d: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const StatusPage: React.FC = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const clusters: ClusterInfo[] = [
    {
      region: 'India (Domestic)',
      name: 'AWS Mumbai',
      code: 'ap-south-1',
      status: 'Operational',
      latency: '12ms',
      uptime30d: '100.0%',
    },
    {
      region: 'Middle East',
      name: 'AWS UAE (Dubai)',
      code: 'me-central-1',
      status: 'Operational',
      latency: '16ms',
      uptime30d: '99.99%',
    },
    {
      region: 'Australia & NZ',
      name: 'AWS Sydney',
      code: 'ap-southeast-2',
      status: 'Operational',
      latency: '18ms',
      uptime30d: '99.99%',
    },
    {
      region: 'Europe & Disaster Recovery',
      name: 'AWS Frankfurt',
      code: 'eu-central-1',
      status: 'Operational',
      latency: '24ms',
      uptime30d: '100.0%',
    },
  ];

  const services: ServiceStatus[] = [
    {
      name: 'Double-Entry Points Ledger',
      description: 'Append-only ledger, balance queries, cryptographic maker-checker journal',
      status: 'Operational',
      uptime90d: '100.0%',
      icon: Database,
    },
    {
      name: 'POS & E-Commerce Real-time APIs',
      description: 'Sub-80ms transaction authorization, discount voucher validation, and QR scanner',
      status: 'Operational',
      uptime90d: '99.99%',
      icon: Cpu,
    },
    {
      name: 'WhatsApp Business API Gateway',
      description: 'Conversational enrolments, interactive 2-way menus, dynamic QR generation',
      status: 'Operational',
      uptime90d: '99.98%',
      icon: Smartphone,
    },
    {
      name: 'Member Web Portal & Apple Wallet Passes',
      description: 'Member pass generation, dynamic barcode rendering, push notifications',
      status: 'Operational',
      uptime90d: '100.0%',
      icon: Globe2,
    },
    {
      name: 'Analytics, CDP & Scheduled Export Pipelines',
      description: 'Daily RFM scores, points liability accounting reports, Snowflake/BigQuery sync',
      status: 'Operational',
      uptime90d: '99.99%',
      icon: Activity,
    },
  ];

  const pastIncidents = [
    {
      date: 'November 18, 2026',
      title: 'Scheduled Maintenance: AWS ap-south-1 Aurora PostgreSQL Major Version Upgrade',
      status: 'Completed',
      impact: 'Zero customer downtime. Multi-AZ automatic failover executed in 14 seconds.',
      duration: '42 mins',
    },
    {
      date: 'October 29, 2026',
      title: 'Informational: Meta WhatsApp Cloud API Regional Latency in Mumbai Hub',
      status: 'Resolved',
      impact: 'Outbound template messages experienced 1.8s queue delay. All delivered successfully.',
      duration: '18 mins',
    },
    {
      date: 'September 12, 2026',
      title: 'Scheduled Maintenance: Network Spine Firmware Patch in Sydney Region',
      status: 'Completed',
      impact: 'Redundant redundant cross-connects maintained 100% API ingress without drops.',
      duration: '25 mins',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <MainLayout>
      {/* Hero Section matching Site Specification */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-[#EBDFC6] bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 shadow-xs mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold text-emerald-800 tracking-wide uppercase">
              All Systems Operational · 99.994% Uptime
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-[#17140F] tracking-tight max-w-4xl mx-auto leading-[1.12]">
            Real-Time System Telemetry & Regional Cluster Status
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5B534C] max-w-2xl mx-auto font-body leading-relaxed">
            Live health indicators across AWS Mumbai, UAE, Sydney, and Frankfurt. High availability double-entry ledger backed by contractual financial SLAs.
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8DCC9] text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#17140F]">99.994%</div>
              <div className="text-xs text-[#8C827A] font-medium mt-1">90-Day Global Uptime</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8DCC9] text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#17140F]">42ms</div>
              <div className="text-xs text-[#8C827A] font-medium mt-1">Average P95 Latency</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8DCC9] text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#17140F]">0</div>
              <div className="text-xs text-[#8C827A] font-medium mt-1">Active P1 Incidents</div>
            </div>
            <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-[#E8DCC9] text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#17140F]">4 Regions</div>
              <div className="text-xs text-[#8C827A] font-medium mt-1">Data Sovereignty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemetry Dashboard */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          
          {/* Section 1: Regional Cluster Health */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="font-display font-bold text-2xl text-[#17140F]">Regional Cloud Clusters</h2>
                <p className="text-xs sm:text-sm text-[#5B534C] mt-0.5">Sovereign multi-tenant data pods with local failovers.</p>
              </div>
              <span className="font-mono text-xs text-[#8C827A] bg-white px-3 py-1.5 rounded-full border border-[#E8DCC9] self-start sm:self-auto">
                Auto-refreshed every 60s
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {clusters.map((c) => (
                <div key={c.code} className="bg-white p-5 rounded-2xl border border-[#E8DCC9] shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8C827A] uppercase">{c.code}</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {c.status}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-[#17140F]">{c.name}</div>
                    <div className="text-xs text-[#5B534C]">{c.region}</div>
                  </div>
                  <div className="pt-2 border-t border-[#EBDFC6] flex items-center justify-between text-xs">
                    <span className="text-[#8C827A]">Edge Latency: <strong className="text-[#17140F]">{c.latency}</strong></span>
                    <span className="text-[#8C827A]">30d: <strong className="text-emerald-700">{c.uptime30d}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Core Platform Services */}
          <div className="space-y-4">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#17140F]">Core Platform Services</h2>
              <p className="text-xs sm:text-sm text-[#5B534C] mt-0.5">Continuous health telemetry for transactional workflows.</p>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8DCC9] divide-y divide-[#FAF3E8] overflow-hidden shadow-xs">
              {services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div key={svc.name} className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF7F2]/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#E8DCC9] flex items-center justify-center text-[#B5651A] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-base text-[#17140F]">{svc.name}</div>
                        <div className="text-xs sm:text-sm text-[#5B534C] mt-0.5">{svc.description}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 shrink-0 md:justify-end">
                      <div className="text-right hidden sm:block">
                        <div className="font-mono text-xs font-bold text-[#17140F]">{svc.uptime90d}</div>
                        <div className="text-[11px] text-[#8C827A]">90-Day Uptime</div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {svc.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Past Incidents & Maintenance Log */}
          <div className="space-y-4">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#17140F]">Past Incidents & Maintenance (Last 90 Days)</h2>
              <p className="text-xs sm:text-sm text-[#5B534C] mt-0.5">Transparent post-mortems and infrastructure change disclosures.</p>
            </div>

            <div className="space-y-3">
              {pastIncidents.map((inc, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[#E8DCC9] shadow-xs space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="font-mono text-[#8C827A]">{inc.date}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {inc.status} ({inc.duration})
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#17140F]">{inc.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B534C]">{inc.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Subscribe to Status Alerts */}
          <div className="p-8 rounded-2xl bg-[#F8F0DF] border border-[#EBDFC6] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Bell className="w-4 h-4 text-[#B5651A]" />
                <span className="font-mono text-xs font-bold text-[#17140F] uppercase">Incident Alerts</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#17140F]">Get notified of scheduled maintenance</h3>
              <p className="text-xs sm:text-sm text-[#5B534C] max-w-lg">
                Subscribe to receive SMS or email notifications whenever an incident is reported, updated, or resolved.
              </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
              {isSubscribed ? (
                <div className="px-5 py-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                  ✓ Subscribed! You will receive status notifications.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    placeholder="Enter engineering email..."
                    className="px-4 py-2.5 rounded-full bg-white border border-[#E8DCC9] text-xs sm:text-sm text-[#17140F] outline-none focus:border-[#B5651A]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#17140F] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default StatusPage;
