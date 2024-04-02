import * as React from 'react';

import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-jet-200 bg-white px-3 py-2 text-sm ring-offset-floral-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-jet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jet-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-jet-800 dark:bg-jet-950 dark:ring-offset-jet-950 dark:placeholder:text-jet-400 dark:focus-visible:ring-jet-300',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
