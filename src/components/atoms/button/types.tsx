import type { buttonVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    debouceOnClick?: boolean | number;
  };
