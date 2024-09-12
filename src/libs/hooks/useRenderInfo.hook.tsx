import { useEffect, useRef } from 'react';

import { isDevEnv } from '@/libs/utils/checks';
import { logger } from '@/libs/utils/helpers';

type TRenderInfo = {
  name: string;
  renders: number;
  sinceLastRender: number;
  timestamp: number;
};

export const useRenderInfo = (
  name: string = 'Unknown',
): TRenderInfo | undefined => {
  const count = useRef(0);
  const lastRender = useRef<number | undefined>();
  const now = Date.now();

  count.current++;

  useEffect(() => {
    lastRender.current = Date.now();
  });

  const sinceLastRender = lastRender.current ? now - lastRender.current : 0;

  if (isDevEnv) {
    const info: TRenderInfo = {
      name,
      renders: count.current,
      sinceLastRender,
      timestamp: now,
    };

    logger(info);

    return info;
  }
};
