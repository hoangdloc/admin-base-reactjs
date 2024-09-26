import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { AppSpin, Toaster } from '@/components/atoms';
import { AppErrorBoundary } from '@/components/templates';
import { StoreContext, useStoreData } from '@/contexts';

// ---------------------------------------–-------------------------------------
// Props
// ---------------------------------------–-------------------------------------

type TAppProviderProps = {
  children: React.ReactNode;
};

// ---------------------------------------–-------------------------------------
// Component
// ---------------------------------------–-------------------------------------

const AppProvider: React.FC<TAppProviderProps> = ({ children }) => {
  const store = useStoreData();

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <AppSpin
            size="4xl"
            variant="dotted"
          />
        </div>
      }
    >
      <AppErrorBoundary className="rounded-none px-4 py-2">
        <HelmetProvider>
          <StoreContext.Provider value={store}>
            <Toaster />
            {children}
          </StoreContext.Provider>
        </HelmetProvider>
      </AppErrorBoundary>
    </Suspense>
  );
};
AppProvider.displayName = 'AppProvider';

export default AppProvider;
