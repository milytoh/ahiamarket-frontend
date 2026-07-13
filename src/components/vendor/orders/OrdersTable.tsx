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
  pagination:  {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  filters: OrderFilters;
  onFilterChange: React.Dispatch<React.SetStateAction<OrderFilters>>;
  onPageChange: (page: number) => void;
}




export default function OrderTable({ orders, loading, pagination, filters, onFilterChange, onPageChange }: OrdersTableProps) {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);


  // pagination 
  const start = (pagination.page - 1) * pagination.limit + 1;
  const end = Math.min(pagination.page * pagination.limit, pagination.total);


  //add smart pagination logic
  const getPageNumbers = () => {
    const { page, totalPages } = pagination;

    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (page > 3) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  
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
          Showing {start} to {end} of {pagination.total} entries
        </span>

        <div className="flex gap-2">
          <button
            onClick={() => onPageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
            className="px-4 py-2 border border-[#bbcac1] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#eff4ff]"
          >
            Previous
          </button>

          {getPageNumbers().map((item, index) => {
            if (item === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 flex items-center text-[#6c7a72]"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={item}
                onClick={() => onPageChange(item)}
                className={`w-10 h-10 rounded-lg border text-sm transition-all ${
                  pagination.page === item
                    ? "bg-[#05b384] text-white border-[#05b384]"
                    : "border-[#bbcac1] hover:bg-[#eff4ff]"
                }`}
              >
                {item}
              </button>
            );
          })}

          <button
            onClick={() => onPageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
            className="px-4 py-2 border border-[#bbcac1] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#eff4ff]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};


