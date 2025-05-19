import { SendCard } from "../../../components/SendCard";

import { P2pBalanceCard } from "../../../components/p2pBalanceCard";
import { getUserTransactions } from "../../lib/actions/transactions";

export default async function Page() {
  const transaction = await getUserTransactions();

  return (
    <div className="w-full px-4 md:px-8 py-8">
      <h1 className="text-3xl md:text-4xl text-[#6a51a6] font-bold text-center mb-8">
        Send Money to Friends
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full">
          <SendCard />
        </div>

        <div className="w-full">
          <P2pBalanceCard transactions={transaction} />
        </div>
      </div>
    </div>
  );
}
