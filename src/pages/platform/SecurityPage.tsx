import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';
import { InternalPageFaq } from '../../components/common/InternalPageFaq';
import { 
  ShieldCheckIcon, 
  LockIcon, 
  KeyIcon, 
  DatabaseIcon, 
  FileCheckIcon, 
  ServerIcon, 
  UsersIcon, 
  GlobeIcon, 
  CheckCircle2Icon, 
  ChevronDownIcon, 
  MailIcon, 
  CpuIcon, 
  AlertCircleIcon, 
  FileTextIcon 
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const SECURITY_FAQS: FaqItem[] = [
  {
    question: "Where is our customer loyalty and transaction data stored?",
    answer: "Data for Indian enterprise clients is strictly localized within AWS Mumbai (ap-south-1) and AWS Hyderabad (ap-south-2). For clients in Australia, data is housed in AWS Sydney (ap-southeast-2). Middle East clients are hosted in AWS UAE (me-central-1). Cross-border data replication is never performed without explicit contract authorization."
  },
  {
    question: "Can Punya Perks staff or engineers inspect our member phone numbers and records?",
    answer: "No. All identifiable member attributes (such as mobile numbers and email addresses) are encrypted using AES-256 with tenant-isolated AWS KMS keys. Production databases reside inside private VPC subnets with zero public internet exposure. Access requires ephemeral, time-bounded approval with dual authorization and cryptographic session recording."
  },
  {
    question: "How do you handle DPDP Act 2023, GDPR, and right-to-erasure requests?",
    answer: "We provide automated Data Subject Request (DSR) workflows. When a member requests account deletion or data portability, our APIs pseudonymize the historical ledger entries (preserving mathematical balance sheet integrity for statutory tax audits while irreversibly scrubbing all personal identifiers) within statutory timelines."
  },
  {
    question: "Can we review your third-party penetration testing (VAPT) and SOC 2 reports?",
    answer: "Yes. We execute independent third-party penetration tests twice annually and share full executive summaries and remediation verification letters with enterprise clients under mutual NDA."
  },
  {
    question: "What happens to our customer data and ledger records if we terminate our agreement?",
    answer: "You maintain 100% data sovereignty. Upon contract termination, you can export your complete historical double-entry transaction journal and customer profile directory via secure S3 bucket dump or encrypted archive. Following verified export, all tenant partitions are purged from active and replica stores in accordance with DoD 5220.22-M sanitization standards."
  }
];

export const SecurityPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const securityPillars = [
    {
      icon: LockIcon,
      title: "Data Encryption at Rest & In-Transit",
      desc: "All member balances, transaction streams, and phone numbers are encrypted at rest using AES-256 with tenant-isolated KMS customer-managed keys. In-transit traffic enforces TLS 1.3 with strict HSTS and automated certificate rotation."
    },
    {
      icon: UsersIcon,
      title: "Granular Access Control & Maker-Checker",
      desc: "Native SAML 2.0 / OIDC Single Sign-On (Okta, Azure AD, Google Workspace), mandatory multi-factor authentication, and strict Role-Based Access Control (RBAC). Manual point minting or balance adjustments require dual-operator approval."
    },
    {
      icon: FileCheckIcon,
      title: "Append-Only Cryptographic Audit Log",
      desc: "Every sign-in, rule alteration, point reversal, and ledger export is permanently written to an immutable event journal with timestamp, user ID, and source IP address. Audit logs cannot be modified, truncated, or erased."
    },
    {
      icon: DatabaseIcon,
      title: "Strict Multi-Tenant Isolation",
      desc: "Enterprise data is logically and cryptographically partitioned at the database layer. Every database query enforces tenant tenancy bounds at the ORM and SQL boundary, eliminating cross-tenant data leakage risks."
    },
    {
      icon: ShieldCheckIcon,
      title: "Continuous Vulnerability & Penetration Testing",
      desc: "Automated static (SAST) and dynamic (DAST) analysis runs in our CI/CD pipelines. We partner with CREST-accredited offensive security firms for biannual grey-box penetration tests across web apps, APIs, and cloud enclaves."
    },
    {
      icon: ServerIcon,
      title: "High Availability & Multi-AZ Disaster Recovery",
      desc: "Engineered for 99.99% uptime with automated failover across three isolated availability zones in each region. Point-in-time recovery (PITR) backups are taken continuously, encrypted, and rehearsed quarterly."
    }
  ];

  const privacyFeatures = [
    "Customizable data retention periods with automated background scrubbing",
    "Store-level POS tokenization: Cashiers never see unmasked customer identifiers",
    "Purpose-built compliance for India's DPDP Act 2023, Australia's Privacy Act 1988, and GDPR",
    "Zero cross-tenant surveillance or third-party behavioral advertising monetization",
    "Automated Right-to-Erasure APIs that preserve double-entry accounting integrity"
  ];

  const regionalMatrix = [
    {
      region: "India (Domestic)",
      framework: "DPDP Act 2023 & RBI PPI Regulations",
      datacenter: "AWS Mumbai (ap-south-1) & Hyderabad (ap-south-2)",
      status: "100% In-Country Sovereignty"
    },
    {
      region: "Australia & New Zealand",
      framework: "Privacy Act 1988 (APPs) & Privacy Act 2020 (NZ)",
      datacenter: "AWS Sydney (ap-southeast-2)",
      status: "Localized Data Residency"
    },
    {
      region: "Middle East (UAE & GCC)",
      framework: "UAE Federal Decree-Law No. 45 & ADGM DP Regs",
      datacenter: "AWS UAE (me-central-1)",
      status: "Regional Hosting Compliance"
    },
    {
      region: "European Union & UK",
      framework: "EU GDPR & UK Data Protection Act",
      datacenter: "AWS Frankfurt (eu-central-1)",
      status: "Adequacy & Standard Clauses"
    }
  ];

  const responsibleAi = [
    {
      title: "People make financial decisions",
      desc: "AI identifies customer segment affinity, churn propensities, and fraud anomalies. It never mints unbacked points or adjusts corporate liability balances autonomously."
    },
    {
      title: "Your data is never used to train public models",
      desc: "Customer transaction records, purchase history, and tier levels are strictly quarantined within your private security perimeter. We never feed client data into public LLMs."
    },
    {
      title: "Explainable Campaign Allocation",
      desc: "Every automated reward or promotional multiplier is assigned with an explicit rule justification logged in the campaign audit trail, preventing black-box discrimination."
    },
    {
      title: "Cashier & Member Velocity Anomaly Detection",
      desc: "Real-time mathematical heuristics detect collusion, suspicious velocity bursts, and bot scraping at cash counters before fraudulent points can be extracted."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHeader
        eyebrow="ENTERPRISE SECURITY & DATA PRIVACY"
        title="Bank-grade security for regulated loyalty ledgers"
        description="Loyalty programs handle sensitive member identifiers and legal financial liabilities. We protect your balance sheet with append-only cryptographic ledgers, AES-256 KMS encryption, and sovereign data residency."
        breadcrumbs={[
          { label: 'Platform', href: '/platform' },
          { label: 'Security & Compliance' }
        ]}
        primaryCtaText="Request Security Report"
        primaryCtaHref="/contact"
        secondaryCtaText="Contact Security Team"
        secondaryCtaHref="/contact"
        image="/images/products/user-web-home.png"
        imageAlt="Punya Perks Security & Compliance Member Portal"
      >
        {/* Trust Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
          <div className="p-4 rounded-2xl bg-white/90 border border-[#EBDFC6] text-center shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#B5651A] mb-1">SOC 2</div>
            <div className="text-[11px] font-mono font-semibold text-[#847C75] uppercase tracking-wider">Type II Readiness</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/90 border border-[#EBDFC6] text-center shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#B5651A] mb-1">AES-256</div>
            <div className="text-[11px] font-mono font-semibold text-[#847C75] uppercase tracking-wider">KMS Isolated Keys</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/90 border border-[#EBDFC6] text-center shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#B5651A] mb-1">DPDP '23</div>
            <div className="text-[11px] font-mono font-semibold text-[#847C75] uppercase tracking-wider">India Sovereign Data</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/90 border border-[#EBDFC6] text-center shadow-xs">
            <div className="font-display font-extrabold text-2xl text-[#B5651A] mb-1">99.99%</div>
            <div className="text-[11px] font-mono font-semibold text-[#847C75] uppercase tracking-wider">Availability SLA</div>
          </div>
        </div>
      </PageHeader>

      {/* Security Pillars: How We Protect Data */}
      <section className="py-16 sm:py-24 bg-[#FAF4EC] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              SECURITY ARCHITECTURE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1C1610] tracking-tight">
              How we protect your customer and financial data
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Every point transaction, API request, and user sign-in passes through multiple layers of defense-in-depth security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-3xl bg-white p-8 border border-[#EBDFC6] shadow-[0_2px_12px_rgba(28,22,16,0.04)] hover:shadow-[0_8px_24px_rgba(28,22,16,0.08)] hover:border-[#B5651A]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FEF0E1] border border-[#F3D7BD] flex items-center justify-center text-[#B5651A] mb-5">
                      <IconComp size={24} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#1C1610] mb-3 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Built Into Every Step (Split Section) with Luxury Dark Gold Background matching Reference Design */}
      <section
        className="relative w-full py-16 sm:py-24 bg-[#1F0E05] text-white border-b border-[#3E2413] bg-cover bg-center overflow-hidden font-body"
        style={{
          backgroundImage: "url('/images/modules/sec3-dark-rewards-bg.jpg')",
        }}
      >
        {/* Subtle dark gradient overlay on the left to ensure crisp text contrast over the banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E59846]">
                PRIVACY & DATA RESIDENCY
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight">
                Privacy built into every point accrual and redemption
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                Members trust your brand with their personal purchase habits. We provide end-to-end cryptographic safeguards that guarantee member privacy without compromising real-time POS responsiveness.
              </p>

              <ul className="space-y-3 pt-2">
                {privacyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-4 h-4 text-[#E59846] shrink-0 mt-0.5" />
                    <span className="font-body text-xs text-white/90 leading-relaxed font-normal">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E59846] hover:text-[#f8b46d] transition-colors"
                >
                  <span>Request our DPDP & Data Retention Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Regional Matrix Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-white/20 shadow-2xl text-[#17140F]">
                <div className="flex items-center justify-between pb-4 border-b border-[#EBDFC6] mb-5">
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5 text-[#B5651A]" />
                    <span className="font-display font-bold text-lg text-[#17140F]">
                      Regional Data Sovereignty
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#B5651A] bg-[#FEF0E1] px-2.5 py-0.5 rounded-full border border-[#F3D7BD]">
                    Active Clusters
                  </span>
                </div>

                <div className="space-y-3.5">
                  {regionalMatrix.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-sm text-[#17140F]">{item.region}</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {item.status}
                        </span>
                      </div>
                      <div className="text-xs font-body text-[#5B534C]">
                        <strong className="text-[#17140F]">Framework:</strong> {item.framework}
                      </div>
                      <div className="text-[11px] font-mono text-[#847C75]">
                        Cluster: {item.datacenter}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible AI & Algorithmic Governance */}
      <section className="py-16 sm:py-24 bg-[#FAF4EC] border-b border-[#EBDFC6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              RESPONSIBLE AI & ALGORITHMIC GOVERNANCE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1C1610] tracking-tight">
              Ethical AI in predictive loyalty and fraud prevention
            </h2>
            <p className="font-body text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
              Machine learning powers our churn prediction and velocity anomaly detection. Here is how we govern its use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {responsibleAi.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-white p-7 sm:p-8 border border-[#EBDFC6] shadow-[0_2px_12px_rgba(28,22,16,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF0E1] border border-[#F3D7BD] flex items-center justify-center text-[#B5651A] mb-4">
                  <CpuIcon size={20} />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#1C1610] mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-neutral-500 mt-8 font-body">
            Read our <Link to="/legal/privacy" className="text-[#B5651A] hover:underline font-bold">Privacy Policy</Link> or contact <a href="mailto:security@punyaperks.com" className="text-[#B5651A] hover:underline font-bold">security@punyaperks.com</a> to request custom security attestations.
          </p>
        </div>
      </section>

      {/* Security FAQ Section using Punya Perks Standard FAQ Component */}
      <InternalPageFaq
        title="Security & Compliance Inquiries"
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        faqs={SECURITY_FAQS.map(f => ({ q: f.question, a: f.answer }))}
        helpTitle="Need an enterprise compliance questionnaire completed?"
        helpDescription="Send your SIG, CAIQ, or custom enterprise vendor security assessment. Average turnaround is 2 business days."
        helpButtonText="Email Security Team"
        helpButtonHref="mailto:security@punyaperks.com"
      />

      <PageCta />
    </MainLayout>
  );
};

export default SecurityPage;
