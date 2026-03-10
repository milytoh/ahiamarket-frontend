

import Breadcrumb from "@/components/profile/transaction-history/Breadcrumb";
import PageHeader from "@/components/profile/transaction-history/PageHeader";
import FiltersBar from "@/components/profile/transaction-history/FiltersBar";
import TransactionTable from "@/components/profile/transaction-history/TransactionTable";
import Pagination from "@/components/profile/transaction-history/Pagination";
import MobileTransactionList from "@/components/profile/transaction-history/MobileTransactionList";

import { Transaction } from "@/components/profile/transaction-history/TransactionRow";

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

export default function TransactionHistory() {
  return (
    <main className="flex-1 flex flex-col ">
      <Breadcrumb />

      <PageHeader />

      <FiltersBar />

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
