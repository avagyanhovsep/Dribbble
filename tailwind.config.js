/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'media-2340': '2340px',
      'media-1968': '1968px',
      'media-1331': '1331px',
      'media-1204': '1204px',
      'media-1161': '1161px',
      'media-960': '960px',
      'media-945': '945px',
      'media-790': '790px',
      'media-md': '768px',
      'media-sm': '640px',
      'media-616': '616px'
    },
    extend: {
      colors: {
        'link-color': '#060318',
        'btn-bg-color': '#0D0C22',
        'site-nav-link-hover-color': '#7b7194',
        'btn-bg-color-hover': '#565564',
        'main-search-btn-bg-color': '#EA4C89',
        'main-search-btn-bg-color-hover': '#EC5E95',
      },
      boxShadow: {
        'input-custom-shadow': '0 0 0 4px rgba(234, 100, 217, 0.1)',
      },
      backgroundImage: {
        'jobs-gradient-bg': 'linear-gradient(90deg, #f7e9f3 0%, #e0dffc 100%)',
      },
      spacing: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('no-touch-hover', '@media (hover: none) and (pointer: coarse)');
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
}