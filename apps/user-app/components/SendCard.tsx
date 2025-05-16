"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/TextInput";
import { p2pTransfer } from "../app/lib/actions/p2pTransaction";
import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SendCard() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSend = async () => {
    setStatus("loading");
    try {
      const result = await p2pTransfer(number, Number(amount) * 100);
      if (result?.success) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setNumber("");
          setAmount("");
        }, 2000);
      } else {
        throw new Error("Transaction failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setNumber("");
        setAmount("");
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <Card title={<div className="text-center">Send Money</div>}>
        <div className="min-w-72 pt-2 space-y-4">
          <TextInput
            placeholder="Phone number / UPI ID"
            label="Phone number / UPI ID"
            value={number}
            onChange={setNumber}
          />
          <TextInput
            placeholder="Amount in INR"
            label="Amount in INR"
            value={amount}
            onChange={setAmount}
          />
          <div className="pt-4 flex justify-center">
            <Button
              className="border border-slate-500 text-slate-700 bg-transparent p-2 px-10 rounded-xl hover:text-white hover:bg-[#6a51a6]"
              onClick={handleSend}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Processing..." : "Send"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Modal Overlay */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-[300px] text-center shadow-xl space-y-4"
            >
              {status === "loading" && (
                <>
                  <div className="text-lg font-medium text-gray-800">
                    Waiting for payment completion...
                  </div>
                  <div className="text-sm text-gray-500">
                    Please don't close the window.
                  </div>
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                  <div className="text-lg font-semibold text-green-600">
                    Payment successfully done!
                  </div>
                </>
              )}
              {status === "error" && (
                <>
                  <XCircle className="w-12 h-12 text-red-500 mx-auto" />
                  <div className="text-lg font-semibold text-red-600">
                    Payment failed!
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
