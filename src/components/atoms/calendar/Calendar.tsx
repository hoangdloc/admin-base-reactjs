/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable sort-keys */
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { buttonVariants } from '@/components/atoms/button/styles';
import { cn } from '@/utils/helpers';

import {
  calendarCaptionLabelVariants,
  calendarCellVariants,
  calendarContainerVariants,
  calendarDayDisabledVariants,
  calendarDayHiddenVariants,
  calendarDayOutsideVariants,
  calendarDayRangeEndVariants,
  calendarDayRangeMiddleVariants,
  calendarDaySelectedVariants,
  calendarDayTodayVariants,
  calendarDayVariants,
  calendarHeadCellVariants,
  calendarHeadRowVariants,
  calendarMonthVariants,
  calendarMonthsVariants,
  calendarNavButtonNextVariants,
  calendarNavButtonPreviousVariants,
  calendarNavVariants,
  calendarRowVariants,
  calendarTableVariants,
  calendarcaptionVariants,
  calendarnavButtonvariants,
} from './styles';

import type { TCalendarProps } from './types';

const Calendar: React.FC<TCalendarProps> = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      className={cn(calendarContainerVariants(), className)}
      showOutsideDays={showOutsideDays}
      classNames={{
        months: cn(calendarMonthsVariants()),
        month: cn(calendarMonthVariants()),
        caption: cn(calendarcaptionVariants()),
        caption_label: cn(calendarCaptionLabelVariants()),
        nav: cn(calendarNavVariants()),
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          calendarnavButtonvariants(),
        ),
        nav_button_previous: cn(calendarNavButtonPreviousVariants()),
        nav_button_next: cn(calendarNavButtonNextVariants()),
        table: cn(calendarTableVariants()),
        head_row: cn(calendarHeadRowVariants()),
        head_cell: cn(calendarHeadCellVariants()),
        row: cn(calendarRowVariants()),
        cell: cn(calendarCellVariants()),
        day: cn(buttonVariants({ variant: 'ghost' }), calendarDayVariants()),
        day_range_end: cn(calendarDayRangeEndVariants()),
        day_selected: cn(calendarDaySelectedVariants()),
        day_today: cn(calendarDayTodayVariants()),
        day_outside: cn(calendarDayOutsideVariants()),
        day_disabled: cn(calendarDayDisabledVariants()),
        day_range_middle: cn(calendarDayRangeMiddleVariants()),
        day_hidden: cn(calendarDayHiddenVariants()),
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="size-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="size-4" />,
      }}
      {...props}
    />
  );
};
Calendar.displayName = 'Calendar';

export { Calendar };
