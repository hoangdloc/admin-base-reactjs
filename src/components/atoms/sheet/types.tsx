import type { sheetVariants } from './styles';

import type * as SheetPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TSheetRootProps = SheetPrimitive.DialogProps;

type TSheetTriggerProps = SheetPrimitive.DialogTriggerProps;

type TSheetCloseProps = SheetPrimitive.DialogCloseProps;

type TSheetPortalProps = SheetPrimitive.DialogPortalProps;

type TSheetOverlayProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Overlay
>;

type TSheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> &
  VariantProps<typeof sheetVariants>;

type TSheetHeaderProps = React.ComponentPropsWithoutRef<'div'>;

type TSheetFooterProps = React.ComponentPropsWithoutRef<'div'>;

type TSheetTitleProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Title
>;

type TSheetDescriptionProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Description
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TSheetTriggerRef = React.ElementRef<typeof SheetPrimitive.DialogTrigger>;

type TSheetCloseRef = React.ElementRef<typeof SheetPrimitive.DialogClose>;

type TSheetOverlayRef = React.ElementRef<typeof SheetPrimitive.Overlay>;

type TSheetContentRef = React.ElementRef<typeof SheetPrimitive.Content>;

type TSheetTitleRef = React.ElementRef<typeof SheetPrimitive.Title>;

type TSheetDescriptionRef = React.ElementRef<typeof SheetPrimitive.Description>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TSheetComposition = {
  Close: React.ForwardRefExoticComponent<
    React.RefAttributes<TSheetCloseRef> & TSheetCloseProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TSheetContentRef> & TSheetContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<TSheetDescriptionRef> & TSheetDescriptionProps
  >;
  Footer: React.FC<TSheetFooterProps>;
  Header: React.FC<TSheetHeaderProps>;
  Overlay: React.ForwardRefExoticComponent<
    React.RefAttributes<TSheetOverlayRef> & TSheetOverlayProps
  >;
  Portal: React.FC<TSheetPortalProps>;
  Root: React.FC<TSheetRootProps>;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<TSheetTitleRef> & TSheetTitleProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TSheetTriggerRef> & TSheetTriggerProps
  >;
};

export type {
  TSheetRootProps,
  TSheetTriggerProps,
  TSheetCloseProps,
  TSheetPortalProps,
  TSheetOverlayProps,
  TSheetContentProps,
  TSheetHeaderProps,
  TSheetFooterProps,
  TSheetTitleProps,
  TSheetDescriptionProps,
  TSheetTriggerRef,
  TSheetCloseRef,
  TSheetOverlayRef,
  TSheetContentRef,
  TSheetTitleRef,
  TSheetDescriptionRef,
  TSheetComposition,
};
