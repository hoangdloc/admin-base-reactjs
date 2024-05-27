/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-unknown-property */
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';

import { Dialog } from '@/components/atoms';
import { cn } from '@/utils/helpers';

import {
  commandDialogCommandRootVariants,
  commandDialogContentVariants,
  commandEmptyVariants,
  commandGroupVariants,
  commandInputVariants,
  commandItemVariants,
  commandListVariants,
  commandRootVariants,
  commandSeperatorVariants,
  commandShortVariants,
} from './styles';

import type {
  TCommandComposition,
  TCommandDialogProps,
  TCommandEmptyProps,
  TCommandGroupProps,
  TCommandInputProps,
  TCommandListProps,
  TCommandRootProps,
  TCommandSeparatorProps,
} from './types';

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  TCommandRootProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(commandRootVariants(), className)}
    {...props}
  />
));
CommandRoot.displayName = CommandPrimitive.displayName;

const CommandDialog: React.FC<TCommandDialogProps> = ({
  children,
  ...props
}) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content className={cn(commandDialogContentVariants())}>
        <Command.Root className={cn(commandDialogCommandRootVariants())}>
          {children}
        </Command.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  TCommandInputProps
>(({ className, ...props }, ref) => (
  <div
    className="flex items-center border-b px-3"
    cmdk-input-wrapper=""
  >
    <Search className="mr-2 size-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(commandInputVariants(), className)}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  TCommandListProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(commandListVariants(), className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  TCommandEmptyProps
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn(commandEmptyVariants())}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  TCommandGroupProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(commandGroupVariants(), className)}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  TCommandSeparatorProps
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(commandSeperatorVariants(), className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(commandItemVariants(), className)}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn(commandShortVariants(), className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

const Command: TCommandComposition = {
  Dialog: CommandDialog,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Input: CommandInput,
  Item: CommandItem,
  List: CommandList,
  Root: CommandRoot,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
};

export { Command };
