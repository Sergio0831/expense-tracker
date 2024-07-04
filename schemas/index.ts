import { object, string, z } from 'zod';

export const LoginSchema = object({
  email: string({ required_error: 'Email is required' }).email('Invalid mail'),
  password: string({ required_error: 'Password is required' }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
