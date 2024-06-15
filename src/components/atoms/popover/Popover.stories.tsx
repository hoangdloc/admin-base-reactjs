import { Popover } from './Popover';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popover.Root> = {
  component: Popover.Root,
  tags: ['autodocs'],
  title: 'Atoms/Popover',
};

export default meta;
type TStory = StoryObj<typeof Popover>;

export const Default: TStory = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content>Place content for the popover here.</Popover.Content>
    </Popover.Root>
  ),
};
