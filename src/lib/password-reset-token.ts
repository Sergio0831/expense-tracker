import prisma from './db';

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passworResetdToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    return passworResetdToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passworResetdToken = await prisma.passwordResetToken.findFirst({
      where: { email },
    });

    return passworResetdToken;
  } catch {
    return null;
  }
};
