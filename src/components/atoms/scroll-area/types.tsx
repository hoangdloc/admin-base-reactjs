import type * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TScrollBarProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

type TScrollAreaRootProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TScrollBarRef = React.ElementRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

type TScrollAreaRootRef = React.ElementRef<typeof ScrollAreaPrimitive.Root>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TScrollComposition = {
  Bar: React.ForwardRefExoticComponent<
    React.RefAttributes<TScrollBarRef> & TScrollBarProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<TScrollAreaRootRef> & TScrollAreaRootProps
  >;
};

export type {
  TScrollBarProps,
  TScrollAreaRootProps,
  TScrollBarRef,
  TScrollAreaRootRef,
  TScrollComposition,
};
