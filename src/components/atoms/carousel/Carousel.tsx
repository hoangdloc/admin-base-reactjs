/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-shadow */

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/atoms';
import { cn } from '@/utils/helpers';

import {
  carouselContentVariant,
  carouselItemVariants,
  carouselNextVariants,
  carouselPreviousVariants,
  carouselRootVariant,
} from './styles';

import type {
  TCarouselApi,
  TCarouselComposition,
  TCarouselContentProps,
  TCarouselContextProps,
  TCarouselItemProps,
  TCarouselNextProps,
  TCarouselPreviousProps,
  TCarouselRootProps,
} from './types';

const CarouselContext = React.createContext<TCarouselContextProps | null>(null);

function useCarousel(): TCarouselContextProps {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const CarouselRoot = React.forwardRef<HTMLDivElement, TCarouselRootProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: TCarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return (): void => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          aria-roledescription="carousel"
          className={cn(carouselRootVariant(), className)}
          role="region"
          onKeyDownCapture={handleKeyDown}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
CarouselRoot.displayName = 'CarouselRoot';

const CarouselContent = React.forwardRef<HTMLDivElement, TCarouselContentProps>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div
        ref={carouselRef}
        className="overflow-hidden"
      >
        <div
          ref={ref}
          className={cn(carouselContentVariant({ orientation }), className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<HTMLDivElement, TCarouselItemProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        aria-roledescription="slide"
        className={cn(carouselItemVariants({ orientation }), className)}
        role="group"
        {...props}
      />
    );
  },
);
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  TCarouselPreviousProps
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      className={cn(carouselPreviousVariants({ orientation }), className)}
      disabled={!canScrollPrev}
      size={size}
      variant={variant}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="size-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<HTMLButtonElement, TCarouselNextProps>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        className={cn(carouselNextVariants({ orientation }), className)}
        disabled={!canScrollNext}
        size={size}
        variant={variant}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="size-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = 'CarouselNext';

const Carousel: TCarouselComposition = {
  Content: CarouselContent,
  Item: CarouselItem,
  Next: CarouselNext,
  Previous: CarouselPrevious,
  Root: CarouselRoot,
};

export { Carousel };
