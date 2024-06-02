import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import {
  inputAddOnVariants,
  inputContainerVariants,
  inputIconWrapper,
  inputVariants,
  inputWrapperVariants,
} from '../styles';

import { inputPasswordVisibilityIconWrapperVariants } from './styles';

import type { TInputPasswordProps } from './types';

const InputPassword = React.forwardRef<HTMLInputElement, TInputPasswordProps>(
  (
    {
      className,
      containerClassName,
      prefix,
      suffix,
      leftIcon,
      iconRender = (visible) => (visible ? <EyeOff /> : <Eye />),
      ...props
    },
    ref,
  ) => {
    const [toggleVisibility, setToggleVisibility] =
      React.useState<boolean>(false);

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
            type={toggleVisibility ? 'text' : 'password'}
            {...props}
          />
          <span
            aria-pressed={toggleVisibility}
            role="button"
            tabIndex={0}
            className={cn(
              inputIconWrapper({ right: true }),
              inputPasswordVisibilityIconWrapperVariants(),
            )}
            onClick={() => setToggleVisibility((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setToggleVisibility((prev) => !prev);
              }
            }}
          >
            {iconRender(toggleVisibility)}
          </span>
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
InputPassword.displayName = 'InputPassword';

export { InputPassword };
