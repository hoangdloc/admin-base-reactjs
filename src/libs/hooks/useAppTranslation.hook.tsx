import { useTranslation } from 'react-i18next';

import type { LOCALES_EN } from '@/locales';

import type { TLiteralUnion, TObjectKeyPaths } from '@/types/utilities';

export type TKeyTranslation = TLiteralUnion<TObjectKeyPaths<typeof LOCALES_EN>>;

interface IUseAppTranslationResponse {
  t: (key: TKeyTranslation) => string;
}

export const useAppTranslation = (): IUseAppTranslationResponse => {
  const { t } = useTranslation();
  return { t };
};
