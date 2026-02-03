import React from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineWallet,
  HiOutlineScale,
  HiArrowTrendingUp,
  HiArrowTrendingDown,
} from "react-icons/hi2";

interface StatsCardsProps {
  stats: {
    totalOrders: number;
    completedOrders: number;
    disputes: number;
  };
  wallet: {
    balance: number;
    currency: string;
  };
}

interface StatCard {
  label: string;
  value: string;
  icon: React.ElementType;
  trend?: { value: string; isPositive: boolean };
  subtitle?: string;
}

const StatsCards: React.FC<StatsCardsProps> = ({stats, wallet }) => {
 const cards: StatCard[] = [
   {
     label: "Total Orders",
     value: String(stats?.totalOrders),
     icon: HiOutlineShoppingBag,
   },
   {
     label: "Wallet Balance",
     value: `${"₦"} ${wallet?.balance.toLocaleString()}`,
     icon: HiOutlineWallet,
     subtitle: "Available balance",
   },
   {
     label: "Disputes",
     value: String(stats?.disputes),
     icon: HiOutlineScale,
     subtitle: "Perfect record",
   },
 ];

   return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {cards.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm`}
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-400 text-[10px] font-bold uppercase">
                {stat.label}
              </p>
              <div className="p-2 rounded-lg bg-primary/5 text-primary">
                <Icon className="text-xl" />
              </div>
            </div>

            <p className="text-charcoal text-2xl font-extrabold">
              {stat.value}
            </p>

            {stat.trend && (
              <p
                className={`text-[11px] font-bold flex items-center gap-1 ${
                  stat.trend.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.trend.isPositive ? (
                  <HiArrowTrendingUp />
                ) : (
                  <HiArrowTrendingDown />
                )}
                {stat.trend.value}
              </p>
            )}

            {stat.subtitle && (
              <p className="text-[11px] text-slate-400 font-bold">
                {stat.subtitle}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};



export default StatsCards;
