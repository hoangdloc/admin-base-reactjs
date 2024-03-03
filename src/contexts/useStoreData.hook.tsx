import { useCallback, useRef } from 'react';

import type { IAppState, IUseStoreData, TSubscriber } from './store.type';

const initialState: IAppState = {
  accessToken: undefined,
};

const useStoreData = (): IUseStoreData => {
  const store = useRef<IAppState>(initialState);
  const get = useCallback(() => store.current, []);
  const subscribers = useRef<Set<TSubscriber>>(new Set());
  const set = useCallback((value: Partial<IAppState>) => {
    store.current = { ...store.current, ...value };
    return subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: TSubscriber) => {
    subscribers.current.add(callback);
    return (): boolean => subscribers.current.delete(callback);
  }, []);

  return { get, set, subscribe };
};

export { useStoreData };
