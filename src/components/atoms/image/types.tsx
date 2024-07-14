// ---------------------------------------–-------------------------------------
// Component props
// ---------------------------------------–-------------------------------------

type TImageProps = React.ComponentPropsWithoutRef<'img'> & {
  showErrorFallback?: boolean;
  wrapperClassName?: string;
};

// ---------------------------------------–-------------------------------------
// Component refs
// ---------------------------------------–-------------------------------------

type TImageRef = React.ElementRef<'img'>;

export type { TImageProps, TImageRef };
