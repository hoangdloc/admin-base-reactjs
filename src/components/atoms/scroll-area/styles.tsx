/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

const scrollBarVariants = cva(
  ['flex', 'touch-none', 'select-none', 'transition-colors'],
  {
    variants: {
      orientation: {
        horizontal: [
          'h-2.5',
          'flex-col',
          'border-t',
          'border-t-transparent',
          'p-px',
        ],
        vertical: [
          'h-full',
          'w-2.5',
          'border-l',
          'border-l-transparent',
          'p-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
);

const scrollAreaThumbVariants = cva([
  'relative',
  'flex-1',
  'rounded-full',
  'bg-border',
]);

const scrollAreaRootVariants = cva(['relative', 'overflow-hidden']);

const scrollAreaViewportVariants = cva(['size-full', 'rounded-[inherit]']);

export {
  scrollBarVariants,
  scrollAreaThumbVariants,
  scrollAreaRootVariants,
  scrollAreaViewportVariants,
};
