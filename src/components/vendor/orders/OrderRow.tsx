import React from "react";
import { MdVisibility, MdPrint } from "react-icons/md";
import { Link } from "react-router-dom";

interface Order {
  _id: string;
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

  const orderColor = {
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    packed: "bg-purple-100 text-purple-700",
    shipped: "bg-[#3cb088]/10 text-[#006c4f]",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };
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
            orderColor[
              order?.orderStatus?.toLowerCase() as keyof typeof orderColor
            ] || "bg-gray-100 text-gray-700"
          }`}
        >
          {order.orderStatus}
        </span>
      </td>
      <td className="p-4 text-[#6c7a72] whitespace-nowrap">{order.date}</td>
      <td className="p-4 flex gap-2 justify-center">
        <Link
          to={`/vendor/dashboard/orders/${order._id}`}
          className="p-2 text-[#6c7a72] hover:text-[#006c4e] hover:bg-[#eff4ff] rounded-md transition-colors"
        >
          <MdVisibility size={20} />
        </Link>
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
