import React from 'react';

import { cn } from '@/libs/utils/helpers';

import {
  alertDescriptionVariants,
  alertTitleVariants,
  alertVariants,
} from './styles';

import type {
  TAlertComposition,
  TAlertDescriptionProps,
  TAlertRootProps,
  TAlertTitleProps,
} from './types';

const AlertRoot = React.forwardRef<HTMLDivElement, TAlertRootProps>(
  ({ className, intent = 'default', variant = 'solid', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(alertVariants({ intent, variant }), className)}
      data-variant={variant}
      role="alert"
      {...props}
    />
  ),
);
AlertRoot.displayName = 'AlertRoot';

const AlertTitle = React.forwardRef<HTMLParagraphElement, TAlertTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(alertTitleVariants(), className)}
      {...props}
    >
      {children}
    </h5>
  ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  TAlertDescriptionProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(alertDescriptionVariants(), className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

const Alert: TAlertComposition = {
  Description: AlertDescription,
  Root: AlertRoot,
  Title: AlertTitle,
};

export { Alert };
