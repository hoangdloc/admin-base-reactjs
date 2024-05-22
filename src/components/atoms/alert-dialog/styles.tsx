import { cva } from 'class-variance-authority';

const alertDialogOverlayVariants = cva([
  'fixed',
  'inset-0',
  'z-50',
  'bg-black/80',
  'data-[state=open]:animate-in',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
  'data-[state=open]:fade-in-0',
]);

const alertDialogContentVariants = cva([
  'fixed',
  'left-[50%]',
  'top-[50%]',
  'z-50',
  'grid',
  'w-full',
  'max-w-lg',
  'translate-x-[-50%]',
  'translate-y-[-50%]',
  'gap-4',
  'border',
  'bg-background',
  'p-6',
  'shadow-lg',
  'duration-200',
  'data-[state=open]:animate-in',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
  'data-[state=open]:fade-in-0',
  'data-[state=closed]:zoom-out-95',
  'data-[state=open]:zoom-in-95',
  'data-[state=closed]:slide-out-to-left-1/2',
  'data-[state=closed]:slide-out-to-top-[48%]',
  'data-[state=open]:slide-in-from-left-1/2',
  'data-[state=open]:slide-in-from-top-[48%]',
  'sm:rounded-lg',
]);

const alertDialogHeaderVariants = cva([
  'flex',
  'flex-col',
  'space-y-2',
  'text-center',
  'sm:text-left',
]);

const alertDialogFooterVariants = cva([
  'flex',
  'flex-col-reverse',
  'sm:flex-row',
  'sm:justify-end',
  'sm:space-x-2',
]);

const alertDialogTitleVariants = cva(['text-lg', 'font-semibold']);

const alertDialogDescriptionVariants = cva([
  'text-sm',
  'text-muted-foreground',
]);

export {
  alertDialogOverlayVariants,
  alertDialogContentVariants,
  alertDialogHeaderVariants,
  alertDialogFooterVariants,
  alertDialogTitleVariants,
  alertDialogDescriptionVariants,
};
