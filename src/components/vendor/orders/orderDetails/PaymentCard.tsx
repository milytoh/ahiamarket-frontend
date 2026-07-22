import React from "react";
import {
  MdPayments,
  MdReceiptLong,
  MdCreditCard,
  MdAttachMoney,
} from "react-icons/md";

interface Props {
  payment: {
    method: string;
    status: string;
    transaction_ref: string;
  };

  subtotal: number;
  shippingFee: number;
  total: number;
}

const PaymentCard: React.FC<Props> = ({
  payment,
  subtotal,
  shippingFee,
  total,
}) => {
  const statusColor = {
    paid: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    failed: "bg-red-100 text-red-700",
    refunded: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 hover:shadow-md transition-all duration-300 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#05b384]/10 flex items-center justify-center">
          <MdPayments className="text-[#05b384] text-2xl" />
        </div>

        <div>
          <h2 className="font-bold text-lg text-[#0b1c30]">
            Payment Information
          </h2>

          <p className="text-sm text-[#6c7a72]">Transaction Summary</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdCreditCard />
            Method
          </span>

          <span className="font-semibold capitalize">
            {payment?.method || "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdReceiptLong />
            Status
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              statusColor[
                payment?.status?.toLowerCase() as keyof typeof statusColor
              ] || "bg-gray-100 text-gray-700"
            }`}
          >
            {payment?.status || "Unknown"}
          </span>
        </div>

        <div className="flex justify-between items-start">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdAttachMoney />
            Transaction Ref
          </span>

          <span className="font-mono text-sm text-right break-all max-w-[180px]">
            {payment?.transaction_ref || "N/A"}
          </span>
        </div>

        <hr />

        <div className="flex justify-between">
          <span className="text-[#6c7a72]">Subtotal</span>

          <span>₦{subtotal?.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[#6c7a72]">Shipping Fee</span>

          <span>₦{shippingFee?.toLocaleString()}</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-bold text-[#05b384]">
          <span>Total Paid</span>

          <span>₦{total?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
