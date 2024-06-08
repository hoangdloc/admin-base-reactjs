import { cva } from 'class-variance-authority';

const inputOTPVariants = cva(['disabled:cursor-not-allowed']);

const inputOTPContainerVariants = cva([
  'flex',
  'items-center',
  'gap-2',
  'has-[:disabled]:opacity-50',
]);

const inputOTPGroupVariants = cva(['flex', 'items-center']);

const inputOTPSlotVariants = cva(
  [
    'relative',
    'flex',
    'size-10',
    'items-center',
    'justify-center',
    'border-y',
    'border-r',
    'border-input',
    'text-sm',
    'transition-all',
    'first:rounded-l-md',
    'first:border-l',
    'last:rounded-r-md',
  ],
  {
    variants: {
      isActive: {
        false: [],
        true: ['z-10', 'ring-2', 'ring-ring', 'ring-offset-background'],
      },
    },
  },
);

export {
  inputOTPVariants,
  inputOTPContainerVariants,
  inputOTPGroupVariants,
  inputOTPSlotVariants,
};
