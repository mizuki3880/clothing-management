import { db } from "lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    // async signIn({ user }) {
    //   const exisitingUser = await getUserById(user.id);

    //   if (!exisitingUser || !exisitingUser.emailVerified) {
    //     return false;
    //   }
    //   return true;
    // },
    async session({ token, session }) {
      console.log({ sessionToken: token, session });

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      session.user.customField = "anything";

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const exisitingUser = await getUserById(token.sub);

      if (!exisitingUser) return token;

      token.role = exisitingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
