import * as React from 'react';

import { cn } from '@/utils';

import { badgeVariants } from './styles';

import type { VariantProps } from 'class-variance-authority';

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: IBadgeProps): JSX.Element {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
