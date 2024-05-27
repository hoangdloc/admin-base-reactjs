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
    DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDialogContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLParagraphElement> & TDialogDescriptionProps
  >;
  Footer: React.FC<TDialogFooterProps>;
  Header: React.FC<TDialogHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDialogOverlayProps
  >;
  Portal: React.FC<DialogPrimitive.DialogPortalProps>;
  Root: React.FC<DialogPrimitive.DialogProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLHeadingElement> & TDialogTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> &
      React.RefAttributes<HTMLButtonElement>
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
