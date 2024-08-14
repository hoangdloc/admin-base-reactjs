import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import { badgeVariants } from './styles';

import type { IBadgeProps } from './types';

function Badge({
  className,
  intent = 'default',
  size = 'md',
  shape = 'default',
  variant = 'solid',
  ...props
}: IBadgeProps): JSX.Element {
  return (
    <div
      className={cn(badgeVariants({ intent, shape, size, variant }), className)}
      data-variant={variant}
      {...props}
    />
  );
}

export { Badge };
