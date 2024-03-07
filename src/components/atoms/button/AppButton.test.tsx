import { fireEvent, render, screen } from '@testing-library/react';

import { act } from 'react-dom/test-utils';

import { I18nextProvider } from 'react-i18next';

import i18n from '@/locales/i18n';
import { DEFAULT_DEBOUNCE_WAIT } from '@/settings';

import { AppButton } from './AppButton';

describe('AppButton', () => {
  test('renders the button with the correct text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AppButton text="Click me" />
      </I18nextProvider>,
    );

    const button = screen.getByText(/Click me/i);

    expect(button).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(
      <AppButton
        text="Click me"
        onClick={handleClick}
      />,
    );

    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test('does not call onClick handler when loading', () => {
    const handleClick = vi.fn();
    render(
      <AppButton
        loading
        text="Click me"
        onClick={handleClick}
      />,
    );

    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = vi.fn();
    render(
      <AppButton
        disabled
        text="Click me"
        onClick={handleClick}
      />,
    );

    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders loading spinner when loading', () => {
    render(
      <AppButton
        loading
        text="Click me"
      />,
    );

    const spinner = screen.getByTestId('app-spin');

    expect(spinner).toBeInTheDocument();
  });

  test('renders icon when provided', () => {
    render(
      <AppButton
        icon={<i className="icon-class" />}
        text="Click me"
      />,
    );

    const icon = screen.getByTestId('button-icon');

    expect(icon).toBeInTheDocument();
  });

  test('calls the debounced onClick handler when debouceOnClick is true', () => {
    vi.useFakeTimers();
    const handleClick = vi.fn();
    render(
      <AppButton
        debouceOnClick
        text="Click me"
        onClick={handleClick}
      />,
    );

    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    act(() => {
      vi.advanceTimersByTime(DEFAULT_DEBOUNCE_WAIT);
    });
    expect(handleClick).toHaveBeenCalled();
  });

  test('does not call onClick handler when debouceOnClick is true and button is clicked again within debounce time', () => {
    vi.useFakeTimers();
    const handleClick = vi.fn();
    render(
      <AppButton
        debouceOnClick
        text="Click me"
        onClick={handleClick}
      />,
    );

    const button = screen.getByText(/Click me/i);

    fireEvent.click(button);
    fireEvent.click(button);
    act(() => {
      vi.advanceTimersByTime(DEFAULT_DEBOUNCE_WAIT);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
