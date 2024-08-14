import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import {
  inputAddOnVariants,
  inputContainerVariants,
  inputIconWrapper,
  inputVariants,
  inputWrapperVariants,
} from '../styles';

import type { TInputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      className,
      containerClassName,
      type,
      prefix,
      suffix,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn(inputContainerVariants(), containerClassName)}>
        {!!prefix && (
          <span className={cn(inputAddOnVariants({ prefix: !!prefix }))}>
            {prefix}
          </span>
        )}
        <span
          className={cn(
            inputWrapperVariants({ prefix: !!prefix, suffix: !!suffix }),
          )}
        >
          {!!leftIcon && (
            <span className={cn(inputIconWrapper({ left: !!leftIcon }))}>
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            className={cn(inputVariants(), className)}
            type={type}
            {...props}
          />
          {!!rightIcon && (
            <span className={cn(inputIconWrapper({ right: !!rightIcon }))}>
              {rightIcon}
            </span>
          )}
        </span>
        {!!suffix && (
          <span
            className={cn(
              inputAddOnVariants({
                suffix: !!suffix,
              }),
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
