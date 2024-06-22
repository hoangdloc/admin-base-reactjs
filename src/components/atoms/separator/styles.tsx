/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

const separatorVariants = cva(['shrink-0', 'bg-border'], {
  variants: {
    orientation: {
      horizontal: ['h-px', 'w-full'],
      vertical: ['h-full', 'w-px'],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export { separatorVariants };
