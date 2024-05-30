import { DropdownMenu } from './DropdownMenu';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropdownMenu.Root> = {
  component: DropdownMenu.Root,
  tags: ['autodocs'],
  title: 'Atoms/DropdownMenu',
};

export default meta;
type TStory = StoryObj<typeof DropdownMenu>;

export const Default: TStory = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Billing</DropdownMenu.Item>
        <DropdownMenu.Item>Team</DropdownMenu.Item>
        <DropdownMenu.Item>Subscription</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};
