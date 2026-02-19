import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--gold)',
          dark: 'var(--gold-dk)',
          light: 'var(--gold-lt)',
        },
        earth: {
          DEFAULT: 'var(--earth-dark)',
          surface: 'var(--earth-surface)',
          muted: 'var(--earth-muted)',
        },
        moss: 'var(--moss)',
        clay: 'var(--clay)',
      },
      backgroundImage: {
        'gradient-earth': 'linear-gradient(135deg, var(--earth-dark) 0%, var(--earth-surface) 100%)',
        'gradient-gold': 'linear-gradient(135deg, var(--gold-dk) 0%, var(--gold) 50%, var(--gold-lt) 100%)',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
