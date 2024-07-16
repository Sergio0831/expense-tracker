'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Form, FormField, FormGroup, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import AuthLink from '@/components/auth/AuthLink';
import { NewPasswordSchema, NewPasswordSchemaType } from '@/schemas';
import { newPassword } from '@/actions/new-password';

const NewPasswordForm = () => {
  const [isPending, setTransition] = useTransition();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const form = useForm<NewPasswordSchemaType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (values: NewPasswordSchemaType) => {
    setTransition(() => {
      newPassword(values, token).then((data) => {
        form.setError('password', { message: data?.error });
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormGroup>
                  <FormLabel formItemId={field.name} error={form.formState.errors.password}>
                    Password
                  </FormLabel>
                  <FormMessage formMessageId={field.name} error={form.formState.errors.password} />
                </FormGroup>
                <Input
                  disabled={isPending}
                  aria-label={field.name}
                  placeholder="******"
                  type="password"
                  id={field.name}
                  error={form.formState.errors.password}
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
            Reset Password
          </Button>
        </form>
      </Form>
      <AuthLink linkHref="/signin" linkLabel="Sign in here" ariaLabel="Sign in" className="mt-8" />
    </Card>
  );
};

export default NewPasswordForm;
