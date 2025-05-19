"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authOption";
import prisma from "@repo/db/client";
// import { z } from "zod";

export async function p2pTransfer(
  to: string,
  amount: number
): Promise<{ success: boolean; message: string }> {
  const session = await getServerSession(authOptions);
  const from = session?.user?.id;

  if (!from) {
    return {
      success: false,
      message: "User not authenticated.",
    };
  }

  const toUser = await prisma.user.findFirst({
    where: { number: to },
  });

  if (!toUser) {
    return {
      success: false,
      message: "Recipient user not found.",
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT * FROM "UserBalance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

      const fromBalance = await tx.userBalance.findUnique({
        where: { userId: Number(from) },
      });

      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient balance");
      }

      await tx.userBalance.update({
        where: { userId: Number(from) },
        data: { amount: { decrement: amount } },
      });

      await tx.userBalance.update({
        where: { userId: toUser.id },
        data: { amount: { increment: amount } },
      });

      await tx.p2pTransfer.create({
        data: {
          fromUserId: Number(from),
          toUserId: toUser.id,
          amount,
          timestamp: new Date(),
        },
      });
    });

    return {
      success: true,
      message: "Transfer successful!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Transfer failed due to unknown error.",
    };
  }
}
