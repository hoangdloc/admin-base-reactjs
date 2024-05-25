import { Breadcrumb } from './Breadcrumb';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb.Root> = {
  component: Breadcrumb.Root,
  tags: ['autodocs'],
  title: 'Atoms/Breadcrumb',
};

export default meta;
type TStory = StoryObj<typeof Breadcrumb>;

export const Default: TStory = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};
