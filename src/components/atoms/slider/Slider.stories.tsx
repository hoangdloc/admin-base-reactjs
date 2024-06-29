/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Slider } from './Slider';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slider> = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Atoms/Slider',
};

export default meta;
type TStory = StoryObj<typeof Slider>;

export const Default: TStory = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};
