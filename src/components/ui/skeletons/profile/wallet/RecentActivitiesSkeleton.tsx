const RecentActivitiesSkeleton = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-pulse">
      {/* Header */}
      <div className="px-6 md:px-8 py-5 border-b border-slate-50">
        <div className="h-4 w-40 bg-slate-200 rounded" />
      </div>

      {/* List */}
      <div className="divide-y divide-slate-50">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="size-10 bg-slate-200 rounded-xl" />
              <div className="space-y-2">
                <div className="h-4 w-40 bg-slate-200 rounded" />
                <div className="h-3 w-24 bg-slate-200 rounded" />
              </div>
            </div>

            <div className="h-4 w-20 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivitiesSkeleton;
