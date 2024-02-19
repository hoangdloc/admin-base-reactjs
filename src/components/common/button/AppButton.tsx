import React from 'react';

interface IAppButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'danger' | 'primary' | 'secondary' | 'success';
}

export const AppButton = React.forwardRef<HTMLButtonElement, IAppButtonProps>(
  (props) => {
    const { type = 'button' } = props;

    return <button type={type}>AppButton</button>;
  },
);

AppButton.displayName = 'AppButton';
