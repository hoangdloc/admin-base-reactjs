// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

import type { TButtonProps } from '@/components/atoms/button/types';

type TPaginationRootProps = React.ComponentProps<'nav'>;

type TPaginationContentProps = React.ComponentProps<'ul'>;

type TPaginationItemProps = React.ComponentProps<'li'>;

type TPaginationLinkProps = Pick<TButtonProps, 'size'> &
  React.ComponentProps<'a'> & {
    isActive?: boolean;
  };

type TPaginationPreviousProps = React.ComponentProps<
  React.FC<TPaginationLinkProps>
>;

type TPaginationNextProps = React.ComponentProps<
  React.FC<TPaginationLinkProps>
>;

type TPaginationEllipsisProps = React.ComponentProps<'span'>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TPaginationComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLUListElement> & TPaginationContentProps
  >;
  Ellipsis: React.FC<TPaginationEllipsisProps>;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLLIElement> & TPaginationItemProps
  >;
  Link: React.FC<TPaginationLinkProps>;
  Next: React.FC<TPaginationNextProps>;
  Previous: React.FC<TPaginationPreviousProps>;
  Root: React.FC<TPaginationRootProps>;
};

export type {
  TPaginationRootProps,
  TPaginationContentProps,
  TPaginationItemProps,
  TPaginationLinkProps,
  TPaginationPreviousProps,
  TPaginationNextProps,
  TPaginationEllipsisProps,
  TPaginationComposition,
};
