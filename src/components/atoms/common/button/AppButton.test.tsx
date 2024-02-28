import { fireEvent, render, screen } from '@testing-library/react';

import { AppButton } from './AppButton';

describe('AppButton', () => {
  test('renders the button with the correct text', () => {
    render(<AppButton>Click me</AppButton>);

    const button = screen.getByText(/Click me/i);

    expect(button).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<AppButton onClick={handleClick}>Click me</AppButton>);

    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
