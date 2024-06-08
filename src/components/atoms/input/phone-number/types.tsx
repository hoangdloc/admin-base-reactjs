import type { TInputProps } from '../default/types';
import type { Props } from 'react-phone-number-input/input';

// ---------------------------------------–-------------------------------------
// Phone number
// ---------------------------------------–-------------------------------------

type TPhoneInputProps = Props<
  Omit<TInputProps, 'defaultValue' | 'onChange' | 'type' | 'value'>
> & {
  defaultValue?: string;
};

export type { TPhoneInputProps };
