import { Button } from '@/components/atoms';

import { AlertDialog } from './AlertDialog';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlertDialog.Root> = {
  component: AlertDialog.Root,
  tags: ['autodocs'],
  title: 'Atoms/AlertDialog',
};

export default meta;
type TStory = StoryObj<typeof AlertDialog>;

export const Default: TStory = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button>Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};
