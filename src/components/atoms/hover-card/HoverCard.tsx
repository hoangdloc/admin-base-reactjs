import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import { hoverCardContentVariants } from './styles';

import type {
  THoverCardComposition,
  THoverCardContentProps,
  THoverCardContentRef,
} from './types';

const HoverCardRoot = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  THoverCardContentRef,
  THoverCardContentProps
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    className={cn(hoverCardContentVariants(), className)}
    sideOffset={sideOffset}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

const HoverCard: THoverCardComposition = {
  Content: HoverCardContent,
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
};

export { HoverCard };
