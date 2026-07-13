import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi"; 

import useDebounce from "@/hooks/useDebounce";

import React from "react";
import PageHeader from "@/components/vendor/orders/OrderPageHeader";
import StatsGrid from "@/components/vendor/orders/StatsGrid";
import OrdersTable from "@/components/vendor/orders/OrdersTable";

import StatsGridSkeleton from "@/components/ui/skeletons/vendor/order/StatsGridSkeleton";
import OrdersTableSkeleton from "@/components/ui/skeletons/vendor/order/OrdersTableSkeleton";

import ErrorState from "@/components/ui/Error";
import { toast } from "react-toastify";

export default function Order() {

  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState<any>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const [filters, setFilters] = useState({
    search: "",
    orderStatus: "all",
    paymentStatus: "all",
    startDate: null as Date | null,
    endDate: null as Date | null,
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  const params = new URLSearchParams();

  params.append("page", String(pagination.page));
  params.append("limit", String(pagination.limit));

  if (filters.orderStatus !== "all") {
    params.append("orderStatus", filters.orderStatus);
  }

  if (filters.paymentStatus !== "all") {
    params.append("paymentStatus", filters.paymentStatus);
  }

  if (debouncedSearch.trim()) {
    params.append("search", debouncedSearch.trim());
  }

  if (filters.startDate) {
    params.append("startDate", filters.startDate.toISOString());
  }

  if (filters.endDate) {
    params.append("endDate", filters.endDate.toISOString());
  }

  const { get, loading, error } = useApi(
    `${API_URL}/vendor/orders?${params.toString()}`,
  );

  //  const { post, loading, error } = useApi(
  //    `${API_URL}/vendor/test/create-orders`,
  //  );


  // useEffect(() => {
  //   const fetchDashboard = async () => {
  //     try {
  //       const response = await post();

  //       console.log(response.data);
     
  //     } catch (err) {}
  //   };

  //   fetchDashboard();
  // }, []);


  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await get();

        setOrders(response.orders);
        setStats(response.stats);

        setPagination((prev) => ({
          ...prev,
          total: response.pagination.total,
          totalPages: response.pagination.totalPages,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, [
    pagination.page,
    pagination.limit,
    filters.orderStatus,
    filters.paymentStatus,
    filters.startDate,
    filters.endDate,
    debouncedSearch,
  ]);


   useEffect(() => {
     if (error) {
       toast.error(
         `${error.message || "something went wrong, check your network connection"}`,
       );
     }
   }, [error]);


  return (
    <div className="max-w-[77rem]  space-y-6 mx-3 sm:mx-auto">
      <PageHeader />

      {loading ? <StatsGridSkeleton /> : <StatsGrid stats={stats} />}

      {loading ? (
        <OrdersTableSkeleton />
      ) : (
        <OrdersTable
          orders={orders}
          loading={loading}
          pagination={pagination}
          filters={filters}
          onFilterChange={setFilters}
          onPageChange={(page) =>
            setPagination((prev) => ({
              ...prev,
              page,
            }))
          }
        />
      )}
    </div>
  ); 
}
