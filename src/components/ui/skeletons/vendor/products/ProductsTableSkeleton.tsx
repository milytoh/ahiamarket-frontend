import React from "react";

export default function ProductsTableSkeleton() {
  return (
    <div className="bg-white rounded-3xl border border-border-light overflow-hidden shadow-sm animate-pulse">
      {/* TABLE HEADER */}
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="py-6 px-8 text-left">
              <div className="h-3 w-24 bg-slate-200 rounded"></div>
            </th>
            <th className="py-6 px-6 text-left">
              <div className="h-3 w-20 bg-slate-200 rounded"></div>
            </th>
            <th className="py-6 px-6 text-left">
              <div className="h-3 w-16 bg-slate-200 rounded"></div>
            </th>
            <th className="py-6 px-6 text-left">
              <div className="h-3 w-16 bg-slate-200 rounded"></div>
            </th>
            <th className="py-6 px-6 text-left">
              <div className="h-3 w-20 bg-slate-200 rounded"></div>
            </th>
            <th className="py-6 px-8 text-right">
              <div className="h-3 w-20 bg-slate-200 rounded ml-auto"></div>
            </th>
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody className="divide-y">
          {Array.from({ length: 6 }).map((_, i) => (
            <tr key={i}>
              {/* Product */}
              <td className="py-6 px-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-32 bg-slate-200 rounded"></div>
                    <div className="h-2 w-20 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </td>

              {/* Price */}
              <td className="py-6 px-6">
                <div className="h-3 w-16 bg-slate-200 rounded"></div>
              </td>

              {/* Stock */}
              <td className="py-6 px-6">
                <div className="h-3 w-12 bg-slate-200 rounded"></div>
              </td>

              {/* PoD */}
              <td className="py-6 px-6">
                <div className="h-6 w-12 bg-slate-200 rounded-full"></div>
              </td>

              {/* Visibility */}
              <td className="py-6 px-6">
                <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
              </td>

              {/* Actions */}
              <td className="py-6 px-8 text-right">
                <div className="flex justify-end gap-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                  <div className="w-8 h-8 bg-slate-200 rounded-lg"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION SKELETON */}
      <div className="p-6 bg-slate-50 flex justify-between items-center border-t animate-pulse">
        <div className="h-3 w-32 bg-slate-200 rounded"></div>

        <div className="flex gap-2">
          <div className="w-10 h-10 bg-slate-200 rounded-xl"></div>
          <div className="w-10 h-10 bg-slate-200 rounded-xl"></div>
          <div className="w-10 h-10 bg-slate-200 rounded-xl"></div>
          <div className="w-10 h-10 bg-slate-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
