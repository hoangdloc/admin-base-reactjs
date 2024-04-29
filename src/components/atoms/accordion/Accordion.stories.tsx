import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ['autodocs'],
  title: 'Atoms/Accordion/Accordion',
};

export default meta;
type TStory = StoryObj<typeof Accordion>;

export const Default: TStory = {
  render: () => (
    <Accordion
      collapsible
      type="single"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
