import { AlertCircle, Terminal } from 'lucide-react';

import { Alert } from './Alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert.Root> = {
  component: Alert.Root,
  tags: ['autodocs'],
  title: 'Atoms/Alert',
};

export default meta;
type TStory = StoryObj<typeof Alert>;

const Default: TStory = {
  render: () => (
    <Alert.Root>
      <Terminal className="size-4" />
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>
        You can add components to your app using the cli.
      </Alert.Description>
    </Alert.Root>
  ),
};

const Destructive: TStory = {
  render: () => (
    <Alert.Root intent="destructive">
      <AlertCircle className="size-4" />
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>
        Your session has expired. Please log in again.
      </Alert.Description>
    </Alert.Root>
  ),
};

const Info: TStory = {
  render: () => (
    <Alert.Root intent="info">
      <AlertCircle className="size-4" />
      <Alert.Title>Information</Alert.Title>
      <Alert.Description>
        You can add components to your app using the cli.
      </Alert.Description>
    </Alert.Root>
  ),
};

const Success: TStory = {
  render: () => (
    <Alert.Root intent="success">
      <AlertCircle className="size-4" />
      <Alert.Title>Success</Alert.Title>
      <Alert.Description>
        Your session has expired. Please log in again.
      </Alert.Description>
    </Alert.Root>
  ),
};

const Warning: TStory = {
  render: () => (
    <Alert.Root intent="warning">
      <AlertCircle className="size-4" />
      <Alert.Title>Warning</Alert.Title>
      <Alert.Description>
        Your session has expired. Please log in again.
      </Alert.Description>
    </Alert.Root>
  ),
};

export { Default, Destructive, Info, Success, Warning };
