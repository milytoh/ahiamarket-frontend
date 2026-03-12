import { useApi } from "@/hooks/useApi";
import { useState, useEffect } from "react";

import Breadcrumb from "@/components/profile/transaction-history/Breadcrumb";
import PageHeader from "@/components/profile/transaction-history/PageHeader";
import FiltersBar from "@/components/profile/transaction-history/FiltersBar";
import TransactionTable from "@/components/profile/transaction-history/TransactionTable";
import Pagination from "@/components/profile/transaction-history/Pagination";
import MobileTransactionList from "@/components/profile/transaction-history/MobileTransactionList";

import { Transaction } from "@/components/profile/transaction-history/TransactionRow";
import { ur } from "zod/v4/locales";

const transactions: Transaction[] = [
  {
    date: "Oct 24, 2023",
    time: "14:22 PM",
    desc: "NVIDIA RTX 4090 Purchase",
    method: "Main Wallet",
    amount: "-$1,599.00",
    status: "Success",
  },
  {
    date: "Oct 23, 2023",
    time: "09:15 AM",
    desc: "Wallet Top-up",
    method: "Mastercard ****4242",
    amount: "+$5,000.00",
    status: "Pending",
  },
];

type Filters = {
  startDate?: Date | null;
  endDate?: Date | null;
  type: "all" | "deposit" | "withdrawal" | "purchase";
  search?: string;
};

const defaultFilters: Filters = {
  startDate: undefined, 
  endDate: undefined, 
  type: "all",
  
};

export default function TransactionHistory() {

  const [url, setUrl] = useState(
    "http://localhost:3000/api/user/profile/wallet/transactions?type=all",
  );
  const [transactionData, setTransactionData] = useState()
  

  const { get, loading, error } = useApi(
   url
  );

  const handleFilters = async (filters: Filters) => {
    const params = new URLSearchParams();
    
    console.log(filters)

    if (filters.startDate)
      params.append("startDate", filters.startDate.toISOString());

    if (filters.endDate)
      params.append("endDate", filters.endDate.toISOString());

    if (filters.type !== "all") params.append("type", filters.type);
    if (filters.type === 'all') params.append("type", filters.type)
    
    console.log(params)

     const newUrl = `http://localhost:3000/api/user/profile/wallet/transactions${
       params.toString() ? `?${params.toString()}` : ""
     }`;
    setUrl(
      (pre) => newUrl
    )

  };

 useEffect(() => {
   if (!url) return;

   const fetchData = async () => {
     try {
       const response = await get();
       console.log(response);
     } catch (err) {
       console.error(err);
     }
   };

   fetchData();
 }, [url]);

  return (
    <main className="flex-1 flex flex-col ">
      <Breadcrumb />

      <PageHeader />

      <FiltersBar onChange={handleFilters} total={6} />

      {/* MOBILE */}
      <MobileTransactionList transactions={transactions} />

      {/* DESKTOP */}
      <div className="hidden md:block">
        <TransactionTable transactions={transactions} />
      </div>

      <Pagination />
    </main>
  );
}
