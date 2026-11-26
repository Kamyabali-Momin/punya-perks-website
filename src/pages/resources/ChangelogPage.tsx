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

      <section className="py-16 sm:py-20 bg-[#F3EBDD] border-b border-[#E8DCC9]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 space-y-10">
          {releases.map((rel) => (
            <div key={rel.version} className="rounded-[28px] bg-white p-8 sm:p-10 border border-[#E8DCC9] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DCC9]">
                <span className="font-mono text-sm font-bold text-[#D9822B]">{rel.version}</span>
                <span className="text-xs text-[#1F1A17]/60 font-mono">{rel.date}</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#1F1A17]">{rel.title}</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1F1A17]/75 list-disc pl-5">
                {rel.changes.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PageCta />
    </MainLayout>
  );
};
export default ChangelogPage;
