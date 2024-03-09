import { AppButton } from './AppButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppButton> = {
  component: AppButton,
  tags: ['autodocs'],
  title: 'Atoms/Button/AppButton',
};

export default meta;
type TStory = StoryObj<typeof AppButton>;

export const Default: TStory = {
  args: {
    size: 'md',
    text: 'Button',
    variant: 'primary',
  },
};
