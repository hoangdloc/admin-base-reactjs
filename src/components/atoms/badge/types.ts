import type { badgeVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';

// -----------------------------------------------------------------------------
// Variant props
// -----------------------------------------------------------------------------

type TBadgeVariantProps = VariantProps<typeof badgeVariants>;

// -----------------------------------------------------------------------------
// Component props
// -----------------------------------------------------------------------------

interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TBadgeVariantProps {}

export type { TBadgeVariantProps, IBadgeProps };
