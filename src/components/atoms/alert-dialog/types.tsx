import type * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TAlertDialogRootProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
>;

type TAlertDialogTriggerProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Trigger
>;

type TAlertDialogPortalProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Portal
>;

type TAlertDialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>;

type TAlertDialogContentProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
>;

type TAlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

type TAlertDialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

type TAlertDialogTitleProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>;

type TAlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>;

type TAlertDialogActionProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
>;

type TAlertDialogCancelProps = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TAlertDialogComposition = {
  Action: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Action>> &
      TAlertDialogActionProps
  >;
  Cancel: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Cancel>> &
      TAlertDialogCancelProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Content>> &
      TAlertDialogContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<
      React.ElementRef<typeof AlertDialogPrimitive.Description>
    > &
      TAlertDialogDescriptionProps
  >;
  Footer: React.FC<TAlertDialogFooterProps>;
  Header: React.FC<TAlertDialogHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Overlay>> &
      TAlertDialogOverlayProps
  >;
  Portal: React.FC<TAlertDialogPortalProps>;
  Root: React.FC<TAlertDialogRootProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Title>> &
      TAlertDialogTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Trigger>> &
      TAlertDialogTriggerProps
  >;
};

export type {
  TAlertDialogRootProps,
  TAlertDialogTriggerProps,
  TAlertDialogPortalProps,
  TAlertDialogOverlayProps,
  TAlertDialogContentProps,
  TAlertDialogHeaderProps,
  TAlertDialogFooterProps,
  TAlertDialogTitleProps,
  TAlertDialogDescriptionProps,
  TAlertDialogActionProps,
  TAlertDialogCancelProps,
  TAlertDialogComposition,
};
