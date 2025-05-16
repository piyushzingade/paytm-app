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
  }));
};
