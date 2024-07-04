import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/lib/db';
import { verifyPassword } from '@/lib/password';
import { LoginSchemaType } from 'schemas';

export const { signIn, signOut, auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: LoginSchemaType) => {
        let user = null;

        user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          throw new Error("You havent't register yet");
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return user;
      },
    }),
  ],
});
