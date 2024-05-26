import { Carousel } from './Carousel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Carousel.Root> = {
  component: Carousel.Root,
  tags: ['autodocs'],
  title: 'Atoms/Carousel',
};

export default meta;
type TStory = StoryObj<typeof Carousel>;

export const Default: TStory = {
  render: () => (
    <div className="w-full px-10">
      <Carousel.Root>
        <Carousel.Content>
          <Carousel.Item>...</Carousel.Item>
          <Carousel.Item>...</Carousel.Item>
          <Carousel.Item>...</Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel.Root>
    </div>
  ),
};
