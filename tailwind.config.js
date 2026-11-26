/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',   // Mobile
      'md': '834px',   // Tablet
      'lg': '1280px',  // Laptop
      'xl': '1440px',  // Desktop
      '2xl': '1600px', // Large screens
    },
    extend: {
      colors: {
        pp: {
          ground: "var(--pp-ground)",
          panel: "var(--pp-panel)",
          "panel-deep": "var(--pp-panel-deep)",
          "panel-hover": "var(--pp-panel-hover)",
          ink: "var(--pp-ink)",
          "ink-secondary": "var(--pp-ink-secondary)",
          "ink-muted": "var(--pp-ink-muted)",
          "ink-inverse": "var(--pp-ink-inverse)",
          primary: "var(--pp-primary)",
          "primary-dark": "var(--pp-primary-dark)",
          "primary-soft": "var(--pp-primary-soft)",
          accent: "var(--pp-accent)",
          "accent-soft": "var(--pp-accent-soft)",
          "accent-dark": "var(--pp-accent-dark)",
          "border-subtle": "var(--pp-border-subtle)",
          "border-strong": "var(--pp-border-strong)",
          success: "var(--pp-success)",
          warning: "var(--pp-warning)",
          error: "var(--pp-error)",
        },
      },
      fontFamily: {
        display: ["var(--pp-font-display)", "Newsreader", "DM Serif Display", "Georgia", "serif"],
        body: ["var(--pp-font-body)", "Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        'pp-sm': "var(--pp-radius-sm)",
        'pp-md': "var(--pp-radius-md)",
        'pp-lg': "var(--pp-radius-lg)",
        'pp-bento': "var(--pp-radius-bento)",
        'pp-pill': "var(--pp-radius-pill)",
      },
      boxShadow: {
        'pp-sm': "var(--pp-shadow-sm)",
        'pp-md': "var(--pp-shadow-md)",
        'pp-lg': "var(--pp-shadow-lg)",
        'pp-bento': "var(--pp-shadow-bento)",
      },
      maxWidth: {
        'pp-container': "1440px",
        'pp-content': "1440px",
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
