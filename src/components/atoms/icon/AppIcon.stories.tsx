import * as icons from '@/assets/icons';

import { AppIcon } from './AppIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppIcon> = {
  component: AppIcon,
  tags: ['autodocs'],
  title: 'Atoms/AppIcon',
};

export default meta;
type TStory = StoryObj<typeof AppIcon>;

export const Default: TStory = {
  render: () => (
    <div className="flex w-full flex-wrap gap-4">
      {Object.keys(icons).map((icon) => (
        <div
          key={icon}
          className="flex min-h-[4rem] min-w-[4rem] flex-col items-center gap-2 rounded-lg bg-neutral-50 p-2 shadow-sm"
        >
          <AppIcon
            name={icon}
            size={32}
          />
          <span className="text-base">{icon}</span>
        </div>
      ))}
    </div>
  ),
};
