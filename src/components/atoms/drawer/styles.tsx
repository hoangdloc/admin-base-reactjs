import { cva } from 'class-variance-authority';

const drawerOverlayVariants = cva(['fixed', 'inset-0', 'z-50', 'bg-black/80']);

const drawerContentVariants = cva([
  'fixed',
  'inset-x-0',
  'bottom-0',
  'z-50',
  'mt-24',
  'flex',
  'h-auto',
  'flex-col',
  'rounded-t-[10px]',
  'border',
  'bg-background',
]);

const drawerHeaderVariants = cva([
  'grid',
  'gap-1.5',
  'p-4',
  'text-center',
  'sm:text-left',
]);

const drawerFooterVariants = cva([
  'mt-auto',
  'flex',
  'flex-col',
  'gap-2',
  'p-4',
]);

const drawerTitleVariants = cva([
  'text-lg',
  'font-semibold',
  'leading-none',
  'tracking-tight',
]);

const drawerDescriptionVariants = cva(['text-sm', 'text-muted-foreground']);

export {
  drawerOverlayVariants,
  drawerContentVariants,
  drawerHeaderVariants,
  drawerFooterVariants,
  drawerTitleVariants,
  drawerDescriptionVariants,
};
