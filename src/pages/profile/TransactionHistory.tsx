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

// const transactions: Transaction[] = [
//   {
//     date: "Oct 24, 2023",
//     time: "14:22 PM",
//     desc: "NVIDIA RTX 4090 Purchase",
//     method: "Main Wallet",
//     amount: "-$1,599.00",
//     status: "Success",
//   },
//   {
//     date: "Oct 23, 2023",
//     time: "09:15 AM",
//     desc: "Wallet Top-up",
//     method: "Mastercard ****4242",
//     amount: "+$5,000.00",
//     status: "Pending",
//   },
// ];

//format transaction data
const formatTransactions = (data:any) => {
  return data?.map((tx: any) => {
    const dateObj = new Date(tx.createdAt);

    const date = dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    const time = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      date,
      time,
      desc: tx.type === "deposit" ? "Wallet Top-up" : "Wallet Withdrawal",

      method:
        tx.channel === "card"
          ? "Card"
          : tx.channel === "bank_transfer"
            ? "Bank Transfer"
            : "Wallet",

      amount:
        tx.type === "deposit"
          ? `+$${tx.amount.toLocaleString()}`
          : `-$${tx.amount.toLocaleString()}`,

      status: tx.status.charAt(0).toUpperCase() + tx.status.slice(1),
    };
  });
};

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
  const [transactionData, setTransactionData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);

  

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
       params.toString()
         ? `?${params.toString()}&page=${page}&limit=${limit}`
         : `?page=${page}&limit=${limit}`
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
       console.log(response, 'responsssss')
       setTotal(response.total)
       setTransactionData(formatTransactions(response.transactions))
     } catch (err) {
       console.error(err);
     }
   };

   fetchData();
 }, [url]);
  
  console.log(transactionData)

  return (
    <main className="flex-1 flex flex-col ">
      <Breadcrumb />

      <PageHeader />

      <FiltersBar onChange={handleFilters} total={6} />

      {/* MOBILE */}
      <MobileTransactionList transactions={transactionData!} />

      {/* DESKTOP */}
      <div className="hidden md:block">
        <TransactionTable transactions={transactionData!} />
      </div>

      <Pagination
        page={page}
        total={total}
        limit={limit}
        onPageChange={(p) => setPage(p)}
      />
    </main>
  );
}
