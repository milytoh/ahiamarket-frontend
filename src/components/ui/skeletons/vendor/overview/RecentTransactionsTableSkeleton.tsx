"use client";

import React from "react";

export default function RecentTransactionsTableSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-border-light overflow-hidden hidden md:block animate-pulse">
      {/* Header Section */}
      <div className="px-8 py-6 flex justify-between items-center border-b">
        <div className="h-7 w-48 bg-slate-200 rounded-xl"></div>

        <div className="flex gap-3">
          <div className="h-9 w-28 bg-slate-200 rounded-xl"></div>
          <div className="h-9 w-24 bg-slate-200 rounded-xl"></div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-8 py-5 text-left">
                <div className="h-4 w-20 bg-slate-200 rounded"></div>
              </th>
              <th className="px-8 py-5 text-left">
                <div className="h-4 w-20 bg-slate-200 rounded"></div>
              </th>
              <th className="px-8 py-5 text-left">
                <div className="h-4 w-16 bg-slate-200 rounded"></div>
              </th>
              <th className="px-8 py-5 text-left">
                <div className="h-4 w-16 bg-slate-200 rounded"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {/* Row 1 */}
            <tr className="animate-pulse">
              <td className="px-8 py-6">
                <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-6 w-32 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-7 w-24 bg-slate-200 rounded-full"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-5 w-36 bg-slate-200 rounded-md"></div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="animate-pulse">
              <td className="px-8 py-6">
                <div className="h-5 w-28 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-6 w-40 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-7 w-20 bg-slate-200 rounded-full"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-5 w-32 bg-slate-200 rounded-md"></div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="animate-pulse">
              <td className="px-8 py-6">
                <div className="h-5 w-20 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-6 w-28 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-7 w-28 bg-slate-200 rounded-full"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-5 w-40 bg-slate-200 rounded-md"></div>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="animate-pulse">
              <td className="px-8 py-6">
                <div className="h-5 w-26 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-6 w-36 bg-slate-200 rounded-md"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-7 w-24 bg-slate-200 rounded-full"></div>
              </td>
              <td className="px-8 py-6">
                <div className="h-5 w-30 bg-slate-200 rounded-md"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
