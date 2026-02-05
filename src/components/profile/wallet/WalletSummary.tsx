const WalletSummary = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-8 relative overflow-hidden">
      <p className="text-slate-500 text-xs font-bold uppercase mb-1">
        Total Balance
      </p>
      <h2 className="text-primary text-5xl font-black">$12,450.00</h2>

      <div className="flex flex-col sm:flex-row gap-10 pt-6 mt-6 border-t">
        <div>
          <p className="text-slate-500 text-xs font-bold uppercase">
            On-hold Funds
          </p>
          <p className="text-xl font-bold">$1,200.00</p>
        </div>

        <div>
          <p className="text-slate-500 text-xs font-bold uppercase">
            Total Spent
          </p>
          <p className="text-xl font-bold">$45,890.00</p>
        </div>
      </div>
    </div>
  );
};

export default WalletSummary;
