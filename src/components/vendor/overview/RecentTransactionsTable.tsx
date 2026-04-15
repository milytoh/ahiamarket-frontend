"use client";

import React from "react";

interface RecentOrder {
  _id: string;
  total: number;
  order_status: string;
  created_at: string;
  payment?: {
    method?: string;
    status?: string;
  };
}

interface RecentTransactionsTableProps {
  orders?: RecentOrder[];
}

export default function RecentTransactionsTable({
  orders = [],
}: RecentTransactionsTableProps) {
  // Format date nicely
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0)
      return `Today, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    if (diffDays === 1)
      return `Yesterday, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  if (!orders || orders.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-border-light overflow-hidden p-8 text-center text-slate-400 hidden md:block">
        No recent transactions yet
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-border-light overflow-hidden hidden md:block">
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
            {orders.map((order) => (
              <tr
                key={order._id}
                className="hover:bg-[#e2f9ef]/50 transition-colors cursor-pointer"
              >
                <td className="px-8 py-5 font-mono font-bold text-sm">
                  #{order._id.toString().slice(-6).toUpperCase()}
                </td>
                <td className="px-8 py-5 font-bold text-text-main">
                  ₦{order.total.toLocaleString()}
                </td>
                <td className="px-8 py-5">
                  <span
                    className={`inline-block px-4 py-1 text-xs font-bold rounded-full capitalize ${
                      order.order_status === "completed" ||
                      order.order_status === "delivered"
                        ? "bg-emerald-100 text-emerald-700"
                        : order.order_status === "pending"
                          ? "bg-orange-100 text-orange-600"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {order.order_status}
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-slate-500">
                  {formatDate(order.created_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
