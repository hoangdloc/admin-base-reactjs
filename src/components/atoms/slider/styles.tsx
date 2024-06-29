import { cva } from 'class-variance-authority';

const sliderRootVariants = cva([
  'relative',
  'flex',
  'w-full',
  'touch-none',
  'select-none',
  'items-center',
]);

const sliderTrackVariants = cva([
  'relative',
  'h-2',
  'w-full',
  'grow',
  'overflow-hidden',
  'rounded-full',
  'bg-secondary',
]);

const sliderRangeVariants = cva(['absolute', 'h-full', 'bg-primary']);

const sliderThumbVariants = cva([
  'block',
  'size-5',
  'rounded-full',
  'border-2',
  'border-primary',
  'bg-background',
  'ring-offset-background',
  'transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'disabled:pointer-events-none',
  'disabled:opacity-50',
]);

export {
  sliderRootVariants,
  sliderTrackVariants,
  sliderRangeVariants,
  sliderThumbVariants,
};
