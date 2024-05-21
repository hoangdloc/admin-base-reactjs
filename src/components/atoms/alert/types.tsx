import type { alertVariants } from './styles';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TAlertRootProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

type TAlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

type TAlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TAlertComposition = {
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLParagraphElement> & TAlertDescriptionProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TAlertRootProps
  >;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLParagraphElement> & TAlertTitleProps
  >;
};

export type {
  TAlertRootProps,
  TAlertTitleProps,
  TAlertDescriptionProps,
  TAlertComposition,
};
