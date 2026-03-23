import { useApi } from "@/hooks/useApi";
import { useState, useEffect } from "react";

import Breadcrumb from "@/components/profile/transaction-history/Breadcrumb";
import PageHeader from "@/components/profile/transaction-history/PageHeader";
import FiltersBar from "@/components/profile/transaction-history/FiltersBar";
import TransactionTable from "@/components/profile/transaction-history/TransactionTable";
import Pagination from "@/components/profile/transaction-history/Pagination";
import MobileTransactionList from "@/components/profile/transaction-history/MobileTransactionList";
import TransactionDetailModal from "@/components/profile/transaction-history/TransactionDetail";

import TransactionTableSkeleton from "@/components/ui/skeletons/profile/transaction/TransactionTable";
import MobileTransactionListSkeleton from "@/components/ui/skeletons/profile/transaction/MobileTransaction";
import Modal from "@/components/ui/Modal";

import TransactionDetail from "@/components/profile/transaction-history/TransactionDetail";

import ErrorState from "@/components/ui/Error";
import { toast } from "react-toastify";
import { set } from "zod";
import { tr } from "zod/v4/locales";

//format transaction data
const formatTransactions = (data: any) => {
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
      id: tx._id,
      desc: tx.type === "deposit" ? "Wallet Top-up" : "Wallet Withdrawal",

      method:
        tx.channel === "card"
          ? "Card"
          : tx.channel === "bank_transfer"
            ? "Bank Transfer"
            : "Wallet",

      amount:
        tx.type === "deposit"
          ? `+₦${tx.amount.toLocaleString()}`
          : `-₦${tx.amount.toLocaleString()}`,

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
  const [transactionData, setTransactionData] = useState([]);
  const [trans, setTrans] = useState([]);
  const [transDetail, setTransDetail] = useState()
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    type: "all",
  });

  const [isTransDetailOpen, setIsTransDetailOpen] = useState(false);

  const [url, setUrl] = useState(
    `http://localhost:3000/api/user/profile/wallet/transactions?type=all&page=1&limit=${limit}`,
  );

  const { get, loading, error } = useApi(url);

  const handleFilters = (newFilters: Filters) => {
    // setPage(1); // reset pagination
    // setFilters(newFilters);
    setPage(1);
    setTransactionData([]);
    setFilters(newFilters);
  };

  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.startDate)
      params.append("startDate", filters.startDate.toISOString());

    if (filters.endDate)
      params.append("endDate", filters.endDate.toISOString());

    params.append("type", filters.type);

    params.append("page", String(page));
    params.append("limit", String(limit));

    const newUrl = `http://localhost:3000/api/user/profile/wallet/transactions?${params.toString()}`;

    setUrl(newUrl);
  }, [filters, page, limit]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await get();
        setTrans(response.transactions);
        setTotal(response.total);
        //  setTransactionData(formatTransactions(response.transactions))
        setTransactionData((prev) =>
          page === 1
            ? formatTransactions(response.transactions)
            : [...prev, ...formatTransactions(response.transactions)],
        );
        setHasMore(page < response.totalPages);
      } catch (err) {}
    };

    fetchData();
  }, [url]);

  // const showingNum = Math.min(page * limit, total);
  const showingNum = transactionData.length;

  //mobile fatch more
  const loadMore = () => {
    const next = page + 1;
    setPage(next);
  };

  // for error
  if (error) {
    return (
      <ErrorState
        title="Failed to load profile"
        message={error.message || "something went wrong"}
        onRetry={get}
      />
    );
  }

  useEffect(() => {
    if (error) {
      toast.error("something went wrong, check your network connection");
    }
  }, [error]);

 

  const handlerModalOpen = (id: any) => {
    
    console.log(trans)
   setTransDetail((trans as any[]).find((tr: any) => tr?._id === id))

    setIsTransDetailOpen(true);
  };

console.log(transDetail)

  return (
    <main className="flex-1 flex flex-col ">
      <Modal
        isOpen={isTransDetailOpen}
        onClose={() => setIsTransDetailOpen(false)}
        title="Transaction Details"
        subtitle=""
      >
        <TransactionDetail tx={transDetail!} />
      </Modal>

      <Breadcrumb />

      <PageHeader />

      <FiltersBar onChange={handleFilters} total={showingNum} />

      {/* MOBILE */}

      {loading ? (
        <MobileTransactionListSkeleton />
      ) : (
        <MobileTransactionList
          transactions={transactionData}
          hasMore={hasMore}
          onLoadMore={loadMore}
        />
      )}

      {/* DESKTOP */}
      <div className="hidden md:block">
        {loading ? (
          <TransactionTableSkeleton />
        ) : (
          <TransactionTable
            transactions={transactionData!}
            onClick={handlerModalOpen}
          />
        )}
      </div>

      {/*pagination on DESKTOP */}
      <div className="hidden md:block">
        <Pagination
          page={page}
          total={total}
          limit={limit}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </main>
  );
}
