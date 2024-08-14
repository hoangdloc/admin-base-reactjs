import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { buttonVariants } from '@/components/atoms/button';
import { cn } from '@/libs/utils/helpers';

import {
  paginationContentVariants,
  paginationEllipsisVariants,
  paginationItemVariants,
  paginationNextVariants,
  paginationPreviousVariants,
  paginationRootVariants,
} from './styles';

import type {
  TPaginationComposition,
  TPaginationContentProps,
  TPaginationEllipsisProps,
  TPaginationItemProps,
  TPaginationLinkProps,
  TPaginationNextProps,
  TPaginationPreviousProps,
  TPaginationRootProps,
} from './types';

const PaginationRoot: React.FC<TPaginationRootProps> = ({
  className,
  ...props
}) => (
  <nav
    aria-label="pagination"
    className={cn(paginationRootVariants(), className)}
    role="navigation"
    {...props}
  />
);
PaginationRoot.displayName = 'PaginationRoot';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  TPaginationContentProps
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(paginationContentVariants(), className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, TPaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(paginationItemVariants(), className)}
      {...props}
    />
  ),
);
PaginationItem.displayName = 'PaginationItem';

const PaginationLink: React.FC<TPaginationLinkProps> = ({
  className,
  children,
  isActive,
  size = 'icon',
  ...props
}) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        size,
        variant: isActive ? 'outline' : 'ghost',
      }),
      className,
    )}
    {...props}
  >
    {children}
  </a>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious: React.FC<TPaginationPreviousProps> = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(paginationPreviousVariants(), className)}
    size="default"
    {...props}
  >
    <ChevronLeft className="size-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext: React.FC<TPaginationNextProps> = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(paginationNextVariants(), className)}
    size="default"
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="size-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis: React.FC<TPaginationEllipsisProps> = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn(paginationEllipsisVariants(), className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

const Pagination: TPaginationComposition = {
  Content: PaginationContent,
  Ellipsis: PaginationEllipsis,
  Item: PaginationItem,
  Link: PaginationLink,
  Next: PaginationNext,
  Previous: PaginationPrevious,
  Root: PaginationRoot,
};

export { Pagination };
