'use client';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'transition-shadow transition-colors flex-center font-semibold text-base block py-3 focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gradient:
          'text-white shadow-custom-md bg-gradient-to-b from-light-teal from-0% to-dark-teal to-100% hover:shadow-custom-lg',
        transparent: 'border border-ring hover:bg-mint-green',
      },
      size: {
        large: 'h-16 rounded-large text-lg',
        medium: 'rounded-xsmall h-10 sm:h-12 text-base',
      },
    },
    defaultVariants: {},
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ children, className, variant, size, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ className, variant, size }))} {...props}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };
