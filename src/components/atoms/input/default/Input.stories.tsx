/* eslint-disable sort-keys */
import { GlobeIcon } from 'lucide-react';

import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Atoms/Input/Default',
};

export default meta;
type TStory = StoryObj<typeof Input>;

export const Default: TStory = {
  args: {
    placeholder: 'www.google',
    prefix: 'https://',
    suffix: '.com',
    leftIcon: <GlobeIcon />,
    rightIcon: <GlobeIcon />,
  },
};
