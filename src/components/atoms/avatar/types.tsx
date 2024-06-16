import type { avatarVariants } from './styles';
import type * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantProps } from 'class-variance-authority';

// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TAvatarRootProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> &
  VariantProps<typeof avatarVariants>;

type TAvatarImageProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
>;

type TAvatarFallbackProps = React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;

// ---------------------------------------–-------------------------------------
// Component ref
// ---------------------------------------–-------------------------------------

type TAvatarFallbackRef = React.ElementRef<typeof AvatarPrimitive.Fallback>;

type TAvatarImageRef = React.ElementRef<typeof AvatarPrimitive.Image>;

type TAvatarRootRef = React.ElementRef<typeof AvatarPrimitive.Root>;

// ---------------------------------------–-------------------------------------
// Composition
// ---------------------------------------–-------------------------------------

type TAvatarComposition = {
  Fallback: React.ForwardRefExoticComponent<
    React.RefAttributes<TAvatarFallbackRef> & TAvatarFallbackProps
  >;
  Image: React.ForwardRefExoticComponent<
    React.RefAttributes<TAvatarImageRef> & TAvatarImageProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<TAvatarRootRef> & TAvatarRootProps
  >;
};

export type {
  TAvatarRootProps,
  TAvatarImageProps,
  TAvatarFallbackProps,
  TAvatarFallbackRef,
  TAvatarImageRef,
  TAvatarRootRef,
  TAvatarComposition,
};
