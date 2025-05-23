import prisma from "@repo/db/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOption";
import RequireAuth from "../../../components/RequireAuth";


export async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.userBalance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
    orderBy: {
      startTime: "desc",
    },
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    id: t.id,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function () {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions(); 

  return (
    <RequireAuth>
      <div className="w-full">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Add Amount to Your Wallet
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
          <div>
            <AddMoney />
          </div>
          <div>
            <BalanceCard amount={balance.amount} locked={balance.locked} />
            <div className="pt-4">
              <OnRampTransactions transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
