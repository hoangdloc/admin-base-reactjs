import { renderHook } from '@testing-library/react';
import { useContext } from 'react';

import { StoreContext } from './StoreContext';

describe('StoreContext', () => {
  it('provides a default value of null', () => {
    const { result } = renderHook(() => useContext(StoreContext));
    expect(result.current).toBeNull();
  });
});
