"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export const AddMoneyModal = ({
  token,
  onClose,
  amountBefore,
}: {
  token: string;
  onClose: (status: "success" | "fail") => void;
  amountBefore: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const interval = setInterval(async () => {
      setTimeLeft((prev) => prev - 1);
      if (timeLeft <= 0) {
        clearInterval(interval);
        return onClose("fail");
      }

      try {
        const { data } = await axios.get("/api/balance");
        if (data.amount > amountBefore) {
          clearInterval(interval);
          return onClose("success");
        }
      } catch (err) {
        console.error("Error polling balance:", err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 text-center max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">Transaction Token</h2>
        <div className="text-lg text-purple-700 font-mono mb-4">{token}</div>
        <div className="text-sm mb-4">Waiting for confirmation...</div>
        <div className="text-red-500 text-sm">Time Left: {timeLeft}s</div>
      </div>
    </div>
  );
};
