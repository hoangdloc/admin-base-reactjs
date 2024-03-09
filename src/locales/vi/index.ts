import clientMsg from './clientMsg';
import validationMsg from './validationMsg';
import vi from './vi';

export const LOCALES_VI = {
  ...vi,
  clientMsg,
  validationMsg,
} as const;
