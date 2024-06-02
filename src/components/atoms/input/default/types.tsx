/* eslint-disable @typescript-eslint/member-ordering */

import type { inputContainerVariants } from '../styles';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Input
// ---------------------------------------–-------------------------------------

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputContainerVariants> & {
    containerClassName?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

// ---------------------------------------–-------------------------------------
// Phone number
// ---------------------------------------–-------------------------------------

// ---------------------------------------–-------------------------------------
// Number
// ---------------------------------------–-------------------------------------

// ---------------------------------------–-------------------------------------
// Currency
// ---------------------------------------–-------------------------------------

// ---------------------------------------–-------------------------------------
// OTP
// ---------------------------------------–-------------------------------------

export type { TInputProps };
