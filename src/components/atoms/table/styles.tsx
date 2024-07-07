import { cva } from 'class-variance-authority';

const tableRootContainerVariants = cva([
  'relative',
  'w-full',
  'overflow-x-auto',
]);

const tableRootVariants = cva(['w-full', 'caption-bottom', 'text-sm']);

const tableHeaderVariants = cva(['[&_tr]:border-b']);

const tableBodyVariants = cva(['[&_tr:last-child]:border-0']);

const tableFooterVariants = cva([
  'border-t',
  'bg-muted/50',
  'font-medium',
  '[&>tr]:last:border-b-0',
]);

const tableRowVariants = cva([
  'border-b',
  'transition-colors',
  'hover:bg-muted/50',
  'data-[state=selected]:bg-muted',
]);

const tableHeadVariants = cva([
  'h-12',
  'px-4',
  'text-left',
  'align-middle',
  'font-medium',
  'text-muted-foreground',
  '[&:has([role=checkbox])]:pr-0',
]);

const tableCellVariants = cva([
  'p-4',
  'align-middle',
  '[&:has([role=checkbox])]:pr-0',
]);

const tableCaptionVariants = cva(['mt-4', 'text-sm', 'text-muted-foreground']);

export {
  tableRootContainerVariants,
  tableRootVariants,
  tableHeaderVariants,
  tableBodyVariants,
  tableFooterVariants,
  tableRowVariants,
  tableHeadVariants,
  tableCellVariants,
  tableCaptionVariants,
};
