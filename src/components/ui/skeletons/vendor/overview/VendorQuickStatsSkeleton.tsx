"use client";

import React from "react";

export default function VendorQuickStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
      {/* Stat Card 1 */}
      <div className="bg-white p-6 rounded-3xl border border-border-light">
        <div className="h-4 w-32 bg-slate-200 rounded mb-6"></div>

        <div className="flex items-baseline gap-3">
          <div className="h-10 w-28 bg-slate-200 rounded-xl"></div>
          <div className="h-5 w-16 bg-emerald-100 rounded"></div>
        </div>
      </div>

      {/* Stat Card 2 */}
      <div className="bg-white p-6 rounded-3xl border border-border-light">
        <div className="h-4 w-40 bg-slate-200 rounded mb-6"></div>

        <div className="flex items-baseline gap-3">
          <div className="h-10 w-36 bg-slate-200 rounded-xl"></div>
          <div className="h-6 w-20 bg-orange-100 rounded-full"></div>
        </div>
      </div>

      {/* Stat Card 3 */}
      <div className="bg-white p-6 rounded-3xl border border-border-light">
        <div className="h-4 w-28 bg-slate-200 rounded mb-6"></div>

        <div className="h-10 w-24 bg-slate-200 rounded-xl"></div>
      </div>

      {/* Stat Card 4 */}
      <div className="bg-white p-6 rounded-3xl border border-border-light">
        <div className="h-4 w-36 bg-slate-200 rounded mb-6"></div>

        <div className="h-10 w-32 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  );
}
