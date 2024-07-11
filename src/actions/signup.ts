'use server';

import prisma from '@/lib/db';
import { hashPassword } from '@/lib/password';
import { getUserByEmail } from '@/lib/utils';
import { SignupSchema, SignupSchemaType } from '@/schemas';

export const signup = async (values: SignupSchemaType) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Invalid fields!',
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await hashPassword(password);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'User exist!' };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification token

  return {
    message: 'User created!',
  };
};
