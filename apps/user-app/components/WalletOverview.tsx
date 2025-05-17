"use client";

import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { useEffect, useState } from "react";
import axios from "axios";
import { get } from "http";
import { getUserTransactionsForChart } from "../app/lib/actions/transactions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);


interface BalanceData {
  amount: number;
  locked: number;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
}


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
];

const monthlySpendingData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Monthly Spending",
      data: [1200, 950, 1100, 1300],
      fill: false,
      borderColor: "#f59e0b",
      tension: 0.3,
    },
  ],
};

const spendingData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Spending",
      data: [200, 450, 300, 150, 500, 100, 400],
      fill: false,
      borderColor: "#3b82f6",
      tension: 0.3,
    },
  ],
};

export default  function WalletOverview() {
  // const transactions1 =  getUserTransactionsForChart();
  const [balance, setBalance] = useState<BalanceData | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get("/api/balance");
        setBalance(response.data);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  if (!balance) {
    return <div className="w-full">Loading...</div>;
  }

  const doughnutData = {
    labels: balance.labels,
    datasets: balance.datasets,
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-[#6a51a6]  border-b">
        Wallet Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="bg-white shadow-md rounded-xl p-4 w-full">
          <h2 className="text-lg font-semibold mb-2">Balance Breakdown</h2>
          <Doughnut data={doughnutData} />
          <p className="text-center text-xl mt-4 text-green-600 font-medium">
            ₹{balance.amount / 100} Available
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 w-full">
          <h2 className="text-lg font-semibold text-center mb-2">
            Weekly Spending
          </h2>
          <Line data={spendingData} />
          <h2 className="text-lg text-center font-semibold mt-6 mb-2">
            Monthly Spending
          </h2>
          <Line data={monthlySpendingData} />
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 w-full">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <ul className="space-y-4">
            {transactions.map((tx) => (
              <li key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span
                    className={`text-2xl ${
                      tx.type === "received" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {tx.type === "received" ? "📥" : "📤"}
                  </span>
                  <div>
                    <p className="font-medium">{tx.description}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <p
                  className={`font-semibold ${
                    tx.type === "received" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "received" ? "+" : "-"}₹{tx.amount}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
