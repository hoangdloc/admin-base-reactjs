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
// Component ref
// ---------------------------------------–-------------------------------------

type THoverCardContentRef = React.ElementRef<typeof HoverCardPrimitive.Content>;

type THoverCardTriggerRef = React.ElementRef<typeof HoverCardPrimitive.Trigger>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type THoverCardComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<THoverCardContentRef> & THoverCardContentProps
  >;
  Root: React.FC<THoverCardRootProps>;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<THoverCardTriggerRef> & THoverCardTriggerProps
  >;
};

export type {
  THoverCardRootProps,
  THoverCardTriggerProps,
  THoverCardContentProps,
  THoverCardContentRef,
  THoverCardTriggerRef,
  THoverCardComposition,
};
