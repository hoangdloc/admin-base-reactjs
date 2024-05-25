/* eslint-disable sort-keys */
import { Slot } from '@radix-ui/react-slot';
import debounce from 'lodash/debounce';

import React from 'react';

import { cn } from '@/utils/helpers';

import { buttonVariants } from './styles';

import type { VariantProps } from 'class-variance-authority';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  debouceOnClick?: boolean | number;
}

const DEFAULT_DEBOUNCE_WAIT = 300;

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      debouceOnClick = false,
      intent = 'default',
      onClick,
      variant = 'solid',
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const debounceWait =
      typeof debouceOnClick === 'number'
        ? debouceOnClick
        : DEFAULT_DEBOUNCE_WAIT;

    const onClickDebounced: typeof onClick | undefined =
      onClick &&
      debounce(onClick, debounceWait, {
        leading: true,
        trailing: false,
      });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      if (debouceOnClick !== false) {
        onClickDebounced?.(e);
        return;
      }
      onClick?.(e);
    };

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, intent, size, className }))}
        data-variant={variant}
        {...props}
        onClick={handleClick}
      />
    );
  },
);
Button.displayName = 'Button';
