/* eslint-disable sort-keys */
import { cva } from 'class-variance-authority';

const inputContainerVariants = cva(['flex', 'h-10']);

const inputAddOnVariants = cva(
  [
    'h-full',
    'flex',
    'items-center',
    'justify-center',
    'px-3',
    'py-2',
    'text-sm',
    'bg-secondary',
    'border-input',
  ],
  {
    variants: {
      prefix: {
        true: ['rounded-l-md', 'border-y', 'border-l'],
        false: [],
      },
      suffix: {
        true: ['rounded-r-md', 'border-y', 'border-r'],
        false: [],
      },
    },
  },
);

const inputWrapperVariants = cva(
  [
    'flex',
    'items-center',
    'w-full',
    'border',
    'border-input',
    'bg-background',
    'text-sm',
    'has-[input:focus-visible]:z-10',
    'has-[input:focus-visible]:ring-2',
    'has-[input:focus-visible]:ring-ring',
    'has-[input:focus-visible]:ring-offset-2',
  ],
  {
    variants: {
      prefix: {
        true: ['rounded-r-md'],
        false: [],
      },
      suffix: {
        true: ['rounded-l-md'],
        false: [],
      },
    },
    compoundVariants: [
      { prefix: true, suffix: true, className: ['rounded-none'] },
      { prefix: false, suffix: false, className: ['rounded-md'] },
    ],
  },
);

const inputIconWrapper = cva(
  ['h-fit', 'flex', 'items-center', 'justify-center', '[&>svg]:size-5'],
  {
    variants: {
      left: {
        true: ['ml-2'],
        false: [],
      },
      right: {
        true: ['mr-2'],
        false: [],
      },
    },
  },
);

const inputVariants = cva([
  'flex',
  'h-full',
  'w-full',
  'px-3',
  'py-2',
  'bg-transparent',
  'ring-offset-background',
  'file:border-0',
  'file:text-sm',
  'file:font-medium',
  'focus-visible:outline-none',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50',
]);

export {
  inputContainerVariants,
  inputAddOnVariants,
  inputWrapperVariants,
  inputIconWrapper,
  inputVariants,
};
