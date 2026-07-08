import React from "react";
import { MdVisibility, MdPrint } from "react-icons/md";

interface Order {
  id: string;
  parentId: string;
  customer: string;
  products: string;
  amount: string;
  payment: string
  deliveryStatus: string;
  orderStatus: "Shipped" | "Pending" | "Processing";
  date: string;
}

interface OrderRowProps {
  order: Order;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}

const OrderRow: React.FC<OrderRowProps> = ({
  order,
  isSelected,
  onToggleSelect,
}) => {
  return (
    <tr className="hover:bg-[#eff4ff]/70 transition-colors">
      <td className="p-4 w-12">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(order.id)}
          className="rounded border-[#bbcac1] text-[#006c4e] focus:ring-[#006c4e]"
        />
      </td>
      <td className="p-4 font-mono text-[#006c4e] font-medium">{order.id}</td>
      <td className="p-4 font-mono text-[#6c7a72]">{order.parentId}</td>
      <td className="p-4 font-semibold">{order.customer}</td>
      <td className="p-4 text-[#6c7a72]">{order.products}</td>
      <td className="p-4 text-right font-mono font-medium">{order.amount}</td>
      <td className="p-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
            order.payment === "Paid"
              ? "bg-[#3cb088]/10 text-[#006c4f]"
              : "bg-red-100 text-red-700"
          }`}
        >
          {order.payment}
        </span>
      </td>
      <td className="p-4 text-[#6c7a72]">{order.deliveryStatus}</td>
      <td className="p-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
            order.orderStatus === "Shipped"
              ? "bg-emerald-100 text-emerald-700"
              : order.orderStatus === "Pending"
                ? "bg-[#fd9923]/10 text-[#8c4f00]"
                : "bg-blue-100 text-blue-700"
          }`}
        >
          {order.orderStatus}
        </span>
      </td>
      <td className="p-4 text-[#6c7a72] whitespace-nowrap">{order.date}</td>
      <td className="p-4 flex gap-2 justify-center">
        <button
          className="p-2 text-[#6c7a72] hover:text-[#006c4e] hover:bg-[#eff4ff] rounded-md transition-colors"
          title="View Details"
        >
          <MdVisibility size={20} />
        </button>
        <button
          className="p-2 text-[#6c7a72] hover:text-[#006c4e] hover:bg-[#eff4ff] rounded-md transition-colors"
          title="Print Invoice"
        >
          <MdPrint size={20} />
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
