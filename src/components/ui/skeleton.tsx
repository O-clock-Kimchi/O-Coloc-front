import { cn } from '../../lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-jet-100 dark:bg-jet-800',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
