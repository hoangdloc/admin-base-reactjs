'use client';

import * as SheetPrimitive from '@radix-ui/react-dialog';
import { type VariantProps, cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/utils/helpers';

import {
  sheetContentCloseVariants,
  sheetDescriptionVariants,
  sheetFooterVariants,
  sheetHeaderVariants,
  sheetOverlayVariants,
  sheetTitleVariants,
  sheetVariants,
} from './styles';

import type {
  TSheetComposition,
  TSheetContentProps,
  TSheetContentRef,
  TSheetDescriptionProps,
  TSheetDescriptionRef,
  TSheetFooterProps,
  TSheetHeaderProps,
  TSheetOverlayProps,
  TSheetOverlayRef,
  TSheetTitleProps,
  TSheetTitleRef,
} from './types';

const SheetRoot = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<TSheetOverlayRef, TSheetOverlayProps>(
  ({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
      className={cn(sheetOverlayVariants(), className)}
      {...props}
      ref={ref}
    />
  ),
);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<TSheetContentRef, TSheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className={cn(sheetContentCloseVariants())}>
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader: React.FC<TSheetHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(sheetHeaderVariants(), className)}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter: React.FC<TSheetFooterProps> = ({ className, ...props }) => (
  <div
    className={cn(sheetFooterVariants(), className)}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<TSheetTitleRef, TSheetTitleProps>(
  ({ className, ...props }, ref) => (
    <SheetPrimitive.Title
      ref={ref}
      className={cn(sheetTitleVariants(), className)}
      {...props}
    />
  ),
);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  TSheetDescriptionRef,
  TSheetDescriptionProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(sheetDescriptionVariants(), className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const Sheet: TSheetComposition = {
  Close: SheetClose,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Overlay: SheetOverlay,
  Portal: SheetPortal,
  Root: SheetRoot,
  Title: SheetTitle,
  Trigger: SheetTrigger,
};

export { Sheet };
