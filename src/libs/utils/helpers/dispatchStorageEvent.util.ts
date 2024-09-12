export function dispatchStorageEvent(key: string, newValue?: string | null) {
  window.dispatchEvent(new StorageEvent('storage', { key, newValue }));
}
