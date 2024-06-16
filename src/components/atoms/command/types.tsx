import type { DialogProps } from '@radix-ui/react-dialog';
import type { Command as CommandPrimitive } from 'cmdk';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TCommandRootProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
>;

type TCommandDialogProps = DialogProps;

type TCommandInputProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
>;

type TCommandListProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.List
>;

type TCommandEmptyProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Empty
>;

type TCommandGroupProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Group
>;

type TCommandSeparatorProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Separator
>;

type TCommandItemProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;

type TCommandShortcut = React.HTMLAttributes<HTMLSpanElement>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TCommandEmptyRef = React.ElementRef<typeof CommandPrimitive.Empty>;

type TCommandGroupRef = React.ElementRef<typeof CommandPrimitive.Group>;

type TCommandInputRef = React.ElementRef<typeof CommandPrimitive.Input>;

type TCommandItemRef = React.ElementRef<typeof CommandPrimitive.Item>;

type TCommandListRef = React.ElementRef<typeof CommandPrimitive.List>;

type TCommandRootRef = React.ElementRef<typeof CommandPrimitive>;

type TCommandSeparatorRef = React.ElementRef<typeof CommandPrimitive.Separator>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TCommandComposition = {
  Dialog: React.FC<TCommandDialogProps>;
  Empty: React.ForwardRefExoticComponent<
    React.RefAttributes<TCommandEmptyRef> & TCommandEmptyProps
  >;
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<TCommandGroupRef> & TCommandGroupProps
  >;
  Input: React.ForwardRefExoticComponent<
    React.RefAttributes<TCommandInputRef> & TCommandInputProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<TCommandItemRef> & TCommandItemProps
  >;
  List: React.ForwardRefExoticComponent<
    React.RefAttributes<TCommandListRef> & TCommandListProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.HTMLAttributes<TCommandRootRef> & TCommandRootProps
  >;
  Separator: React.ForwardRefExoticComponent<
    React.RefAttributes<TCommandSeparatorRef> & TCommandSeparatorProps
  >;
  Shortcut: React.FC<TCommandShortcut>;
};

export type {
  TCommandRootProps,
  TCommandDialogProps,
  TCommandInputProps,
  TCommandListProps,
  TCommandEmptyProps,
  TCommandGroupProps,
  TCommandSeparatorProps,
  TCommandItemProps,
  TCommandShortcut,
  TCommandEmptyRef,
  TCommandGroupRef,
  TCommandInputRef,
  TCommandItemRef,
  TCommandListRef,
  TCommandRootRef,
  TCommandSeparatorRef,
  TCommandComposition,
};
