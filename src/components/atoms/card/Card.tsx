import * as React from 'react';

import { cn } from '@/libs/utils/helpers';

import {
  cardContentVariants,
  cardDescriptionVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardRootVariants,
  cardTitleVariants,
} from './styles';

import type {
  TCardComposition,
  TCardContentProps,
  TCardDescriptionProps,
  TCardFooterProps,
  TCardHeaderProps,
  TCardRootProps,
} from './types';

const CardRoot = React.forwardRef<HTMLDivElement, TCardRootProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardRootVariants(), className)}
      {...props}
    />
  ),
);
CardRoot.displayName = 'CardRoot';

const CardHeader = React.forwardRef<HTMLDivElement, TCardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants(), className)}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(cardTitleVariants(), className)}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  TCardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(cardDescriptionVariants(), className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, TCardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants(), className)}
      {...props}
    />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, TCardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants(), className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

const Card: TCardComposition = {
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Root: CardRoot,
  Title: CardTitle,
};

export { Card };
