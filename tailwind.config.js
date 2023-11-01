/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx, ts, tsx}"
  ],
  theme: {
    screens: {
      // mobile: '320px',
      mobile: {'max': '767px'},
      tablet: '768px',
      // tablet: {'min': '768px', 'max': '1024px'},
      desktop: '1024px'
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
      '4.725': '4.725px',
      '2.35': '2.35px',
      '2.7': '2.7px'
    },
    extend: {
      fontSize: {
        'h150': '150px',
        'h100': '100px',
        'h56': '56px',
        'h32': '32px',
        'h28': '28px',
        'h18': '18px',
        'h16': '16px',
        'h14': '14px',
      }
    },
  },
  plugins: [],
}

