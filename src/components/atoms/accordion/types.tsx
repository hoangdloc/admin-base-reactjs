import type * as AccordionPrimitive from '@radix-ui/react-accordion';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TAccordionRootProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;

type TAccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

type TAccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

type TAccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TAccordionRootRef = React.ElementRef<typeof AccordionPrimitive.Root>;

type TAccrodionItemRef = React.ElementRef<typeof AccordionPrimitive.Item>;

type TAccordionTriggerRef = React.ElementRef<typeof AccordionPrimitive.Trigger>;

type TAccordionContentRef = React.ElementRef<typeof AccordionPrimitive.Content>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TAccordionComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TAccordionContentRef> & TAccordionContentProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<TAccrodionItemRef> & TAccordionItemProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<TAccordionRootRef> & TAccordionRootProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TAccordionTriggerRef> & TAccordionTriggerProps
  >;
};

export type {
  TAccordionRootProps,
  TAccordionItemProps,
  TAccordionTriggerProps,
  TAccordionContentProps,
  TAccordionRootRef,
  TAccrodionItemRef,
  TAccordionTriggerRef,
  TAccordionContentRef,
  TAccordionComposition,
};
