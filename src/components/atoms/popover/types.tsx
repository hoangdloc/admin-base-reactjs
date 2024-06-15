import type * as PopoverPrimitive from '@radix-ui/react-popover';
// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TPopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TPopoverComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof PopoverPrimitive.Content>> &
      TPopoverContentProps
  >;
  Root: React.FC<PopoverPrimitive.PopoverProps>;
  Trigger: React.ForwardRefExoticComponent<
    PopoverPrimitive.PopoverTriggerProps &
      React.RefAttributes<HTMLButtonElement>
  >;
};

export type { TPopoverComposition };
