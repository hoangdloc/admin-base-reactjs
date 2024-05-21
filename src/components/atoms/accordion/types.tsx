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
// Composition
// ---------------------------------------–-------------------------------------

type TAccordionComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TAccordionContentProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TAccordionItemProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TAccordionRootProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLButtonElement> & TAccordionTriggerProps
  >;
};

export type {
  TAccordionRootProps,
  TAccordionItemProps,
  TAccordionTriggerProps,
  TAccordionContentProps,
  TAccordionComposition,
};
