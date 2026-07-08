import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";

import React from "react";
import PageHeader from "@/components/vendor/orders/OrderPageHeader";
import StatsGrid from "@/components/vendor/orders/StatsGrid";
import OrdersTable from "@/components/vendor/orders/OrdersTable";

export default function Order() {

  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const [loadin, setLoading] = useState(true);

  const { get, loading, error } = useApi(
    `${API_URL}/vendor/orders?page=${pagination.page}&limit=${pagination.limit}`,
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
        setPagination({
          page: response.pagination.page,
          limit: response.pagination.limit,
          total: response.pagination.total,
          totalPages: response.pagination.totalPages,
        });
      } catch (err) {}
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-[77rem]  space-y-6 mx-3 sm:mx-auto">
      <PageHeader />
      <StatsGrid />
      <OrdersTable
        orders={orders}
        loading={loading}
        pagination={pagination}
        onPageChange={(page) =>
          setPagination((prev) => ({
            ...prev,
            page,
          }))
        }
      />
    </div>
  );
}
