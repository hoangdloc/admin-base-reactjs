import { useCallback, useRef, useState } from 'react';

// ---------------------------------------–-------------------------------------
// Types
// ---------------------------------------–-------------------------------------

type TMeasure = {
  width: number | null;
  height: number | null;
};

// ---------------------------------------–-------------------------------------
// Hook
// ---------------------------------------–-------------------------------------

export const useMeasure = <T extends Element>(): [
  React.RefCallback<T>,
  TMeasure,
] => {
  const [dimensions, setDimensions] = useState<TMeasure>({
    width: null,
    height: null,
  });

  const previousObserver = useRef<ResizeObserver | null>(null);

  const customRef = useCallback((node: T) => {
    if (previousObserver.current) {
      previousObserver.current.disconnect();
      previousObserver.current = null;
    }

    if (node?.nodeType === Node.ELEMENT_NODE) {
      const observer = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } =
            entry.borderBoxSize[0];

          setDimensions({ width, height });
        }
      });

      observer.observe(node);
      previousObserver.current = observer;
    }
  }, []);

  return [customRef, dimensions];
};
