import { Label } from './Label';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ['autodocs'],
  title: 'Atoms/Label',
};

export default meta;
type TStory = StoryObj<typeof Label>;

export const Default: TStory = {
  args: {
    children: 'Your email address',
    htmlFor: 'email',
  },
};
