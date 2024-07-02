import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import { switchRootVariants, switchThumbVariants } from './styles';

import type { TSwitchProps, TSwitchRef } from './types';

const Switch = React.forwardRef<TSwitchRef, TSwitchProps>(
  ({ className, intent = 'default', size = 'md', ...props }, ref) => (
    <SwitchPrimitives.Root
      className={cn(switchRootVariants({ intent, size }), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitives.Root>
  ),
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
