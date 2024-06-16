import { Label } from '@/components/atoms/label';

import { RadioGroup } from './RadioGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup.Root> = {
  component: RadioGroup.Root,
  tags: ['autodocs'],
  title: 'Atoms/RadioGroup',
};

export default meta;
type TStory = StoryObj<typeof RadioGroup>;

export const Default: TStory = {
  render: () => (
    <RadioGroup.Root defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroup.Item
          id="option-one"
          value="option-one"
        />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Item
          id="option-two"
          value="option-two"
        />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup.Root>
  ),
};
