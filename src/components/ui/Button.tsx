'use client';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'text-white font-regular text-sm block focus:outline-none focus:ring-light-teal',
  {
    variants: {
      variant: {
        gradient:
          'font-semibold transition-shadow shadow-custom-md bg-gradient-to-b from-light-teal to-dark-teal hover:shadow-custom-lg focus:ring-2',
      },
      size: {
        large: 'max-w-[22.5rem] w-full h-16 rounded-large text-lg',
        medium: 'w-full rounded-xsmall h-10 text-base',
      },
    },
    defaultVariants: {},
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = ({ children, className, variant, size }: ButtonProps) => {
  return <button className={cn(buttonVariants({ className, variant, size }))}>{children}</button>;
};

export { Button, buttonVariants };
