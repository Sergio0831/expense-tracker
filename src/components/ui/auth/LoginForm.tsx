'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Form, FormField, FormGroup, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { LoginSchema, LoginSchemaType } from '@/schemas';
import { login } from '@/actions/login';

const LoginForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginSchemaType) => {
    setTransition(() => {
      login(values);
      form.reset();
    });
  };

  return (
    <Card
      className="mx-auto -mt-10 relative"
      linkLabel="Create an account"
      linkHref="/signup"
      showSocial>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="sm:mb-8 mb-7">
                <FormGroup>
                  <FormLabel formItemId={field.name} error={form.formState.errors.password}>
                    Password
                  </FormLabel>
                  <FormMessage formMessageId={field.name} error={form.formState.errors.password} />
                </FormGroup>
                <Input
                  disabled={isPending}
                  aria-label={field.name}
                  placeholder="********"
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
            Login
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default LoginForm;
