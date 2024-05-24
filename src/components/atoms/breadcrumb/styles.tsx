import { cva } from 'class-variance-authority';

const breadcrumbListVariants = cva([
  'flex',
  'flex-wrap',
  'items-center',
  'gap-1.5',
  'break-words',
  'text-sm',
  'text-muted-foreground',
  'sm:gap-2.5',
]);

const breadcrumbItemVariants = cva(['inline-flex', 'items-center', 'gap-1.5']);

const breadcrumbLinkVariants = cva([
  'transition-colors',
  'hover:text-foreground',
]);

const breadcrumbPageVariants = cva(['font-normal', 'text-foreground']);

const breadcrumbSeparatorVariants = cva(['[&>svg]:size-3.5']);

const breadcrumbEllipsisVariants = cva([
  'flex',
  'size-9',
  'items-center',
  'justify-center',
]);

export {
  breadcrumbListVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
  breadcrumbEllipsisVariants,
};
