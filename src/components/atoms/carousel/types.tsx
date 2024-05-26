/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/member-ordering */
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';

import { Button } from '@/components/atoms/button';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TCarouselApi = UseEmblaCarouselType[1];
type TUseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type TCarouselOptions = TUseCarouselParameters[0];
type TCarouselPlugin = TUseCarouselParameters[1];

type TCarouselProps = {
  opts?: TCarouselOptions;
  plugins?: TCarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: TCarouselApi) => void;
};

type TCarouselContextProps = TCarouselProps & {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

type TCarouselRootProps = React.HTMLAttributes<HTMLDivElement> & TCarouselProps;

type TCarouselContentProps = React.HTMLAttributes<HTMLDivElement>;

type TCarouselItemProps = React.HTMLAttributes<HTMLDivElement>;

type TCarouselPreviousProps = React.ComponentProps<typeof Button>;

type TCarouselNextProps = React.ComponentProps<typeof Button>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TCarouselComposition = {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCarouselContentProps
  >;
  Item: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCarouselItemProps
  >;
  Next: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLButtonElement> & TCarouselNextProps
  >;
  Previous: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLButtonElement> & TCarouselPreviousProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<HTMLDivElement> & TCarouselRootProps
  >;
};

export type {
  TCarouselApi,
  TCarouselProps,
  TCarouselContextProps,
  TCarouselRootProps,
  TCarouselContentProps,
  TCarouselItemProps,
  TCarouselPreviousProps,
  TCarouselNextProps,
  TCarouselComposition,
};
