import { Bold } from 'lucide-react';

import { Toggle } from './Toggle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ['autodocs'],
  title: 'Atoms/Toggle',
};

export default meta;
type TStory = StoryObj<typeof Toggle>;

export const Default: TStory = {
  args: {
    'aria-label': 'Toggle bold',
    children: <Bold className="size-4" />,
  },
};
