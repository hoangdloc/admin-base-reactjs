import { useSyncExternalStore } from 'react';

const useVisibilityChangeSubscribe = (callback: () => void) => {
  document.addEventListener('visibilitychange', callback);

  return () => {
    document.removeEventListener('visibilitychange', callback);
  };
};

const getVisibilityChangeSnapshot = () => {
  return document.visibilityState;
};

const getVisibilityChangeServerSnapshot = () => {
  throw Error('useVisibilityChange is a client-only hook');
};

export function useVisibilityChange() {
  const visibilityState = useSyncExternalStore(
    useVisibilityChangeSubscribe,
    getVisibilityChangeSnapshot,
    getVisibilityChangeServerSnapshot,
  );

  return visibilityState === 'visible';
}
