import { Button } from '@/components/atoms';

import { Drawer } from './Drawer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer.Root> = {
  component: Drawer.Root,
  tags: ['autodocs'],
  title: 'Atoms/Drawer',
};

export default meta;
type TStory = StoryObj<typeof Drawer>;

export const Default: TStory = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Are you absolutely sure?</Drawer.Title>
          <Drawer.Description>This action cannot be undone.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Footer>
          <Button>Submit</Button>
          <Drawer.Close asChild>
            <Button
              intent="secondary"
              variant="outline"
            >
              Cancel
            </Button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Root>
  ),
};
