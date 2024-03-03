import { cn, isDevEnv } from '@utils';
import React from 'react';

interface IAppSpinProps {
  className?: string;
}

export const AppSpin: React.FC<IAppSpinProps> = (props) => {
  const { className } = props;
  return (
    <div
      className={cn(
        'inline-block size-6 animate-spin rounded-full border-2 border-neutral-400 border-t-white',
        className,
      )}
      {...(isDevEnv() && { 'data-testid': 'app-spin' })}
    />
  );
};
