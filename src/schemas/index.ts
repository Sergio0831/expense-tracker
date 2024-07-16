import { object, string, z } from 'zod';

export const LoginSchema = object({
  email: string().min(1, 'Email is required').email({ message: 'Invalid email' }),
  password: string().min(1, { message: 'Password is required' }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const SignupSchema = object({
  name: string().min(1, { message: 'Name is required' }),
  email: string().min(1, 'Email is required').email({ message: 'Invalid email' }),
  password: string().min(1, 'Password is required').min(6, 'Minimum 6 characters required'),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;

export const ResetSchema = object({
  email: string().min(1, 'Email is required').email({ message: 'Invalid email' }),
});

export type ResetSchemaType = z.infer<typeof ResetSchema>;

export const NewPasswordSchema = object({
  password: string().min(1, 'Password is required').min(6, 'Minimum 6 characters required'),
});

export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;
