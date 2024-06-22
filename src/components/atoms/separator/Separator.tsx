import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import { separatorVariants } from './styles';

import type { TSeparatorProps, TSeparatorRef } from './types';

const Separator = React.forwardRef<TSeparatorRef, TSeparatorProps>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      className={cn(separatorVariants({ orientation }), className)}
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
