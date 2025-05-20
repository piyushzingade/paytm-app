// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    merchant?: {
      id: string;
      name: string;
      email: string;
      image?: string;
      upi?: string;
    };
  }

  interface User {
    id?: string;
  }

  interface JWT {
    email?: string;
    name?: string;
    picture?: string;
  }
}
