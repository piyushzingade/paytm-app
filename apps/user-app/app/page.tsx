import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/authOption";
// Adjust the path if needed

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/home");
  }

  redirect("/signup");
}
