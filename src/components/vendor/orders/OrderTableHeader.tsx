import React from "react";

const OrderTableHeader: React.FC = () => {
  return (
    <thead>
      <tr className="bg-[#eff4ff] border-b border-[#bbcac1] text-[#3c4a43] text-xs font-semibold uppercase tracking-wider">
        <th className="p-4 w-12">
          <input
            type="checkbox"
            className="rounded border-[#bbcac1] text-[#006c4e] focus:ring-[#006c4e]"
          />
        </th>
        <th className="p-4 whitespace-nowrap">Order ID</th>
        <th className="p-4 whitespace-nowrap">Parent ID</th>
        <th className="p-4 whitespace-nowrap">Customer</th>
        <th className="p-4 whitespace-nowrap">Products</th>
        <th className="p-4 whitespace-nowrap text-right">Amount</th>
        <th className="p-4 whitespace-nowrap">Payment</th>
        <th className="p-4 whitespace-nowrap">Delivery Status</th>
        <th className="p-4 whitespace-nowrap">Order Status</th>
        <th className="p-4 whitespace-nowrap">Date</th>
        <th className="p-4 whitespace-nowrap text-center">Actions</th>
      </tr>
    </thead>
  );
};

export default OrderTableHeader;
