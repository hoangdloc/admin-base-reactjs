import React from 'react';

import { cn, isDevEnv } from '@/utils';

import { appSpinVariants } from './styles';

import type { VariantProps } from 'class-variance-authority';

interface IAppSpinProps extends VariantProps<typeof appSpinVariants> {
  className?: string;
}

export const AppSpin = React.forwardRef<HTMLDivElement, IAppSpinProps>(
  (props, ref) => {
    const { className, size = 'md', variant = 'default' } = props;
    return (
      <div
        ref={ref}
        aria-label="loader"
        className={cn(appSpinVariants({ size, variant }), className)}
        {...(isDevEnv && { 'data-testid': 'app-spin' })}
      />
    );
  },
);
AppSpin.displayName = 'AppSpin';
