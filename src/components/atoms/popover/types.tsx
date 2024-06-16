import type * as PopoverPrimitive from '@radix-ui/react-popover';
// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TPopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

type TPopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TPopoverContentRef = React.ElementRef<typeof PopoverPrimitive.Content>;

type TPopoverTriggerRef = React.ElementRef<typeof PopoverPrimitive.Trigger>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TPopoverComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TPopoverContentRef> & TPopoverContentProps
  >;
  Root: React.FC<PopoverPrimitive.PopoverProps>;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TPopoverTriggerRef> & TPopoverTriggerProps
  >;
};

export type {
  TPopoverContentProps,
  TPopoverTriggerProps,
  TPopoverContentRef,
  TPopoverTriggerRef,
  TPopoverComposition,
};
