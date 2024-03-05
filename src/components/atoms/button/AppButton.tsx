/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type TKeyTranslation, useAppTranslation } from '@hooks';
import { DEFAULT_DEBOUNCE_WAIT } from '@settings';
import { cn, isDevEnv } from '@utils';
import debounde from 'lodash/debounce';
import React from 'react';

import { AppSpin } from '../spin';

type TComponentSize = 'lg' | 'md' | 'sm';
type TComponentVariant = 'danger' | 'primary' | 'secondary';

interface IAppButtonProps
  extends Omit<React.ComponentPropsWithRef<'button'>, 'children'> {
  bordered?: boolean;
  debouceOnClick?: boolean | number;
  ghost?: boolean;
  icon?: React.ReactNode;
  iconClassName?: string;
  loading?: boolean;
  pill?: boolean;
  size?: TComponentSize;
  text?: TKeyTranslation | null;
  textClassName?: string;
  variant?: TComponentVariant;
}

interface IButtonClasses {
  isBordered?: boolean;
  isGhost?: boolean;
}

const extractButtonClasses = (
  config?: Readonly<IButtonClasses>,
): Record<string, Record<string, string> | string> => {
  const { isGhost, isBordered } = config ?? {};

  return {
    base: 'transition ease-in-out duration-300 rounded-[0.6rem] hover:opacity-80 focus:opacity-80 border border-transparent flex items-center gap-2',
    disabled:
      'opacity-50 cursor-not-allowed hover:opacity-50 focus:opacity-50 select-none',
    pill: 'rounded-full',
    size: {
      lg: 'py-3 px-6 text-[1.8rem]',
      md: 'py-2 px-4 text-[1.6rem]',
      sm: 'py-1 px-2 text-[1.4rem]',
    },
    variant: {
      danger: cn(
        'bg-red text-white-100',
        isGhost && 'bg-transparent text-red',
        isBordered && 'border border-red',
      ),
      primary: cn(
        'bg-primary text-white-100',
        isGhost && 'bg-transparent text-primary',
        isBordered && 'border border-primary',
      ),
      secondary: cn(
        'bg-white-300 text-neutral-500',
        isGhost && 'text-secondary bg-transparent',
        isBordered && 'border border-neutral-500',
      ),
    },
  };
};

export const AppButton = React.forwardRef<
  React.ElementRef<'button'>,
  IAppButtonProps
>((props, ref) => {
  const {
    type = 'button',
    bordered,
    debouceOnClick = false,
    text,
    textClassName,
    className,
    disabled = false,
    icon,
    iconClassName,
    loading = false,
    ghost,
    pill,
    size = 'md',
    variant = 'primary',
    onClick,
    ...rest
  } = props;
  const { t } = useAppTranslation();
  const debounceWait =
    typeof debouceOnClick === 'number' ? debouceOnClick : DEFAULT_DEBOUNCE_WAIT;

  const onClickDebounced: typeof onClick | undefined =
    onClick &&
    debounde(onClick, debounceWait, {
      leading: true,
      trailing: false,
    });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    e.stopPropagation();
    if (debouceOnClick) {
      onClickDebounced?.(e);
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={cn(
        extractButtonClasses().base,
        (disabled || loading) && extractButtonClasses().disabled,
        pill && extractButtonClasses().pill,
        extractButtonClasses().size[size],
        extractButtonClasses({ isBordered: bordered, isGhost: ghost }).variant[
          variant
        ],
        className,
      )}
      onClick={handleClick}
    >
      {!!loading && <AppSpin />}
      {!loading && Boolean(icon) && (
        <span
          className={cn('text-inherit', iconClassName)}
          {...(isDevEnv() && { 'data-testid': 'button-icon' })}
        >
          {icon}
        </span>
      )}
      {!!text && (
        <span className={cn('text-inherit', textClassName)}>{t(text)}</span>
      )}
    </button>
  );
});

AppButton.displayName = 'AppButton';
