import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import {
  scrollAreaRootVariants,
  scrollAreaThumbVariants,
  scrollAreaViewportVariants,
  scrollBarVariants,
} from './styles';

import type {
  TScrollAreaRootProps,
  TScrollAreaRootRef,
  TScrollBarProps,
  TScrollBarRef,
  TScrollComposition,
} from './types';

const ScrollBar = React.forwardRef<TScrollBarRef, TScrollBarProps>(
  ({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      className={cn(scrollBarVariants({ orientation }), className)}
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(scrollAreaThumbVariants())}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
);
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollAreaRoot = React.forwardRef<
  TScrollAreaRootRef,
  TScrollAreaRootProps
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(scrollAreaRootVariants(), className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className={cn(scrollAreaViewportVariants())}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollArea: TScrollComposition = {
  Bar: ScrollBar,
  Root: ScrollAreaRoot,
};

export { ScrollArea };
