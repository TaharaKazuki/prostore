import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';

import { prisma } from '@/db/prisma';

export const config = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in',
  },
  session: {
    strategy: 'jwt' as const,
    masAge: 30 * 24 * 60 * 60, // 30days
  },
  adapter: PrismaAdapter(prisma),
  provider,
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
