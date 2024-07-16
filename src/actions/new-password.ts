'use server';

import prisma from '@/lib/db';
import { hashPassword } from '@/lib/password';
import { getPasswordResetTokenByToken } from '@/lib/password-reset-token';
import { getUserByEmail } from '@/lib/utils';
import { NewPasswordSchema, NewPasswordSchemaType } from '@/schemas';

export const newPassword = async (values: NewPasswordSchemaType, token: string | null) => {
  if (!token) {
    return { error: 'Missing token!' };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: 'Invalid token!' };
  }

  const isExpired = new Date(existingToken.expires) < new Date();

  if (isExpired) {
    return { error: 'Token has expired!' };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'Email does not exist!' };
  }

  const hashedPassword = await hashPassword(password);

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  await prisma.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Password updated!' };
};
