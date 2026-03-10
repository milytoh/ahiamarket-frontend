import { FiShoppingBag, FiCreditCard, FiTruck } from "react-icons/fi";

import { Transaction } from "./TransactionRow";

interface Prop {
    transactions :Transaction[]
}

export default function MobileTransactionList({ transactions }:Prop  ) {
  return (
    <div className="md:hidden space-y-3">
      {transactions.map((tx, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:bg-slate-50 transition-colors flex items-center justify-between cursor-pointer"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="size-11 rounded-xl bg-slate-50 flex items-center justify-center text-primary">
              <FiShoppingBag size={22} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">{tx.desc}</h4>

              <p className="text-[11px] text-slate-500 mt-0.5">
                {tx.date} • {tx.time}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <p
              className={`text-sm font-bold ${
                tx.amount.startsWith("+") ? "text-primary" : "text-charcoal"
              }`}
            >
              {tx.amount}
            </p>

            <span
              className={`mt-1 inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide
              ${
                tx.status === "Success"
                  ? "bg-emerald-50 text-emerald-600"
                  : tx.status === "Pending"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-rose-50 text-rose-600"
              }
              `}
            >
              {tx.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
