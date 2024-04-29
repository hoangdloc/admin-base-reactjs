import { fireEvent, render } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';

import i18n from '@/locales/i18n';

import { ErrorFallback } from './ErrorFallback';

describe('ErrorFallback', () => {
  it('renders correctly', () => {
    const resetErrorBoundary = vi.fn();
    const { getByRole, getByText } = render(
      <I18nextProvider i18n={i18n}>
        <ErrorFallback
          className="test-class"
          error={new Error('Test error')}
          resetErrorBoundary={resetErrorBoundary}
        />
      </I18nextProvider>,
    );

    expect(getByRole('alert')).toBeInTheDocument();
    expect(getByText('Test error')).toBeInTheDocument();
    expect(getByText('💀 Something went wrong!')).toBeInTheDocument();
  });

  it('calls resetErrorBoundary when reset button is clicked', () => {
    const resetErrorBoundary = vi.fn();
    const { getByTitle } = render(
      <I18nextProvider i18n={i18n}>
        <ErrorFallback
          className="test-class"
          error={new Error('Test error')}
          resetErrorBoundary={resetErrorBoundary}
        />
      </I18nextProvider>,
    );

    fireEvent.click(getByTitle('Reset'));
    expect(resetErrorBoundary).toHaveBeenCalled();
  });
});
