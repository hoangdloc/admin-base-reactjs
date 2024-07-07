/* eslint-disable sort-keys */
import * as TogglePrimitive from '@radix-ui/react-toggle';

import * as React from 'react';

import { cn } from '@/utils/helpers';

import { toggleVariants } from './styles';

import type { TToggleProps, TToggleRef } from './types';

const Toggle = React.forwardRef<TToggleRef, TToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
