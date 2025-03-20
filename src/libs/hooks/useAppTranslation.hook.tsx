import { type UseTranslationResponse, useTranslation } from 'react-i18next';

import type { LOCALES_EN } from '@/locales';

import type { TLiteralUnion, TObjectKeyPaths } from '@/types/utilities';

export type TKeyTranslation = TLiteralUnion<TObjectKeyPaths<typeof LOCALES_EN>>;

export const useAppTranslation = (): UseTranslationResponse<
  'translation',
  TKeyTranslation
> => useTranslation();
