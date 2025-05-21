import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@repo/db/client"; // Adjust path if needed

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text", placeholder: "1234567890" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findFirst({
          where: { number: credentials.phone },
        });

        if (user) {
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isValid) {
            return {
              id: user.id.toString(),
              name: user.name ?? "User",
              phone: user.number,
            };
          }
          return null;
        }

        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        try {
          const newUser = await prisma.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });

          return {
            id: newUser.id.toString(),
            name: newUser.name ?? "User",
            phone: newUser.number,
          };
        } catch (error) {
          console.error("Error creating user:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin", // App router route
  },
  secret: process.env.NEXTAUTH_SECRET || "",

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days

  },

  jwt:{
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        (session.user as any).phone = token.phone;
      }
      return session;
    },
    
  },
};
