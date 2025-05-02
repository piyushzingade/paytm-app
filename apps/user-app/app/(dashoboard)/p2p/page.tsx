import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/authOption";
import prisma from "@repo/db/client";
import { P2pBalanceCard } from "../../../components/p2pBalanceCard";

const getP2pBalance = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.user.id),
    },
  });
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      id: user?.id,
    },
  });

  return transactions.map((t) => ({
    id: t.id,
    amount: t.amount,
    date: t.timestamp,
    toUser : t.toUserId,
}));
}

export default async function() {
    const transactions = await getP2pBalance();
    return (
      <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8  font-bold">
          Send Money to Friends
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
          <div className=" pt-8">
            <SendCard />
          </div>
          <div className="pt-8">
            <P2pBalanceCard transactions={transactions}/>
          </div>
        </div>
      </div>
    );
}