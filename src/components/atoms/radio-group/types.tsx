import type * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TRadioGroupRootProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
>;

type TRadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TRadioGroupRootRef = React.ElementRef<typeof RadioGroupPrimitive.Root>;

type TRadioGroupItemRef = React.ElementRef<typeof RadioGroupPrimitive.Item>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TRadioGroupComposition = {
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<TRadioGroupItemRef> & TRadioGroupItemProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<TRadioGroupRootRef> & TRadioGroupRootProps
  >;
};

export type {
  TRadioGroupRootProps,
  TRadioGroupItemProps,
  TRadioGroupRootRef,
  TRadioGroupItemRef,
  TRadioGroupComposition,
};
