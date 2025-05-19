import RequireAuth from "../../../components/RequireAuth";
import { TransactionsChart } from "../../../components/TransactionChart";
import { getUserTransactionsForChart } from "../../lib/actions/transactions";


export default async function Page() {
  const transactions = await getUserTransactionsForChart();

  return (
    <RequireAuth>
      <TransactionsChart initialTransactions={transactions} />
    </RequireAuth>
  );
}
