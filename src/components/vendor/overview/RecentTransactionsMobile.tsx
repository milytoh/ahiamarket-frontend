"use client";

import React from "react";

interface RecentOrder {
  _id: string;
  total: number;
  order_status: string;
  created_at: string;
}

interface RecentTransactionsMobileProps {
  orders?: RecentOrder[];
}

export default function RecentTransactionsMobile({
  orders = [],
}: RecentTransactionsMobileProps) {
  if (!orders || orders.length === 0) {
    return (
      <div className="md:hidden text-center py-8 text-slate-400">
        No recent transactions 
      </div>
    );
  }

  return (
    <div className="md:hidden space-y-4">
      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-white p-5 rounded-2xl border border-border-light shadow-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-mono text-sm font-bold text-text-main">
                #{order._id.toString().slice(-6).toUpperCase()}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {new Date(order.created_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <span
              className={`inline-block px-4 py-1 text-xs font-bold rounded-full capitalize ${
                order.order_status === "completed" ||
                order.order_status === "delivered"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {order.order_status}
            </span>
          </div>

          <div className="mt-4 flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-500">Amount</p>
              <p className="text-2xl font-bold text-text-main">
                ₦{order.total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
