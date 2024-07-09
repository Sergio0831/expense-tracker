import { cn } from '@/lib/utils';
import * as React from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldPath,
  FieldValues,
  FormProvider,
} from 'react-hook-form';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('mb-5 sm:mb-6', className)} {...props} />
    </FormItemContext.Provider>
  );
};

const FormGroup = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex justify-between mb-3', className)} {...props} />;
};

interface FormLabelProps extends React.HtmlHTMLAttributes<HTMLLabelElement> {
  error?: FieldError;
  formItemId: string;
}

const FormLabel = ({ className, error, formItemId, ...props }: FormLabelProps) => {
  return (
    <label
      htmlFor={formItemId}
      className={cn(
        error ? 'text-destructive' : 'text-dark-grey',
        'block font-medium text-sm sm:text-base',
      )}
      {...props}
    />
  );
};

interface FormMessageProps extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  error?: FieldError;
  formMessageId: string;
}

const FormMessage = ({ className, error, children, formMessageId, ...props }: FormMessageProps) => {
  const body = error ? String(error?.message) : children;

  return (
    <p className={cn('font-medium text-destructive text-sm sm:text-base', className)} {...props}>
      {body}
    </p>
  );
};

export { Form, FormField, FormItem, FormGroup, FormLabel, FormMessage };
