import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import {
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
} from './styles';

import type {
  TTabListProps,
  TTabListRef,
  TTabsComposition,
  TTabsContentProps,
  TTabsContentRef,
  TTabsTriggerProps,
  TTabsTriggerRef,
} from './types';

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<TTabListRef, TTabListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabsListVariants(), className)}
      {...props}
    />
  ),
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<TTabsTriggerRef, TTabsTriggerProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants(), className)}
      {...props}
    />
  ),
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<TTabsContentRef, TTabsContentProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(tabsContentVariants(), className)}
      {...props}
    />
  ),
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs: TTabsComposition = {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
};

export { Tabs };
