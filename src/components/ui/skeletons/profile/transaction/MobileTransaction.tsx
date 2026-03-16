interface SkeletonProps {
  rows?: number;
}

export default function MobileTransactionListSkeleton({
  rows = 5,
}: SkeletonProps) {
  return (
    <div className="md:hidden space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between animate-pulse"
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="size-11 rounded-xl bg-slate-200"></div>

            <div className="space-y-2">
              <div className="h-3 w-32 bg-slate-200 rounded"></div>
              <div className="h-2 w-24 bg-slate-200 rounded"></div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-right space-y-2">
            <div className="h-3 w-16 bg-slate-200 rounded ml-auto"></div>
            <div className="h-4 w-14 bg-slate-200 rounded-full ml-auto"></div>
          </div>
        </div>
      ))}

      {/* Skeleton button */}
      <div className="w-full h-10 bg-slate-200 rounded-xl animate-pulse"></div>
    </div>
  );
}
