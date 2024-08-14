import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import {
  tableBodyVariants,
  tableCaptionVariants,
  tableCellVariants,
  tableFooterVariants,
  tableHeadVariants,
  tableHeaderVariants,
  tableRootContainerVariants,
  tableRootVariants,
  tableRowVariants,
} from './styles';

import type {
  TTableBodyProps,
  TTableCaptionProps,
  TTableCellProps,
  TTableComposition,
  TTableFooterProps,
  TTableHeadProps,
  TTableHeaderProps,
  TTableRootProps,
  TTableRowProps,
} from './types';

const TableRoot = React.forwardRef<HTMLTableElement, TTableRootProps>(
  ({ className, ...props }, ref) => (
    <div className={cn(tableRootContainerVariants())}>
      <table
        ref={ref}
        className={cn(tableRootVariants(), className)}
        {...props}
      />
    </div>
  ),
);
TableRoot.displayName = 'TableRoot';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TTableHeaderProps
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(tableHeaderVariants(), className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, TTableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn(tableBodyVariants(), className)}
      {...props}
    />
  ),
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TTableFooterProps
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(tableFooterVariants(), className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, TTableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(tableRowVariants(), className)}
      {...props}
    />
  ),
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, TTableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(tableHeadVariants(), className)}
      {...props}
    />
  ),
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, TTableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(tableCellVariants(), className)}
      {...props}
    />
  ),
);
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TTableCaptionProps
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(tableCaptionVariants(), className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

const Table: TTableComposition = {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Root: TableRoot,
  Row: TableRow,
};

export { Table };
