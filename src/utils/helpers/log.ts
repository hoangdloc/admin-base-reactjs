/* eslint-disable no-console */

function log(...args: any[]): void {
  if (import.meta.env.DEV) {
    console.log(...args);
  }
}

log.error = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log('%c---Error from logger---', 'color:red; font-size: 20px');
    console.log(...args);
  }
};

log.info = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log(
      '%c---Info from logger---',
      'color:dodgerblue; font-size: 20px',
    );
    console.log(...args);
  }
};

log.success = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log('%c---Success from logger---', 'color:green; font-size: 20px');
    console.log(...args);
  }
};

log.warn = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log('%c---Warning from logger---', 'color:orange; font-size: 20px');
    console.log(...args);
  }
};

export { log };
