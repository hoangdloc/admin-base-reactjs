import { cva } from 'class-variance-authority';

const paginationRootVariants = cva([
  'mx-auto',
  'flex',
  'w-full',
  'justify-center',
]);

const paginationContentVariants = cva([
  'flex',
  'flex-row',
  'items-center',
  'gap-1',
]);

const paginationItemVariants = cva([]);

const paginationPreviousVariants = cva(['gap-1', 'pl-2.5']);

const paginationNextVariants = cva(['gap-1', 'pr-2.5']);

const paginationEllipsisVariants = cva([
  'flex',
  'size-9',
  'items-center',
  'justify-center',
]);

export {
  paginationRootVariants,
  paginationContentVariants,
  paginationItemVariants,
  paginationPreviousVariants,
  paginationNextVariants,
  paginationEllipsisVariants,
};
