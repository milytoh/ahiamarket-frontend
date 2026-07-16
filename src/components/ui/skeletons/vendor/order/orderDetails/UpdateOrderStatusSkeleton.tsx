import React from "react";

export default function UpdateOrderStatusSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm animate-pulse">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#bbcac1]">
        <div className="h-7 w-40 bg-slate-200 rounded-xl"></div>
        <div className="h-4 w-64 bg-slate-200 rounded mt-2"></div>
      </div>

      <div className="p-6 space-y-6">
        {/* Current Status */}
        <div>
          <div className="h-4 w-28 bg-slate-200 rounded mb-2"></div>
          <div className="h-12 bg-[#f8f9ff] border border-[#bbcac1] rounded-xl flex items-center px-4 gap-3">
            <div className="w-6 h-6 bg-slate-200 rounded"></div>
            <div className="h-5 w-36 bg-slate-200 rounded"></div>
          </div>
        </div>

        {/* Next Status */}
        <div>
          <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
          <div className="h-12 bg-[#f8f9ff] border border-[#bbcac1] rounded-xl"></div>
        </div>

        {/* Note */}
        <div>
          <div className="h-4 w-40 bg-slate-200 rounded mb-2"></div>
          <div className="h-32 bg-slate-200 rounded-xl"></div>
        </div>

        {/* Update Button */}
        <div className="h-12 bg-[#05b384]/30 rounded-xl"></div>
      </div>
    </div>
  );
}
