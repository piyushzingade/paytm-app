import { getServerSession } from "next-auth"
import { authOptions } from "../authOption"
import prisma from "@repo/db/client";


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
        id: user.id,
        name: user.name,
        email: user.email,
        number: user.number,
        password : user.password,
    }
}