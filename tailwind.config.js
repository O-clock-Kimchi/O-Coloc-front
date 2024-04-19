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
    extend: {
      backgroundImage: {
        'faq-test': "url('/public/Backgrounds/wave-haikei.png')",
      },
    },
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
      cardinal: {
        50: '#fef2f2',
        100: '#fde7e6',
        200: '#fbd0d2',
        300: '#f8a9ad',
        400: '#f37981',
        500: '#ea4959',
        600: '#d62841',
        700: '#c41e3a',
        800: '#971a34',
        900: '#811a32',
        950: '#480916',
      },
    },
    container: {
      center: true,
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
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1)',
            opacity: 0,
          },
        },
        slide: {
          '0%': {
            '-webkit-transform': 'translateX(-1000px)',
            transform: 'translateX(-1000px)',
            opacity: 0,
          },
          '100%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        slide: '2s cubic-bezier(.25,.46,.45,.94) both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
