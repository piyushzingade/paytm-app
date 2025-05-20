// /app/api/update-profile/route.ts
import { NextResponse } from "next/server";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOption";


export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, email } = await req.json();

  const updatedUser = await prisma.user.update({
    where: { id: Number(session.user.id) },
    data: { name, email },
  });

  return NextResponse.json(updatedUser);
}
