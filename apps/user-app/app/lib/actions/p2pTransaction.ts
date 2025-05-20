"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../authOption";
import prisma from "@repo/db/client";

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

  // Find both user and merchant with the same number
  const [toUser, toMerchant] = await Promise.all([
    prisma.user.findFirst({ where: { number: to } }),
    prisma.merchant.findFirst({ where: { number: to } }),
  ]);

  if (!toUser && !toMerchant) {
    return {
      success: false,
      message: "Recipient user or merchant not found.",
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      // Lock sender's balance row
      await tx.$queryRaw`SELECT * FROM "UserBalance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

      const fromBalance = await tx.userBalance.findUnique({
        where: { userId: Number(from) },
      });

      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient balance");
      }

      // Deduct from sender
      await tx.userBalance.update({
        where: { userId: Number(from) },
        data: { amount: { decrement: amount } },
      });

      // Credit to user (create balance if needed)
      if (toUser) {
        let toUserBalance = await tx.userBalance.findUnique({
          where: { userId: toUser.id },
        });

        if (!toUserBalance) {
          await tx.userBalance.create({
            data: {
              userId: toUser.id,
              amount: amount,
            },
          });
        } else {
          await tx.userBalance.update({
            where: { userId: toUser.id },
            data: { amount: { increment: amount } },
          });
        }
      }

      // Credit to merchant (create balance if needed)
      if (toMerchant) {
        let toMerchantBalance = await tx.merchantBalance.findUnique({
          where: { merchantId: toMerchant.id },
        });

        if (!toMerchantBalance) {
          await tx.merchantBalance.create({
            data: {
              merchantId: toMerchant.id,
              amount: amount,
            },
          });
        } else {
          await tx.merchantBalance.update({
            where: { merchantId: toMerchant.id },
            data: { amount: { increment: amount } },
          });
        }
      }

      // Create transaction record
      await tx.p2pTransfer.create({
        data: {
          fromUserId: Number(from),
          toUserId: toUser ? toUser.id : null,
          toMerchantId: toMerchant ? toMerchant.id : null,
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
