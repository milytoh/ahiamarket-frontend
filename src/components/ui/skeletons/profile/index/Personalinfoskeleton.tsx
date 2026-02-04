import React from "react";

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const PersonalInfoSkeleton: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-50">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index}>
            <Skeleton className="h-3 w-24 mb-2" />
            <Skeleton className="h-4 w-full max-w-[220px]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalInfoSkeleton;
