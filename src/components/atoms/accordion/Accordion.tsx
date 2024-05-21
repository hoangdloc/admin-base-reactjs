import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

import { cn } from '@/utils';

import {
  accordionChevronDownVariants,
  accordionContentContainerVariants,
  accordionContentVariants,
  accordionItemTriggerVariants,
  accordionItemVariants,
} from './styles';

import type {
  TAccordionComposition,
  TAccordionContentProps,
  TAccordionItemProps,
  TAccordionTriggerProps,
} from './types';

const AccordionRoot = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  TAccordionItemProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants(), className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  TAccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionItemTriggerVariants(), className)}
      {...props}
    >
      {children}
      <ChevronDown className={cn(accordionChevronDownVariants())} />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  TAccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentContainerVariants())}
    {...props}
  >
    <div className={cn(accordionContentVariants(), className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const Accordion: TAccordionComposition = {
  Content: AccordionContent,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
};

export { Accordion };
