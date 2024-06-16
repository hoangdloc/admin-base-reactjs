import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import { radioGroupItemVariants, radioGroupRootVariants } from './styles';

import type {
  TRadioGroupComposition,
  TRadioGroupItemProps,
  TRadioGroupItemRef,
  TRadioGroupRootProps,
  TRadioGroupRootRef,
} from './types';

const RadioGroupRoot = React.forwardRef<
  TRadioGroupRootRef,
  TRadioGroupRootProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupRootVariants(), className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  TRadioGroupItemRef,
  TRadioGroupItemProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants(), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroup: TRadioGroupComposition = {
  Item: RadioGroupItem,
  Root: RadioGroupRoot,
};

export { RadioGroup };
