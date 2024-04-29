/* eslint-env node */
const plugin = require('tailwindcss/plugin');

const PIXELS_PER_REM = 10;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          fontSize: '62.5%',
        },
      });
    }),
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme('spacing')).forEach(([name, value]) => {
        if (typeof value === 'string' && value.endsWith('px')) {
          const remValue = parseFloat(value) / PIXELS_PER_REM + 'rem';
          newUtilities[`.${name}`] = { height: remValue, width: remValue };
        }
      });
      addUtilities(newUtilities);
    }),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
  theme: {
    extend: {},
  },
};
