import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import { tooltipContentVariants } from './styles';

import type {
  TTooltipComposition,
  TTooltipContentProps,
  TTooltipContentRef,
} from './types';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  TTooltipContentRef,
  TTooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    className={cn(tooltipContentVariants(), className)}
    sideOffset={sideOffset}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tooltip: TTooltipComposition = {
  Content: TooltipContent,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};

export { Tooltip };
