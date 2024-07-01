import { Toaster } from '@/components/atoms';
import { AppErrorBoundary } from '@/components/templates';
import { StoreContext, useStoreData } from '@/contexts';

const App: React.FC = () => {
  const store = useStoreData();

  return (
    <AppErrorBoundary className="rounded-none px-4 py-2">
      <StoreContext.Provider value={store}>
        <div>React Admin Base</div>
        <Toaster />
      </StoreContext.Provider>
    </AppErrorBoundary>
  );
};

export default App;
