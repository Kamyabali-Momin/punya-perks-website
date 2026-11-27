import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import {
  DEVELOPER_SPECS,
  getDeveloperSpecBySlug,
} from '../../data/developerSpecs';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Copy,
  Terminal,
} from 'lucide-react';

export const DeveloperSpecDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const spec = getDeveloperSpecBySlug(slug);
  const [copiedMain, setCopiedMain] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCopiedMain(false);
  }, [slug]);

  const copySnippet = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedMain(true);
    setTimeout(() => setCopiedMain(false), 2000);
  };

  if (!spec) {
    return (
      <MainLayout>
        <section className="bg-[#F6EFE2] border-b border-[#EADBC6] py-20 md:py-28 font-body text-[#220901]">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 text-center space-y-5">
            <span className="inline-flex items-center rounded-full bg-[#F6EFE2] border border-[#F4D89C] px-3.5 py-1 text-xs font-mono font-bold text-[#BC3908] uppercase">
              SPECIFICATION NOT FOUND
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#220901]">
              Developer specification not found
            </h1>
            <p className="text-sm sm:text-base text-[#563E37]">
              Explore our authentication scopes, HMAC webhook specs, throughput ceilings, and SDK libraries below.
            </p>
            <div className="pt-2">
              <Link
                to="/platform/developers"
                className="inline-flex items-center gap-2 rounded-full bg-[#BC3908] hover:bg-[#941B0C] px-6 py-3 text-xs font-semibold text-white transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Developer Portal</span>
              </Link>
            </div>
          </div>
        </section>
        <PageCta />
      </MainLayout>
    );
  }

  const otherSpecs = DEVELOPER_SPECS.filter((s) => s.slug !== spec.slug);

  return (
    <MainLayout>
      {/* Engineering Specification Hero */}
      <section
        className="relative w-full border-b border-[#EADBC6] pt-10 pb-14 sm:pt-12 sm:pb-16 font-body overflow-hidden text-[#220901]"
        style={{
          backgroundImage: "radial-gradient(ellipse 65% 55% at 15% 15%, rgba(246, 170, 28, 0.14), transparent 70%), radial-gradient(ellipse 55% 50% at 85% 80%, rgba(188, 57, 8, 0.09), transparent 70%), linear-gradient(135deg, #FDFBF7 0%, #F6EFE2 100%)",
          backgroundColor: "#F6EFE2",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 space-y-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#826B63]">
              <li>
                <Link to="/" className="hover:text-[#BC3908] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                <Link to="/platform" className="hover:text-[#BC3908] transition-colors">
                  Platform
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                <Link to="/platform/developers" className="hover:text-[#BC3908] transition-colors">
                  Developers
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                <span className="text-[#220901] font-semibold" aria-current="page">
                  {spec.badge}
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-[#EADBC6] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#BC3908]">
              <Terminal size={12} />
              <span>TECHNICAL SPECIFICATION · {spec.badge}</span>
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#220901] leading-[1.15] tracking-tight">
              {spec.title}
            </h1>

            <p className="text-base sm:text-lg text-[#563E37] leading-relaxed">
              {spec.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/start"
                className="rounded-full bg-[#BC3908] hover:bg-[#941B0C] px-5 py-2.5 text-xs font-semibold text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Generate Sandbox Credentials</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/platform/developers"
                className="rounded-full border border-[#EADBC6] bg-white/90 hover:bg-white px-5 py-2.5 text-xs font-semibold text-[#220901] transition-colors inline-flex items-center gap-1.5"
              >
                <ArrowLeft size={13} />
                <span>Back to Developer Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-white border-b border-[#EADBC6] py-8 font-body">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {spec.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-[#F6EFE2] border border-[#EADBC6] p-5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#826B63]">
                  {m.label}
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#BC3908] mt-1">
                  {m.value}
                </div>
                <div className="text-xs text-[#563E37] mt-1">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Two-Column Technical Reference */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#EADBC6] font-body text-[#220901]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 8 Cols: Specification Table + Code Examples + Guidelines */}
            <div className="lg:col-span-8 space-y-10 min-w-0">
              {/* Structured Matrix */}
              <div className="space-y-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#BC3908] block">
                  SPECIFICATION MATRIX
                </span>
                <h2 className="font-display font-bold text-2xl text-[#220901]">
                  {spec.tableHeading}
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-[#EADBC6] bg-[#F6EFE2]/40">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F6EFE2] border-b border-[#EADBC6] font-mono text-[11px] uppercase text-[#563E37]">
                      <tr>
                        {spec.tableColumns.map((col) => (
                          <th key={col} className="py-3.5 px-4">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EADBC6] bg-white">
                      {spec.tableRows.map((row) => (
                        <tr key={row.col1} className="hover:bg-[#F6EFE2]/40">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#BC3908]">{row.col1}</td>
                          <td className="py-3.5 px-4 text-[#220901] font-medium">{row.col2}</td>
                          <td className="py-3.5 px-4 text-[#563E37]">{row.col3}</td>
                          {row.col4 && (
                            <td className="py-3.5 px-4 font-mono text-xs text-emerald-700 font-semibold">
                              {row.col4}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Primary Code Console */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#BC3908]">
                    REFERENCE IMPLEMENTATION
                  </span>
                </div>
                <div className="rounded-2xl bg-[#220901] text-white border border-[#621708] overflow-hidden shadow-lg">
                  <div className="px-5 py-3.5 bg-[#220901] border-b border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F6AA1C]">{spec.codeTitle}</span>
                    <button
                      type="button"
                      onClick={() => copySnippet(spec.codeSnippet)}
                      className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white cursor-pointer"
                    >
                      {copiedMain ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copiedMain ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="p-5 font-mono text-xs text-[#EADBC6] overflow-x-auto leading-relaxed">
                    <code>{spec.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Secondary Payload / Schema */}
              <div className="rounded-2xl bg-[#F6EFE2] border border-[#EADBC6] overflow-hidden">
                <div className="px-5 py-3 border-b border-[#EADBC6] font-mono text-xs font-bold text-[#BC3908]">
                  {spec.secondaryCodeTitle}
                </div>
                <pre className="p-5 font-mono text-xs text-[#220901] overflow-x-auto leading-relaxed">
                  <code>{spec.secondaryCodeSnippet}</code>
                </pre>
              </div>

              {/* Best Practices Checklist */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F6EFE2] border border-[#EADBC6] space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#BC3908] block">
                  Production Engineering Checklist
                </span>
                <ul className="space-y-3">
                  {spec.bestPractices.map((bp) => (
                    <li
                      key={bp}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#220901] bg-white rounded-xl border border-[#EADBC6] p-3.5"
                    >
                      <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 4 Cols: Sibling Specifications */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-[#EADBC6] bg-[#F6EFE2]/75 p-6 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#BC3908]">
                  All Developer Specifications
                </div>
                <div className="space-y-2.5">
                  {otherSpecs.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/platform/developers/${item.slug}`}
                      className="block rounded-2xl bg-white border border-[#EADBC6] hover:border-[#BC3908] p-4 transition-all group"
                    >
                      <div className="text-[10px] font-mono font-bold text-[#BC3908] uppercase">
                        {item.badge}
                      </div>
                      <div className="font-display font-bold text-sm text-[#220901] group-hover:text-[#BC3908] mt-0.5 flex items-center justify-between gap-2">
                        <span>{item.title}</span>
                        <ArrowRight size={13} className="shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[#220901] text-white p-6 space-y-4 border border-[#621708]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F6AA1C] block">
                  LIVE SANDBOX TENANT
                </span>
                <h3 className="font-display font-bold text-xl text-white leading-snug">
                  Test webhooks &amp; idempotency keys right now
                </h3>
                <p className="text-xs text-[#EADBC6] leading-relaxed">
                  Provision a synthetic retail tenant with seeded POS bills and immediate API credentials.
                </p>
                <Link
                  to="/start"
                  className="w-full py-3 px-4 rounded-full bg-[#BC3908] hover:bg-[#941B0C] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Create Sandbox Key</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};

export default DeveloperSpecDetailPage;
