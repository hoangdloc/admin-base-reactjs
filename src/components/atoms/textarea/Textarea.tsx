/* eslint-disable @typescript-eslint/no-magic-numbers */
import * as React from 'react';

import { cn } from '@/utils/helpers';

import { textareaVariants } from './styles';

import type { TTextareaProps } from './types';

const BORDER_WIDTH = 1;

const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(
  (
    { className, resizeable = false, autoGrow = false, onInput, ...props },
    ref,
  ) => {
    const handleOnInput = (
      event: React.FormEvent<HTMLTextAreaElement>,
    ): void => {
      if (autoGrow) {
        const { currentTarget } = event;
        currentTarget.style.overflowY = 'hidden';
        if (typeof autoGrow === 'object' && autoGrow.minHeight) {
          currentTarget.style.height = `${autoGrow.minHeight + BORDER_WIDTH * 2}px`;
        } else {
          currentTarget.style.height = 'auto';
        }
        if (
          typeof autoGrow === 'object' &&
          autoGrow.maxHeight &&
          currentTarget.scrollHeight > autoGrow.maxHeight
        ) {
          currentTarget.style.height = `${autoGrow.maxHeight + BORDER_WIDTH * 2}px`;
          currentTarget.style.overflowY = 'auto';
        } else {
          currentTarget.style.height = `${currentTarget.scrollHeight}px`;
        }
      }
      onInput?.(event);
    };

    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ resizeable }), className)}
        {...props}
        onInput={handleOnInput}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
