import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TDropdownMenuRootProps = DropdownMenuPrimitive.DropdownMenuProps;

type TDropdownMenuTriggerProps = DropdownMenuPrimitive.DropdownMenuTriggerProps;

type TDropdownMenuGroupProps = DropdownMenuPrimitive.DropdownMenuGroupProps;

type TDropdownMenuPortalProps = DropdownMenuPrimitive.DropdownMenuPortalProps;

type TDropdownMenuSubProps = DropdownMenuPrimitive.DropdownMenuSubProps;

type TDropdownMenuRadioGroupProps =
  DropdownMenuPrimitive.DropdownMenuRadioGroupProps;

type TDropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean;
};

type TDropdownMenuSubContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.SubContent
>;

type TDropdownMenuContentProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Content
>;

type TDropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  inset?: boolean;
};

type TDropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

type TDropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

type TDropdownMenuLabelProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Label
> & {
  inset?: boolean;
};

type TDropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>;

type TDropdownMenuShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TDropdownMenuComposition = {
  CheckboxItem: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuCheckboxItemProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuContentProps
  >;
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuGroupProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuItemProps
  >;
  Label: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuLabelProps
  >;
  Portal: React.FC<TDropdownMenuPortalProps>;
  RadioGroup: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuRadioGroupProps
  >;
  RadioItem: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuRadioItemProps
  >;
  Root: React.FC<TDropdownMenuRootProps>;
  Separator: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuSeparatorProps
  >;
  Shortcut: React.FC<TDropdownMenuShortcutProps>;
  Sub: React.FC<TDropdownMenuSubProps>;
  SubContent: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuSubContentProps
  >;
  SubTrigger: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TDropdownMenuSubTriggerProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLButtonElement> & TDropdownMenuTriggerProps
  >;
};

export type {
  TDropdownMenuRootProps,
  TDropdownMenuTriggerProps,
  TDropdownMenuGroupProps,
  TDropdownMenuPortalProps,
  TDropdownMenuSubProps,
  TDropdownMenuRadioGroupProps,
  TDropdownMenuSubTriggerProps,
  TDropdownMenuSubContentProps,
  TDropdownMenuContentProps,
  TDropdownMenuItemProps,
  TDropdownMenuCheckboxItemProps,
  TDropdownMenuRadioItemProps,
  TDropdownMenuLabelProps,
  TDropdownMenuSeparatorProps,
  TDropdownMenuShortcutProps,
  TDropdownMenuComposition,
};
