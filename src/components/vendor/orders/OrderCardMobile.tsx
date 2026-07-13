import React from "react";
import {
  MdVisibility,
  MdPrint,
  MdShoppingBag,
  MdPerson,
  MdPayments,
  MdLocalShipping,
  MdCalendarToday,
} from "react-icons/md";

interface Order {
  id: string;
  parentId: string;
  customer: string;
  products: string;
  amount: string;
    payment: string;
  deliveryStatus: string;
  orderStatus: string;
  date: string;
}

interface Props {
  order: Order;
}

const OrderCardMobile: React.FC<Props> = ({ order }) => {
  const orderColor = {
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    packed: "bg-purple-100 text-purple-700",
    shipped: "bg-indigo-100 text-indigo-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-[#bbcac1] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-[#f8f9ff] border-b border-[#bbcac1] flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-[#006c4e]">{order.id}</h3>

          <p className="text-xs text-gray-500">Parent: {order.parentId}</p>
        </div>

        <span
          className={`capitalize px-3 py-1 rounded-full text-xs font-semibold ${
            orderColor[
              order?.orderStatus?.toLowerCase() as keyof typeof orderColor
            ] || "bg-gray-100 text-gray-700"
          }`}
        >
          {order.orderStatus}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <MdPerson className="text-[#05b384] mt-1" />
            <div>
              <p className="text-xs text-gray-500">Customer</p>
              <p className="font-medium">{order.customer}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Products</p>
            <p className="font-medium">{order.products}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <MdShoppingBag className="text-[#05b384] mt-1" />
            <div>
              <p className="text-xs text-gray-500">Amount</p>
              <p className="font-bold text-[#006c4e]">{order.amount}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Payment</p>

            <span
              className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                order.payment === "Paid"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {order.payment}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <MdLocalShipping className="text-[#05b384] mt-1" />

            <div>
              <p className="text-xs text-gray-500">Delivery</p>

              <p className="font-medium">{order.deliveryStatus}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <MdCalendarToday className="text-[#05b384] mt-1" />

            <div className="text-right">
              <p className="text-xs text-gray-500">Date</p>

              <p className="font-medium">{order.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#bbcac1] p-3 bg-gray-50 flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#05b384] text-white font-medium hover:bg-[#04956f] transition">
          <MdVisibility />
          Details
        </button>

        <button className="w-12 flex justify-center items-center rounded-xl border border-[#bbcac1] hover:bg-white">
          <MdPrint />
        </button>
      </div>
    </div>
  );
};

export default OrderCardMobile;
