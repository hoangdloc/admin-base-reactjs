import type * as SliderPrimitive from '@radix-ui/react-slider';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TSliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TSliderRef = React.ElementRef<typeof SliderPrimitive.Root>;

export type { TSliderProps, TSliderRef };
