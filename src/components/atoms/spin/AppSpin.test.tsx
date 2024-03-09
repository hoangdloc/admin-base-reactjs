import { render, screen } from '@testing-library/react';

import { AppSpin } from './AppSpin';

describe('AppSpin', () => {
  it('renders with default props', () => {
    render(<AppSpin />);

    const spinner = screen.getByTestId('app-spin');

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('inline-block');
    expect(spinner).toHaveClass('size-6');
    expect(spinner).toHaveClass('animate-spin');
    expect(spinner).toHaveClass('rounded-full');
    expect(spinner).toHaveClass('border-2');
    expect(spinner).toHaveClass('border-neutral-200');
    expect(spinner).toHaveClass('border-t-white');
  });

  it('renders with additional className', () => {
    render(<AppSpin className="extra-class" />);

    const spinner = screen.getByTestId('app-spin');

    expect(spinner).toHaveClass('extra-class');
  });
});
