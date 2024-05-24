// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TBreadcrumbRootProps = React.ComponentPropsWithoutRef<'nav'> & {
  separator?: React.ReactNode;
};

type TBreadcrumbListProps = React.ComponentPropsWithoutRef<'ol'>;

type TBreadcrumbItemProps = React.ComponentPropsWithoutRef<'li'>;

type TBreadcrumbLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
};

type TBreadcrumbPageProps = React.ComponentPropsWithoutRef<'span'>;

type TBreadcrumbSeparatorProps = React.ComponentProps<'li'>;

type TBreadcrumbEllipsisProps = React.ComponentProps<'span'>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TBreadcrumbComposition = {
  Ellipsis: React.FC<TBreadcrumbEllipsisProps>;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLLIElement> & TBreadcrumbItemProps
  >;
  Link: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLAnchorElement> & TBreadcrumbLinkProps
  >;
  List: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLOListElement> & TBreadcrumbListProps
  >;
  Page: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLSpanElement> & TBreadcrumbPageProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLElement> & TBreadcrumbRootProps
  >;
  Separator: React.FC<TBreadcrumbSeparatorProps>;
};

export type {
  TBreadcrumbRootProps,
  TBreadcrumbListProps,
  TBreadcrumbItemProps,
  TBreadcrumbLinkProps,
  TBreadcrumbPageProps,
  TBreadcrumbSeparatorProps,
  TBreadcrumbEllipsisProps,
  TBreadcrumbComposition,
};
