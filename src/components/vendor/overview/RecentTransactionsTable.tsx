"use client";

import React from "react";

const transactions = [
  {
    id: "#ORD-90210",
    customer: "Tunde Afolayan",
    amount: "₦18,500",
    status: "Delivered",
    date: "Today, 10:45 AM",
  },
  {
    id: "#ORD-90211",
    customer: "Chioma Okoro",
    amount: "₦12,000",
    status: "Processing",
    date: "Today, 09:12 AM",
  },
  {
    id: "#ORD-89452",
    customer: "Musa Ibrahim",
    amount: "₦22,000",
    status: "Delivered",
    date: "Yesterday, 06:30 PM",
  },
];

export default function RecentTransactionsTable() {
  return (
    <div className="bg-white rounded-3xl border border-border-light overflow-hidden">
      <div className="px-8 py-6 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold text-text-main">
          Recent Transactions
        </h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
            EXPORT CSV
          </button>
          <button className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
            REFINE
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Order ID
              </th>
              <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Customer
              </th>
              <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Amount
              </th>
              <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Status
              </th>
              <th className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {transactions.map((tx, i) => (
              <tr key={i} className="hover:bg-[#e2f9ef]/50 transition-colors">
                <td className="px-8 py-5 font-mono font-bold text-sm">
                  {tx.id}
                </td>
                <td className="px-8 py-5 text-sm font-medium">{tx.customer}</td>
                <td className="px-8 py-5 font-bold text-text-main">
                  {tx.amount}
                </td>
                <td className="px-8 py-5">
                  <span
                    className={`inline-block px-4 py-1 text-xs font-bold rounded-full ${
                      tx.status === "Delivered"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-slate-500">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
