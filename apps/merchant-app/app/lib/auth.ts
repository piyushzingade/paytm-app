import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { AuthOptions } from "next-auth";
import prisma from "@repo/db/client";

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
          id: merchant.id.toString(), // or keep as number if your app prefers
          name: merchant.name || "",
          email: merchant.email,
          image: token.picture || "", // image from Google/GitHub
          upi: merchant.upiId || "", // correctly referencing your schema
        };
      }

      return session;
    },
  },
};  