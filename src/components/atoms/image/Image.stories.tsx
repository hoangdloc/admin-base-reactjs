import { Image } from './Image';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
  title: 'Atoms/Image',
};

export default meta;
type TStory = StoryObj<typeof Image>;

const Default: TStory = {
  args: {
    src: 'https://images.unsplash.com/photo-1720458087424-5908294c1d20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wrapperClassName: 'size-[200px] rounded-full',
  },
};

const WithinContainer: TStory = {
  render: () => (
    <div className="size-40 overflow-hidden rounded-lg">
      <Image
        alt="Example photo"
        src="https://images.unsplash.com/photo-1720458087424-5908294c1d20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  ),
};

const Error: TStory = {
  args: {
    alt: 'Example error photo',
    showErrorFallback: true,
    src: 'https://images.com',
    wrapperClassName: 'size-[200px]',
  },
};

export { Default, WithinContainer, Error };
