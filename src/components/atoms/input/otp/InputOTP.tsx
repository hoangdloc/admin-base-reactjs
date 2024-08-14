'use client';

import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import {
  inputOTPContainerVariants,
  inputOTPGroupVariants,
  inputOTPSlotVariants,
  inputOTPVariants,
} from './styles';

import type {
  TInputOTPComposition,
  TInputOTPGroupProps,
  TInputOTPRootProps,
  TInputOTPSeparatorProps,
  TInputOTPSlotProps,
} from './types';

const InputOTPRoot = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  TInputOTPRootProps
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    className={cn(inputOTPVariants(), className)}
    containerClassName={cn(inputOTPContainerVariants(), containerClassName)}
    {...props}
  />
));
InputOTPRoot.displayName = 'InputOTPRoot';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  TInputOTPGroupProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(inputOTPGroupVariants(), className)}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  TInputOTPSlotProps
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(inputOTPSlotVariants({ isActive }), className)}
      {...props}
    >
      {char}
      {!!hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  TInputOTPSeparatorProps
>(({ ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    {...props}
  >
    <Dot />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

const InputOTP: TInputOTPComposition = {
  Group: InputOTPGroup,
  Root: InputOTPRoot,
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
};

export { InputOTP };
