import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    merchant: {
      id: string;
      email: string;
      image: string;
      name: string;
    };
    user : {
      id: string;
      email: string;
      image: string;
      name: string;
    }
  }

  interface User {
    id: string;
    email: string;
    image: string;
    name: string;
  }

  interface JWT {
    merchant?: {
      id: string;
      email: string;
      image: string;
      name: string;
    };
  }
}
