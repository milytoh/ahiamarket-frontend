const WalletBalanceSkeleton = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-4 w-32 bg-slate-200 rounded" />
        <div className="h-8 w-24 bg-slate-200 rounded-lg" />
      </div>

      <div className="space-y-3">
        <div className="h-8 w-48 bg-slate-200 rounded" />
        <div className="h-4 w-24 bg-slate-200 rounded" />
      </div>

      <div className="mt-8 flex gap-3">
        <div className="h-10 w-full bg-slate-200 rounded-xl" />
        <div className="h-10 w-full bg-slate-200 rounded-xl" />
      </div>
    </section>
  );
};

export default WalletBalanceSkeleton;
