import { renderHook } from '@testing-library/react-hooks';
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

  it('should return translation function', () => {
    const mockTranslationFn = vi.fn();
    (useTranslation as Mock).mockReturnValue({ t: mockTranslationFn });

    const { result } = renderHook(() => useAppTranslation());

    expect(result.current.t).toBe(mockTranslationFn);
    expect(useTranslation).toBeCalledTimes(1);
  });
});
