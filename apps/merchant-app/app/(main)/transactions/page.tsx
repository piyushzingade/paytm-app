
import RequireAuth from "../../../components/RequireAuth";
import TransactionsChart from "../../../components/Transactions";
import { getAllTransactions } from "../../lib/actions/getAllTransactions";




export default async function page() {
  const transaction = await getAllTransactions();

  return (
    <RequireAuth>
      <TransactionsChart initialTransaction={transaction} />
    </RequireAuth>
  );
}