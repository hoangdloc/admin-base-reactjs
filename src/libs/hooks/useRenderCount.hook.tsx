import { useRef } from 'react';

export const useRenderCount = () => {
  const count = useRef(0);

  count.current++;

  return count.current;
};
