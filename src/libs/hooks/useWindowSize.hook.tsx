import { useLayoutEffect, useState } from 'react';

type TSize = {
  height: number | null;
  width: number | null;
};

export const useWindowSize = (): TSize => {
  const [size, setSize] = useState<TSize>({
    height: null,
    width: null,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};
