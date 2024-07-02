/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

const switchRootVariants = cva(
  [
    'group',
    'inline-flex',
    'shrink-0',
    'cursor-pointer',
    'items-center',
    'rounded-full',
    'border-transparent',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-ring',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-background',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  {
    variants: {
      intent: {
        default: [
          'data-[state=checked]:bg-primary',
          'data-[state=unchecked]:bg-input',
        ],
        destructive: [
          'data-[state=checked]:bg-destructive',
          'data-[state=unchecked]:bg-input',
        ],
        info: [
          'data-[state=checked]:bg-info',
          'data-[state=unchecked]:bg-input',
        ],
        success: [
          'data-[state=checked]:bg-success',
          'data-[state=unchecked]:bg-input',
        ],
        warning: [
          'data-[state=checked]:bg-warning',
          'data-[state=unchecked]:bg-input',
        ],
      },
      size: {
        sm: ['h-4', 'w-7', 'border-2'],
        md: ['h-6', 'w-11', 'border-2'],
        lg: ['h-8', 'w-16', 'border-4'],
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  },
);

const switchThumbVariants = cva(
  [
    'pointer-events-none',
    'block',
    'rounded-full',
    'bg-background',
    'shadow-lg',
    'ring-0',
    'transition-transform',
  ],
  {
    variants: {
      size: {
        sm: [
          'size-3',
          'data-[state=checked]:translate-x-3',
          'data-[state=unchecked]:translate-x-0',
          'group-active:data-[state=checked]:translate-x-2',
          'group-active:data-[state=unchecked]:translate-x-1',
        ],
        md: [
          'size-5',
          'data-[state=checked]:translate-x-5',
          'data-[state=unchecked]:translate-x-0',
          'group-active:data-[state=checked]:translate-x-3.5',
          'group-active:data-[state=unchecked]:translate-x-1.5',
        ],
        lg: [
          'size-6',
          'data-[state=checked]:translate-x-8',
          'data-[state=unchecked]:translate-x-0',
          'group-active:data-[state=checked]:translate-x-6',
          'group-active:data-[state=unchecked]:translate-x-2',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export { switchRootVariants, switchThumbVariants };
