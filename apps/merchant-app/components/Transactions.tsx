// apps/merchant-app/components/transactionsChart.tsx
"use client";

import { useState } from "react";

interface Transaction {
  id: string;
  amount: number;
  date: string;
  fromUserId: string;
  merchantId: string;
}

export default function TransactionsChart({
  initialTransaction,
}: {
  initialTransaction: Transaction[];
}) {
  const [transactions, setTransactions] = useState<Transaction[]>(
    initialTransaction || []
  );
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState<string | null>(null);

  if (loading) {
    return <div className="">Loading, please wait a moment...</div>;
  }

  return (
    <div className="p-4">
      {transactions.length === 0 ? (
        <p className="text-center text-gray-500">No transactions found.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className="flex items-center justify-between border-b pb-5 last:border-none"
            >
              <div className="flex items-center space-x-4 gap-4">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    ₹{tx.amount} from UserId {tx.fromUserId} 
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(tx.date).toLocaleString()}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
