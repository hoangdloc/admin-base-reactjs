// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TTableRootProps = React.HTMLAttributes<HTMLTableElement>;

type TTableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;

type TTableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;

type TTableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;

type TTableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

type TTableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

type TTableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

type TTableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TTableComposition = {
  Body: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableSectionElement> & TTableBodyProps
  >;
  Caption: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableCaptionElement> & TTableCaptionProps
  >;
  Cell: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableCellElement> & TTableCellProps
  >;
  Footer: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableSectionElement> & TTableFooterProps
  >;
  Head: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableCellElement> & TTableHeadProps
  >;
  Header: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableSectionElement> & TTableHeaderProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableElement> & TTableRootProps
  >;
  Row: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLTableRowElement> & TTableRowProps
  >;
};

export type {
  TTableRootProps,
  TTableHeaderProps,
  TTableBodyProps,
  TTableFooterProps,
  TTableRowProps,
  TTableHeadProps,
  TTableCellProps,
  TTableCaptionProps,
  TTableComposition,
};
