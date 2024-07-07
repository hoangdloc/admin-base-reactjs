import type * as TooltipPrimitive from '@radix-ui/react-tooltip';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TTooltipProviderProps = TooltipPrimitive.TooltipProviderProps;

type TTooltipRootProps = TooltipPrimitive.TooltipProps;

type TTooltipTriggerProps = TooltipPrimitive.TooltipTriggerProps;

type TTooltipContentProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TTTooltipTriggerRef = React.ElementRef<
  typeof TooltipPrimitive.TooltipTrigger
>;

type TTooltipContentRef = React.ElementRef<typeof TooltipPrimitive.Content>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TTooltipComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TTooltipContentRef> & TTooltipContentProps
  >;
  Provider: React.FC<TTooltipProviderProps>;
  Root: React.FC<TTooltipRootProps>;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TTTooltipTriggerRef> & TTooltipTriggerProps
  >;
};

export type {
  TTooltipProviderProps,
  TTooltipRootProps,
  TTooltipTriggerProps,
  TTooltipContentProps,
  TTTooltipTriggerRef,
  TTooltipContentRef,
  TTooltipComposition,
};
