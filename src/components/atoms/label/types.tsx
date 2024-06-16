import type { labelVariants } from './styles';

import type * as LabelPrimitive from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TLabelRef = React.ElementRef<typeof LabelPrimitive.Root>;

export type { TLabelProps, TLabelRef };
