import React from 'react';

import { cn, isDevEnv } from '@/utils';

interface IAppSpinProps {
  className?: string;
}

export const AppSpin: React.FC<IAppSpinProps> = (props) => {
  const { className } = props;
  return (
    <div
      className={cn(
        'inline-block size-6 animate-spin rounded-full border-2 border-neutral-200 border-t-white',
        className,
      )}
      {...(isDevEnv && { 'data-testid': 'app-spin' })}
    />
  );
};
