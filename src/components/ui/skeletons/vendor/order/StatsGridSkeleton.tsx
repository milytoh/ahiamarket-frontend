import React from "react";

export default function StatsGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
      {/* Pending */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1]">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-[#fd9923]/20 rounded-xl"></div>
          <div className="h-6 w-14 bg-[#fd9923]/10 rounded-full"></div>
        </div>
        <div className="h-10 w-20 bg-slate-200 rounded-xl mb-2"></div>
        <div className="h-4 w-16 bg-slate-200 rounded"></div>
      </div>

      {/* Processing */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1]">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl"></div>
        </div>
        <div className="h-10 w-16 bg-slate-200 rounded-xl mb-2"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>

      {/* Packed */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1]">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl"></div>
        </div>
        <div className="h-10 w-20 bg-slate-200 rounded-xl mb-2"></div>
        <div className="h-4 w-16 bg-slate-200 rounded"></div>
      </div>

      {/* Shipped */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1]">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl"></div>
        </div>
        <div className="h-10 w-18 bg-slate-200 rounded-xl mb-2"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>

      {/* Total Revenue - Spans 2 columns */}
      <div className="bg-[#05b384] p-6 rounded-3xl shadow-sm col-span-2">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-white/30 rounded-xl"></div>
          <div className="h-6 w-16 bg-white/20 rounded-full"></div>
        </div>
        <div className="h-12 w-48 bg-white/30 rounded-xl mt-6 mb-2"></div>
        <div className="h-4 w-28 bg-white/30 rounded"></div>
      </div>

      {/* Delivered */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1]">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-[#006c4e]/10 rounded-xl"></div>
        </div>
        <div className="h-10 w-20 bg-slate-200 rounded-xl mb-2"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>

      {/* Cancelled */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#bbcac1]">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-red-100 rounded-xl"></div>
        </div>
        <div className="h-10 w-16 bg-slate-200 rounded-xl mb-2"></div>
        <div className="h-4 w-20 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}
