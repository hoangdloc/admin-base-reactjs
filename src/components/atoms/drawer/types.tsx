import type { Drawer as DrawerPrimitive } from 'vaul';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TDrawerRootProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

type TDrawerTriggerProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Trigger
>;

type TDrawerPortalProps = React.ComponentProps<typeof DrawerPrimitive.Portal>;

type TDrawerCloseProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Close
>;

type TDrawerOverlayProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Overlay
>;

type TDrawerContentProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Content
>;

type TDrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>;

type TDrawerFooterProps = React.HTMLAttributes<HTMLDivElement>;

type TDrawerTitleProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Title
>;

type TDrawerDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DrawerPrimitive.Description
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TDrawerCloseRef = React.ElementRef<typeof DrawerPrimitive.Close>;

type TDrawerContentRef = React.ElementRef<typeof DrawerPrimitive.Content>;

type TDrawerDescriptionRef = React.ElementRef<
  typeof DrawerPrimitive.Description
>;

type TDrawerOverlayRef = React.ElementRef<typeof DrawerPrimitive.Overlay>;

type TDrawerTitleRef = React.ElementRef<typeof DrawerPrimitive.Title>;

type TDrawerTriggerRef = React.ElementRef<typeof DrawerPrimitive.Trigger>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TDrawerComposition = {
  Close: React.ForwardRefExoticComponent<
    React.RefAttributes<TDrawerCloseRef> & TDrawerCloseProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TDrawerContentRef> & TDrawerContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<TDrawerDescriptionRef> & TDrawerDescriptionProps
  >;
  Footer: React.FC<TDrawerFooterProps>;
  Header: React.FC<TDrawerHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<TDrawerOverlayRef> & TDrawerOverlayProps
  >;
  Portal: React.FC<TDrawerPortalProps>;
  Root: React.FC<TDrawerRootProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<TDrawerTitleRef> & TDrawerTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TDrawerTriggerRef> & TDrawerTriggerProps
  >;
};

export type {
  TDrawerRootProps,
  TDrawerTriggerProps,
  TDrawerPortalProps,
  TDrawerCloseProps,
  TDrawerOverlayProps,
  TDrawerContentProps,
  TDrawerHeaderProps,
  TDrawerFooterProps,
  TDrawerTitleProps,
  TDrawerDescriptionProps,
  TDrawerCloseRef,
  TDrawerContentRef,
  TDrawerDescriptionRef,
  TDrawerOverlayRef,
  TDrawerTitleRef,
  TDrawerTriggerRef,
  TDrawerComposition,
};
