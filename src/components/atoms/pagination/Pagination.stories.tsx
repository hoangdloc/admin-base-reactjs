import { Pagination } from './Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination.Root> = {
  component: Pagination.Root,
  tags: ['autodocs'],
  title: 'Atoms/Pagination',
};

export default meta;
type TStory = StoryObj<typeof Pagination>;

export const Default: TStory = {
  render: () => (
    <Pagination.Root>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous href="#" />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link
            isActive
            href="#"
          >
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next href="#" />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  ),
};
