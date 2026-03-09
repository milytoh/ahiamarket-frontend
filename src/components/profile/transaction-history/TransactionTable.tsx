import TransactionRow from "./TransactionRow";
import { Transaction } from "./TransactionRow";

export default function TransactionTable() {
  const transactions: Transaction[]  =  [
    {
      date: "Oct 24, 2023",
      time: "14:22 PM",
      desc: "NVIDIA RTX 4090 Purchase",
      method: "Main Wallet",
      amount: "-$1,599.00",
      status: "Success",
    },
    {
      date: "Oct 23, 2023",
      time: "09:15 AM",
      desc: "Wallet Top-up",
      method: "Mastercard ****4242",
      amount: "+$5,000.00",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Date
              </th>

              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Description
              </th>

              <th className="hidden md:table-cell px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Method
              </th>

              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Amount
              </th>

              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Status
              </th>

              <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((tx, i) => (
              <TransactionRow key={i} tx={tx} />
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
}


 