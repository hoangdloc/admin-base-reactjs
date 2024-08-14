import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as React from 'react';

import { buttonVariants } from '@/components/atoms/button';
import { cn } from '@/libs/utils/helpers';

import {
  alertDialogContentVariants,
  alertDialogDescriptionVariants,
  alertDialogFooterVariants,
  alertDialogHeaderVariants,
  alertDialogOverlayVariants,
  alertDialogTitleVariants,
} from './styles';

import type {
  TAlertDialogActionProps,
  TAlertDialogActionRef,
  TAlertDialogCancelProps,
  TAlertDialogCancelRef,
  TAlertDialogComposition,
  TAlertDialogContentProps,
  TAlertDialogContentRef,
  TAlertDialogDescriptionProps,
  TAlertDialogDescriptionRef,
  TAlertDialogFooterProps,
  TAlertDialogHeaderProps,
  TAlertDialogOverlayProps,
  TAlertDialogOverlayRef,
  TAlertDialogTitleProps,
  TAlertDialogTitleRef,
} from './types';

const AlertDialogRoot = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  TAlertDialogOverlayRef,
  TAlertDialogOverlayProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(alertDialogOverlayVariants(), className)}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  TAlertDialogContentRef,
  TAlertDialogContentProps
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(alertDialogContentVariants(), className)}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: TAlertDialogHeaderProps): JSX.Element => (
  <div
    className={cn(alertDialogHeaderVariants(), className)}
    {...props}
  />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter: React.FC<TAlertDialogFooterProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn(alertDialogFooterVariants(), className)}
    {...props}
  />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  TAlertDialogTitleRef,
  TAlertDialogTitleProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(alertDialogTitleVariants(), className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  TAlertDialogDescriptionRef,
  TAlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn(alertDialogDescriptionVariants(), className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  TAlertDialogActionRef,
  TAlertDialogActionProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  TAlertDialogCancelRef,
  TAlertDialogCancelProps
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: 'outline' }),
      'mt-2 sm:mt-0',
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

const AlertDialog: TAlertDialogComposition = {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Overlay: AlertDialogOverlay,
  Portal: AlertDialogPortal,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
};

export { AlertDialog };
