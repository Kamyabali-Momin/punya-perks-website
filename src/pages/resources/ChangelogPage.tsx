import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageHeader } from '../../components/layout/PageHeader';
import { PageCta } from '../../components/common/PageCta';

export const ChangelogPage: React.FC = () => {
  const releases = [
    {
      version: 'v2.4.0',
      date: 'November 2026',
      title: 'DPDP Automated Data Erasure & Enhanced Multi-Tenant Clearinghouse',
      changes: [
        'Automated Data Principal Right-to-Erasure API conforming to India DPDP rules.',
        'Clearinghouse settlement engine now supports multi-currency inter-tenant currency conversions (INR, AUD, NZD).',
        'Holdout group split testing enabled natively inside campaign builder.',
      ],
    },
    {
      version: 'v2.3.0',
      date: 'October 2026',
      title: 'Pine Labs Android POS Cloud Connector & Apple Wallet Pass Bundling',
      changes: [
        'Turnkey cloud app on Pine Labs Android smart terminals with 2-second QR barcode scan.',
        'Automated Apple Wallet .pkpass pass generation with dynamic tier coloring and push balance updates.',
      ],
    },
  ];

  return (
    <MainLayout>
      <PageHeader
        eyebrow="CHANGELOG"
        title="What shipped, by release."
        description="Transparent log of engine updates, API changes, regulatory templates, and connector launches."
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Changelog' }]}
      />

      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          {/* 2-Column Side-by-Side Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {releases.map((rel) => (
              <div
                key={rel.version}
                className="rounded-3xl bg-white p-7 sm:p-9 border border-[#EBDFC6] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#EBDFC6]">
                    <span className="font-mono text-sm font-bold text-[#B5651A] bg-[#FEF0E1] px-3 py-0.5 rounded-full border border-[#F3D7BD]">
                      {rel.version}
                    </span>
                    <span className="text-xs text-[#847C75] font-mono">{rel.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#17140F] leading-snug">
                    {rel.title}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5B534C] list-disc pl-5 leading-relaxed pt-1">
                    {rel.changes.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default ChangelogPage;
