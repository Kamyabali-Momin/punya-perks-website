/**
 * Punya Perks Design System Tokens
 * Source of Truth for Brand Architecture & Theming
 */

export interface ColorToken {
  name: string;
  variable: string;
  hex: string;
  description: string;
}

export const brandTokens = {
  identity: {
    name: "Punya Perks",
    parent: "Punya Perks Enterprise",
    tagline: "Loyalty that pays for itself.",
    subheadline: "Launch points, tiers, offers and a white-label member app in weeks. One platform for retailers, banks and enterprises, with the compliance each market demands.",
    targetMarkets: ["India", "Australia", "New Zealand", "Middle East", "United States"],
    theme: "Option A — Marigold (Warm Editorial)",
    typography: "Newsreader & Plus Jakarta Sans",
  },
  colors: {
    ground: "var(--pp-ground)",
    panel: "var(--pp-panel)",
    panelDeep: "var(--pp-panel-deep)",
    panelHover: "var(--pp-panel-hover)",
    ink: "var(--pp-ink)",
    inkSecondary: "var(--pp-ink-secondary)",
    inkMuted: "var(--pp-ink-muted)",
    inkInverse: "var(--pp-ink-inverse)",
    primary: "var(--pp-primary)",
    primaryDark: "var(--pp-primary-dark)",
    primarySoft: "var(--pp-primary-soft)",
    accent: "var(--pp-accent)",
    accentSoft: "var(--pp-accent-soft)",
    accentDark: "var(--pp-accent-dark)",
    borderSubtle: "var(--pp-border-subtle)",
    borderStrong: "var(--pp-border-strong)",
    success: "var(--pp-success)",
    warning: "var(--pp-warning)",
    error: "var(--pp-error)",
  },
  typography: {
    displayFont: "var(--pp-font-display)",
    bodyFont: "var(--pp-font-body)",
    scale: {
      display: "text-4xl md:text-5xl xl:text-6xl font-semibold tracking-tight",
      h1: "text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight",
      h2: "text-2xl md:text-3xl xl:text-4xl font-semibold tracking-tight",
      h3: "text-xl md:text-2xl font-semibold",
      h4: "text-lg md:text-xl font-semibold",
      bodyLarge: "text-lg leading-relaxed",
      bodyRegular: "text-base leading-relaxed",
      bodySmall: "text-sm leading-normal",
      caption: "text-xs font-medium tracking-wide",
      eyebrow: "text-xs font-semibold tracking-[0.16em] uppercase",
    },
  },
  radii: {
    sm: "var(--pp-radius-sm)",
    md: "var(--pp-radius-md)",
    lg: "var(--pp-radius-lg)",
    bento: "var(--pp-radius-bento)",
    pill: "var(--pp-radius-pill)",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
};
