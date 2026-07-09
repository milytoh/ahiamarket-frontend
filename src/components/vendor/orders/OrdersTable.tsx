"use client";

import React, { useState } from "react";
import FiltersBar, { OrderFilters } from "./FiltersBar";
import BulkActionsBar from "./BulkActionsBar";
import OrderTableHeader from "./OrderTableHeader";
import OrderRow from "./OrderRow";


interface Order {
  id: string;
  parentId: string;
  customer: string;
  products: string;
  amount: string;
  payment: "Paid" | "Unpaid";
  deliveryStatus: string;
  orderStatus: "Shipped" | "Pending" | "Processing";
  date: string;
}



interface OrdersTableProps {
  orders: Order[];
  loading: boolean;
  pagination: Pagination;
  filters: OrderFilters;
  onFilterChange: React.Dispatch<React.SetStateAction<OrderFilters>>;
  onPageChange: (page: number) => void;
}




export default function OrderTable({ orders, loading, pagination, filters, onFilterChange, onPageChange }: OrdersTableProps) {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  
  const formattedOrders = orders.map((order: any) => ({
    _id: order._id,

    id: order.order_number,

    parentId: order.parent_order_number,

    customer: order.buyer?.fullname || "Unknown Customer",

    products: `${order.productsCount} item${
      order.productsCount > 1 ? "s" : ""
    }`,

    amount: `₦${order.total.toLocaleString()}`,

    payment: order.payment.status === "paid" ? "Paid" : "Unpaid",

    deliveryStatus: order.delivery.status,

    orderStatus:
      order.order_status.charAt(0).toUpperCase() + order.order_status.slice(1),

    date: new Date(order.created_at).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));


 

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm overflow-hidden flex flex-col">
      <FiltersBar filters={filters} onChange={onFilterChange} />

      <BulkActionsBar selectedCount={selectedOrders.length} />

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <OrderTableHeader />
          <tbody className="divide-y divide-[#bbcac1]/50 text-sm text-[#0b1c30]">
            {formattedOrders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                isSelected={selectedOrders.includes(order.id)}
                onToggleSelect={(id) =>
                  setSelectedOrders((prev) =>
                    prev.includes(id)
                      ? prev.filter((o) => o !== id)
                      : [...prev, id],
                  )
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-[#bbcac1] flex items-center justify-between bg-[#f8f9ff]">
        <span className="text-sm text-[#6c7a72]">
          Showing 1 to 4 of 42 entries
        </span>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 border border-[#bbcac1] rounded-lg text-sm text-[#6c7a72] hover:bg-[#eff4ff] transition-colors"
            disabled
          >
            Previous
          </button>
          <button className="px-4 py-2 border border-[#bbcac1] bg-white rounded-lg text-sm text-[#0b1c30]">
            1
          </button>
          <button className="px-4 py-2 border border-[#bbcac1] rounded-lg text-sm text-[#6c7a72] hover:bg-[#eff4ff] transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-[#bbcac1] rounded-lg text-sm text-[#6c7a72] hover:bg-[#eff4ff] transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};


