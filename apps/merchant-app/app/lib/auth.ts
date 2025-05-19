import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { AuthOptions } from "next-auth";
import prisma from "@repo/db/client"; // Make sure path is correct

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
    async jwt({ token, account, profile }) {
      // Runs on sign-in or session refresh
      if (account && profile) {
        const email = profile.email;

        const merchant = await prisma.merchant.findUnique({
          where: { email: email || "" },
        });

        if (merchant) {
          token.merchant = {
            id: merchant.id,
            email: merchant.email,
            // image: merchant.image ?? "",
            name: merchant.name ?? "",
          };
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token.merchant) {
        session.merchant = token.merchant as {
          id: string;
          email: string;
          image: string;
          name: string;
        };
      }
      return session;
    },
  },
};
