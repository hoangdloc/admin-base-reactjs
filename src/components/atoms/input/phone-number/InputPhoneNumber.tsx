import React from 'react';
import ReactPhoneNumberInput from 'react-phone-number-input/input';

import { Input } from '../default';

import type { TPhoneInputProps } from './types';

export const PhoneInput = React.forwardRef<
  React.RefAttributes<unknown>,
  TPhoneInputProps
>((props, ref) => {
  const {
    defaultValue = '',
    value: controlledValue,
    onChange: setControlledValue,
    ...rest
  } = props;

  const [uncontrolledValue, setUncontrolledValue] =
    React.useState<string>(defaultValue);

  const value = controlledValue ?? uncontrolledValue;
  const setValue = setControlledValue ?? setUncontrolledValue;

  return (
    <ReactPhoneNumberInput
      ref={ref}
      inputComponent={Input}
      inputMode="tel"
      {...rest}
      value={value}
      onChange={setValue}
    />
  );
});

PhoneInput.displayName = 'PhoneInput';
