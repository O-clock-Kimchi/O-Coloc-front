/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'floral-white': '#FFFCF1',
      jet: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#343434',
        950: '#262626',
      },
      eden: {
        50: '#edfffb',
        100: '#c3fff5',
        200: '#87ffee',
        300: '#43ffe5',
        400: '#0cf5d4',
        500: '#00d8bc',
        600: '#00ae9c',
        700: '#008a7d',
        800: '#026d65',
        900: '#086059',
        950: '#003735',
      },
      tainoi: {
        50: '#fff9eb',
        100: '#feecc7',
        200: '#fdcf6e',
        300: '#fdbd4c',
        400: '#fca523',
        500: '#f6810a',
        600: '#da5d05',
        700: '#b53e08',
        800: '#92300e',
        900: '#78280f',
        950: '#451203',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
