import type * as DialogPrimitive from '@radix-ui/react-dialog';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TDialogOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

type TDialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

type TDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

type TDialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

type TDialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

type TDialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TDialogComposition = {
  Close: React.ForwardRefExoticComponent<
    DialogPrimitive.DialogCloseProps &
      React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Close>>
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Content>> &
      TDialogContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Description>> &
      TDialogDescriptionProps
  >;
  Footer: React.FC<TDialogFooterProps>;
  Header: React.FC<TDialogHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Overlay>> &
      TDialogOverlayProps
  >;
  Portal: React.FC<DialogPrimitive.DialogPortalProps>;
  Root: React.FC<DialogPrimitive.DialogProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Title>> &
      TDialogTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> &
      React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Trigger>>
  >;
};

export type {
  TDialogComposition,
  TDialogOverlayProps,
  TDialogContentProps,
  TDialogHeaderProps,
  TDialogFooterProps,
  TDialogTitleProps,
  TDialogDescriptionProps,
};
