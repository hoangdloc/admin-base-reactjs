import { renderHook } from '@testing-library/react';

import { StoreContext } from './StoreContext';
import { useStore } from './useStore.hook';

import type { IUseStoreData } from './store.type';

describe('useStore', () => {
  it('should throw error when not within StoreProvider', () => {
    let error: any = undefined;
    try {
      renderHook(() => useStore((state) => state));
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error.message).toEqual(
      'useStore must be used within a StoreProvider',
    );
  });

  it('should return state and set function when within StoreProvider', () => {
    const store = {
      get: vi.fn(() => 'test state'),
      set: vi.fn(),
      subscribe: vi.fn(),
    } as IUseStoreData;

    const wrapper = ({ children }): JSX.Element => (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );

    const { result } = renderHook(() => useStore((state) => state), {
      wrapper,
    });
    expect(result.current[0]).toEqual('test state');
    expect(typeof result.current[1]).toBe('function');
  });
});
