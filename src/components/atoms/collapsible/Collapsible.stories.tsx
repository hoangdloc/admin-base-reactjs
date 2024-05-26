import { Collapsible } from './Collapsible';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Collapsible.Root> = {
  component: Collapsible.Root,
  tags: ['autodocs'],
  title: 'Atoms/Collapsible',
};

export default meta;
type TStory = StoryObj<typeof Collapsible>;

export const Default: TStory = {
  render: () => (
    <Collapsible.Root>
      <Collapsible.Trigger>Can I use this in my project?</Collapsible.Trigger>
      <Collapsible.Content>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </Collapsible.Content>
    </Collapsible.Root>
  ),
};
