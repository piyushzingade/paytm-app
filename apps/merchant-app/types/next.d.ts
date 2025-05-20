import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    merchant: {
      id: string;
      email: string;
      image: string;
      name: string;
      upi : string
    };
  }

  interface JWT {
    id?: string;
    email?: string;
    picture?: string;
    name?: string;
    upi? : string
    image?: string;
  }
}
