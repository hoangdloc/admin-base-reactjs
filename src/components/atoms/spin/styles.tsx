/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

export const appSpinVariants = cva(['inline-block', 'animate-spin'], {
  variants: {
    size: {
      '2xl': ['size-12', 'border-[0.25rem]'],
      '3xl': ['size-16', 'border-[0.25rem]'],
      '4xl': ['size-20', 'border-[0.25rem]'],
      '5xl': ['size-24', 'border-[0.5rem]'],
      '6xl': ['size-28', 'border-[0.5rem]'],
      '7xl': ['size-32', 'border-[0.75rem]'],
      '8xl': ['size-36', 'border-[0.75rem]'],
      '9xl': ['size-40', 'border-[0.75rem]'],
      lg: ['size-8', 'border-2'],
      md: ['size-6', 'border-2'],
      sm: ['size-4', 'border'],
      xl: ['size-10', 'border-[0.5rem]'],
      xs: ['size-2', 'border'],
    },
    variant: {
      default: ['rounded-full', 'border-neutral-200', 'border-t-white'],
      dashed: [
        'rounded-full',
        'border-dashed',
        'border-neutral-200',
        'border-t-transparent',
      ],
      dotted: ['rounded-full', 'border-dotted', 'border-neutral-200'],
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});
