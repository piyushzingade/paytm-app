// components/HeroSectionWrapper.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/authOption";
import Greeting from "./Greeting";
import WalletOverview from "./WalletOverview";

export default async function HeroSection() {
  const session = await getServerSession(authOptions);
  const username = session?.user?.name || "User";

  return (
    <div className="w-full pt-4 space-y-8">
      <Greeting username={username} />
      <div className="flex items-center justify-between">
      
        <WalletOverview  />
      </div>
    </div>
  );
}
