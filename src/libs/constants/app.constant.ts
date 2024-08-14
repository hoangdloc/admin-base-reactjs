/* eslint-disable sort-keys */

/**
 * @property {string} extraExtraSmall - (min-width: 320px)
 * @property {string} extraSmall - (min-width: 432px)
 * @property {string} small - (min-width: 640px)
 * @property {string} medium - (min-width: 768px)
 * @property {string} large - (min-width: 1024px)
 * @property {string} extraLarge - (min-width: 1280px)
 * @property {string} extraExtraLarge - (min-width: 1440px)
 * @see tailwind.config.js for more details
 */
const BREAKPOINT = {
  extraExtraSmall: '(min-width: 320px)',
  extraSmall: '(min-width: 432px)',
  small: '(min-width: 640px)',
  medium: '(min-width: 768px)',
  large: '(min-width: 1024px)',
  extraLarge: '(min-width: 1280px)',
  extraExtraLarge: '(min-width: 1440px)',
};

export { BREAKPOINT };
