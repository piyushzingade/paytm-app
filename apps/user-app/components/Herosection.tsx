
import { authOptions } from "../app/lib/authOption"
import { getServerSession } from "next-auth";

const greetings = [
  "Good morning",  
  "Good afternoon",
  "Good evening",
]

const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return greetings[0];
    } else if (currentHour < 18) {
        return greetings[1];
    } else {
        return greetings[2];
    }
}


export  const HeroSection = async () => {
    const greeting = getGreeting();
  const session =  await getServerSession(authOptions);
  const username = session?.user?.name || "User";
  return (
    <div className="w-full pt-4 ">
      <h1 className="text-3xl font-bold text-gray-700">
        {greeting}, <span className="capitalize">{username}</span>
      </h1>
    </div>
  );
};