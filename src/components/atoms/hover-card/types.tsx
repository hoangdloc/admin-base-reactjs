import type * as HoverCardPrimitive from '@radix-ui/react-hover-card';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type THoverCardRootProps = HoverCardPrimitive.HoverCardProps;

type THoverCardTriggerProps = HoverCardPrimitive.HoverCardTriggerProps;

type THoverCardContentProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type THoverCardComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof HoverCardPrimitive.Content>> &
      THoverCardContentProps
  >;
  Root: React.FC<THoverCardRootProps>;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof HoverCardPrimitive.Trigger>> &
      THoverCardTriggerProps
  >;
};

export type {
  THoverCardRootProps,
  THoverCardTriggerProps,
  THoverCardContentProps,
  THoverCardComposition,
};
