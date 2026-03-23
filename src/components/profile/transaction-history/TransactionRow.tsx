import { FiMoreHorizontal } from "react-icons/fi";
type TransactionStatus = "Success" | "Pending" | "Failed";

export type Transaction = {
  date: string;
  time: string;
  desc: string;
  method: string;
  amount: string;
  status: TransactionStatus;
  id: any
};

type Props = {
  onclick: () => void;
  tx: Transaction;
};

export default function TransactionRow({ tx , onclick}: Props) {
  const statusColor: Record<TransactionStatus, string> = {
    Success: "bg-emerald-50 text-emerald-600 border-emerald-100",
    Pending: "bg-amber-50 text-amber-600 border-amber-100",
    Failed: "bg-rose-50 text-rose-600 border-rose-100",
  };

  return (
    <tr className="hover:bg-white transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900">{tx.date}</span>
          <span className="text-[11px] text-slate-400">{tx.time}</span>
        </div>
      </td>

      <td className="px-6 py-4">
        <span className="text-sm font-medium text-slate-700">{tx.desc}</span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
        <span className="text-sm text-slate-600">{tx.method}</span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm font-bold text-slate-900">{tx.amount}</span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusColor[tx.status]}`}
        >
          {tx.status}
        </span>
      </td>

      <td className="px-6 py-4 text-right">
        <button className="text-slate-400 hover:text-primary" onClick={onclick}>
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
}
