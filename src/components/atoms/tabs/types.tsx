import type * as TabsPrimitive from '@radix-ui/react-tabs';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TTabsRootProps = TabsPrimitive.TabsProps;

type TTabListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

type TTabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
>;

type TTabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TTabsRootRef = React.ElementRef<typeof TabsPrimitive.Root>;

type TTabListRef = React.ElementRef<typeof TabsPrimitive.List>;

type TTabsTriggerRef = React.ElementRef<typeof TabsPrimitive.Trigger>;

type TTabsContentRef = React.ElementRef<typeof TabsPrimitive.Content>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TTabsComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TTabsContentRef> & TTabsContentProps
  >;
  List: React.ForwardRefExoticComponent<
    React.RefAttributes<TTabListRef> & TTabListProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<TTabsRootRef> & TTabsRootProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TTabsTriggerRef> & TTabsTriggerProps
  >;
};

export type {
  TTabsRootProps,
  TTabListProps,
  TTabsTriggerProps,
  TTabsContentProps,
  TTabsRootRef,
  TTabListRef,
  TTabsTriggerRef,
  TTabsContentRef,
  TTabsComposition,
};
