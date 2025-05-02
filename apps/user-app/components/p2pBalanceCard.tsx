import { Card } from "@repo/ui/card";


export const P2pBalanceCard = ({ transactions }: {
    transactions: {
        id: number;
        amount: number;
        date: Date | null;
        toUser: number;
    }[];
}) => {
  return (
    <div className="w-full">
      <div className="">
        {transactions.map((transaction: any) => (
          <div key={transaction.id} className="">
            <Card title={<div className="text-center">Transactions</div>}>
              <div className="p-4 space-y-2">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Amount: </span>₹
                  {transaction.amount / 100}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Date: </span>
                  {transaction.date.toDateString()}
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">To Number : </span>
                  {transaction.toUser}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
