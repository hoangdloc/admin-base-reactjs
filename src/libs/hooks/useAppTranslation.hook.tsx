import { type UseTranslationResponse, useTranslation } from 'react-i18next';

import type { LOCALES_EN } from '@/locales';

import type { TLiteralUnion, TObjectKeyPaths } from '@/types/utilities';

import type { TOptions } from 'i18next';

export type TKeyTranslation = TLiteralUnion<TObjectKeyPaths<typeof LOCALES_EN>>;

type TUseAppTranslationResponse = Omit<
  UseTranslationResponse<'translation', undefined>,
  't'
> & {
  t: (key: TKeyTranslation, options?: TOptions) => string;
};

export const useAppTranslation = (): TUseAppTranslationResponse => {
  const { t, ...rest } = useTranslation('translation');

  return {
    ...rest,
    t: t as TUseAppTranslationResponse['t'],
  };
};
