import { Toaster as Sonner } from 'sonner';

type TToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster: React.FC<TToasterProps> = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      theme="light"
      toastOptions={{
        classNames: {
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          description: 'group-[.toast]:text-muted-foreground',
          error:
            'group-[.toaster]:bg-background group-[.toaster]:text-destructive group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          info: 'group-[.toaster]:bg-background group-[.toaster]:text-info group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          success:
            'group-[.toaster]:bg-background group-[.toaster]:text-success group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          warning:
            'group-[.toaster]:bg-background group-[.toaster]:text-warning group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        },
      }}
      {...props}
    />
  );
};
Toaster.displayName = 'Toaster';

export { Toaster };
