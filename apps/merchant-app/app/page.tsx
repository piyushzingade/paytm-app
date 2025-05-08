import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "./lib/auth";


export default async function Page() {
  const session = await getServerSession(auth);
  if (session?.user) {
    redirect("/home");
  } else {
    redirect("/api/auth/signin");
  }
}
