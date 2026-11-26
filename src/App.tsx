import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Pages
import { HomePage } from './pages/HomePage';
import { DesignSystemShowcase } from './pages/DesignSystemShowcase';

// Product Pages
import { ProductOverviewPage } from './pages/product/ProductOverviewPage';
import { ProductEarnPage } from './pages/product/ProductEarnPage';
import { ProductCampaignsPage } from './pages/product/ProductCampaignsPage';
import { ProductRedeemPage } from './pages/product/ProductRedeemPage';
import { ProductMemberAppPage } from './pages/product/ProductMemberAppPage';
import { ProductAnalyticsPage } from './pages/product/ProductAnalyticsPage';
import { ProductTrustPage } from './pages/product/ProductTrustPage';
import { ProductWhatsAppPage } from './pages/product/ProductWhatsAppPage';
import { ProductIntegrationsPage } from './pages/product/ProductIntegrationsPage';

// Solutions Pages
import { SolutionsRetailPage } from './pages/solutions/SolutionsRetailPage';
import { SolutionsBankingPage } from './pages/solutions/SolutionsBankingPage';
import { SolutionsHospitalityPage } from './pages/solutions/SolutionsHospitalityPage';
import { SolutionsEcommercePage } from './pages/solutions/SolutionsEcommercePage';
import { SolutionsEnterprisePage } from './pages/solutions/SolutionsEnterprisePage';

// Regional Pages
import { RegionIndiaPage } from './pages/regions/RegionIndiaPage';
import { RegionAustraliaPage } from './pages/regions/RegionAustraliaPage';
import { RegionNewZealandPage } from './pages/regions/RegionNewZealandPage';

// Platform & Pricing Pages
import { PlatformPage } from './pages/platform/PlatformPage';
import { SecurityPage } from './pages/platform/SecurityPage';
import { DevelopersPage } from './pages/platform/DevelopersPage';
import { StatusPage } from './pages/platform/StatusPage';
import { PricingPage } from './pages/pricing/PricingPage';
import { PricingComparePage } from './pages/pricing/PricingComparePage';

// Resources Pages
import { ResourcesPage } from './pages/resources/ResourcesPage';
import { BlogPage } from './pages/resources/BlogPage';
import { WebinarsEventsPage } from './pages/resources/WebinarsEventsPage';
import { ComplianceArticlePage } from './pages/resources/ComplianceArticlePage';
import { CustomersPage } from './pages/resources/CustomersPage';
import { RetailCaseStudyPage } from './pages/resources/RetailCaseStudyPage';
import { ChangelogPage } from './pages/resources/ChangelogPage';
import { GlossaryPage } from './pages/resources/GlossaryPage';
import { HelpCenterPage } from './pages/resources/HelpCenterPage';

// Company Pages
import { AboutPage } from './pages/company/AboutPage';
import { PartnersPage } from './pages/company/PartnersPage';
import { CareersPage } from './pages/company/CareersPage';
import { ContactPage } from './pages/company/ContactPage';

// Conversion Pages
import { DemoPage } from './pages/conversion/DemoPage';
import { StartSandboxPage } from './pages/conversion/StartSandboxPage';
import { PartnerApplyPage } from './pages/conversion/PartnerApplyPage';

// Legal Pages
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { NotFoundPage } from './pages/legal/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home & Design System */}
        <Route path="/" element={<HomePage />} />
        <Route path="/design-system" element={<DesignSystemShowcase />} />

        {/* Product Group */}
        <Route path="/product" element={<ProductOverviewPage />} />
        <Route path="/product/earn" element={<ProductEarnPage />} />
        <Route path="/product/campaigns" element={<ProductCampaignsPage />} />
        <Route path="/product/redeem" element={<ProductRedeemPage />} />
        <Route path="/product/member-app" element={<ProductMemberAppPage />} />
        <Route path="/product/analytics" element={<ProductAnalyticsPage />} />
        <Route path="/product/trust" element={<ProductTrustPage />} />
        <Route path="/product/whatsapp" element={<ProductWhatsAppPage />} />
        <Route path="/product/integrations" element={<ProductIntegrationsPage />} />

        {/* Solutions Group */}
        <Route path="/solutions/retail" element={<SolutionsRetailPage />} />
        <Route path="/solutions/banking" element={<SolutionsBankingPage />} />
        <Route path="/solutions/hospitality" element={<SolutionsHospitalityPage />} />
        <Route path="/solutions/ecommerce" element={<SolutionsEcommercePage />} />
        <Route path="/solutions/enterprise" element={<SolutionsEnterprisePage />} />

        {/* Regional Editions */}
        <Route path="/regions/india" element={<RegionIndiaPage />} />
        <Route path="/india" element={<RegionIndiaPage />} />
        <Route path="/regions/australia" element={<RegionAustraliaPage />} />
        <Route path="/regions/new-zealand" element={<RegionNewZealandPage />} />

        {/* Platform & Developers */}
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/platform/security" element={<SecurityPage />} />
        <Route path="/platform/connectors" element={<ProductIntegrationsPage />} />
        <Route path="/platform/developers" element={<DevelopersPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/trust-centre" element={<SecurityPage />} />
        <Route path="/trust" element={<SecurityPage />} />

        {/* Pricing */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/pricing/compare" element={<PricingComparePage />} />

        {/* Resources & Stories */}
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/guides" element={<ResourcesPage />} />
        <Route path="/resources/hub" element={<ResourcesPage />} />
        <Route path="/resources/india-compliance-checklist" element={<ComplianceArticlePage />} />
        <Route path="/resources/:slug" element={<BlogPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customers/retail-national" element={<RetailCaseStudyPage />} />
        <Route path="/changelog" element={<ChangelogPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/guides" element={<ResourcesPage />} />
        <Route path="/benchmarks" element={<ResourcesPage />} />
        <Route path="/comparisons" element={<ResourcesPage />} />
        <Route path="/events" element={<WebinarsEventsPage />} />

        {/* Company */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/company" element={<AboutPage />} />
        <Route path="/press" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/partners/apply" element={<PartnerApplyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Conversion & Onboarding */}
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/start" element={<StartSandboxPage />} />
        <Route path="/sign-in" element={<StartSandboxPage />} />

        {/* Legal & Utility */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<PrivacyPolicyPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/404" element={<NotFoundPage />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
