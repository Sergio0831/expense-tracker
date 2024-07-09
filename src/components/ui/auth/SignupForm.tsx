'use client';

import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Card from '@/components/Card';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Form, FormField, FormGroup, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { SignupSchema, SignupSchemaType } from '@/schemas';
import { signup } from '@/actions/signup';

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
      signup(values);
      form.reset();
    });
  };

  return (
    <Card
      className="mx-auto -mt-10 relative"
      linkLabel="Sign in here"
      linkText="Already have an account?"
      linkHref="/signin"
      showSocial>
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
    </Card>
  );
};

export default SignupForm;
