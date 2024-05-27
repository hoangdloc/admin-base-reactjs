import { Dialog } from './Dialog';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog.Root> = {
  component: Dialog.Root,
  tags: ['autodocs'],
  title: 'Atoms/Dialog',
};

export default meta;
type TStory = StoryObj<typeof Dialog>;

export const Default: TStory = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Are you absolutely sure?</Dialog.Title>
          <Dialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </Dialog.Description>
        </Dialog.Header>
      </Dialog.Content>
    </Dialog.Root>
  ),
};
