import { cva } from 'class-variance-authority';

const dropdownMenuSubTriggerVariants = cva([
  'flex',
  'cursor-default',
  'select-none',
  'items-center',
  'rounded-sm',
  'px-2',
  'py-1.5',
  'text-sm',
  'outline-none',
  'focus:bg-accent',
  'data-[state=open]:bg-accent',
]);

const dropdownMenuSubContentVariants = cva([
  'z-50',
  'min-w-32',
  'overflow-hidden',
  'rounded-md',
  'border',
  'bg-popover',
  'p-1',
  'text-popover-foreground',
  'shadow-lg',
  'data-[state=open]:animate-in',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
  'data-[state=open]:fade-in-0',
  'data-[state=closed]:zoom-out-95',
  'data-[state=open]:zoom-in-95',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=left]:slide-in-from-right-2',
  'data-[side=right]:slide-in-from-left-2',
  'data-[side=top]:slide-in-from-bottom-2',
]);

const dropdownMenuContentVariants = cva([
  'z-50',
  'min-w-32',
  'overflow-hidden',
  'rounded-md',
  'border',
  'bg-popover',
  'p-1',
  'text-popover-foreground',
  'shadow-md',
  'data-[state=open]:animate-in',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
  'data-[state=open]:fade-in-0',
  'data-[state=closed]:zoom-out-95',
  'data-[state=open]:zoom-in-95',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=left]:slide-in-from-right-2',
  'data-[side=right]:slide-in-from-left-2',
  'data-[side=top]:slide-in-from-bottom-2',
]);

const dropdownMenuItemVariants = cva([
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
  'transition-colors',
  'focus:bg-accent',
  'focus:text-accent-foreground',
  'data-[disabled]:pointer-events-none',
  'data-[disabled]:opacity-50',
]);

const dropdownMenuCheckboxItemVariants = cva([
  'relative',
  'flex',
  'cursor-default',
  'select-none',
  'items-center',
  'rounded-sm',
  'py-1.5',
  'pl-8',
  'pr-2',
  'text-sm',
  'outline-none',
  'transition-colors',
  'focus:bg-accent',
  'focus:text-accent-foreground',
  'data-[disabled]:pointer-events-none',
  'data-[disabled]:opacity-50',
]);

const dropdownMenuItemIndicatorContainerVariants = cva([
  'absolute',
  'left-2',
  'flex',
  'size-3.5',
  'items-center',
  'justify-center',
]);

const dropdownMenuRadioItemVariants = cva([
  'relative',
  'flex',
  'cursor-default',
  'select-none',
  'items-center',
  'rounded-sm',
  'py-1.5',
  'pl-8',
  'pr-2',
  'text-sm',
  'outline-none',
  'transition-colors',
  'focus:bg-accent',
  'focus:text-accent-foreground',
  'data-[disabled]:pointer-events-none',
  'data-[disabled]:opacity-50',
]);

const dropdownMenuLabelVariants = cva([
  'px-2',
  'py-1.5',
  'text-sm',
  'font-semibold',
]);

const dropdownMenuSeparatorVariants = cva([
  '-mx-1',
  'my-1',
  'h-px',
  'bg-muted',
]);

const dropdownMenuShortcutVariants = cva([
  'ml-auto',
  'text-xs',
  'tracking-widest',
  'opacity-60',
]);

export {
  dropdownMenuSubTriggerVariants,
  dropdownMenuSubContentVariants,
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  dropdownMenuCheckboxItemVariants,
  dropdownMenuItemIndicatorContainerVariants,
  dropdownMenuRadioItemVariants,
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
};
