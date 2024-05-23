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
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        intent="default"
        variant="solid"
      >
        Primary
      </Button>
      <Button
        intent="default"
        variant="outline"
      >
        Primary
      </Button>
      <Button
        intent="default"
        variant="link"
      >
        Primary
      </Button>
      <Button
        intent="default"
        variant="ghost"
      >
        Primary
      </Button>
    </div>
  ),
};

const Secondary: TStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        intent="secondary"
        variant="solid"
      >
        Secondary
      </Button>
      <Button
        intent="secondary"
        variant="outline"
      >
        Secondary
      </Button>
      <Button
        intent="secondary"
        variant="link"
      >
        Secondary
      </Button>
      <Button
        intent="secondary"
        variant="ghost"
      >
        Secondary
      </Button>
    </div>
  ),
};

const Success: TStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        intent="success"
        variant="solid"
      >
        Success
      </Button>
      <Button
        intent="success"
        variant="outline"
      >
        Success
      </Button>
      <Button
        intent="success"
        variant="link"
      >
        Success
      </Button>
      <Button
        intent="success"
        variant="ghost"
      >
        Success
      </Button>
    </div>
  ),
};

const Destructive: TStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        intent="destructive"
        variant="solid"
      >
        Destructive
      </Button>
      <Button
        intent="destructive"
        variant="outline"
      >
        Destructive
      </Button>
      <Button
        intent="destructive"
        variant="link"
      >
        Destructive
      </Button>
      <Button
        intent="destructive"
        variant="ghost"
      >
        Destructive
      </Button>
    </div>
  ),
};

const Info: TStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        intent="info"
        variant="solid"
      >
        Info
      </Button>
      <Button
        intent="info"
        variant="outline"
      >
        Info
      </Button>
      <Button
        intent="info"
        variant="link"
      >
        Info
      </Button>
      <Button
        intent="info"
        variant="ghost"
      >
        Info
      </Button>
    </div>
  ),
};

const Warning: TStory = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        intent="warning"
        variant="solid"
      >
        Warning
      </Button>
      <Button
        intent="warning"
        variant="outline"
      >
        Warning
      </Button>
      <Button
        intent="warning"
        variant="link"
      >
        Warning
      </Button>
      <Button
        intent="warning"
        variant="ghost"
      >
        Warning
      </Button>
    </div>
  ),
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
  Icon,
  WithIcon,
  Loading,
};
