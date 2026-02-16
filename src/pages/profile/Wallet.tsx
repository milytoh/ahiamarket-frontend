import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import WalletBalance from "@/components/profile/wallet/Walletbalance";
import WalletStats from "@/components/profile/wallet/Walletstats";
import RecentActivities from "@/components/profile/wallet/RecenActivities";

//skeleton
import RecentActivitiesSkeleton from "@/components/ui/skeletons/profile/wallet/RecentActivitiesSkeleton";
import WalletBalanceSkeleton from "@/components/ui/skeletons/profile/wallet/WalletBalanceSkeleton";
import WalletStatsSkeleton from "@/components/ui/skeletons/profile/wallet/WalletStatsSkeleton";

import ErrorState from "@/components/ui/Error";
import ErrorEmptyState from "@/components/ui/ErrorEmptyState";

import Modal from "@/components/ui/Modal";
import DepositForm from "@/components/profile/wallet/DepositForm";

import { MdAddCircleOutline, MdOutbox } from "react-icons/md";

type TransactionType = "deposit" | "withdrawal" | "credit";
type TransactionStatus = "success" | "pending" | "failed";

interface Wallet {
  balance: number;
  currency: string;
}

interface WalletStats {
  totalTransactions: number;
  totalDeposits: number;
  totalWithdrawals: number;
  pendingTransactions: number;
  successfulTransactions: number;
}

interface WalletActivity {
  _id?: string;
  type: TransactionType;
  status: TransactionStatus;
  amount: number;
  reference: string;
  createdAt: string;
}

interface WalletPlayload {
  wallet: Wallet;
  stats: WalletStats;
  recentActivities: WalletActivity[];
}


interface WalletResponse {
  success: boolean
  message: string,
  profileWallet :WalletPlayload
}



const Wallet: React.FC = () => {
  const [walletData, setWalletData] = useState<WalletResponse | null>(null);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  

  //using custom hook
  const { get, loading, error } = useApi<WalletResponse>(
    "http://localhost:3000/api/user/profile/wallet",
  );

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await get();
        setWalletData(response);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <ErrorState
        title="Failed to load Wallet Summary"
        message={error.message}
        onRetry={get}
      />
    );
  }

  return (
    <main className="flex-1 px-4 md:px-8 lg:px-1 py-6 w-[]">
        {/* Deposit Modal */}
      <Modal
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
        title="Deposit Funds"
        subtitle="Top up your wallet to continue shopping securely."
      >
        <DepositForm onClose={() => setIsDepositOpen(false)} />
      </Modal>


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
            <h1 className="text-3xl md:text-3xl font-black tracking-tight">
              Wallet Summary
            </h1>
            <p className="text-slate-500 mt-1">
              Securely manage your funds and track your spending history.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button onClick={() => setIsDepositOpen(true)} className="h-12 px-6 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 shadow-primary/20 shadow-lg">
              <MdAddCircleOutline className="text-sm" />
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
          {loading ? (
            <WalletBalanceSkeleton />
          ) : (
            <WalletBalance
              pending={walletData?.profileWallet.stats.pendingTransactions!}
              totalBalance={walletData?.profileWallet.wallet.balance!}
              successfullTrans={walletData?.profileWallet.stats.successfulTransactions!}
            />
          )}
          {loading ? <WalletStatsSkeleton /> : <WalletStats />}
        </div>

        {/* Activities */}
        {loading ? <RecentActivitiesSkeleton /> : <RecentActivities activities={ walletData?.profileWallet.recentActivities! } />}
      </div>
    </main>
  );
};

export default Wallet;
