

import Breadcrumb from "@/components/profile/transaction-history/Breadcrumb";
import PageHeader from "@/components/profile/transaction-history/PageHeader";
import FiltersBar from "@/components/profile/transaction-history/FiltersBar";
import TransactionTable from "@/components/profile/transaction-history/TransactionTable";
import Pagination from "@/components/profile/transaction-history/Pagination";

export default function TransactionHistory() {
  return (
    <main className="flex-1 flex flex-col ">
      <Breadcrumb />

      <PageHeader />

      <FiltersBar />

      <TransactionTable />

      <Pagination />
    </main>
  );
}
