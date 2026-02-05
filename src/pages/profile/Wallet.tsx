import React from "react";
import WalletSummary from "@/components/profile/wallet/WalletSummary";
import WalletStats from "./WalletStats";
import WalletTransactions from "./WalletTransactions";

const WalletPage: React.FC = () => {
  return (
    <main className="flex-1 p-6 md:p-8 lg:p-10">
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-slate-400 text-sm">Profile</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 text-sm font-bold">Wallet</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
        <div>
          <h1 className="text-slate-900 text-4xl font-black">
            Wallet Summary
          </h1>
          <p className="text-slate-500">
            Securely manage your funds and track your spending.
          </p>
        </div>

        <div className="flex gap-4">
          <button className="h-12 px-6 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20">
            Deposit Funds
          </button>
          <button className="h-12 px-6 rounded-xl bg-accent-orange text-white font-bold shadow-lg shadow-accent-orange/20">
            Withdraw
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <WalletSummary />
        <WalletStats />
      </div>

      <WalletTransactions />
    </main>
  );
};

export default WalletPage;
