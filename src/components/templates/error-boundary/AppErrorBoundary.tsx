import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './ErrorFallback';

interface IAppErrorBoundaryProps {
  children: React.ReactNode;
  className?: string;
}

export const AppErrorBoundary: React.FC<IAppErrorBoundaryProps> = (props) => {
  const { className, children } = props;

  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <ErrorFallback
          className={className}
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};
