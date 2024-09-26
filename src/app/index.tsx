import { LanguageSelect } from '@/components/molecules';

import AppProvider from './provider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div>React Admin Base</div>
      <LanguageSelect />
    </AppProvider>
  );
};

export default App;
