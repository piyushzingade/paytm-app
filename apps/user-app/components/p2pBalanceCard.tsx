"use client";

import { Card } from "@repo/ui/card";
import { useState } from "react";

export const P2pBalanceCard = ({
  transactions,
}: {
  transactions: {
    id: number;
    amount: number;
    date: Date;
    toUser: number | null;
    toMerchant: number | null;
  }[];
}) => {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="w-full">
      <Card title={<div className="text-center">Transaction History</div>}>
        <div className="p-4 space-y-4">
          {transactions.length === 0 ? (
            <p className="text-center text-gray-500">No transactions found.</p>
          ) : (
            transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="border-b pb-2 last:border-none"
              >
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Amount: </span>₹
                  {transaction.amount / 100}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Date: </span>
                  {new Date(transaction.date).toDateString()}
                </div>
                {transaction.toUser !== null && (
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">To User ID: </span>
                    {transaction.toUser}
                  </div>
                )}
                {transaction.toMerchant !== null && (
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">To Merchant ID: </span>
                    {transaction.toMerchant}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};
