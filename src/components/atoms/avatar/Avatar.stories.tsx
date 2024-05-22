import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar.Root> = {
  component: Avatar.Root,
  tags: ['autodocs'],
  title: 'Atoms/Avatar',
};

export default meta;
type TStory = StoryObj<typeof Avatar>;

export const Default: TStory = {
  render: () => (
    <div className="flex gap-3">
      <Avatar.Root
        shape="square"
        size="sm"
      >
        <Avatar.Image src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root
        shape="square"
        size="lg"
      >
        <Avatar.Image src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};
