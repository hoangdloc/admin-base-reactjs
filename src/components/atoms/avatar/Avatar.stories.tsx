import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Atoms/Avatar',
};

export default meta;
type TStory = StoryObj<typeof Avatar>;

export const Default: TStory = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
