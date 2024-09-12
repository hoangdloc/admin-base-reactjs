import { useCallback, useEffect, useSyncExternalStore } from 'react';

import { dispatchStorageEvent } from '@/libs/utils/helpers';

const setSessionStorageItem = (key: string, value: unknown) => {
  const stringifiedValue = JSON.stringify(value);
  window.sessionStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeSessionStorageItem = (key: string) => {
  window.sessionStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const getSessionStorageItem = (key: string) => {
  return window.sessionStorage.getItem(key);
};

const useSessionStorageSubscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
};

const getSessionStorageServerSnapshot = () => {
  throw Error('useSessionStorage is a client-only hook');
};

export function useSessionStorage<T>(
  key: string,
  initialValue?: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getSnapshot = () => getSessionStorageItem(key);

  const store = useSyncExternalStore(
    useSessionStorageSubscribe,
    getSnapshot,
    getSessionStorageServerSnapshot,
  );

  const setState = useCallback(
    (v: unknown) => {
      try {
        const nextState = typeof v === 'function' ? v(JSON.parse(store!)) : v;

        if (nextState === undefined || nextState === null) {
          removeSessionStorageItem(key);
        } else {
          setSessionStorageItem(key, nextState);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    },
    [key, store],
  );

  useEffect(() => {
    if (
      getSessionStorageItem(key) === null &&
      typeof initialValue !== 'undefined'
    ) {
      setSessionStorageItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}
