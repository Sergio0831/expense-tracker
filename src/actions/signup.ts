'use server';

import { SignupSchema, SignupSchemaType } from '@/schemas';

export const signup = async (values: SignupSchemaType) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Invalid fields!',
    };
  }
};
