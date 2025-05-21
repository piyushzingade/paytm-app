"use client";

import { Button } from "@repo/ui/button";
import { Mail } from "lucide-react"; // <-- Import icon

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
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#6a51a6]">
        {greeting}, <span className="capitalize">{username}</span>
      </h1>
      <Button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#6a51a6] text-white hover:bg-[#5a4391] transition">
        <Mail size={18} />
        Contact Us
      </Button>
    </div>
  );
}
