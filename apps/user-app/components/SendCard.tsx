"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransaction";
// import {p2pTransfer} from "../app/lib/actions/p2pTransaction";


export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return (
      <div className="">
        <Card title={<div className="text-center">Send Money</div>}>
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"Phone number"}
              label="Phone number"
              onChange={(value) => {
                setNumber(value);
              }}
            />
            <TextInput
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => {
                setAmount(value);
              }}
            />
            <div className="pt-4 flex justify-center">
              <Button
                className="border border-slate-500 text-slate-700 bg-transparent p-2 px-10 rounded-xl hover:text-white  hover:bg-[#6a51a6]"
                onClick={async () => {
                  await p2pTransfer(number, Number(amount) * 100);
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
}