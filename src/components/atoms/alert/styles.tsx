import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  [
    'relative',
    'w-full',
    'rounded-lg',
    'border',
    'p-4',
    '[&>svg~*]:pl-7',
    '[&>svg+div]:translate-y-[-3px]',
    '[&>svg]:absolute',
    '[&>svg]:left-4',
    '[&>svg]:top-4',
    '[&>svg]:text-foreground',
  ],
  {
    defaultVariants: {
      intent: 'default',
      variant: 'solid',
    },
    variants: {
      intent: {
        default: [
          'data-[variant=outline]:bg-background',
          'data-[variant=outline]:text-foreground',
          'data-[variant=solid]:border-foreground',
          'data-[variant=solid]:bg-foreground',
          'data-[variant=solid]:text-background',
          "[&[data-variant='solid']>svg]:text-background",
        ],
        destructive: [
          'data-[variant=outline]:border-destructive/50',
          'data-[variant=outline]:text-destructive',
          "[&[data-variant='outline']>svg]:text-destructive",
          'data-[variant=solid]:border-destructive',
          'data-[variant=solid]:bg-destructive',
          'data-[variant=solid]:text-destructive-foreground',
          "[&[data-variant='solid']>svg]:text-destructive-foreground",
        ],
        info: [
          'data-[variant=outline]:border-info/50',
          'data-[variant=outline]:text-info',
          "[&[data-variant='outline']>svg]:text-info",
          'data-[variant=solid]:border-info',
          'data-[variant=solid]:bg-info',
          'data-[variant=solid]:text-info-foreground',
          "[&[data-variant='solid']>svg]:text-info-foreground",
        ],
        success: [
          'data-[variant=outline]:border-success/50',
          'data-[variant=outline]:text-success',
          "[&[data-variant='outline']>svg]:text-success",
          'data-[variant=solid]:border-success',
          'data-[variant=solid]:bg-success',
          'data-[variant=solid]:text-success-foreground',
          "[&[data-variant='solid']>svg]:text-info-foreground",
        ],
        warning: [
          'data-[variant=outline]:border-warning/50',
          'data-[variant=outline]:text-warning',
          "[&[data-variant='outline']>svg]:text-warning",
          'data-[variant=solid]:border-warning',
          'data-[variant=solid]:bg-warning',
          'data-[variant=solid]:text-warning-foreground',
          "[&[data-variant='solid']>svg]:text-warning-foreground",
        ],
      },
      variant: {
        outline: [],
        solid: [],
      },
    },
  },
);
