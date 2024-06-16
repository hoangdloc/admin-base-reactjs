import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import {
  avatarFallbackVariants,
  avatarImageVariants,
  avatarVariants,
} from './styles';

import type {
  TAvatarFallbackProps,
  TAvatarFallbackRef,
  TAvatarImageProps,
  TAvatarImageRef,
  TAvatarRootProps,
  TAvatarRootRef,
} from './types';

const AvatarRoot = React.forwardRef<TAvatarRootRef, TAvatarRootProps>(
  ({ className, shape = 'circle', size = 'md', ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ shape, size }), className)}
      {...props}
    />
  ),
);
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<TAvatarImageRef, TAvatarImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn(avatarImageVariants(), className)}
      {...props}
    />
  ),
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  TAvatarFallbackRef,
  TAvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants(), className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
};

export { Avatar };
