import { useCallback, useState } from 'react';

import { isPlainObject } from '@/libs/utils/checks';

export const useObjectState = <T,>(initialValue: T): [T, (arg: T) => void] => {
  const [state, setState] = useState(initialValue);

  const handleUpdate = useCallback((arg: T) => {
    if (typeof arg === 'function') {
      setState((s) => {
        const newState = arg(s);

        if (isPlainObject(newState)) {
          return {
            ...s,
            ...newState,
          };
        }
      });
    }

    if (isPlainObject(arg)) {
      setState((s) => ({
        ...s,
        ...arg,
      }));
    }
  }, []);

  return [state, handleUpdate];
};
