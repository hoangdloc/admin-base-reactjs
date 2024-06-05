import { Weight } from 'lucide-react';

import { InputNumber } from './InputNumber';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  tags: ['autodocs'],
  title: 'Atoms/Input/InputNumber',
};

export default meta;
type TStory = StoryObj<typeof InputNumber>;

export const Default: TStory = {
  args: {
    format: 'decimal',
    leftIcon: <Weight />,
    locales: 'en',
    maximumFractionDigits: 2,
    placeholder: '0.00',
    signDisplay: 'never',
    suffix: 'kg',
  },
};
