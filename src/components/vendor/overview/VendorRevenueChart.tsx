"use client";

import React from "react";

interface VendorRevenueChartProps {
  data?: Array<{
    _id: string; 
    totalSales: number;
    orderCount: number;
  }>;
}

export default function VendorRevenueChart({
  data = [],
}: VendorRevenueChartProps) {
  // If no data, show empty state with nice placeholders
  if (!data || data.length === 0) {
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
        </div>
        <div className="h-72 flex items-center justify-center text-slate-400">
          No sales data available yet
        </div>
      </div>
    );
  }

  // Format data for display (last 7 days)
  const chartData = data.slice(-7).map((item) => ({
    date: item._id,
    day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
      new Date(item._id),
    ),
    totalSales: item.totalSales,
    orderCount: item.orderCount,
  }));

  // Find max value for scaling
  const maxSales = Math.max(...chartData.map((d) => d.totalSales), 1000);

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
        {chartData.map((item, i) => {
          const heightPercentage = Math.max(
            (item.totalSales / maxSales) * 100,
            8,
          );

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center group relative"
            >
              {/* Bar */}
              <div
                className={`w-9 rounded-t-2xl transition-all duration-300 hover:scale-105 ${
                  heightPercentage > 70
                    ? "bg-primary shadow-lg"
                    : "bg-primary/30 group-hover:bg-primary/60"
                }`}
                style={{ height: `${heightPercentage}%` }}
              >
                {/* Tooltip on hover */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-text-main text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  ₦{item.totalSales.toLocaleString()}
                  <br />
                  <span className="text-[10px] opacity-75">
                    {item.orderCount} orders
                  </span>
                </div>
              </div>

              {/* Day Label */}
              <span className="mt-4 text-xs font-bold text-slate-500">
                {item.day}
              </span>

              {/* Date (small) */}
              <span className="text-[10px] text-slate-400 mt-0.5">
                {item.date.slice(5)} {/* Shows "04-08" */}
              </span>
            </div>
          );
        })}
      </div>

      {/* Legend / Summary */}
      <div className="mt-6 text-center text-xs text-slate-500">
        Total Revenue (Last 7 Days): ₦
        {chartData
          .reduce((sum, item) => sum + item.totalSales, 0)
          .toLocaleString()}
      </div>
    </div>
  );
}
