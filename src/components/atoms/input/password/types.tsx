/* eslint-disable @typescript-eslint/member-ordering */
import type { inputContainerVariants } from '../styles';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Password
// ---------------------------------------–-------------------------------------

type TInputPasswordProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputContainerVariants> & {
      containerClassName?: string;
      prefix?: React.ReactNode;
      suffix?: React.ReactNode;
      leftIcon?: React.ReactNode;
      iconRender?: (visible: boolean) => React.ReactNode;
    },
  'type'
>;

export type { TInputPasswordProps };
