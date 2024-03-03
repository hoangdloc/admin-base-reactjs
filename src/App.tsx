import { AppButton } from '@components';
import { StoreContext, useStoreData } from '@contexts';
import { useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <StoreContext.Provider value={useStoreData()}>
      <div className="flex flex-col items-start gap-2 p-4">
        <AppButton
          pill
          icon={<span>🚀</span>}
          loading={loading}
          text="pages.signUp.signUp"
          variant="primary"
        />
        <button onClick={() => setLoading(!loading)}>Check</button>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
