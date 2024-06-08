import { PhoneCall } from 'lucide-react';

import { PhoneInput } from './InputPhoneNumber';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  tags: ['autodocs'],
  title: 'Atoms/Input/PhoneNumberInput',
};

export default meta;
type TStory = StoryObj<typeof PhoneInput>;

export const Default: TStory = {
  args: {
    defaultValue: '+84',
    leftIcon: <PhoneCall />,
    placeholder: 'Enter phone number',
  },
};
