import { Button } from '../button';
import { Card } from '../card';
import { Input } from '../input';
import { Label } from '../label';

import { Tabs } from './Tabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs.Root> = {
  component: Tabs.Root,
  tags: ['autodocs'],
  title: 'Atoms/Tabs',
};

export default meta;
type TStory = StoryObj<typeof Tabs>;

export const Default: TStory = {
  render: () => (
    <Tabs.Root
      className="w-[400px]"
      defaultValue="account"
    >
      <Tabs.List className="grid w-full grid-cols-2">
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you&apos;re
              done.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                defaultValue="Pedro Duarte"
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                defaultValue="@peduarte"
                id="username"
              />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input
                id="current"
                type="password"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input
                id="new"
                type="password"
              />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  ),
};
