import { cva } from 'class-variance-authority';

const calendarContainerVariants = cva(['p-3']);

const calendarMonthsVariants = cva([
  'flex',
  'flex-col',
  'sm:flex-row',
  'space-y-4',
  'sm:space-x-4',
  'sm:space-y-0',
]);

const calendarMonthVariants = cva(['space-y-4']);

const calendarcaptionVariants = cva([
  'flex',
  'justify-center',
  'pt-1',
  'relative',
  'items-center',
]);

const calendarCaptionLabelVariants = cva(['text-sm', 'font-medium']);

const calendarNavVariants = cva(['space-x-1', 'flex', 'items-center']);

const calendarnavButtonvariants = cva([
  'size-7',
  'bg-transparent',
  'p-0',
  'opacity-50',
  'hover:opacity-100',
]);

const calendarNavButtonPreviousVariants = cva(['absolute', 'left-1']);

const calendarNavButtonNextVariants = cva(['absolute', 'right-1']);

const calendarTableVariants = cva(['w-full', 'border-collapse', 'space-y-1']);

const calendarHeadRowVariants = cva(['flex']);

const calendarHeadCellVariants = cva([
  'text-muted-foreground',
  'rounded-md',
  'w-9',
  'font-normal',
  'text-[0.8rem]',
]);

const calendarRowVariants = cva(['flex', 'w-full', 'mt-2']);

const calendarCellVariants = cva([
  'h-9',
  'w-9',
  'text-center',
  'text-sm',
  'p-0',
  'relative',
  '[&:has([aria-selected].day-range-end)]:rounded-r-md',
  '[&:has([aria-selected].day-outside)]:bg-accent/50',
  '[&:has([aria-selected])]:bg-accent',
  'first:[&:has([aria-selected])]:rounded-l-md',
  'last:[&:has([aria-selected])]:rounded-r-md',
  'focus-within:relative',
  'focus-within:z-20',
]);

const calendarDayVariants = cva([
  'size-9',
  'p-0',
  'font-normal',
  'aria-selected:opacity-100',
]);

const calendarDayRangeEndVariants = cva(['day-range-end']);

const calendarDaySelectedVariants = cva([
  'bg-primary',
  'text-primary-foreground',
  'hover:bg-primary',
  'hover:text-primary-foreground',
  'focus:bg-primary',
  'focus:text-primary-foreground',
]);

const calendarDayTodayVariants = cva(['bg-accent', 'text-accent-foreground']);

const calendarDayOutsideVariants = cva([
  'day-outside',
  'text-muted-foreground',
  'opacity-50',
  'aria-selected:bg-accent/50',
  'aria-selected:text-muted-foreground',
  'aria-selected:opacity-30',
]);

const calendarDayDisabledVariants = cva([
  'text-muted-foreground',
  'opacity-50',
]);

const calendarDayRangeMiddleVariants = cva([
  'aria-selected:bg-accent',
  'aria-selected:text-accent-foreground',
]);

const calendarDayHiddenVariants = cva(['hidden']);

export {
  calendarContainerVariants,
  calendarMonthsVariants,
  calendarMonthVariants,
  calendarcaptionVariants,
  calendarCaptionLabelVariants,
  calendarNavVariants,
  calendarnavButtonvariants,
  calendarNavButtonPreviousVariants,
  calendarNavButtonNextVariants,
  calendarTableVariants,
  calendarHeadRowVariants,
  calendarHeadCellVariants,
  calendarRowVariants,
  calendarCellVariants,
  calendarDayVariants,
  calendarDayRangeEndVariants,
  calendarDaySelectedVariants,
  calendarDayTodayVariants,
  calendarDayOutsideVariants,
  calendarDayDisabledVariants,
  calendarDayRangeMiddleVariants,
  calendarDayHiddenVariants,
};
