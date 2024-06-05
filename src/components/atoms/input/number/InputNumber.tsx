import { InputNumberFormat } from '@react-input/number-format';

import * as React from 'react';

import { Input } from '../default';

import type { TInputNumberProps } from './types';

const InputNumber = React.forwardRef<HTMLInputElement, TInputNumberProps>(
  (props, ref) => {
    return (
      <InputNumberFormat
        ref={ref}
        component={Input}
        {...props}
      />
    );
  },
);

InputNumber.displayName = 'InputNumber';

export { InputNumber };
