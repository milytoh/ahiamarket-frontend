// import "react-datepicker/dist/react-datepicker.css";

// export type TransactionType = "all" | "deposit" | "withdrawal" | "purchase";

// export interface TransactionFilters {
//   startDate?: Date | null;
//   endDate?: Date | null;
//   type: TransactionType;
//   search?: string;
// }

// // export default function FiltersBar() {
// //   return (
// //     <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
// //       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// //         <div className="flex flex-wrap items-center gap-2 md:gap-3">
// //           <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-slate-100">
// //             <FiCalendar className="text-slate-400" />
// //             <p className="text-slate-700 text-sm font-medium">
// //               Oct 1 - Oct 31, 2023
// //             </p>
// //             <FiChevronDown className="ml-auto text-slate-400" />
// //           </div>

// //           <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1"></div>

// //           <div className="flex flex-wrap gap-2 w-full sm:w-auto">
// //             <button className="flex-1 sm:flex-none flex items-center justify-center gap-x-2 rounded-lg bg-primary px-4 py-1.5 shadow-sm text-white text-sm font-bold">
// //               All Types
// //               <FiChevronDown />
// //             </button>

// //             <button className="flex-1 sm:flex-none rounded-lg bg-slate-50 border border-slate-100 px-4 py-1.5 hover:bg-slate-100 text-slate-600 text-sm font-medium">
// //               Deposits
// //             </button>

// //             <button className="flex-1 sm:flex-none rounded-lg bg-slate-50 border border-slate-100 px-4 py-1.5 hover:bg-slate-100 text-slate-600 text-sm font-medium">
// //               Withdrawals
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex items-center gap-2 text-slate-500 text-xs">
// //           <FiInfo size={16} />
// //           Showing 48 transactions
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // import DatePicker from "react-datepicker";

// // interface Props {
// //   filters: TransactionFilters;
// //   onChange: (filters: TransactionFilters) => void;
// // }

// // export default function FilterBar({ filters, onChange }: Props) {
// //   const setStartDate = (date: Date | null) => {
// //     onChange({ ...filters, startDate: date });
// //   };

// //   const setEndDate = (date: Date | null) => {
// //     onChange({ ...filters, endDate: date });
// //   };

// //   const setType = (type: any) => {
// //     onChange({ ...filters, type });
// //   };

// //   return (
// //     <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
// //       <div className="flex flex-wrap items-center gap-3">
// //         {/* Start Date */}

// //         <DatePicker
// //           selected={filters?.startDate}
// //           onChange={setStartDate}
// //           placeholderText="Start date"
// //           className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm"
// //         />

// //         {/* End Date */}

// //         <DatePicker
// //           selected={filters?.endDate}
// //           onChange={setEndDate}
// //           placeholderText="End date"
// //           className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm"
// //         />

// //         {/* Transaction Type */}

// //         <select
// //           value={filters?.type}
// //           onChange={(e) => setType(e.target.value)}
// //           className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm"
// //         >
// //           <option value="all">All Types</option>
// //           <option value="deposit">Deposits</option>
// //           <option value="withdrawal">Withdrawals</option>
// //           <option value="purchase">Purchases</option>
// //         </select>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { FiCalendar, FiChevronDown, FiInfo } from "react-icons/fi";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// type Filters = {
//   startDate: Date | null;
//   endDate: Date | null;
//   type: "all" | "deposit" | "withdrawal";
// };

// type Props = {
//   onChange: (filters: Filters) => void;
//   total: number;
// };

// export default function FiltersBar({ onChange, total }: Props) {

//   const [filters, setFilters] = useState<Filters>({
//     startDate: null,
//     endDate: null,
//     type: "all",
//   });

//   const updateFilters = (newFilters: Partial<Filters>) => {
//     const updated = { ...filters, ...newFilters };
//     setFilters(updated);
//     onChange(updated);
//   };

//   const formatDate = () => {
//     if (!filters.startDate || !filters.endDate) return "Select Date";

//     return `${filters.startDate.toLocaleDateString()} - ${filters.endDate.toLocaleDateString()}`;
//   };

//   return (
//     <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
//         {/* LEFT SIDE */}
//         <div className="flex flex-wrap items-center gap-2 md:gap-3">
//           {/* DATE PICKER */}
//           <div className="relative">
//             <DatePicker
//               selectsRange
//               startDate={filters.startDate}
//               endDate={filters.endDate}
//               onChange={(dates: [Date | null, Date | null]) => {
//                 const [start, end] = dates;
//                 updateFilters({ startDate: start, endDate: end });
//               }}
//               customInput={
//                 <button className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-100">
//                   <FiCalendar className="text-slate-400" />
//                   <span className="text-slate-700 text-sm font-medium">
//                     {formatDate()}
//                   </span>
//                   <FiChevronDown className="text-slate-400 ml-auto" />
//                 </button>
//               }
//             />
//           </div>

//           <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1"></div>

//           {/* TYPE FILTER */}
//           <div className="flex flex-wrap gap-2 w-full sm:w-auto">
//             <button
//               onClick={() => updateFilters({ type: "all" })}
//               className={`flex-1 sm:flex-none rounded-lg px-4 py-1.5 text-sm font-bold
//               ${
//                 filters.type === "all"
//                   ? "bg-primary text-white shadow-sm"
//                   : "bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               All Types
//             </button>

//             <button
//               onClick={() => updateFilters({ type: "deposit" })}
//               className={`flex-1 sm:flex-none rounded-lg px-4 py-1.5 text-sm font-medium
//               ${
//                 filters.type === "deposit"
//                   ? "bg-primary text-white"
//                   : "bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               Deposits
//             </button>

//             <button
//               onClick={() => updateFilters({ type: "withdrawal" })}
//               className={`flex-1 sm:flex-none rounded-lg px-4 py-1.5 text-sm font-medium
//               ${
//                 filters.type === "withdrawal"
//                   ? "bg-primary text-white"
//                   : "bg-slate-50 border border-slate-100 text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               Withdrawals
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-2 text-slate-500 text-xs">
//           <FiInfo size={16} />
//           Showing {total} transactions
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FiCalendar, FiInfo } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export type TransactionType = "all" | "deposit" | "withdrawal" | "purchase";

export interface TransactionFilters {
  startDate?: Date | null;
  endDate?: Date | null;
  type: TransactionType;
  search?: string;
}

type Props = {
  onChange: (filters: TransactionFilters) => void;
  total: number;
};

export default function FiltersBar({ onChange, total }: Props) {
  const [filters, setFilters] = useState<TransactionFilters>({
    startDate: null,
    endDate: null,
    type: "all",
  });

  const updateFilters = (newFilters: Partial<TransactionFilters>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* LEFT SIDE */}
        <div className="flex flex-wrap items-center gap-3">
          {/* FROM DATE */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            <FiCalendar className="text-slate-400" />

            <DatePicker
              selected={filters.startDate}
              onChange={(date: Date | null) =>
                updateFilters({ startDate: date })
              }
              placeholderText="From date"
              maxDate={filters.endDate || new Date()}
              dateFormat="MMM d, yyyy"
              className="bg-transparent text-sm outline-none w-[120px]"
            />
          </div>

          {/* TO DATE */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            <FiCalendar className="text-brand-orange" />

            <DatePicker
              selected={filters.endDate}
              onChange={(date: Date | null) => updateFilters({ endDate: date })}
              placeholderText="To date"
              dateFormat="MMM d, yyyy"
              minDate={filters.startDate || undefined}
              maxDate={
                filters.startDate
                  ? new Date(
                      filters.startDate.getFullYear(),
                      filters.startDate.getMonth() + 6,
                      filters.startDate.getDate(),
                    )
                  : new Date()
              }
              className="bg-transparent text-sm outline-none w-[120px]"
            />
          </div>

          <div className="hidden sm:block h-6 w-[1px] bg-slate-200 mx-1"></div>

          {/* TYPE FILTER */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => updateFilters({ type: "all" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "all"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              All
            </button>

            <button
              onClick={() => updateFilters({ type: "deposit" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "deposit"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Deposits
            </button>

            <button
              onClick={() => updateFilters({ type: "withdrawal" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "withdrawal"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Withdrawals
            </button>

            <button
              onClick={() => updateFilters({ type: "purchase" })}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                filters.type === "purchase"
                  ? "bg-primary text-white"
                  : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Purchases
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <FiInfo size={16} />
          Showing {total} transactions
        </div>
      </div>
    </div>
  );
}