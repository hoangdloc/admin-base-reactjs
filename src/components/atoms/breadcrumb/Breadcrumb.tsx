import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import {
  breadcrumbEllipsisVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbListVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
} from './styles';

import type {
  TBreadcrumbComposition,
  TBreadcrumbEllipsisProps,
  TBreadcrumbLinkProps,
  TBreadcrumbListProps,
  TBreadcrumbPageProps,
  TBreadcrumbRootProps,
  TBreadcrumbSeparatorProps,
} from './types';

const BreadcrumbRoot = React.forwardRef<HTMLElement, TBreadcrumbRootProps>(
  ({ ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      {...props}
    />
  ),
);
BreadcrumbRoot.displayName = 'BreadcrumbRoot';

const BreadcrumbList = React.forwardRef<HTMLOListElement, TBreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(breadcrumbListVariants(), className)}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(breadcrumbItemVariants(), className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  TBreadcrumbLinkProps
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn(breadcrumbLinkVariants(), className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, TBreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-current="page"
      aria-disabled="true"
      className={cn(breadcrumbPageVariants(), className)}
      role="link"
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator: React.FC<TBreadcrumbSeparatorProps> = ({
  children,
  className,
  ...props
}) => (
  <li
    aria-hidden="true"
    className={cn(breadcrumbSeparatorVariants(), className)}
    role="presentation"
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis: React.FC<TBreadcrumbEllipsisProps> = ({
  className,
  ...props
}) => (
  <span
    aria-hidden="true"
    className={cn(breadcrumbEllipsisVariants(), className)}
    role="presentation"
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

const Breadcrumb: TBreadcrumbComposition = {
  Ellipsis: BreadcrumbEllipsis,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  List: BreadcrumbList,
  Page: BreadcrumbPage,
  Root: BreadcrumbRoot,
  Separator: BreadcrumbSeparator,
};

export { Breadcrumb };
