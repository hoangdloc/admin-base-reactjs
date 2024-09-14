export const throttle = (cb: (...args: any[]) => void, ms: number) => {
  let lastTime = 0;
  return () => {
    const now = Date.now();
    if (now - lastTime >= ms) {
      cb();
      lastTime = now;
    }
  };
};
