import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { AuthOptions } from "next-auth";
import prisma from "@repo/db/client";

export const auth: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      const merchant = await prisma.merchant.findUnique({
        where: {
          email: token.email as string,
        },
      });

      if (merchant) {
        session.merchant = {
          id: merchant.id.toString(),
          name: merchant.name || "",
          email: merchant.email,
          image: token.picture || "",
          upi: merchant.upiId || "",
        };
      }

      return session;
    },
  },
  // 👇 Add this
  pages: {
    signIn: "/dashboard", // App router route
    signOut: "/login",
    newUser: "/dashboard", // ✅ This is where users are sent after first sign-in
  },
};
