'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Card from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Form, FormField, FormGroup, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { SignupSchema, SignupSchemaType } from '@/schemas';
import { signup } from '@/actions/signup';
import Social from '@/components/Social';
import AuthLink from '@/components/auth/AuthLink';

const SignupForm = () => {
  const [isPending, setTransition] = useTransition();

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: SignupSchemaType) => {
    setTransition(() => {
      signup(values).then((data) => {
        form.setError('email', { message: data.error });

        if (!data.error) {
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormGroup>
                  <FormLabel formItemId={field.name} error={form.formState.errors.name}>
                    Name
                  </FormLabel>
                  <FormMessage formMessageId={field.name} error={form.formState.errors.name} />
                </FormGroup>
                <Input
                  disabled={isPending}
                  aria-label={field.name}
                  placeholder="John Doe"
                  type="text"
                  id={field.name}
                  error={form.formState.errors.name}
                  {...field}
                />
              </FormItem>
            )}
          />
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
            Signup
          </Button>
        </form>
      </Form>
      <Social />
      <AuthLink
        text="Already have an account?"
        linkLabel="Sign in here"
        linkHref="/signin"
        ariaLabel="Sign in here"
        className="mt-8"
      />
    </Card>
  );
};

export default SignupForm;
