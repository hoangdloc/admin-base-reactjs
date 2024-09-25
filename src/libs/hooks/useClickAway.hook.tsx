import { useEffect, useLayoutEffect, useRef } from 'react';

export const useClickAway = <T extends Element>(
  cb: (e: Event) => void,
): React.RefObject<T> => {
  const ref = useRef<T | null>(null);
  const refCb = useRef(cb);

  useLayoutEffect(() => {
    refCb.current = cb;
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const element = ref.current;
      if (element && !element.contains(e.target as Node | null)) {
        refCb.current(e);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  return ref;
};
