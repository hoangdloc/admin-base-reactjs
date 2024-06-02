import { cva } from 'class-variance-authority';

const inputPasswordVisibilityIconWrapperVariants = cva([
  'cursor-pointer',
  'ring-offset-background',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
]);

export { inputPasswordVisibilityIconWrapperVariants };
