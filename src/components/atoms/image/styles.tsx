import { cva } from 'class-variance-authority';

const imageWrapperVariants = cva([
  'flex',
  'items-center',
  'justify-center',
  'relative',
  'size-full',
  'overflow-hidden',
]);

const imageVariants = cva([
  'size-full',
  'object-cover',
  'data-[loaded=false]:opacity-0',
  'data-[loaded=true]:opacity-1',
  'transition-opacity',
]);

const skeletonVariants = cva([
  'size-full',
  'rounded-none',
  'absolute',
  'top-0',
  'left-0',
]);

export { imageWrapperVariants, imageVariants, skeletonVariants };
