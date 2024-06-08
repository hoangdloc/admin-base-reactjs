// ---------------------------------------–-------------------------------------
// Input OTP
// ---------------------------------------–-------------------------------------

import type { OTPInput } from 'input-otp';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TInputOTPRootProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

type TInputOTPGroupProps = React.ComponentPropsWithoutRef<'div'>;

type TInputOTPSlotProps = React.ComponentPropsWithoutRef<'div'> & {
  index: number;
};

type TInputOTPSeparatorProps = React.ComponentPropsWithoutRef<'div'>;

// ---------------------------------------–-------------------------------------
// Componsition
// ---------------------------------------–-------------------------------------

type TInputOTPComposition = {
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TInputOTPGroupProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLInputElement> & TInputOTPRootProps
  >;
  Separator: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TInputOTPSeparatorProps
  >;
  Slot: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TInputOTPSlotProps
  >;
};

export type {
  TInputOTPRootProps,
  TInputOTPGroupProps,
  TInputOTPSlotProps,
  TInputOTPSeparatorProps,
  TInputOTPComposition,
};
