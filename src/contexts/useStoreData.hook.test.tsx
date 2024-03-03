import { act, renderHook } from '@testing-library/react-hooks';

import { useStoreData } from './useStoreData.hook';

describe('useStoreData', () => {
  it('should initialize with the initial state', () => {
    const { result } = renderHook(() => useStoreData());
    expect(result.current.get()).toEqual({ accessToken: undefined });
  });

  it('should update the state when set is called', () => {
    const { result } = renderHook(() => useStoreData());
    act(() => {
      result.current.set({ accessToken: 'someValue' });
    });
    expect(result.current.get().accessToken).toEqual('someValue');
  });

  it('should notify subscribers when the state changes', () => {
    const { result } = renderHook(() => useStoreData());
    const callback = vi.fn();
    act(() => {
      result.current.subscribe(callback);
      result.current.set({ accessToken: 'someValue' });
    });
    expect(callback).toHaveBeenCalled();
  });

  it('should stop notifying a subscriber after it unsubscribes', () => {
    const { result } = renderHook(() => useStoreData());
    const callback = vi.fn();
    act(() => {
      const unsubscribe = result.current.subscribe(callback);
      unsubscribe();
      result.current.set({ accessToken: 'someValue' });
    });
    expect(callback).not.toHaveBeenCalled();
  });
});
