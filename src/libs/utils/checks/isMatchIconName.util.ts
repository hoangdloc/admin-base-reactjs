import * as icons from '@/assets/icons';
import type { TIconMap } from '@/types/common';

export const isMatchIconName = (name?: string | null): name is TIconMap => {
  if (!name) return false;
  if (!Object.keys(icons).includes(name)) return false;
  return true;
};
