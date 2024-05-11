/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  [
    'inline-flex',
    'items-center',
    'border',
    'font-semibold',
    'transition-colors',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-ring',
    'focus:ring-offset-2',
  ],
  {
    variants: {
      intent: {
        default: [
          'data-[variant=solid]:border-transparent',
          'data-[variant=solid]:bg-primary',
          'data-[variant=solid]:text-primary-foreground',
          'data-[variant=solid]:hover:bg-primary/80',
          'data-[variant=outline]:border-primary',
          'data-[variant=outline]:text-primary',
        ],
        info: [
          'data-[variant=solid]:border-transparent',
          'data-[variant=solid]:bg-info',
          'data-[variant=solid]:text-info-foreground',
          'data-[variant=solid]:hover:bg-info/80',
          'data-[variant=outline]:border-info',
          'data-[variant=outline]:text-info',
        ],
        secondary: [
          'data-[variant=solid]:border-transparent',
          'data-[variant=solid]:bg-secondary',
          'data-[variant=solid]:text-secondary-foreground',
          'data-[variant=solid]:hover:bg-secondary/80',
          'data-[variant=outline]:border-secondary',
          'data-[variant=outline]:text-secondary',
        ],
        success: [
          'data-[variant=solid]:border-transparent',
          'data-[variant=solid]:bg-success',
          'data-[variant=solid]:text-success-foreground',
          'data-[variant=solid]:hover:bg-success/80',
          'data-[variant=outline]:border-success',
          'data-[variant=outline]:text-success',
        ],
        destructive: [
          'data-[variant=solid]:border-transparent',
          'data-[variant=solid]:bg-destructive',
          'data-[variant=solid]:text-destructive-foreground',
          'data-[variant=solid]:hover:bg-destructive/80',
          'data-[variant=outline]:border-destructive',
          'data-[variant=outline]:text-destructive',
        ],
        warning: [
          'data-[variant=solid]:border-transparent',
          'data-[variant=solid]:bg-warning',
          'data-[variant=solid]:text-warning-foreground',
          'data-[variant=solid]:hover:bg-warning/80',
          'data-[variant=outline]:border-warning',
          'data-[variant=outline]:text-warning',
        ],
      },
      size: {
        sm: ['text-xs', 'px-2.5', 'py-0.5'],
        md: ['text-sm', 'px-3', 'py-1'],
        lg: ['text-base', 'px-3.5', 'py-1.5'],
      },
      shape: {
        default: ['rounded-full'],
        square: ['rounded-md'],
      },
      variant: {
        outline: [],
        solid: [],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'solid',
      intent: 'default',
    },
  },
);
