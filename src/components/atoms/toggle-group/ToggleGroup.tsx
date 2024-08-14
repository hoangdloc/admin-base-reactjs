/* eslint-disable sort-keys */
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import { toggleVariants } from '../toggle/styles';

import type {
  TToggleGroupComposition,
  TToggleGroupItemProps,
  TToggleGroupItemRef,
  TToggleGroupRootProps,
  TToggleGroupRootRef,
} from './types';

import type { VariantProps } from 'class-variance-authority';

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
});

const ToggleGroupRoot = React.forwardRef<
  TToggleGroupRootRef,
  TToggleGroupRootProps
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  TToggleGroupItemRef,
  TToggleGroupItemProps
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant ?? variant,
          size: context.size ?? size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

const ToggleGroup: TToggleGroupComposition = {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
};

export { ToggleGroup };
