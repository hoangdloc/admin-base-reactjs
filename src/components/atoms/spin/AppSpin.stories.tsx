import { AppSpin } from './AppSpin';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppSpin> = {
  component: AppSpin,
  tags: ['autodocs'],
  title: 'Atoms/Spin/AppSpin',
};

export default meta;
type TStory = StoryObj<typeof AppSpin>;

export const Default: TStory = {};
