import { Textarea } from './Textarea';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  tags: ['autodocs'],
  title: 'Atoms/Textarea',
};

export default meta;
type TStory = StoryObj<typeof Textarea>;

export const Default: TStory = {
  args: {
    cacheMeasurements: true,
    maxRows: 6,
    minRows: 3,
    onHeightChange: () => {},
    resizeable: true,
  },
};
