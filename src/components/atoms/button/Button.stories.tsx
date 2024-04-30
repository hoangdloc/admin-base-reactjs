import { ChevronRight, Loader2, Mail } from 'lucide-react';

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Atoms/Button',
};

export default meta;
type TStory = StoryObj<typeof Button>;

const Primary: TStory = {
  args: {
    children: 'Primary',
  },
};

const Secondary: TStory = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

const Success: TStory = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

const Destructive: TStory = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

const Info: TStory = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

const Warning: TStory = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

const Outline: TStory = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

const Ghost: TStory = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

const Link: TStory = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

const Icon: TStory = {
  args: {
    children: <ChevronRight className="size-4" />,
    size: 'icon',
    variant: 'outline',
  },
};

const WithIcon: TStory = {
  args: {
    children: (
      <>
        <Mail className="mr-2 size-4" /> Login with Email
      </>
    ),
  },
};

const Loading: TStory = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 size-4 animate-spin" />
        Please wait
      </>
    ),
    disabled: true,
  },
};

export {
  Primary,
  Secondary,
  Success,
  Destructive,
  Info,
  Warning,
  Outline,
  Ghost,
  Link,
  Icon,
  WithIcon,
  Loading,
};
