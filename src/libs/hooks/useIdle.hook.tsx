import { useEffect, useState } from 'react';

import { throttle } from '@/libs/utils/helpers';

const DEFAULT_IDLE_TIMEOUT = 60_000;
const THROTTLE_TIMEOUT = 500;

export function useIdle(ms = DEFAULT_IDLE_TIMEOUT) {
  const [idle, setIdle] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleTimeout = () => {
      setIdle(true);
    };

    const handleEvent = throttle(() => {
      setIdle(false);

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleTimeout, ms);
    }, THROTTLE_TIMEOUT);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleEvent();
      }
    };

    timeoutId = window.setTimeout(handleTimeout, ms);

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('mousedown', handleEvent);
    window.addEventListener('resize', handleEvent);
    window.addEventListener('keydown', handleEvent);
    window.addEventListener('touchstart', handleEvent);
    window.addEventListener('wheel', handleEvent);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('mousedown', handleEvent);
      window.removeEventListener('resize', handleEvent);
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('touchstart', handleEvent);
      window.removeEventListener('wheel', handleEvent);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.clearTimeout(timeoutId);
    };
  }, [ms]);

  return idle;
}
