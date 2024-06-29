import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import {
  sliderRangeVariants,
  sliderRootVariants,
  sliderThumbVariants,
  sliderTrackVariants,
} from './styles';

import type { TSliderProps, TSliderRef } from './types';

const Slider = React.forwardRef<TSliderRef, TSliderProps>(
  ({ className, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(sliderRootVariants(), className)}
      {...props}
    >
      <SliderPrimitive.Track className={cn(sliderTrackVariants())}>
        <SliderPrimitive.Range className={cn(sliderRangeVariants())} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={cn(sliderThumbVariants())} />
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
