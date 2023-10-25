/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx, ts, tsx}"
  ],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px'
    },
    colors: {
      'dark': '#0B0D17',
      'purple': '#D0D6F9',
      'light': '#FFFFFF',
      'grey': '#85868b'
    },
    fontFamily: {
      barl: ['Barlow Condensed', 'sans-serif'],
      bell: ['Bellefair', 'serif']
    },
    letterSpacing: {
      '4.75': '4.75px',
      '2.35': '2.35px',
      '2.7': '2.7px'
    },
    fontSize: {
      'h150': '150px',
      'h100': '100px',
      'h56': '56px',
      'h32': '32px',
      'h28': '28px',
      'h16': '16px',
      'h14': '14px',
    },
    extend: {},
  },
  plugins: [],
}

