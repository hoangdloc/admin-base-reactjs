import { ErrorFallback } from './ErrorFallback';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorFallback> = {
  args: {
    error: new Error('Please, try again'),
  },
  component: ErrorFallback,
  tags: ['autodocs'],
  title: 'Templates/ErrorBoundary/ErrorFallback',
};

export default meta;
type TStory = StoryObj<typeof ErrorFallback>;

export const Default: TStory = {};
