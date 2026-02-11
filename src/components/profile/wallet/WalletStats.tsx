import React from "react";
// import { Star, ShieldCheck } from "lucide-react";

// interface StatsData {
//   rewardPoints: number;
//   trustLevel: string;
// }

// interface WalletStatsProps {
//   data?: StatsData;
// }

// const WalletStats: React.FC<WalletStatsProps> = ({ data }) => {
//   const statsData = data || {
//     rewardPoints: 2840,
//     trustLevel: "Tier 3 Platinum",
//   };

//   return (
//     <div className="flex flex-col gap-6 w-full max-w-full">
//       {/* Reward Points Card */}
//       <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft flex items-center gap-4">
//         <div className="size-12 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
//           <Star className="w-6 h-6 fill-current" />
//         </div>
//         <div>
//           <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
//             Reward Points
//           </p>
//           <p className="text-slate-900 text-2xl font-black">
//             {statsData.rewardPoints.toLocaleString()}
//           </p>
//         </div>
//       </div>

//       {/* Trust Level Card */}
//       <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-soft flex items-center gap-4">
//         <div className="size-12 shrink-0 rounded-xl bg-primary text-white flex items-center justify-center">
//           <ShieldCheck className="w-6 h-6" />
//         </div>
//         <div>
//           <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">
//             Trust Level
//           </p>
//           <p className="text-primary text-xl font-black">
//             {statsData.trustLevel}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletStats;
import {
  MdVerified,
  MdStars,
 
} from "react-icons/md";

const WalletStats: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft flex items-center gap-4">
        <div className="size-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
          <MdStars />
        </div>
        <div>
          <p className="text-xs uppercase font-bold text-slate-500">
            Reward Points
          </p>
          <p className="text-2xl font-black text-slate-900">*****</p>
        </div>
      </div>

      <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-soft flex items-center gap-4">
        <div className="size-12 rounded-xl bg-primary text-white flex items-center justify-center">
          <MdVerified />
        </div>
        <div>
          <p className="text-xs uppercase font-bold text-slate-600">
            Trust Level
          </p>
          <p className="text-xl font-black text-primary">Tier 3 Platinum</p>
        </div>
      </div>
    </div>
  );
};

export default WalletStats;

