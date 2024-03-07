import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { TDeepReadonly } from '@/types';

export const cn = (...args: TDeepReadonly<ClassValue[]>): string =>
  twMerge(clsx(args));
