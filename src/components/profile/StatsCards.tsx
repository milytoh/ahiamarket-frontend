import React from "react";

interface StatCard {
  label: string;
  value: string;
  icon: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  subtitle?: string;
}

const StatsCards: React.FC = () => {
  const stats: StatCard[] = [
    {
      label: "Total Orders",
      value: "48",
      icon: "shopping_bag",
      trend: {
        value: "+12% this month",
        isPositive: true,
      },
    },
    {
      label: "Wallet Balance",
      value: "$1,240.00",
      icon: "account_balance_wallet",
      subtitle: "Available balance",
    },
    {
      label: "Disputes",
      value: "0",
      icon: "gavel",
      subtitle: "Perfect record",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`group bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all ${
            index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              {stat.label}
            </p>
            <div
              className={`p-2 rounded-lg ${
                stat.subtitle === "Perfect record"
                  ? "bg-slate-50 text-slate-400"
                  : "bg-primary/5 text-primary"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                {stat.icon}
              </span>
            </div>
          </div>
          <p className="text-charcoal text-2xl md:text-3xl font-extrabold mb-1">
            {stat.value}
          </p>
          {stat.trend && (
            <p
              className={`text-[11px] font-bold flex items-center gap-1 ${
                stat.trend.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {stat.trend.isPositive ? "trending_up" : "trending_down"}
              </span>
              {stat.trend.value}
            </p>
          )}
          {stat.subtitle && (
            <p className="text-[11px] text-slate-400 font-bold">
              {stat.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
