"use client";

import { Button } from "@repo/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
 // or use a regular <button>

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 h-full">
        <p className="text-xl text-[#6a51a6] font-medium">
          You are not logged in
        </p>
        <Button
          className="border border-slate-500 text-slate-700 bg-transparent p-2 px-10 rounded-xl hover:text-white hover:bg-[#6a51a6] "
          onClick={() => router.push("/signin")}
        >
          Go to Login
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
