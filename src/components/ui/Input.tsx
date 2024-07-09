import * as React from 'react';
import { cn } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        aria-invalid={!!error}
        className={cn(
          error ? 'focus-visible:ring-destructive' : 'focus-visible:ring-ring',
          'flex sm:h-12 h-10 w-full rounded-xsmall text-medium-teal border bg-background px-4 py-2 text-sm sm:text-base placeholder:text-muted transition-shadow ring-offset-background focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
