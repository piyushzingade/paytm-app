"use client";

import { Button } from "@repo/ui/button";
import { Mail } from "lucide-react";

const greetings = ["Good morning", "Good afternoon", "Good evening"];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return greetings[0];
  if (hour < 18) return greetings[1];
  return greetings[2];
};

export default function Greeting({ username }: { username: string }) {
  const greeting = getGreeting();

  return (
    <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
      <h1 className="text-xl pl-12 sm:pl-2 sm:text-3xl lg:text-4xl font-bold text-[#6a51a6] leading-snug">
        {greeting}, <span className="capitalize">{username}</span>
      </h1>

      <Button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#6a51a6] text-white hover:bg-[#5a4391] transition text-sm sm:text-base">
        <Mail size={18} />
        <span className="hidden sm:inline">Contact Us</span>
      </Button>
    </div>
  );
}
