// components/HeroSectionWrapper.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/authOption";
import Greeting from "./Greeting";
import WalletOverview from "./WalletOverview";
import { Button } from "@repo/ui/button";

export default async function HeroSection() {
  const session = await getServerSession(authOptions);
  const username = session?.user?.name || "User";

  if (!session?.user.id) {
    return <div className="w-full pt-4 space-y-4">Please log in to see your wallet overview.
      <div className="">
        <Button  className="w-full" onClick={() => window.location.href = "/login"}/>
          Login
      </div>
    </div>;
  }

  return (
    <div className="w-full pt-4 space-y-4">
      <Greeting username={username} />
      <div className="flex items-center justify-between">
      
        <WalletOverview  />
      </div>
    </div>
  );
}
