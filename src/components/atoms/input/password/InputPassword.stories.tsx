/* eslint-disable sort-keys */
import { GlobeIcon } from 'lucide-react';

import { InputPassword } from './InputPassword';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  tags: ['autodocs'],
  title: 'Atoms/Input/InputPassword',
};

export default meta;
type TStory = StoryObj<typeof InputPassword>;

export const Default: TStory = {
  args: {
    placeholder: 'www.google',
    prefix: 'https://',
    suffix: '.com',
    leftIcon: <GlobeIcon />,
  },
};
