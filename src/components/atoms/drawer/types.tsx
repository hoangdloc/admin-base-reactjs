import type {
  DialogCloseProps,
  DialogPortalProps,
  DialogTriggerProps,
} from '@radix-ui/react-dialog';

import type { Drawer as DrawerPrimitive } from 'vaul';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TDrawerRootProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

type TDrawerTriggerProps = DialogTriggerProps;

type TDrawerPortalProps = DialogPortalProps;

type TDrawerCloseProps = DialogCloseProps;

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
// Composition
// ---------------------------------------–-------------------------------------

type TDrawerComposition = {
  Close: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLButtonElement> & TDrawerCloseProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDrawerContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLParagraphElement> & TDrawerDescriptionProps
  >;
  Footer: React.FC<TDrawerFooterProps>;
  Header: React.FC<TDrawerHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDrawerOverlayProps
  >;
  Portal: React.FC<TDrawerPortalProps>;
  Root: React.FC<TDrawerRootProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLHeadingElement> & TDrawerTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLButtonElement> & TDrawerTriggerProps
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
  TDrawerComposition,
};
