import type { TInputProps } from '../default/types';

import type { NumberFormatProps } from '@react-input/number-format';

// ---------------------------------------–-------------------------------------
// Number
// ---------------------------------------–-------------------------------------

type TInputNumberProps = Omit<NumberFormatProps & TInputProps, 'type'>;

export type { TInputNumberProps };
