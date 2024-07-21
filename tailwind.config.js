/* eslint-env node */
/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('tailwindcss-percentage-width'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.app-h1': {
          fontSize: '1.875rem',
          fontStyle: 'normal',
          fontWeight: 400,
          '@media (min-width: 432px)': {
            fontSize: '3.75rem',
          },
        },
        '.app-h2': {
          fontSize: '1.5rem',
          fontStyle: 'normal',
          fontWeight: 600,
          '@media (min-width: 432px)': {
            fontSize: '2.5rem',
          },
        },
        '.app-h3': {
          fontSize: '1.125rem',
          fontStyle: 'normal',
          fontWeight: 600,
          '@media (min-width: 432px)': {
            fontSize: '1.75rem',
          },
        },
        '.app-h4': {
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 600,
          '@media (min-width: 432px)': {
            fontSize: '1.5rem',
          },
        },
        '.app-h5': {
          fontSize: '0.875rem',
          fontStyle: 'normal',
          fontWeight: 600,
          '@media (min-width: 432px)': {
            fontSize: '1rem',
          },
        },
        '.app-text-default': {
          fontSize: '0.875rem',
          fontStyle: 'normal',
          fontWeight: 400,
          '@media (min-width: 432px)': {
            fontSize: '1rem',
          },
        },
        '.app-text-metadata': {
          fontSize: '0.75rem',
          fontStyle: 'normal',
          fontWeight: 500,
          '@media (min-width: 432px)': {
            fontSize: '0.875rem',
          },
        },
      });
    }),
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
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
      },
      screens: {
        xs: '432px',
      },
    },
  },
};
