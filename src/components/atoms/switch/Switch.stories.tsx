import { Label } from '../label';

import { Switch } from './Switch';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  component: Switch,
  tags: ['autodocs'],
  title: 'Atoms/Switch',
};

export default meta;
type TStory = StoryObj<typeof Switch>;

const Default: TStory = {
  args: {
    intent: 'default',
  },
};

const Destructive: TStory = {
  args: {
    intent: 'destructive',
  },
};

const Info: TStory = {
  args: {
    intent: 'info',
  },
};

const Success: TStory = {
  args: {
    intent: 'success',
  },
};

const Warning: TStory = {
  args: {
    intent: 'warning',
  },
};

const Sizes: TStory = {
  render: () => (
    <div className="flex gap-4">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
};

const WithLabel: TStory = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        intent="success"
      />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export { Default, Destructive, Info, Success, Warning, Sizes, WithLabel };
