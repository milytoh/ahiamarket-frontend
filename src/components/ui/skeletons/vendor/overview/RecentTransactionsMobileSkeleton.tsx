"use client";

import React from "react";

export default function RecentTransactionsMobileSkeleton() {
  return (
    <div className="md:hidden space-y-4">
      {/* Skeleton Card 1 */}
      <div className="bg-white p-5 rounded-2xl border border-border-light shadow-sm animate-pulse">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            {/* Order ID Skeleton */}
            <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
            {/* Date Skeleton */}
            <div className="h-4 w-32 bg-slate-200 rounded-md"></div>
          </div>

          {/* Status Badge Skeleton */}
          <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
        </div>

        <div className="mt-6 flex justify-between items-end">
          <div className="space-y-2">
            {/* Amount Label Skeleton */}
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
            {/* Amount Skeleton */}
            <div className="h-8 w-32 bg-slate-200 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Skeleton Card 2 */}
      <div className="bg-white p-5 rounded-2xl border border-border-light shadow-sm animate-pulse">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
            <div className="h-4 w-36 bg-slate-200 rounded-md"></div>
          </div>
          <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
        </div>

        <div className="mt-6 flex justify-between items-end">
          <div className="space-y-2">
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
            <div className="h-8 w-40 bg-slate-200 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Skeleton Card 3 */}
      <div className="bg-white p-5 rounded-2xl border border-border-light shadow-sm animate-pulse">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
            <div className="h-4 w-28 bg-slate-200 rounded-md"></div>
          </div>
          <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
        </div>

        <div className="mt-6 flex justify-between items-end">
          <div className="space-y-2">
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
            <div className="h-8 w-36 bg-slate-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
