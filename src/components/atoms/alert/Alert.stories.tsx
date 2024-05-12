import { AlertCircle, Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './Alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
  title: 'Atoms/Alert',
};

export default meta;
type TStory = StoryObj<typeof Alert>;

const Default: TStory = {
  render: () => (
    <Alert>
      <Terminal className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

const Destructive: TStory = {
  render: () => (
    <Alert intent="destructive">
      <AlertCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

const Info: TStory = {
  render: () => (
    <Alert intent="info">
      <AlertCircle className="size-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

const Success: TStory = {
  render: () => (
    <Alert intent="success">
      <AlertCircle className="size-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

const Warning: TStory = {
  render: () => (
    <Alert intent="warning">
      <AlertCircle className="size-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export { Default, Destructive, Info, Success, Warning };
