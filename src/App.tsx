import { StoreContext, useStoreData } from '@contexts';

const App: React.FC = () => {
  return (
    <StoreContext.Provider value={useStoreData()}>
      <div />
    </StoreContext.Provider>
  );
};

export default App;
