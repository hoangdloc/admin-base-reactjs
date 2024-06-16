import { cva } from 'class-variance-authority';

const radioGroupRootVariants = cva(['grid', 'gap-2']);

const radioGroupItemVariants = cva([
  'aspect-square',
  'size-4',
  'rounded-full',
  'border',
  'border-primary',
  'text-primary',
  'ring-offset-background',
  'focus:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
]);

export { radioGroupRootVariants, radioGroupItemVariants };
