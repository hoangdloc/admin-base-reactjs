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
      blue: {
        50: '#F0F6FF',
        100: '#E6F0FF',
        200: '#C8E0FF',
        300: '#A9D0FF',
        400: '#6BB0FF',
        500: '#478CFF',
        600: '#3366FF',
        700: '#1F40FF',
        800: '#0D20FF',
        900: '#0000FF',
        DEFAULT: '#006CE4',
      },
      gray: {
        50: '#F2F2F2',
        100: '#E6E6E6',
        200: '#CFCFCF',
        300: '#B8B8B8',
        400: '#8C8C8C',
        500: '#666666',
        600: '#404040',
        700: '#2D2D2D',
        800: '#1A1A1A',
        900: '#0D0D0D',
        DEFAULT: '#666666',
      },
      green: {
        50: '#F0FFF4',
        100: '#CCFFEB',
        200: '#99FFDB',
        300: '#66FFCB',
        400: '#33FFBB',
        500: '#00FFAB',
        600: '#00E69C',
        700: '#00B473',
        800: '#008A59',
        900: '#00452C',
        DEFAULT: '#38B259',
      },
      neutral: {
        50: '#F5F5F5',
        100: '#E0E0E0',
        200: '#BDBDBD',
        300: '#9E9E9E',
        400: '#757575',
        500: '#616161',
        600: '#424242',
        700: '#303030',
        800: '#212121',
        900: '#111111',
        DEFAULT: '#F5F5F5',
      },
      pink: {
        50: '#FFF0F5',
        100: '#FFD6E1',
        200: '#FFA3C0',
        300: '#FF70A0',
        400: '#FF3D7F',
        500: '#FF0A5F',
        600: '#E60056',
        700: '#B4003C',
        800: '#800029',
        900: '#400014',
        DEFAUL: '#FFA2C0',
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
      purple: {
        50: '#F4F0FF',
        100: '#E9E0FF',
        200: '#D1BFFF',
        300: '#BAA0FF',
        400: '#8D63FF',
        500: '#6C5DD3',
        600: '#4A4DB7',
        700: '#292D9B',
        800: '#1E2178',
        900: '#13154D',
        DEFAULT: '#6C5DD3',
      },
      red: {
        50: '#FFEBEB',
        100: '#FFD6D6',
        200: '#FFA6A6',
        300: '#FF7676',
        400: '#FF3737',
        500: '#FF0000',
        600: '#E60000',
        700: '#B40000',
        800: '#800000',
        900: '#400000',
        DEFAULT: '#EC4E2C',
      },
      secondary: {
        50: '#F4F5FF',
        100: '#E9EBFF',
        200: '#CFC8FF',
        300: '#B4A5FF',
        400: '#7E5FFF',
        500: '#593EFF',
        600: '#402EFF',
        700: '#291EFF',
        800: '#1C0EFF',
        900: '#0E07FF',
        DEFAULT: '#CFC8FF',
      },
      slate: {
        50: '#F5F7FA',
        100: '#E4E7EB',
        200: '#CBD2D9',
        300: '#9AA5B1',
        400: '#7B8794',
        500: '#616E7C',
        600: '#52606D',
        700: '#3E4C59',
        800: '#323F4B',
        900: '#1F2933',
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
