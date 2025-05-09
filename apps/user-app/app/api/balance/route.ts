// app/api/balance/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@repo/db/client";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });

  if (!token || !token.sub) {
    return NextResponse.json(
      { message: "You are not logged in" },
      { status: 401 }
    );
  }

  const userId = Number(token.sub);

  const balance = await prisma.balance.findFirst({
    where: { userId },
  });

  const amount = balance?.amount || 0;
  const locked = balance?.locked || 0;

  return NextResponse.json({
    amount,
    locked,
    labels: ["Balance", "Locked"],
    datasets: [
      {
        label: "Balance",
        data: [amount, locked],
        backgroundColor: ["#4ade80", "#f87171"],
        borderWidth: 1,
      },
    ],
  });
}
