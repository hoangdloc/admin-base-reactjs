import { Tooltip } from './Tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip.Root> = {
  component: Tooltip.Root,
  tags: ['autodocs'],
  title: 'Atoms/Tooltip',
};

export default meta;
type TStory = StoryObj<typeof Tooltip>;

export const Default: TStory = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>Hover</Tooltip.Trigger>
        <Tooltip.Content>
          <p>Add to library</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};
