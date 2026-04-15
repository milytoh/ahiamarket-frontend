"use client";

import React from "react";

export default function VendorTopProductsSkeleton() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-border-light h-full flex flex-col animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-7 w-40 bg-slate-200 rounded-xl"></div>
        <div className="h-5 w-20 bg-slate-200 rounded"></div>
      </div>

      {/* Products List */}
      <div className="space-y-6 flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-5 p-2 -mx-2 rounded-xl">
            {/* Product Image Skeleton */}
            <div className="w-16 h-16 rounded-2xl bg-slate-200 flex-shrink-0 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-6 h-6 bg-slate-300 rounded-br-xl"></div>
            </div>

            {/* Product Details Skeleton */}
            <div className="flex-1 min-w-0 space-y-3">
              {/* Product Name */}
              <div className="h-5 bg-slate-200 rounded w-4/5"></div>
              {/* Revenue & Sold */}
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>

            {/* Chevron Skeleton */}
            <div className="w-6 h-6 bg-slate-200 rounded"></div>
          </div>
        ))}
      </div>

      {/* Growth Tip Skeleton */}
      <div className="mt-8 p-5 bg-emerald-50 rounded-2xl flex gap-4">
        <div className="text-3xl w-8 h-8 bg-emerald-100 rounded-full flex-shrink-0"></div>

        <div className="space-y-2 flex-1">
          <div className="h-4 w-24 bg-emerald-200 rounded"></div>
          <div className="h-4 w-full bg-emerald-200/70 rounded"></div>
          <div className="h-4 w-5/6 bg-emerald-200/70 rounded"></div>
        </div>
      </div>
    </div>
  );
}
