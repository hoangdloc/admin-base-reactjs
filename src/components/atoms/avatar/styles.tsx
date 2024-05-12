/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  ['relative', 'flex', 'shrink-0', 'overflow-hidden'],
  {
    variants: {
      shape: {
        circle: ['rounded-full'],
        square: ['rounded-md'],
      },
      size: {
        sm: ['size-6'],
        md: ['size-10'],
        lg: ['size-14'],
      },
    },
    defaultVariants: {
      shape: 'circle',
      size: 'md',
    },
  },
);
