import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@repo/db/client";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.password) {
          return null;
        }

        // Lookup user
        const existingUser = await prisma.user.findFirst({
          where: { number: credentials.phone },
        });

        if (existingUser) {
          const passwordValid = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValid) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name ?? "User",
              email: existingUser.number,
            };
          }
          return null;
        }

        // Register new user
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
            email: newUser.number,
          };
        } catch (error) {
          console.error("User creation failed:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",

  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
