import clientMsg from './clientMsg';
import en from './en';
import validationMsg from './validationMsg';

export const LOCALES_EN = {
  ...en,
  ...clientMsg,
  ...validationMsg,
} as const;
