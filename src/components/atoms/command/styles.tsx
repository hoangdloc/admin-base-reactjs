import { cva } from 'class-variance-authority';

const commandRootVariants = cva([
  'flex',
  'size-full',
  'flex-col',
  'overflow-hidden',
  'rounded-md',
  'bg-popover',
  'text-popover-foreground',
]);

const commandDialogContentVariants = cva([
  'overflow-hidden',
  'p-0',
  'shadow-lg',
]);

const commandDialogCommandRootVariants = cva([
  '[&_[cmdk-group-heading]]:px-2',
  '[&_[cmdk-group-heading]]:font-medium',
  '[&_[cmdk-group-heading]]:text-muted-foreground',
  '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
  '[&_[cmdk-group]]:px-2',
  '[&_[cmdk-input-wrapper]_svg]:size-5',
  '[&_[cmdk-input]]:h-12',
  '[&_[cmdk-item]]:px-2',
  '[&_[cmdk-item]]:py-3',
  '[&_[cmdk-item]_svg]:size-5',
]);

const commandInputVariants = cva([
  'flex',
  'h-11',
  'w-full',
  'rounded-md',
  'bg-transparent',
  'py-3',
  'text-sm',
  'outline-none',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
]);

const commandListVariants = cva([
  'max-h-[300px]',
  'overflow-y-auto',
  'overflow-x-hidden',
]);

const commandEmptyVariants = cva(['py-6', 'text-center', 'text-sm']);

const commandGroupVariants = cva([
  'overflow-hidden',
  'p-1,text-foreground',
  '[&_[cmdk-group-heading]]:px-2',
  '[&_[cmdk-group-heading]]:py-1.5',
  '[&_[cmdk-group-heading]]:text-xs',
  '[&_[cmdk-group-heading]]:font-medium',
  '[&_[cmdk-group-heading]]:text-muted-foreground',
]);

const commandSeperatorVariants = cva(['-mx-1', 'h-px', 'bg-border']);

const commandItemVariants = cva([
  'relative',
  'flex',
  'cursor-default',
  'select-none',
  'items-center',
  'rounded-sm',
  'px-2',
  'py-1.5',
  'text-sm',
  'outline-none',
  'aria-selected:bg-accent',
  'aria-selected:text-accent-foreground',
  'data-[disabled=true]:pointer-events-none',
  'data-[disabled=true]:opacity-50',
]);

const commandShortVariants = cva([
  'ml-auto',
  'text-xs',
  'tracking-widest',
  'text-muted-foreground',
]);

export {
  commandRootVariants,
  commandDialogContentVariants,
  commandDialogCommandRootVariants,
  commandInputVariants,
  commandListVariants,
  commandEmptyVariants,
  commandGroupVariants,
  commandSeperatorVariants,
  commandItemVariants,
  commandShortVariants,
};
