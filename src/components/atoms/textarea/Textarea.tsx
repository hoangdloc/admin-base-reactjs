import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { cn } from '@/utils/helpers';

import { textareaVariants } from './styles';

import type { TTextareaProps } from './types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(
  ({ className, resizeable = false, ...props }, ref) => {
    return (
      <TextareaAutosize
        ref={ref}
        className={cn(textareaVariants({ resizeable }), className)}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
