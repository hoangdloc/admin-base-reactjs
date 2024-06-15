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
// Composition
// ---------------------------------------–-------------------------------------

type TAvatarComposition = {
  Fallback: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AvatarPrimitive.Fallback>> &
      TAvatarFallbackProps
  >;
  Image: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AvatarPrimitive.Image>> &
      TAvatarImageProps
  >;
  Root: React.ForwardRefExoticComponent<
    React.RefAttributes<React.ElementRef<typeof AvatarPrimitive.Root>> &
      TAvatarRootProps
  >;
};

export type {
  TAvatarRootProps,
  TAvatarImageProps,
  TAvatarFallbackProps,
  TAvatarComposition,
};
