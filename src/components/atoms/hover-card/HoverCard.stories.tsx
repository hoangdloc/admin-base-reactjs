import { HoverCard } from './HoverCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HoverCard.Root> = {
  component: HoverCard.Root,
  tags: ['autodocs'],
  title: 'Atoms/HoverCard',
};

export default meta;
type TStory = StoryObj<typeof HoverCard>;

export const Default: TStory = {
  render: () => (
    <div className="flex h-[50dvh] items-center justify-center">
      <HoverCard.Root>
        <HoverCard.Trigger>Hover</HoverCard.Trigger>
        <HoverCard.Content>
          The React Framework – created and maintained by @vercel.
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  ),
};
