import { Badge } from './Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  args: {
    children: 'Badge',
  },
  component: Badge,
  tags: ['autodocs'],
  title: 'Atoms/Badge',
};

export default meta;
type TStory = StoryObj<typeof Badge>;

const Default: TStory = {};

const Info: TStory = {
  args: {
    variant: 'info',
  },
};

const Secondary: TStory = {
  args: {
    variant: 'secondary',
  },
};

const Success: TStory = {
  args: {
    variant: 'success',
  },
};

const Destructive: TStory = {
  args: {
    variant: 'destructive',
  },
};

const Warning: TStory = {
  args: {
    variant: 'warning',
  },
};

const Outline: TStory = {
  args: {
    variant: 'outline',
  },
};

export { Default, Info, Secondary, Success, Destructive, Warning, Outline };
