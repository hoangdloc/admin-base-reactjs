import type { switchRootVariants } from './styles';

import type * as SwitchPrimitives from '@radix-ui/react-switch';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TSwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> &
  VariantProps<typeof switchRootVariants>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TSwitchRef = React.ElementRef<typeof SwitchPrimitives.Root>;

export type { TSwitchProps, TSwitchRef };
