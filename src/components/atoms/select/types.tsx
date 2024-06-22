import type * as SelectPrimitive from '@radix-ui/react-select';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TSelectRootProps = SelectPrimitive.SelectProps;

type TSelectGroupProps = SelectPrimitive.SelectGroupProps;

type TSelectValueProps = SelectPrimitive.SelectValueProps;

type TSelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;

type TSelectScrollUpButtonProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollUpButton
>;

type TSelectScrollDownButtonProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.ScrollDownButton
>;

type TSelectContentProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;

type TSelectLabelProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Label
>;

type TSelectItemProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

type TSelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TSelectGroupRef = React.ElementRef<typeof SelectPrimitive.Group>;

type TSelectValueRef = React.ElementRef<typeof SelectPrimitive.Value>;

type TSelectTriggerRef = React.ElementRef<typeof SelectPrimitive.Trigger>;

type TSelectScrollUpButtonRef = React.ElementRef<
  typeof SelectPrimitive.ScrollUpButton
>;

type TSelectScrollDownButtonRef = React.ElementRef<
  typeof SelectPrimitive.ScrollDownButton
>;

type TSelectContentRef = React.ElementRef<typeof SelectPrimitive.Content>;

type TSelectItemRef = React.ElementRef<typeof SelectPrimitive.Item>;

type TSelectLabelRef = React.ElementRef<typeof SelectPrimitive.Label>;

type TSelectSeparatorRef = React.ElementRef<typeof SelectPrimitive.Separator>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TSelectComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectContentRef> & TSelectContentProps
  >;
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectGroupRef> & TSelectGroupProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectItemRef> & TSelectItemProps
  >;
  Label: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectLabelRef> & TSelectLabelProps
  >;
  Root: React.FC<TSelectRootProps>;
  ScrollDownButton: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectScrollDownButtonRef> &
      TSelectScrollDownButtonProps
  >;
  ScrollUpButton: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectScrollUpButtonRef> & TSelectScrollUpButtonProps
  >;
  Separator: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectSeparatorRef> & TSelectSeparatorProps
  >;
  Trigger: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectTriggerRef> & TSelectTriggerProps
  >;
  Value: React.ForwardRefExoticComponent<
    React.RefAttributes<TSelectValueRef> & TSelectValueProps
  >;
};

export type {
  TSelectRootProps,
  TSelectGroupProps,
  TSelectValueProps,
  TSelectTriggerProps,
  TSelectScrollUpButtonProps,
  TSelectScrollDownButtonProps,
  TSelectContentProps,
  TSelectItemProps,
  TSelectLabelProps,
  TSelectSeparatorProps,
  TSelectGroupRef,
  TSelectValueRef,
  TSelectTriggerRef,
  TSelectScrollUpButtonRef,
  TSelectScrollDownButtonRef,
  TSelectContentRef,
  TSelectItemRef,
  TSelectLabelRef,
  TSelectSeparatorRef,
  TSelectComposition,
};
