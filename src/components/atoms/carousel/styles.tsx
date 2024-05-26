/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

const carouselRootVariant = cva(['relative']);

const carouselContentVariant = cva(['flex'], {
  variants: {
    orientation: {
      horizontal: ['-mt-4'],
      vertical: ['-ml-4', 'flex-col'],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const carouselItemVariants = cva(
  ['min-w-0', 'shrink-0', 'grow-0', 'basis-full'],
  {
    variants: {
      orientation: {
        horizontal: ['pl-4'],
        vertical: ['pt-4'],
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

const carouselPreviousVariants = cva(['absolute', 'size-8', 'rounded-full'], {
  variants: {
    orientation: {
      horizontal: ['-left-12', 'top-1/2', '-translate-y-1/2'],
      vertical: ['-top-12', 'left-1/2', '-translate-x-1/2', 'rotate-90'],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const carouselNextVariants = cva(['absolute', 'size-8', 'rounded-full'], {
  variants: {
    orientation: {
      horizontal: ['-right-12', 'top-1/2', '-translate-y-1/2'],
      vertical: ['-bottom-12', 'left-1/2', '-translate-x-1/2', 'rotate-90'],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export {
  carouselRootVariant,
  carouselContentVariant,
  carouselItemVariants,
  carouselPreviousVariants,
  carouselNextVariants,
};
