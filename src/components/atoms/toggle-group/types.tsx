import type { toggleVariants } from '../toggle/styles';

import type * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TToggleGroupRootProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

type TToggleGroupItemProps = React.ComponentPropsWithoutRef<
  typeof ToggleGroupPrimitive.Item
> &
  VariantProps<typeof toggleVariants>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TToggleGroupRootRef = React.ElementRef<typeof ToggleGroupPrimitive.Root>;

type TToggleGroupItemRef = React.ElementRef<typeof ToggleGroupPrimitive.Item>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TToggleGroupComposition = {
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<TToggleGroupItemRef> & TToggleGroupItemProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<TToggleGroupRootRef> & TToggleGroupRootProps
  >;
};

export type {
  TToggleGroupRootProps,
  TToggleGroupItemProps,
  TToggleGroupRootRef,
  TToggleGroupItemRef,
  TToggleGroupComposition,
};
