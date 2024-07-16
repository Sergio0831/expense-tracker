'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Form, FormField, FormGroup, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import AuthLink from '@/components/auth/AuthLink';
import { ResetSchema, ResetSchemaType } from '@/schemas';
import { reset } from '@/actions/reset';

const ResetForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<ResetSchemaType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: ResetSchemaType) => {
    setTransition(() => {
      reset(values).then((data) => {
        form.setError('email', { message: data?.error });
        if (!data?.error) {
          form.reset();
        }
      });
    });
  };

  return (
    <Card className="mx-auto -mt-10 relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormGroup>
                  <FormLabel formItemId={field.name} error={form.formState.errors.email}>
                    Email Address
                  </FormLabel>
                  <FormMessage formMessageId={field.name} error={form.formState.errors.email} />
                </FormGroup>
                <Input
                  disabled={isPending}
                  aria-label={field.name}
                  placeholder="john.doe@mail.com"
                  type="email"
                  id={field.name}
                  error={form.formState.errors.email}
                  {...field}
                />
              </FormItem>
            )}
          />
          <Button
            disabled={isPending}
            className="w-full"
            variant="gradient"
            size="medium"
            type="submit"
            aria-label="Submit Form">
            Send reset email
          </Button>
        </form>
      </Form>
      <AuthLink linkHref="/signin" linkLabel="Sign in here" ariaLabel="Sign in" className="mt-8" />
    </Card>
  );
};

export default ResetForm;
