"use client";

import React from "react";
import PageHeader from "@/components/vendor/orders/OrderPageHeader";
import StatsGrid from "@/components/vendor/orders/StatsGrid";
import OrdersTable from "@/components/vendor/orders/OrdersTable";

export default function Order()  {
  return (
    <div className="max-w-[77rem] mx-auto space-y-6">
      <PageHeader />
      <StatsGrid />
      <OrdersTable />
    </div>
  );
};

