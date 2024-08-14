import * as LabelPrimitive from '@radix-ui/react-label';

import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import { labelVariants } from './styles';

import type { TLabelProps, TLabelRef } from './types';

const Label = React.forwardRef<TLabelRef, TLabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
