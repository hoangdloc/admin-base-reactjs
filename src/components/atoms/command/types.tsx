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

type TCommandItem = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Item
>;

type TCommandShortcut = React.HTMLAttributes<HTMLSpanElement>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TCommandComposition = {
  Dialog: React.FC<TCommandDialogProps>;
  Empty: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof CommandPrimitive.Empty>> &
      TCommandEmptyProps
  >;
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof CommandPrimitive.Group>> &
      TCommandGroupProps
  >;
  Input: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof CommandPrimitive.Input>> &
      TCommandInputProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof CommandPrimitive.Item>> &
      TCommandItem
  >;
  List: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof CommandPrimitive.List>> &
      TCommandListProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.HTMLAttributes<React.ElementRef<typeof CommandPrimitive>> &
      TCommandRootProps
  >;
  Separator: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof CommandPrimitive.Separator>> &
      TCommandSeparatorProps
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
  TCommandItem,
  TCommandShortcut,
  TCommandComposition,
};
