import React from "react";

export default function OrderCardMobileSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-[#bbcac1] shadow-sm overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="px-4 py-3 bg-[#f8f9ff] border-b border-[#bbcac1] flex justify-between items-center">
        <div>
          <div className="h-5 w-28 bg-slate-200 rounded"></div>
          <div className="h-3 w-20 bg-slate-200 rounded mt-1"></div>
        </div>

        <div className="h-6 w-24 bg-slate-200 rounded-full"></div>
      </div>

      {/* Body Skeleton */}
      <div className="p-4 space-y-6">
        {/* Row 1 - Customer & Products */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-5 h-5 bg-slate-200 rounded mt-1"></div>
            <div>
              <div className="h-3 w-16 bg-slate-200 rounded"></div>
              <div className="h-5 w-36 bg-slate-200 rounded mt-1"></div>
            </div>
          </div>

          <div className="text-right">
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
            <div className="h-5 w-20 bg-slate-200 rounded mt-1"></div>
          </div>
        </div>

        {/* Row 2 - Amount & Payment */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-5 h-5 bg-slate-200 rounded mt-1"></div>
            <div>
              <div className="h-3 w-16 bg-slate-200 rounded"></div>
              <div className="h-6 w-28 bg-slate-200 rounded mt-1"></div>
            </div>
          </div>

          <div className="text-right">
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
            <div className="h-6 w-20 bg-slate-200 rounded-full mt-1"></div>
          </div>
        </div>

        {/* Row 3 - Delivery & Date */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="w-5 h-5 bg-slate-200 rounded mt-1"></div>
            <div>
              <div className="h-3 w-16 bg-slate-200 rounded"></div>
              <div className="h-5 w-32 bg-slate-200 rounded mt-1"></div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-5 h-5 bg-slate-200 rounded mt-1"></div>
            <div>
              <div className="h-3 w-12 bg-slate-200 rounded"></div>
              <div className="h-5 w-28 bg-slate-200 rounded mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="border-t border-[#bbcac1] p-3 bg-gray-50 flex gap-2">
        <div className="flex-1 h-11 bg-[#05b384]/30 rounded-xl"></div>
        <div className="w-12 h-11 bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  );
}
