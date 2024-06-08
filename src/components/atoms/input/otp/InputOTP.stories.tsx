import { InputOTP } from './InputOTP';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InputOTP.Root> = {
  component: InputOTP.Root,
  tags: ['autodocs'],
  title: 'Atoms/Input/InputOTP',
};

export default meta;
type TStory = StoryObj<typeof InputOTP>;

export const Default: TStory = {
  render: () => (
    <InputOTP.Root maxLength={6}>
      <InputOTP.Group>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
      </InputOTP.Group>
      <InputOTP.Separator />
      <InputOTP.Group>
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP.Group>
    </InputOTP.Root>
  ),
};
