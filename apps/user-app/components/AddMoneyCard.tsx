"use client";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/TextInput";
import { createOnRampTransaction } from "../app/lib/actions/createOnRampTxn";
import { AddMoneyModal } from "./AddMoneyModal";
import axios from "axios";

const SUPPORTED_BANKS: { name: string }[] = [
  { name: "HDFC Bank" },
  { name: "Axis Bank" },
];

function generateToken() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

export const AddMoney = () => {
  const [provider, setProvider] = useState<string>(() => {
    return SUPPORTED_BANKS[0]?.name || "";
  });
  const [value, setValue] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState("");
  const [initialAmount, setInitialAmount] = useState(0);
  const [statusMsg, setStatusMsg] = useState("");

  const handleAddMoney = async () => {
    try {
      const { data } = await axios.get("/api/balance");
      setInitialAmount(data.amount);

      await createOnRampTransaction(provider, value);

      setToken(generateToken());
      setShowModal(true);
    } catch (err) {
      console.error("Error fetching balance:", err);
      setStatusMsg("❌ Failed to initiate transaction");
    }
  };

  const handleModalClose = (status: "success" | "fail") => {
    setShowModal(false);
    setStatusMsg(
      status === "success"
        ? "✅ Amount added to your wallet"
        : "❌ Failed to add amount"
    );
    setTimeout(() => setStatusMsg(""), 5000);
  };

  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label="Amount"
          placeholder="Amount"
          onChange={(val) => setValue(Number(val))}
        />
        <div className="py-3 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            const selected = SUPPORTED_BANKS.find((x) => x.name === value);
            setProvider(selected?.name || "");
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleAddMoney}
            disabled={!value || !provider}
            className={`border border-slate-500 text-slate-700 bg-transparent p-2 px-10 rounded-xl 
            hover:text-white hover:bg-[#6a51a6] 
            ${!value || !provider ? "opacity-50 cursor-not-allowed" : ""}`}
            >
            Add Money
          </Button>
        </div>
        {statusMsg && (
          <div className="text-center mt-4 font-semibold text-purple-600">
            {statusMsg}
          </div>
        )}
      </div>
      {showModal && (
        <AddMoneyModal
          token={token}
          onClose={handleModalClose}
          amountBefore={initialAmount}
        />
      )}
    </Card>
  );
};
