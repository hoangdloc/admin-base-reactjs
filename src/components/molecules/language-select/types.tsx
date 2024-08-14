// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

import type { EAppLanguage } from '@/types/enums';

type TLanguageSelectProps = {
  defaultValue?: EAppLanguage;
  onChange?: (value: EAppLanguage) => void;
  value?: EAppLanguage;
};

export type { TLanguageSelectProps };
