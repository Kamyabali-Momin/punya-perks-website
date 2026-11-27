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
        <section className="bg-[#FAF5ED] border-b border-[#EBDFC6] py-20 md:py-28 font-body text-[#17140F]">
          <div className="max-w-[780px] mx-auto px-4 sm:px-6 text-center space-y-5">
            <span className="inline-flex items-center rounded-full bg-[#FEF0E1] border border-[#F3D7BD] px-3.5 py-1 text-xs font-mono font-bold text-[#B5651A] uppercase">
              SPECIFICATION NOT FOUND
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#17140F]">
              Developer specification not found
            </h1>
            <p className="text-sm sm:text-base text-[#5B534C]">
              Explore our authentication scopes, HMAC webhook specs, throughput ceilings, and SDK libraries below.
            </p>
            <div className="pt-2">
              <Link
                to="/platform/developers"
                className="inline-flex items-center gap-2 rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-6 py-3 text-xs font-semibold text-white transition-colors"
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
        className="relative w-full border-b border-[#EBDFC6] pt-10 pb-14 sm:pt-12 sm:pb-16 font-body bg-cover bg-bottom bg-no-repeat overflow-hidden text-[#17140F]"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative z-10 space-y-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#847C75]">
              <li>
                <Link to="/" className="hover:text-[#B5651A] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                <Link to="/platform" className="hover:text-[#B5651A] transition-colors">
                  Platform
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                <Link to="/platform/developers" className="hover:text-[#B5651A] transition-colors">
                  Developers
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                <span className="text-[#17140F] font-semibold" aria-current="page">
                  {spec.badge}
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-[#EBDFC6] px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#B5651A]">
              <Terminal size={12} />
              <span>TECHNICAL SPECIFICATION · {spec.badge}</span>
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#17140F] leading-[1.15] tracking-tight">
              {spec.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5B534C] leading-relaxed">
              {spec.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/start"
                className="rounded-full bg-[#B5651A] hover:bg-[#9a5413] px-5 py-2.5 text-xs font-semibold text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Generate Sandbox Credentials</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                to="/platform/developers"
                className="rounded-full border border-[#EBDFC6] bg-white/90 hover:bg-white px-5 py-2.5 text-xs font-semibold text-[#17140F] transition-colors inline-flex items-center gap-1.5"
              >
                <ArrowLeft size={13} />
                <span>Back to Developer Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="bg-white border-b border-[#EBDFC6] py-8 font-body">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {spec.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] p-5">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#847C75]">
                  {m.label}
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#B5651A] mt-1">
                  {m.value}
                </div>
                <div className="text-xs text-[#5B534C] mt-1">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Two-Column Technical Reference */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#EBDFC6] font-body text-[#17140F]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 8 Cols: Specification Table + Code Examples + Guidelines */}
            <div className="lg:col-span-8 space-y-10 min-w-0">
              {/* Structured Matrix */}
              <div className="space-y-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#B5651A] block">
                  SPECIFICATION MATRIX
                </span>
                <h2 className="font-display font-bold text-2xl text-[#17140F]">
                  {spec.tableHeading}
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-[#EBDFC6] bg-[#FAF5ED]/40">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#FAF5ED] border-b border-[#EBDFC6] font-mono text-[11px] uppercase text-[#5B534C]">
                      <tr>
                        {spec.tableColumns.map((col) => (
                          <th key={col} className="py-3.5 px-4">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EBDFC6] bg-white">
                      {spec.tableRows.map((row) => (
                        <tr key={row.col1} className="hover:bg-[#FAF5ED]/40">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#B5651A]">{row.col1}</td>
                          <td className="py-3.5 px-4 text-[#17140F] font-medium">{row.col2}</td>
                          <td className="py-3.5 px-4 text-[#5B534C]">{row.col3}</td>
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
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#B5651A]">
                    REFERENCE IMPLEMENTATION
                  </span>
                </div>
                <div className="rounded-2xl bg-[#17140F] text-white border border-[#3E2C20] overflow-hidden shadow-lg">
                  <div className="px-5 py-3.5 bg-[#1F1A17] border-b border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F5B06B]">{spec.codeTitle}</span>
                    <button
                      type="button"
                      onClick={() => copySnippet(spec.codeSnippet)}
                      className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white cursor-pointer"
                    >
                      {copiedMain ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copiedMain ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="p-5 font-mono text-xs text-[#EBDFC6] overflow-x-auto leading-relaxed">
                    <code>{spec.codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Secondary Payload / Schema */}
              <div className="rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] overflow-hidden">
                <div className="px-5 py-3 border-b border-[#EBDFC6] font-mono text-xs font-bold text-[#B5651A]">
                  {spec.secondaryCodeTitle}
                </div>
                <pre className="p-5 font-mono text-xs text-[#17140F] overflow-x-auto leading-relaxed">
                  <code>{spec.secondaryCodeSnippet}</code>
                </pre>
              </div>

              {/* Best Practices Checklist */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B5651A] block">
                  Production Engineering Checklist
                </span>
                <ul className="space-y-3">
                  {spec.bestPractices.map((bp) => (
                    <li
                      key={bp}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#17140F] bg-white rounded-xl border border-[#EBDFC6] p-3.5"
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
              <div className="rounded-3xl border border-[#EBDFC6] bg-[#FAF5ED]/75 p-6 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B5651A]">
                  All Developer Specifications
                </div>
                <div className="space-y-2.5">
                  {otherSpecs.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/platform/developers/${item.slug}`}
                      className="block rounded-2xl bg-white border border-[#EBDFC6] hover:border-[#B5651A] p-4 transition-all group"
                    >
                      <div className="text-[10px] font-mono font-bold text-[#B5651A] uppercase">
                        {item.badge}
                      </div>
                      <div className="font-display font-bold text-sm text-[#17140F] group-hover:text-[#B5651A] mt-0.5 flex items-center justify-between gap-2">
                        <span>{item.title}</span>
                        <ArrowRight size={13} className="shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[#17140F] text-white p-6 space-y-4 border border-[#3E2C20]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F5B06B] block">
                  LIVE SANDBOX TENANT
                </span>
                <h3 className="font-display font-bold text-xl text-white leading-snug">
                  Test webhooks &amp; idempotency keys right now
                </h3>
                <p className="text-xs text-[#D8CFBF] leading-relaxed">
                  Provision a synthetic retail tenant with seeded POS bills and immediate API credentials.
                </p>
                <Link
                  to="/start"
                  className="w-full py-3 px-4 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
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
