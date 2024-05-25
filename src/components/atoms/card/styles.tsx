import { cva } from 'class-variance-authority';

const cardRootVariants = cva([
  'rounded-lg',
  'border',
  'bg-card',
  'text-card-foreground',
  'shadow-sm',
]);

const cardHeaderVariants = cva(['flex', 'flex-col', 'space-y-1.5', 'p-6']);

const cardTitleVariants = cva([
  'text-2xl',
  'font-semibold',
  'leading-none',
  'tracking-tight',
]);

const cardDescriptionVariants = cva(['text-sm', 'text-muted-foreground']);

const cardContentVariants = cva(['p-6', 'pt-0']);

const cardFooterVariants = cva(['flex', 'items-center', 'p-6', 'pt-0']);

export {
  cardRootVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
  cardContentVariants,
  cardFooterVariants,
};
