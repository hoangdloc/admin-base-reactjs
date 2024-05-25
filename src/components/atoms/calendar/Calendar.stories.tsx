import { Calendar } from './Calendar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  tags: ['autodocs'],
  title: 'Atoms/Calendar',
};

export default meta;
type TStory = StoryObj<typeof Calendar>;

export const Default: TStory = {
  args: {
    className: '',
    numberOfMonths: 1,
  },
};
