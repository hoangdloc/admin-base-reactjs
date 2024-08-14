import { CircleAlert } from 'lucide-react';
import React, { useState } from 'react';

import { cn } from '@/libs/utils/helpers';

import { Skeleton } from '../skeleton';

import {
  imageVariants,
  imageWrapperVariants,
  skeletonVariants,
} from './styles';

import type { TImageProps, TImageRef } from './types';

const Image = React.forwardRef<TImageRef, TImageProps>(
  (
    {
      showErrorFallback = true,
      wrapperClassName,
      className,
      alt,
      onLoad,
      onError,
      loading = 'lazy',
      ...props
    },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    return (
      <figure className={cn(imageWrapperVariants(), wrapperClassName)}>
        {isError ? (
          <CircleAlert className="size-6 text-muted-foreground" />
        ) : (
          <img
            ref={ref}
            alt={alt}
            className={cn(imageVariants(), className)}
            loading={loading}
            onError={(e) => {
              setIsLoaded(true);
              showErrorFallback && setIsError(true);
              onError?.(e);
            }}
            onLoad={(e) => {
              setIsLoaded(true);
              onLoad?.(e);
            }}
            {...props}
            data-loaded={isLoaded}
          />
        )}
        {!isLoaded && <Skeleton className={skeletonVariants()} />}
      </figure>
    );
  },
);
Image.displayName = 'Image';

export { Image };
