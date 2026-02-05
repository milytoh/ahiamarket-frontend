import React from "react";
import { PlusCircle, ArrowUpRight } from "lucide-react";

interface WalletHeaderProps {
  onDeposit?: () => void;
  onWithdraw?: () => void;
}

const WalletHeader: React.FC<WalletHeaderProps> = ({
  onDeposit,
  onWithdraw,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
      <div className="flex flex-col gap-1">
        <p className="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
          Wallet Summary
        </p>
        <p className="text-slate-500 text-base font-normal leading-normal">
          Securely manage your funds and track your spending history.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
          onClick={onDeposit}
          className="flex flex-1 md:flex-none items-center justify-center rounded-xl h-12 px-6 bg-primary text-white gap-2 text-base font-bold transition-all hover:brightness-105 shadow-lg shadow-primary/20"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Deposit Funds</span>
        </button>

        <button
          onClick={onWithdraw}
          className="flex flex-1 md:flex-none items-center justify-center rounded-xl h-12 px-6 bg-accent-orange text-white gap-2 text-base font-bold transition-all hover:brightness-105 shadow-lg shadow-accent-orange/20"
        >
          <ArrowUpRight className="w-5 h-5" />
          <span>Withdraw</span>
        </button>
      </div>
    </div>
  );
};

export default WalletHeader;
