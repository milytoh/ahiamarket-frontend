const WalletStats = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white p-6 rounded-2xl border">
        <p className="text-slate-500 text-xs font-bold uppercase">
          Reward Points
        </p>
        <p className="text-2xl font-black">2,840</p>
      </div>

      <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <p className="text-slate-600 text-xs font-bold uppercase">
          Trust Level
        </p>
        <p className="text-primary text-xl font-black">Tier 3 Platinum</p>
      </div>
    </div>
  );
};

export default WalletStats;
