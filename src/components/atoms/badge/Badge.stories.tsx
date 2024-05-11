/* eslint-disable @typescript-eslint/no-magic-numbers */
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
    intent: 'info',
  },
};

const Secondary: TStory = {
  args: {
    intent: 'secondary',
  },
};

const Success: TStory = {
  args: {
    intent: 'success',
  },
};

const Destructive: TStory = {
  args: {
    intent: 'destructive',
  },
};

const Warning: TStory = {
  args: {
    intent: 'warning',
  },
};

const Outline: TStory = {
  render: () => (
    <div className="flex items-center gap-2">
      {(
        [
          'default',
          'info',
          'secondary',
          'success',
          'destructive',
          'warning',
        ] as const
      ).map((intent, i) => (
        <Badge
          key={intent}
          intent={intent}
          shape={i % 2 === 0 ? 'square' : undefined}
          size={i % 2 === 0 ? 'sm' : i % 3 === 0 ? 'lg' : 'md'}
          variant="outline"
        >
          Badge
        </Badge>
      ))}
    </div>
  ),
};

export { Default, Info, Secondary, Success, Destructive, Warning, Outline };
