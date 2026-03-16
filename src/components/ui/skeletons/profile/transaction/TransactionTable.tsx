interface SkeletonProps {
  rows?: number;
}

export default function TransactionTableSkeleton({ rows = 5 }: SkeletonProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Date
              </th>
              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Description
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Method
              </th>
              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Amount
              </th>
              <th className="px-4 md:px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Status
              </th>
              <th className="hidden sm:table-cell px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                {/* Date */}
                <td className="px-4 md:px-6 py-4">
                  <div className="h-3 w-20 bg-slate-200 rounded"></div>
                </td>

                {/* Description */}
                <td className="px-4 md:px-6 py-4">
                  <div className="h-3 w-40 bg-slate-200 rounded"></div>
                </td>

                {/* Method */}
                <td className="hidden md:table-cell px-6 py-4">
                  <div className="h-3 w-24 bg-slate-200 rounded"></div>
                </td>

                {/* Amount */}
                <td className="px-4 md:px-6 py-4">
                  <div className="h-3 w-16 bg-slate-200 rounded"></div>
                </td>

                {/* Status */}
                <td className="px-4 md:px-6 py-4">
                  <div className="h-5 w-16 bg-slate-200 rounded-full"></div>
                </td>

                {/* Action */}
                <td className="hidden sm:table-cell px-6 py-4 text-right">
                  <div className="ml-auto h-3 w-10 bg-slate-200 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
