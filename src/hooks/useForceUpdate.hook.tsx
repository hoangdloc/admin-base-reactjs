import { useState } from 'react';

type TUseForceUpdate = {
  flag: boolean;
  forceUpdate: () => void;
};

export function useForceUpdate(): TUseForceUpdate {
  const [value, setValue] = useState<boolean>(false);
  return {
    flag: value,
    forceUpdate: () => setValue(!value),
  };
}
