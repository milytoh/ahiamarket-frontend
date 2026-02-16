import React from "react";
import {
  HiArrowDownLeft,
  HiArrowUpRight,
  HiClock,
} from "react-icons/hi2";

type TransactionStatus = "success" | "pending" | "failed";

type TransactionType = "deposit" | "withdrawal" |"credit";

interface Activity {
  
  _id?: string,
  type: TransactionType;
  title?: string;
  createdAt: string;
  amount: number;
  status: TransactionStatus;
  reference: string;
}



//  reference: 1,
//             type: 1,
//             amount: 1,
//             status: 1,
//             createdAt: 1,

// const activities: Activity[] = [
//   {
//     type: "credit",
//     title: "Wallet Funding",
//     date: "Jan 12, 2026",
//     amount: "+₦250900.00",
//   },
//   {
//     type: "pending",
//     title: "Withdrawal Request",
//     date: "Jan 11, 2026",
//     amount: "-₦12000.00",
//   },
//   {
//     type: "debit",
//     title: "Order Payment",
//     date: "Jan 10, 2026",
//     amount: "-₦75334.50",
//   },
//   {
//     type: "credit",
//     title: "Refund",
//     date: "Jan 05, 2026",
//     amount: "+₦40999.00",
//   },
// ];

interface RecenActivitiesProp {
  activities: Activity[]
}

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-NG").format(amount);
};

export const formatRelativeTime = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);

  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 30) return `${diffInDays} days ago`;

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12)
    return `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`;

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`;
};




const RecentActivities: React.FC<RecenActivitiesProp> = ({activities}) => {
   console.log(activities)

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-8 py-5 border-b border-slate-50">
        <h3 className="text-brand-orange text-lg font-bold">
          Recent Activities
        </h3>
      </div>

      {/* Activities */}
      <div className="divide-y divide-slate-50">
        {activities?.map((activity, index) => {
          const isCredit = activity.type ===  "credit" || "deposit";
          const isDebit = activity.type === "withdrawal";
          const isPending = activity.status === "pending";

          return (
            <div
              key={index}
              className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Icon */}
                <div
                  className={`size-10 rounded-xl flex items-center justify-center shrink-0
                  ${
                    isCredit
                      ? "bg-green-100 text-green-600"
                      : isDebit
                        ? "bg-red-100 text-red-600"
                        : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {isCredit && <HiArrowDownLeft className="text-lg" />}
                  {isDebit && <HiArrowUpRight className="text-lg" />}
                  {isPending && <HiClock className="text-lg" />}
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <p className="text-sm font-bold text-brand-orange truncate">
                    {activity.type}
                  </p>
                  <p className="text-xs text-slate-400 font-medium">
                    {formatRelativeTime(activity.createdAt)}
                  </p>
                </div>
              </div>

              {/* Amount */}
              <p
                className={`text-sm font-extrabold whitespace-nowrap
                ${
                  isCredit
                    ? "text-green-600"
                    : isDebit
                      ? "text-red-600"
                      : "text-amber-600"
                }`}
              >
                ₦ {formatPrice(activity.amount)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentActivities;




// import React from "react";
// import ActivityRow from "./ActivityRow";

// export type TransactionType = "payment" | "deposit" | "withdraw" | "refund";
// export type TransactionStatus = "completed" | "processing" | "failed";

// export interface Transaction {
//   id: string;
//   date: string;
//   time: string;
//   description: string;
//   type: TransactionType;
//   amount: number;
//   status: TransactionStatus;
// }

// interface RecentActivitiesProps {
//   transactions?: Transaction[];
//   onViewAll?: () => void;
// }

// const RecentActivities: React.FC<RecentActivitiesProps> = ({
//   transactions,
//   onViewAll,
// }) => {
//   const defaultTransactions: Transaction[] = [
//     {
//       id: "1",
//       date: "Oct 24, 2023",
//       time: "14:22 PM",
//       description: "Purchase: iPhone 15 Pro Case",
//       type: "payment",
//       amount: -45.0,
//       status: "completed",
//     },
//     {
//       id: "2",
//       date: "Oct 22, 2023",
//       time: "09:15 AM",
//       description: "Wallet Top-up (Visa *4421)",
//       type: "deposit",
//       amount: 2500.0,
//       status: "completed",
//     },
//     {
//       id: "3",
//       date: "Oct 21, 2023",
//       time: "18:45 PM",
//       description: "Bank Withdrawal",
//       type: "withdraw",
//       amount: -1000.0,
//       status: "processing",
//     },
//     {
//       id: "4",
//       date: "Oct 20, 2023",
//       time: "11:10 AM",
//       description: "Refund: Order #AM-29381",
//       type: "refund",
//       amount: 120.0,
//       status: "completed",
//     },
//   ];

//   const activityData = transactions || defaultTransactions;

//   return (
//     <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden  ">
//       {/* Header */}
//       <div className="px-6 md:px-2  py-6 border-b border-slate-50 flex items-center justify-between w-8">
//         <h3 className="text-slate-900 text-xl font-bold">Recent Activities</h3>
//         <button
//           onClick={onViewAll}
//           className="text-primary text-sm font-bold hover:underline transition-all"
//         >
//           View All
//         </button>
//       </div>

//       {/* Table */}
//       <div className="relative overflow-x-auto max-w-full">
//         <table className="w-full text-left border-collapse min-w-[640px] md:min-w-full">
//           <thead>
//             <tr className="bg-slate-50/50">
//               <th className="px-6 md:px-8 py-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
//                 Date &amp; Time
//               </th>
//               <th className="px-6 md:px-8 py-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
//                 Description
//               </th>
//               <th className="px-6 md:px-8 py-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest hidden md:table-cell">
//                 Type
//               </th>
//               <th className="px-6 md:px-8 py-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest sticky-col-header">
//                 Amount
//               </th>
//               <th className="px-6 md:px-8 py-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest text-right sticky-col-header">
//                 Status
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-50">
//             {activityData.map((transaction) => (
//               <ActivityRow key={transaction.id} transaction={transaction} />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentActivities;


// const RecentActivities: React.FC = () => {
//   return (
//     <section className="mt-10">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-xl font-bold text-slate-900">Recent Activities</h3>
//         <button className="text-primary text-sm font-bold hover:underline">
//           View All
//         </button>
//       </div>

//       {/* Desktop */}
//       <div className="hidden md:block bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[700px]">
//             {/* your existing rows */}
//           </table>
//         </div>
//       </div>

//       {/* Mobile */}
//       <div className="md:hidden flex flex-col gap-3">
//         {/* reuse your mobile activity cards */}
//       </div>
//     </section>
//   );
// };

// export default RecentActivities;
