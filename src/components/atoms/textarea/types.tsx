/* eslint-disable @typescript-eslint/member-ordering */
// -----------------------------------------------------------------------------
// Variant props
// -----------------------------------------------------------------------------

import type { textareaVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';

type TTextareaVariantProps = VariantProps<typeof textareaVariants>;

// -----------------------------------------------------------------------------
// Component props
// -----------------------------------------------------------------------------

type TTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  TTextareaVariantProps & {
    autoGrow?: boolean | { minHeight?: number; maxHeight?: number };
  };

export type { TTextareaProps };
