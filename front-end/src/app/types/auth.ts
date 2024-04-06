import NextAuth, {
  NextAuthConfig,
} from "../../../node_modules/next-auth/index";
import Google from "../../../node_modules/next-auth/providers/google";

export const config: NextAuthConfig = {
  providers: [Google],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/protected-page") return !!auth;
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const {handlers, auth, signIn, signOut} = NextAuth(config);
