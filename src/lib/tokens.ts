import { uuid } from 'uuidv4';
import { getPasswordResetTokenByEmail } from './password-reset-token';
import prisma from './db';
import { PasswordResetToken } from '@prisma/client';

export const generatePasswordResetToken = async (email: string): Promise<PasswordResetToken> => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};
