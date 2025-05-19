import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { AuthOptions } from "next-auth";

export const auth: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.merchant = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        image: token.picture as string,
        upi: token.upi as string,
      };
      return session;
    },
  },
};
 
