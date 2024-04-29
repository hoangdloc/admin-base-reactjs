import '../src/index.css';
import type { Preview } from '@storybook/react';
import i18n from './../src/locales/i18n';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
  },
};

export default preview;
