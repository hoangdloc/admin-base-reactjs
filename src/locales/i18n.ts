import { format } from 'date-fns';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LOCALES_EN } from './en';
import { LOCALES_VI } from './vi';

export const DEFAULT_LANGUAGE = import.meta.env.VITE_LANGUAGE || 'en';
const DEFAULT_FORMAT_PATTERN = 'dd/MM/yyyy';

const resources = {
  en: {
    translation: LOCALES_EN,
  },
  vi: {
    translation: LOCALES_VI,
  },
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      format: function (
        value: any,
        formatPattern: string = DEFAULT_FORMAT_PATTERN,
      ) {
        if (value instanceof Date) return format(value, formatPattern);
        return value;
      },
    },
    resources,
  });

void i18n.changeLanguage(DEFAULT_LANGUAGE);

export default i18n;
