"use client";

import React from "react";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";

const stats = [
  {
    label: "Today's Orders",
    value: "12",
    change: "+18%",
    trend: "up",
    color: "#05b384",
  },
  {
    label: "Pending Settlement",
    value: "₦82,500",
    status: "AWAITING",
    color: "#F7941D",
  },
  {
    label: "Conversion Rate",
    value: "3.4%",
    change: "-0.2%",
    trend: "down",
    color: "#ef4444",
  },
  {
    label: "Avg. Order Value",
    value: "₦6,875",
    color: "#05b384",
  },
];

export default function VendorQuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-3xl border border-border-light"
        >
          <p className="text-slate-500 text-sm font-medium mb-4">
            {stat.label}
          </p>

          <div className="flex items-baseline gap-3">
            <h3 className="text-4xl font-extrabold text-text-main">
              {stat.value}
            </h3>

            {stat.change && (
              <span
                className={`flex items-center text-sm font-bold ${stat.trend === "up" ? "text-[#05b384]" : "text-red-500"}`}
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
