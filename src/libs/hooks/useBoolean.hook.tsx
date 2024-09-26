import { useCallback, useState } from 'react';

type TUseBoolean = {
  toggle: () => void;
  value: boolean;
};

export function useBoolean(): TUseBoolean {
  const [value, setValue] = useState<boolean>(false);
  return {
    toggle: useCallback(() => setValue((prev) => !prev), []),
    value,
  };
}
