/* eslint-disable no-console */

import { isDevEnv } from '@/libs/utils/checks';

function logger(...args: any[]): void {
  if (isDevEnv) {
    console.log(...args);
  }
}

logger.error = (...args: any[]): void => {
  if (isDevEnv) {
    console.log('%c---Error from logger---', 'color:red; font-size: 20px');
    console.log(...args);
  }
};

logger.info = (...args: any[]): void => {
  if (isDevEnv) {
    console.log(
      '%c---Info from logger---',
      'color:dodgerblue; font-size: 20px',
    );
    console.log(...args);
  }
};

logger.success = (...args: any[]): void => {
  if (isDevEnv) {
    console.log('%c---Success from logger---', 'color:green; font-size: 20px');
    console.log(...args);
  }
};

logger.warn = (...args: any[]): void => {
  if (isDevEnv) {
    console.log('%c---Warning from logger---', 'color:orange; font-size: 20px');
    console.log(...args);
  }
};

export { logger };
