
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";


import WalletBalance from "@/components/profile/wallet/Walletbalance";
import WalletStats from "@/components/profile/wallet/Walletstats";
import RecentActivities from "@/components/profile/wallet/RecenActivities";

import {
 
  MdAddCircleOutline,
  MdOutbox,
} from "react-icons/md";


const Wallet: React.FC = () => {
 //using custom hook
  const { get, loading, error } = useApi<ProfileResponse>(
    "http://localhost:3000/api/user/profile",
  );



  return (
    <main className="flex-1 px-4 md:px-8 lg:px-1 py-6 w-[]">
      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 mb-6 text-sm">
          <span className="text-slate-400">Home</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-400">Profile</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-bold">Wallet</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Wallet Summary
            </h1>
            <p className="text-slate-500 mt-1">
              Securely manage your funds and track your spending history.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="h-12 px-6 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 shadow-primary/20 shadow-lg">
              <MdAddCircleOutline className='text-sm' />
              Deposit Funds
            </button>
            <button className="text-sm h-12 px-6 rounded-xl bg-accent-orange text-white font-bold flex items-center justify-center gap-2 shadow-accent-orange/20 shadow-lg">
              <MdOutbox />
              Withdraw
            </button>
          </div>
        </div>

        {/* Wallet Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
          <WalletBalance />
          <WalletStats />
        </div>

        {/* Activities */}
        <RecentActivities />
      </div>
    </main>
  );
};

export default Wallet;


