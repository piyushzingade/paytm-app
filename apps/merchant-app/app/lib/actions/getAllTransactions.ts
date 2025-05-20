import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { auth } from "../auth";

export const getAllTransactions = async () => {
  const session = await getServerSession(auth);

  if (!session?.merchant?.id) return [];

  const transaction = await prisma.p2pTransfer.findMany({
    where: {
      toMerchantId: Number(session.merchant.id),
    },
    orderBy: {
      timestamp: "desc",
    },
  });

  return transaction.map((t) => ({
    id: t.id.toString(),
    amount: t.amount,
    date: t.timestamp.toISOString(), // convert Date to string
    fromUserId: t.fromUserId.toString(),
    merchantId: t.toMerchantId?.toString() || "", // handle null
  }));
};
