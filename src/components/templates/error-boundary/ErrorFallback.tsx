import React from 'react';

import { AppIcon } from '@/components/atoms';
import { useAppTranslation } from '@/hooks';
import { isDevEnv } from '@/utils/checks';
import { cn } from '@/utils/helpers';

interface IErrorFallbackProps {
  error: Error;
  className?: string;
  resetErrorBoundary?: () => void;
}

export const ErrorFallback: React.FC<IErrorFallbackProps> = (props) => {
  const { className, error, resetErrorBoundary } = props;
  const { t } = useAppTranslation();

  return (
    <div
      role="alert"
      className={cn(
        'size-full rounded-lg border border-red-400 bg-red-100 px-2 py-1',
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-base text-red-400">
          💀 {t('clientMsg.common.somethingWentWrong')}
        </p>
        <button
          className="text-neutral-600"
          title={t('commons.reset')}
          type="button"
          onClick={resetErrorBoundary}
        >
          <AppIcon name="reload" />
        </button>
      </div>
      {!!isDevEnv && (
        <pre className="mt-1 text-sm text-neutral-400">{error.message}</pre>
      )}
    </div>
  );
};
