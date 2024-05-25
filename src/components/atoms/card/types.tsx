// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TCardRootProps = React.HTMLAttributes<HTMLDivElement>;

type TCardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

type TCardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

type TCardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

type TCardContentProps = React.HTMLAttributes<HTMLDivElement>;

type TCardFooterProps = React.HTMLAttributes<HTMLDivElement>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TCardComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCardContentProps
  >;
  Description: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLParagraphElement> & TCardDescriptionProps
  >;
  Footer: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCardFooterProps
  >;
  Header: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCardHeaderProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCardRootProps
  >;
  Title: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLParagraphElement> & TCardTitleProps
  >;
};

export type {
  TCardRootProps,
  TCardHeaderProps,
  TCardTitleProps,
  TCardDescriptionProps,
  TCardContentProps,
  TCardFooterProps,
  TCardComposition,
};
