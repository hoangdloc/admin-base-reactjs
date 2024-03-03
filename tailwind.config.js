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
    colors: {
      black: {
        DEFAULT: '#11142D',
      },
      neutral: {
        400: '#BDBDBD',
        500: '#808191',
        DEFAULT: '#F5F5F5',
      },
      primary: {
        50: '#F0F2FF',
        100: '#E6E8FF',
        200: '#C8CCFF',
        300: '#A9B0FF',
        400: '#6B7BFF',
        500: '#475BE8',
        600: '#3344FF',
        700: '#1F2CFF',
        800: '#0D1BFF',
        900: '#000BFF',
        DEFAULT: '#475BE8',
      },
      red: {
        DEFAULT: '#EC4E2C',
      },
      transparent: 'transparent',
      white: {
        100: '#FCFCFC',
        200: '#F9F9F9',
        300: '#F7F7F7',
        DEFAULT: '#FFFFFF',
      },
    },
    extend: {},
  },
};
