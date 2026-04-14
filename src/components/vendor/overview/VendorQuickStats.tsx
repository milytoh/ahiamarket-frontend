"use client";

import React from "react";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

interface VendorQuickStatsProps {
  stats: {
    totalOrders?: number;
    totalSales?: number;
    avgOrderValue?: number;
    todayOrders?: number;
    pendingOrders?: number;
    pendingSettlementAmount?: number;
  };
}

export default function VendorQuickStats({
  stats ={},
}: VendorQuickStatsProps) {
  const quickStats = [
    {
      label: "Today's Orders",
      value: stats.todayOrders?.toLocaleString() || "0",
      change: "+12%", // You can calculate this later if needed
      trend: "up" as const,
      color: "#05b384",
    },
    {
      label: "Pending Settlement",
      value: stats.pendingSettlementAmount
        ? `₦${stats.pendingSettlementAmount.toLocaleString()}`
        : "₦0",
      status: "AWAITING",
      color: "#F7941D",
    },
    {
      label: "Total Orders",
      value: stats.totalOrders?.toLocaleString() || "0",
      color: "#05b384",
    },
    {
      label: "Avg. Order Value",
      value: stats.avgOrderValue
        ? `₦${stats.avgOrderValue.toLocaleString()}`
        : "₦0",
      color: "#05b384",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {quickStats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-3xl border border-border-light hover:shadow-md transition-shadow"
        >
          <p className="text-slate-500 text-sm font-medium mb-4 uppercase tracking-wider">
            {stat.label}
          </p>

          <div className="flex items-baseline gap-3">
            <h3 className="text-4xl font-extrabold text-text-main">
              {stat.value}
            </h3>

            {stat.change && (
              <span
                className={`flex items-center text-sm font-bold ${
                  stat.trend === "up" ? "text-[#05b384]" : "text-red-500"
                }`}
              >
                {stat.trend === "up" ? <MdTrendingUp /> : <MdTrendingDown />}
                {stat.change}
              </span>
            )}

            {stat.status && (
              <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                {stat.status}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
