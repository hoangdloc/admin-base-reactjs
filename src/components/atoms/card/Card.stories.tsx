import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card.Root> = {
  component: Card.Root,
  tags: ['autodocs'],
  title: 'Atoms/Card',
};

export default meta;
type TStory = StoryObj<typeof Card>;

export const Default: TStory = {
  render: () => (
    <Card.Root>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <Card.Footer>
        <p>Card Footer</p>
      </Card.Footer>
    </Card.Root>
  ),
};
