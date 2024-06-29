import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';

import { Sheet } from './Sheet';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sheet.Root> = {
  component: Sheet.Root,
  tags: ['autodocs'],
  title: 'Atoms/Sheet',
};

export default meta;
type TStory = StoryObj<typeof Sheet>;

export const Default: TStory = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Sheet.Description>
        </Sheet.Header>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="name"
            >
              Name
            </Label>
            <Input
              containerClassName="col-span-3"
              id="name"
              value="Pedro Duarte"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              className="text-right"
              htmlFor="username"
            >
              Username
            </Label>
            <Input
              containerClassName="col-span-3"
              id="username"
              value="@peduarte"
            />
          </div>
        </div>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <Button type="submit">Save changes</Button>
          </Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  ),
};
