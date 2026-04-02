"use client";

import React from "react";

export default function VendorRevenueChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const heights = [45, 60, 52, 78, 98, 40, 35];

  return (
    <div className="bg-white p-8 rounded-3xl border border-border-light">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-text-main">
            Weekly Revenue Insights
          </h2>
          <p className="text-slate-500 text-sm">
            Performance tracking for last 7 days
          </p>
        </div>
        <select className="bg-slate-100 border-none rounded-xl text-sm font-medium px-5 py-2.5 focus:ring-2 focus:ring-primary">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      <div className="relative h-72 flex items-end justify-between px-4 gap-6">
        {days.map((day, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center group relative"
          >
            <div
              className={`w-9 rounded-t-2xl transition-all duration-300 ${i === 4 ? "bg-primary shadow-lg" : "bg-primary/20 group-hover:bg-primary/40"}`}
              style={{ height: `${heights[i]}%` }}
            >
              {i === 4 && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs px-3 py-1 rounded-lg">
                  ₦24,500
                </div>
              )}
            </div>
            <span
              className={`mt-4 text-xs font-bold ${i === 4 ? "text-primary" : "text-slate-500"}`}
            >
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
