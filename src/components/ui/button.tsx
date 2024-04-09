import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jet-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-jet-950 dark:focus-visible:ring-jet-300',
  {
    variants: {
      variant: {
        default:
          'bg-jet-900 text-jet-50 hover:bg-jet-900/90 dark:bg-jet-50 dark:text-jet-900 dark:hover:bg-jet-50/90',
        destructive:
          'bg-red-500 text-jet-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-jet-50 dark:hover:bg-red-900/90',
        outline:
          'border border-jet-400 bg-white hover:bg-jet-100 hover:text-jet-900 dark:border-jet-800 dark:bg-jet-950 dark:hover:bg-jet-800 dark:hover:text-jet-50',
        secondary:
          'bg-eden-800 text-floral-white hover:bg-eden-700/80 dark:bg-eden-800 dark:text-eden-50 dark:hover:bg-eden-800/80',
        ghost:
          'hover:bg-jet-100 hover:text-jet-900 dark:hover:bg-jet-800 dark:hover:text-jet-50',
        link: 'text-jet-900 underline-offset-4 hover:underline dark:text-jet-50',
        urgent:
          'bg-tainoi-800 text-floral-white hover:bg-tainoi-700/80 dark:bg-tainoi-800 dark:text-tainoi-50 dark:hover:bg-tainoi-800/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
