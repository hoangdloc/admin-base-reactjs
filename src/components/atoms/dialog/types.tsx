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

type TDialogTriggerProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TDialogCloseRef = React.ElementRef<typeof DialogPrimitive.Close>;

type TDialogContentRef = React.ElementRef<typeof DialogPrimitive.Content>;

type TDialogDescriptionRef = React.ElementRef<
  typeof DialogPrimitive.Description
>;

type TDialogOverlayRef = React.ElementRef<typeof DialogPrimitive.Overlay>;

type TDialogTitleRef = React.ElementRef<typeof DialogPrimitive.Title>;

type TDialogTriggerRef = React.ElementRef<typeof DialogPrimitive.Trigger>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TDialogComposition = {
  Close: React.ForwardRefExoticComponent<
    DialogPrimitive.DialogCloseProps & React.RefAttributes<TDialogCloseRef>
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TDialogContentRef> & TDialogContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<TDialogDescriptionRef> & TDialogDescriptionProps
  >;
  Footer: React.FC<TDialogFooterProps>;
  Header: React.FC<TDialogHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<TDialogOverlayRef> & TDialogOverlayProps
  >;
  Portal: React.FC<DialogPrimitive.DialogPortalProps>;
  Root: React.FC<DialogPrimitive.DialogProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<TDialogTitleRef> & TDialogTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TDialogTriggerRef> & TDialogTriggerProps
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
  TDialogTriggerProps,
  TDialogCloseRef,
  TDialogContentRef,
  TDialogDescriptionRef,
  TDialogOverlayRef,
  TDialogTitleRef,
  TDialogTriggerRef,
};
