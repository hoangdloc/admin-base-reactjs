/* eslint-disable no-console */

function logger(...args: any[]): void {
  if (import.meta.env.DEV) {
    console.log(...args);
  }
}

logger.error = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log('%c---Error from logger---', 'color:red; font-size: 20px');
    console.log(...args);
  }
};

logger.info = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log(
      '%c---Info from logger---',
      'color:dodgerblue; font-size: 20px',
    );
    console.log(...args);
  }
};

logger.success = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log('%c---Success from logger---', 'color:green; font-size: 20px');
    console.log(...args);
  }
};

logger.warn = (...args: any[]): void => {
  if (import.meta.env.DEV) {
    console.log('%c---Warning from logger---', 'color:orange; font-size: 20px');
    console.log(...args);
  }
};

export { logger };
