import { cva } from 'class-variance-authority';

const accordionItemVariants = cva(['border-b']);

const accordionItemTriggerVariants = cva([
  'flex',
  'flex-1',
  'items-center',
  'justify-between',
  'py-4',
  'font-medium',
  'transition-all',
  'hover:underline',
  '[&[data-state=open]>svg]:rotate-180',
]);

const accordionChevronDownVariants = cva([
  'size-4',
  'shrink-0',
  'transition-transform',
  'duration-200',
]);

const accordionContentContainerVariants = cva([
  'overflow-hidden',
  'text-sm',
  'transition-all',
  'data-[state=closed]:animate-accordion-up',
  'data-[state=open]:animate-accordion-down',
]);

const accordionContentVariants = cva(['pb-4', 'pt-0']);

export {
  accordionItemVariants,
  accordionItemTriggerVariants,
  accordionChevronDownVariants,
  accordionContentContainerVariants,
  accordionContentVariants,
};
