import React from "react";

export default function OrdersTableSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm overflow-hidden flex flex-col animate-pulse">
      {/* Filters Bar Skeleton */}
      <div className="h-16 border-b border-[#bbcac1] px-6 flex items-center gap-4">
        <div className="h-9 w-80 bg-slate-200 rounded-xl"></div>
        <div className="h-9 w-40 bg-slate-200 rounded-xl"></div>
        <div className="ml-auto h-9 w-28 bg-slate-200 rounded-xl"></div>
      </div>

      {/* Bulk Actions Bar Skeleton */}
      <div className="h-14 border-b border-[#bbcac1] px-6 flex items-center">
        <div className="h-8 w-40 bg-slate-200 rounded-xl"></div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Header Skeleton */}
          <thead>
            <tr className="bg-[#f8faf9] border-b border-[#bbcac1]">
              {Array.from({ length: 11 }).map((_, i) => (
                <th key={i} className="p-4 text-left">
                  <div className="h-4 w-20 bg-slate-200 rounded"></div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[#bbcac1]/50">
            {Array.from({ length: 8 }).map((_, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-[#eff4ff]/30">
                {/* Checkbox */}
                <td className="p-4 w-12">
                  <div className="w-5 h-5 bg-slate-200 rounded"></div>
                </td>

                {/* Order ID */}
                <td className="p-4">
                  <div className="h-5 w-24 bg-slate-200 rounded"></div>
                </td>

                {/* Parent ID */}
                <td className="p-4">
                  <div className="h-5 w-20 bg-slate-200 rounded"></div>
                </td>

                {/* Customer */}
                <td className="p-4">
                  <div className="h-5 w-40 bg-slate-200 rounded"></div>
                </td>

                {/* Products */}
                <td className="p-4">
                  <div className="h-5 w-48 bg-slate-200 rounded"></div>
                </td>

                {/* Amount */}
                <td className="p-4 text-right">
                  <div className="h-5 w-28 bg-slate-200 rounded ml-auto"></div>
                </td>

                {/* Payment Status */}
                <td className="p-4">
                  <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
                </td>

                {/* Delivery Status */}
                <td className="p-4">
                  <div className="h-5 w-32 bg-slate-200 rounded"></div>
                </td>

                {/* Order Status */}
                <td className="p-4">
                  <div className="h-6 w-24 bg-slate-200 rounded-full"></div>
                </td>

                {/* Date */}
                <td className="p-4">
                  <div className="h-5 w-28 bg-slate-200 rounded"></div>
                </td>

                {/* Actions */}
                <td className="p-4 flex gap-3 justify-center">
                  <div className="w-9 h-9 bg-slate-200 rounded-md"></div>
                  <div className="w-9 h-9 bg-slate-200 rounded-md"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
