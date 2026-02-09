const WalletStatsSkeleton = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 animate-pulse">
      <div className="h-4 w-40 bg-slate-200 rounded mb-6" />

      <div className="space-y-5">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-10 bg-slate-200 rounded-xl" />
              <div className="h-4 w-32 bg-slate-200 rounded" />
            </div>

            <div className="h-4 w-16 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WalletStatsSkeleton;
