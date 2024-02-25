import React from 'react';

interface IAppButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'danger' | 'primary' | 'secondary' | 'success';
}

export const AppButton = React.forwardRef<HTMLButtonElement, IAppButtonProps>(
  (props, ref) => {
    const { type = 'button', ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        type={type}
      >
        AppButton
      </button>
    );
  },
);

AppButton.displayName = 'AppButton';
