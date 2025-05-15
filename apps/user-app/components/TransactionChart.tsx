"use client";
const transactions = [
  {
    id: 1,
    type: "received",
    amount: 500,
    description: "Payment from Client",
    date: "2025-05-06",
  },
  {
    id: 2,
    type: "sent",
    amount: 200,
    description: "Subscription Fee",
    date: "2025-05-05",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
  {
    id: 3,
    type: "received",
    amount: 300,
    description: "Refund from Vendor",
    date: "2025-05-04",
  },
];

import { useState } from "react";

export const TransactionsChart = () => {
  const [filter, setFilter] = useState<"all" | "received" | "sent">("all");

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === filter);

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-6 pl-52">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-[90rem] flex justify-center flex-col">
        <div className="flex items-center space-x-32 justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Recent Transactions
          </h2>
          <div className="space-x-2">
            {["all", "received", "sent"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as "all" | "received" | "sent")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === type
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable transaction list with fixed height */}
        <ul className="space-y-6 overflow-y-auto max-h-[400px] pr-2">
          {filteredTransactions.length === 0 ? (
            <p className="text-center text-gray-500">No transactions found.</p>
          ) : (
            filteredTransactions.map((tx, idx) => (
              <li
                key={`${tx.id}-${idx}`}
                className="flex items-center justify-between border-b pb-5 last:border-none"
              >
                <div className="flex items-center space-x-4 gap-4">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {tx.description}
                    </p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <p
                  className={`text-xl font-semibold ${
                    tx.type === "received" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "received" ? "+" : "-"}₹{tx.amount}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
