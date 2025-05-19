
import prisma from "@repo/db/client";

export async function getBalance(session: any) {
  const balance = await prisma.userBalance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });

  const amount = balance?.amount || 0;
  const locked = balance?.locked || 0;

  return {
    amount,
    locked,
    labels: ["Balance", "Locked"],
    datasets: [
      {
        label: "Balance",
        data: [amount, locked],
        backgroundColor: ["#4ade80", "#f87171"],
        borderWidth: 1,
      },
    ],
  };
}
