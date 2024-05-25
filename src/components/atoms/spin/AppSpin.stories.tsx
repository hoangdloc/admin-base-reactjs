import { AppSpin } from './AppSpin';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppSpin> = {
  component: AppSpin,
  tags: ['autodocs'],
  title: 'Atoms/AppSpin',
};

export default meta;
type TStory = StoryObj<typeof AppSpin>;

const Default: TStory = {};

const Dashed: TStory = {
  args: {
    size: '2xl',
    variant: 'dashed',
  },
};

const Dotted: TStory = {
  args: {
    size: '3xl',
    variant: 'dotted',
  },
};

export { Default, Dashed, Dotted };
