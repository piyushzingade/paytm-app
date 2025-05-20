// lib/transactions.ts
import { getServerSession } from "next-auth";

import prisma from "@repo/db/client";
import { authOptions } from "../authOption";

export const getUserTransactions = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return [];

  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session.user.id),
    },
    orderBy: {
      timestamp: "desc",
    },
  });

  return transactions.map((t) => ({
    id: t.id,
    amount: t.amount,
    date: t.timestamp,
    toUser: t.toUserId,
    toMerchant: t.toMerchantId,
  }));
};

type TransactionType = "sent" | "received";

export async function getUserTransactionsForChart() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ? Number(session.user.id) : null;
  if (!userId) return [];

  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      OR: [{ fromUserId: userId }, { toUserId: userId }],
    },
    orderBy: { timestamp: "desc" },
  });

  return transactions.map((tx) => {
    const type: TransactionType =
      tx.fromUserId === userId ? "sent" : "received";
    return {
      id: tx.id,
      type,
      amount: tx.amount / 100,
      description:
        type === "sent"
          ? `Sent to User ${tx.toUserId}`
          : `Received from User ${tx.fromUserId}`,
      date: tx.timestamp?.toISOString().split("T")[0] ?? "", // ensures string
    };
  });
}
