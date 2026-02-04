import React from "react";

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const TrustScoreSkeleton: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 md:px-8 py-5 border-b border-slate-50">
        <Skeleton className="h-5 w-52" />
      </div>

      {/* Items */}
      <div className="p-6 md:p-8 space-y-5 flex-1">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Skeleton className="size-10 rounded-xl" />
              <Skeleton className="h-4 w-40" />
            </div>

            {/* Right value */}
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustScoreSkeleton;
