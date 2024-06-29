import { Skeleton } from './Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  tags: ['autodocs'],
  title: 'Atoms/Skeleton',
};

export default meta;
type TStory = StoryObj<typeof Skeleton>;

export const Default: TStory = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
