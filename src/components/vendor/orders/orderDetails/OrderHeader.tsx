import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack, MdPrint, MdDownload, MdAccessTime } from "react-icons/md";

import StatusBadge from "./StatusBadge";

interface Props {
  orderId: string;
  orderNumber: string;
  parentOrderNumber: string;
  createdAt: string;
  status: string;
}

const OrderHeader: React.FC<Props> = ({
  orderId,
  orderNumber,
  parentOrderNumber,
  createdAt,
  status,
}) => {

 const navigate = useNavigate();
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left */}

        <div>
          <Link
            to="/vendor/dashboard/orders"
            className="inline-flex items-center gap-2 text-[#006c4e] hover:text-[#05b384] transition-colors"
          >
            <MdArrowBack size={22} />

            <span className="font-medium">Back to Orders</span>
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-[#0b1c30]">
            {orderNumber}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-[#6c7a72]">
            <span>
              Parent:
              <span className="ml-1 font-medium text-[#006c4e]">
                {parentOrderNumber}
              </span>
            </span>

            <span className="flex items-center gap-1">
              <MdAccessTime />

              {createdAt}
            </span>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={status} />

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#bbcac1] hover:bg-[#eff4ff] transition-all duration-300 hover:scale-105 active:scale-95">
            <MdPrint />
            Print
          </button>

          <button
            onClick={() =>
              navigate(`/vendor/dashboard/orders/${orderId}/invoice`)
            }
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#05b384] text-white hover:bg-[#04956f] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MdDownload />
            Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
