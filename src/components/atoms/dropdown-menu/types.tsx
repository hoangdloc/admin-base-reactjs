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
// Component ref
// ---------------------------------------–-------------------------------------

type TDropdownMenuCheckboxItemRef = React.ElementRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>;

type TDropdownMenuContentRef = React.ElementRef<
  typeof DropdownMenuPrimitive.Content
>;

type TDropdownMenuGroupRef = React.ElementRef<
  typeof DropdownMenuPrimitive.Group
>;

type TDropdownMenuItemRef = React.ElementRef<typeof DropdownMenuPrimitive.Item>;

type TDropdownMenuLabelRef = React.ElementRef<
  typeof DropdownMenuPrimitive.Label
>;

type TDropdownMenuRadioGroupRef = React.ElementRef<
  typeof DropdownMenuPrimitive.RadioGroup
>;

type TDropdownMenuRadioItemRef = React.ElementRef<
  typeof DropdownMenuPrimitive.RadioItem
>;

type TDropdownMenuSeparatorRef = React.ElementRef<
  typeof DropdownMenuPrimitive.Separator
>;

type TDropdownMenuSubContentRef = React.ElementRef<
  typeof DropdownMenuPrimitive.SubContent
>;

type TDropdownMenuSubTriggerRef = React.ElementRef<
  typeof DropdownMenuPrimitive.SubTrigger
>;

type TDropdownMenuTriggerRef = React.ElementRef<
  typeof DropdownMenuPrimitive.Trigger
>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TDropdownMenuComposition = {
  CheckboxItem: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuCheckboxItemRef> &
      TDropdownMenuCheckboxItemProps
  >;
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuContentRef> & TDropdownMenuContentProps
  >;
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuGroupRef> & TDropdownMenuGroupProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuItemRef> & TDropdownMenuItemProps
  >;
  Label: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuLabelRef> & TDropdownMenuLabelProps
  >;
  Portal: React.FC<TDropdownMenuPortalProps>;
  RadioGroup: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuRadioGroupRef> &
      TDropdownMenuRadioGroupProps
  >;
  RadioItem: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuRadioItemRef> & TDropdownMenuRadioItemProps
  >;
  Root: React.FC<TDropdownMenuRootProps>;
  Separator: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuSeparatorRef> & TDropdownMenuSeparatorProps
  >;
  Shortcut: React.FC<TDropdownMenuShortcutProps>;
  Sub: React.FC<TDropdownMenuSubProps>;
  SubContent: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuSubContentRef> &
      TDropdownMenuSubContentProps
  >;
  SubTrigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuSubTriggerRef> &
      TDropdownMenuSubTriggerProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TDropdownMenuTriggerRef> & TDropdownMenuTriggerProps
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
  TDropdownMenuCheckboxItemRef,
  TDropdownMenuContentRef,
  TDropdownMenuGroupRef,
  TDropdownMenuItemRef,
  TDropdownMenuLabelRef,
  TDropdownMenuRadioGroupRef,
  TDropdownMenuRadioItemRef,
  TDropdownMenuSeparatorRef,
  TDropdownMenuSubContentRef,
  TDropdownMenuSubTriggerRef,
  TDropdownMenuTriggerRef,
  TDropdownMenuComposition,
};
