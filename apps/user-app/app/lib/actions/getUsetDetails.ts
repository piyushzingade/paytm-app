import { getServerSession } from "next-auth"
import { authOptions } from "../authOption"
import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";


export const getUserDetails = async () => {
    const session = await getServerSession(authOptions);
  
    if( !session?.user?.id)
        return null;

    const user = await prisma.user.findUnique({
        where: {
            id: Number(session.user.id)
        }
    });

    if (!user) {
        return null;
    }
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      number: user.number,
    };
      
}