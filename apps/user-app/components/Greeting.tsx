// components/Greeting.tsx
"use client";

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
    <h1 className="text-3xl font-bold text-[#6a51a6] ">
      {greeting}, <span className="capitalize">{username}</span>
    </h1>
  );
}
