import React from "react";
// import { Wallet, Timer, ShoppingCart } from "lucide-react";

// interface BalanceData {
//   totalBalance: number;
//   onHoldFunds: number;
//   totalSpent: number;
// }

// interface WalletBalanceProps {
//   data?: BalanceData;
// }

// const WalletBalance: React.FC<WalletBalanceProps> = ({ data }) => {
//   const balanceData = data || {
//     totalBalance: 12450.0,
//     onHoldFunds: 1200.0,
//     totalSpent: 45890.0,
//   };

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(amount);
//   };

//   return (
//     <div className="xl:col-span-2 relative overflow-hidden flex flex-col items-stretch justify-start rounded-2xl shadow-soft bg-white border border-slate-100">
//       {/* Background Icon */}
//       <div className="absolute top-0 right-0 p-8 text-primary opacity-5 pointer-events-none">
//         <Wallet
//           className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]"
//           strokeWidth={1.5}
//         />
//       </div>

//       {/* Content */}
//       <div className="flex w-full grow flex-col justify-center gap-6 p-6 md:p-8 relative z-10">
//         <div>
//           <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.1em] mb-1">
//             Total Balance
//           </p>
//           <h3 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em]">
//             {formatCurrency(balanceData.totalBalance)}
//           </h3>
//         </div>

//         {/* Sub-balances */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-50">
//           <div className="flex items-center gap-3">
//             <div className="size-11 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
//               <Timer className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
//                 On-hold Funds
//               </p>
//               <p className="text-slate-900 text-xl font-bold leading-tight">
//                 {formatCurrency(balanceData.onHoldFunds)}
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="size-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//               <ShoppingCart className="w-5 h-5" />
//             </div>
//             <div>
//               <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">
//                 Total Spent
//               </p>
//               <p className="text-slate-900 text-xl font-bold leading-tight">
//                 {formatCurrency(balanceData.totalSpent)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletBalance;

import {
 
  HiOutlineWallet,
  HiOutlineShoppingBag,
  
} from "react-icons/hi2";

import {
 
  MdTimer,
} from "react-icons/md";

const WalletBalance: React.FC = () => {
  return (
    <section className="xl:col-span-2 bg-white border border-slate-100 rounded-2xl shadow-soft p-6 md:p-8 relative overflow-hidden">
      <HiOutlineWallet className="absolute top-6 right-6 text-[120px] text-primary opacity-5 hidden sm:block" />

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Total Balance
        </p>
        <h3 className="text-primary text-4xl md:text-5xl font-black mt-1">
          $12,450.00
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-50">
        <BalanceItem
          icon={<MdTimer />}
          label="On-hold Funds"
          value="$1,200.00"
          bg="bg-blue-50"
          color="text-blue-600"
        />

        <BalanceItem
          icon={<HiOutlineShoppingBag />}
          label="Total Spent"
          value="$45,890.00"
          bg="bg-primary/10"
          color="text-primary"
        />
      </div>
    </section>
  );
};

const BalanceItem = ({ icon, label, value, bg, color }: any) => (
  <div className="flex items-center gap-3">
    <div
      className={`size-11 rounded-full ${bg} ${color} flex items-center justify-center`}
    >
      {icon}
    </div>
    <div>
      <p className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
        {label}
      </p>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

export default WalletBalance;
