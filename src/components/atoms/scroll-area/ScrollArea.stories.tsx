import { ScrollArea } from './ScrollArea';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollArea.Root> = {
  component: ScrollArea.Root,
  tags: ['autodocs'],
  title: 'Atoms/ScrollArea',
};

export default meta;
type TStory = StoryObj<typeof ScrollArea>;

export const Default: TStory = {
  render: () => (
    <ScrollArea.Root className="h-[200px] w-[350px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king&apos;s pillow, in his
      soup, even in the royal toilet. The king was furious, but he couldn&apos;t
      seem to stop Jokester. And then, one day, the people of the kingdom
      discovered that the jokes left by Jokester were so funny that they
      couldn&apos;t help but laugh. And once they started laughing, they
      couldn&apos;t stop.
    </ScrollArea.Root>
  ),
};
