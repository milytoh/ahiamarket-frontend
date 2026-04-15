"use client";

import React from "react";

export default function VendorRevenueChartSkeleton() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-border-light animate-pulse">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-2">
          <div className="h-7 w-64 bg-slate-200 rounded-xl"></div>
          <div className="h-4 w-80 bg-slate-200 rounded"></div>
        </div>

        {/* Select Dropdown Skeleton */}
        <div className="h-10 w-40 bg-slate-200 rounded-xl"></div>
      </div>

      {/* Chart Area Skeleton */}
      <div className="relative h-72 flex items-end justify-between px-4 gap-6">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            {/* Bar Skeleton */}
            <div
              className="w-9 bg-slate-200 rounded-t-2xl"
              style={{
                height: `${30 + (i % 3) * 20}%`, // Varied heights for natural look
              }}
            />

            {/* Day Label Skeleton */}
            <div className="mt-4 h-3.5 w-6 bg-slate-200 rounded"></div>

            {/* Date Skeleton */}
            <div className="mt-1 h-3 w-8 bg-slate-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Skeleton */}
      <div className="mt-8 flex justify-center">
        <div className="h-4 w-80 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}
