import { toast } from 'sonner';

import { Button } from '../button';

import { Toaster } from './Toast';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toaster> = {
  component: Toaster,
  tags: ['autodocs'],
  title: 'Atoms/Toast',
};

export default meta;
type TStory = StoryObj<typeof Toaster>;

export const Default: TStory = {
  render: () => (
    <div className="flex h-[60dvh] gap-2">
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => {},
            },
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error('Event has been created', {
            closeButton: true,
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Error
      </Button>
    </div>
  ),
};
