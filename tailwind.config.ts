import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4AB4E6',
          dark: '#2E8FBF',
          light: '#7CCBF0',
          50: '#EDF8FD',
          100: '#D5EEFB',
          200: '#A8DDF6',
          300: '#7CCBF0',
          400: '#4AB4E6',
          500: '#2E8FBF',
          600: '#236D93',
          700: '#194D68',
          800: '#0F2E3E',
          900: '#081923',
        },
        dark: {
          DEFAULT: '#0B0F19',
          50: '#1A2035',
          100: '#151B2C',
          200: '#111724',
          300: '#0E131E',
          400: '#0B0F19',
        },
        accent: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
          light: '#FB923C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        impact: ['var(--font-impact)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
