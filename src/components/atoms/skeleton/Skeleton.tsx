import { cn } from '@/utils/helpers';

const Skeleton: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
};
Skeleton.displayName = 'Skeleton';

export { Skeleton };
