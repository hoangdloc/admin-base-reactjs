import { createContext } from 'react';

import type { IUseStoreData } from './store.type';

const StoreContext = createContext<IUseStoreData | null>(null);

export { StoreContext };
