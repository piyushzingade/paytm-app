import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/authOption";
import prisma from "@repo/db/client";



export default async function() {


    return <div className="w-full"> 
    <div className="text-4xl text-[#6a51a6] pt-8  font-bold">
        Send Money to Friends
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="">
            <SendCard/>
        </div>
        <div className="">
            {/* <p2pBalanceCard transactions={transactions}/> */}
        </div>
    </div>
        
    </div>
}