import * as LabelPrimitive from '@radix-ui/react-label';

import * as React from 'react';

import { cn } from '@/utils/helpers';

import { labelVariants } from './styles';

import type { TLabelProps } from './types';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  TLabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
