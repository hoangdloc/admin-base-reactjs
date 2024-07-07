import { Bold, Italic, Underline } from 'lucide-react';

import { ToggleGroup } from './ToggleGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleGroup.Root> = {
  component: ToggleGroup.Root,
  tags: ['autodocs'],
  title: 'Atoms/ToggleGroup',
};

export default meta;
type TStory = StoryObj<typeof ToggleGroup>;

export const Default: TStory = {
  render: () => (
    <ToggleGroup.Root type="multiple">
      <ToggleGroup.Item
        aria-label="Toggle bold"
        value="bold"
      >
        <Bold className="size-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        aria-label="Toggle italic"
        value="italic"
      >
        <Italic className="size-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        aria-label="Toggle underline"
        value="underline"
      >
        <Underline className="size-4" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  ),
};
