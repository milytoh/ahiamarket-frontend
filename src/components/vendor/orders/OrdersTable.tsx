"use client";

import React, { useState } from "react";
import FiltersBar from "./FiltersBar";
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

const sampleOrders: Order[] = [
  {
    id: "#AHM-1001-A",
    parentId: "#AHM-1001",
    customer: "Chinedu Okafor",
    products: "3 items",
    amount: "₦45,000",
    payment: "Paid",
    deliveryStatus: "In Transit",
    orderStatus: "Shipped",
    date: "Oct 24, 2023",
  },
  {
    id: "#AHM-1002-B",
    parentId: "#AHM-1002",
    customer: "Amina Bello",
    products: "1 item",
    amount: "₦12,500",
    payment: "Unpaid",
    deliveryStatus: "Awaiting Pickup",
    orderStatus: "Pending",
    date: "Oct 24, 2023",
  },
  {
    id: "#AHM-0998-A",
    parentId: "#AHM-0998",
    customer: "Oluwaseun Adeyemi",
    products: "5 items",
    amount: "₦150,000",
    payment: "Paid",
    deliveryStatus: "Delivered to Hub",
    orderStatus: "Processing",
    date: "Oct 23, 2023",
  },
  {
    id: "#AHM-0997-C",
    parentId: "#AHM-0997",
    customer: "Fatima Yusuf",
    products: "2 items",
    amount: "₦78,900",
    payment: "Paid",
    deliveryStatus: "Delivered",
    orderStatus: "Shipped",
    date: "Oct 22, 2023",
  },
];

const OrdersTable: React.FC = () => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm overflow-hidden flex flex-col">
      <FiltersBar />
      <BulkActionsBar selectedCount={selectedOrders.length} />

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <OrderTableHeader />
          <tbody className="divide-y divide-[#bbcac1]/50 text-sm text-[#0b1c30]">
            {sampleOrders.map((order) => (
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

export default OrdersTable;
