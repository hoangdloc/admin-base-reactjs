import { ErrorFallback } from '@/components';
import { StoreContext, useStoreData } from '@/contexts';

const App: React.FC = () => {
  const store = useStoreData();

  return (
    <StoreContext.Provider value={store}>
      <ErrorFallback error={Error('Bug')} />
    </StoreContext.Provider>
  );
};

export default App;
