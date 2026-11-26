import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
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
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-14 pb-20 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: "#FAF3E8",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs font-semibold flex items-center justify-center gap-2 mb-6 text-[#847C75]">
              <Link to="/" className="hover:text-[#B5651A] transition-colors">Home</Link>
              <span className="text-[#847C75]/60">/</span>
              <Link to="/platform" className="hover:text-[#B5651A] transition-colors">Platform</Link>
              <span className="text-[#847C75]/60">/</span>
              <span className="text-[#17140F] font-bold">Security & Compliance</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF0E1] border border-[#F3D7BD] text-xs font-mono font-bold text-[#B5651A] mb-4">
              <ShieldCheckIcon className="w-3.5 h-3.5 text-[#B5651A]" />
              ENTERPRISE SECURITY & DATA PRIVACY
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#17140F] tracking-tight mb-6 leading-tight">
              Bank-grade security for regulated loyalty ledgers
            </h1>

            <p className="font-body text-base sm:text-lg text-[#5B534C] max-w-2xl mx-auto mb-8 leading-relaxed">
              Loyalty programs handle sensitive member identifiers and legal financial liabilities. We protect your balance sheet with append-only cryptographic ledgers, AES-256 KMS encryption, and sovereign data residency.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
              >
                Request Security Whitepaper & SOC 2 Report
              </Link>
              <a
                href="mailto:security@punyaperks.com"
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#17140F] font-bold text-xs sm:text-sm border border-[#EBDFC6] transition-all shadow-xs"
              >
                Contact Security Team
              </a>
            </div>
          </div>

          {/* Trust Highlights Grid */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Security Pillars: How We Protect Data */}
      <section className="py-16 sm:py-24 bg-[#FAF4EC] border-b border-[#E8DCC9]">
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
                  className="rounded-3xl bg-white p-8 border border-[#E8DCC9] shadow-[0_2px_12px_rgba(28,22,16,0.04)] hover:shadow-[0_8px_24px_rgba(28,22,16,0.08)] hover:border-[#D9822B]/50 transition-all flex flex-col justify-between"
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

      {/* Privacy Built Into Every Step (Split Section) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8DCC9]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A]">
                PRIVACY & DATA RESIDENCY
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1C1610] leading-tight">
                Privacy built into every point accrual and redemption
              </h2>
              <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed">
                Members trust your brand with their personal purchase habits. We provide end-to-end cryptographic safeguards that guarantee member privacy without compromising real-time POS responsiveness.
              </p>

              <ul className="space-y-3.5 pt-2">
                {privacyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2Icon className="w-5 h-5 text-[#B5651A] shrink-0 mt-0.5" />
                    <span className="font-body text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D9822B] hover:text-[#B5651A] transition-colors"
                >
                  <span>Request our DPDP & Data Retention Guide</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Regional Matrix Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#FAF4EC] p-6 sm:p-8 border border-[#E8DCC9] shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DCC9] mb-5">
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5 text-[#B5651A]" />
                    <span className="font-display font-bold text-lg text-[#1C1610]">
                      Regional Data Sovereignty
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase text-[#B5651A] bg-[#FEF0E1] px-2.5 py-0.5 rounded-full border border-[#F3D7BD]">
                    Active Clusters
                  </span>
                </div>

                <div className="space-y-4">
                  {regionalMatrix.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E8DCC9] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-sm text-[#1C1610]">{item.region}</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {item.status}
                        </span>
                      </div>
                      <div className="text-xs font-body text-neutral-600">
                        <strong className="text-neutral-800">Framework:</strong> {item.framework}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-500">
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
      <section className="py-16 sm:py-24 bg-[#FAF4EC] border-b border-[#E8DCC9]">
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
                className="rounded-3xl bg-white p-7 sm:p-8 border border-[#E8DCC9] shadow-[0_2px_12px_rgba(28,22,16,0.04)]"
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
            Read our <Link to="/legal/privacy" className="text-[#D9822B] hover:underline font-bold">Privacy Policy</Link> or contact <a href="mailto:security@punyaperks.com" className="text-[#D9822B] hover:underline font-bold">security@punyaperks.com</a> to request custom security attestations.
          </p>
        </div>
      </section>

      {/* Security FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8DCC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1C1610]">
              Security & Compliance Inquiries
            </h2>
            <p className="font-body text-sm text-neutral-600 mt-2">
              Straightforward answers to the most common questions raised during enterprise vendor assessments.
            </p>
          </div>

          <div className="space-y-4">
            {SECURITY_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E8DCC9] bg-[#FAF4EC]/40 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#1C1610] hover:text-[#D9822B] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDownIcon className={`w-5 h-5 text-[#B5651A] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm font-body text-neutral-600 leading-relaxed border-t border-[#E8DCC9]/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Security Questionnaire Banner */}
          <div className="mt-12 p-6 rounded-3xl bg-[#FEF0E1]/70 border border-[#F3D7BD] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-display font-bold text-base text-[#1C1610]">
                Need us to complete your vendor security questionnaire?
              </h4>
              <p className="font-body text-xs text-neutral-600">
                Send your SIG, CAIQ, or custom questionnaire to our security review team. Average turnaround is 2 business days.
              </p>
            </div>
            <a
              href="mailto:security@punyaperks.com"
              className="px-5 py-2.5 rounded-xl bg-[#D9822B] hover:bg-[#B5651A] text-white font-bold text-xs shrink-0 transition-all shadow-sm"
            >
              Email Questionnaire
            </a>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};

export default SecurityPage;
