import { renderHook } from '@testing-library/react';
import { useTranslation } from 'react-i18next';

import { useAppTranslation } from './useAppTranslation.hook';

import type { Mock } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(),
}));

describe('useAppTranslation hook', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should correctly wrap the translation function', () => {
    const mockTranslationFn = vi.fn().mockReturnValue('translated text');
    (useTranslation as Mock).mockReturnValue({
      t: mockTranslationFn,
      i18n: { language: 'en' },
      ready: true,
    });

    const { result } = renderHook(() => useAppTranslation());

    // Test that our wrapped function correctly calls the original
    const translationKey = 'common.ok';
    const options = { count: 2 };

    const translatedText = result.current.t(translationKey, options);

    // Verify the original function was called with correct arguments
    expect(mockTranslationFn).toHaveBeenCalledWith(translationKey, options);
    expect(translatedText).toBe('translated text');

    // Verify useTranslation was called once
    expect(useTranslation).toHaveBeenCalledTimes(1);
  });
});
