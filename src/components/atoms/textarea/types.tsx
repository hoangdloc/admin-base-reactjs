import type { textareaVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';
import type { TextareaAutosizeProps } from 'react-textarea-autosize';

//-----------------------------------------------------------------------------
// Variant props
// -----------------------------------------------------------------------------

type TTextareaVariantProps = VariantProps<typeof textareaVariants>;

// -----------------------------------------------------------------------------
// Component props
// -----------------------------------------------------------------------------

type TTextareaProps = TextareaAutosizeProps & TTextareaVariantProps;

export type { TTextareaProps };
