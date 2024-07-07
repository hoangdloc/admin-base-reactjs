import type { toggleVariants } from './styles';

import type * as TogglePrimitive from '@radix-ui/react-toggle';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TToggleProps = React.ComponentPropsWithoutRef<
  typeof TogglePrimitive.Root
> &
  VariantProps<typeof toggleVariants>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TToggleRef = React.ElementRef<typeof TogglePrimitive.Root>;

export type { TToggleProps, TToggleRef };
