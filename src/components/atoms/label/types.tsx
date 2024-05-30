import type { labelVariants } from './styles';

import type * as LabelPrimitive from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TLabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

export type { TLabelProps };
