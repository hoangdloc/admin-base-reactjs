import { useContext, useSyncExternalStore } from 'react';

import { StoreContext } from './StoreContext';

import type { IUseStoreData, TSelector } from './store.type';

const useStore = <T,>(selector: TSelector<T>): [T, IUseStoreData['set']] => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.get()),
  );
  return [state, store.set];
};

export { useStore };
