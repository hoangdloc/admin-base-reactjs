import { useEffect, useRef, useState } from 'react';

export const useThrottle = <T,>(value: T, interval: number = 300): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef<number | null>(null);

  useEffect(() => {
    const now = Date.now();

    if (lastUpdated.current && now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottledValue(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottledValue(value);
      }, interval);

      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  return throttledValue;
};
