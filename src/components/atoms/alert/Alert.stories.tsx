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
    <Alert variant="destructive">
      <AlertCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export { Default, Destructive };
