/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0C',
        surface: '#141417',
        card: '#17171B',
        accent: '#E5283C',
        'accent-dim': '#7A1620',
        ink: '#F5F5F0',
        'ink-dim': '#9A9AA2',
        border: 'rgba(245,245,240,0.08)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Satoshi"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        signature: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glow-accent': '0 0 50px -10px rgba(229, 40, 60, 0.55)',
        'glow-soft': '0 0 30px -12px rgba(229, 40, 60, 0.35)',
      },
      backdropBlur: {
        glass: '16px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
