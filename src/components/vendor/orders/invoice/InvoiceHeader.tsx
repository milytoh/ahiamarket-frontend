import React from "react";
import { MdPrint, MdDownload, MdCheckCircle, MdPending } from "react-icons/md";

const API_URL = import.meta.env.VITE_API_URL;

interface Props {
  invoice: any;
}

const InvoiceHeader: React.FC<Props> = ({ invoice }) => {
  const paid = invoice?.payment?.status?.toLowerCase() === "paid";

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm overflow-hidden animate-fade-in">
      {/* Top Brand Bar */}
      <div className="bg-[#05b384] text-white px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <img
            src={`${API_URL}/logo.png`}
            alt="Ahiamarket"
            className="w-14 h-14 rounded-xl bg-white p-2 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold tracking-wide">AHIAMARKET</h1>

            <p className="text-white/90 text-sm">Vendor Invoice</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 print:hidden">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#05b384] font-semibold hover:scale-105 transition"
          >
            <MdPrint />
            Print
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0b1c30] hover:bg-[#081420] transition">
            <MdDownload />
            Download PDF
          </button>
        </div>
      </div>

      {/* Invoice Info */}
      <div className="px-8 py-8 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <p className="text-sm uppercase tracking-wider text-[#6c7a72]">
            Invoice
          </p>

          <h2 className="text-3xl font-bold text-[#0b1c30] mt-1">
            #{invoice.order_number}
          </h2>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between border-b border-dashed pb-2">
              <span className="text-[#6c7a72]">Parent Order</span>

              <span className="font-medium">{invoice.parent_order_number}</span>
            </div>

            <div className="flex justify-between border-b border-dashed pb-2">
              <span className="text-[#6c7a72]">Order Date</span>

              <span>{new Date(invoice.created_at).toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6c7a72]">Payment Method</span>

              <span className="capitalize">{invoice.payment?.method}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#f8f9ff] rounded-2xl border border-[#bbcac1] p-6">
          <h3 className="font-semibold text-[#0b1c30] mb-6">Payment Status</h3>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              paid
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {paid ? <MdCheckCircle /> : <MdPending />}

            {invoice.payment?.status}
          </div>

          <div className="mt-8">
            <p className="text-sm text-[#6c7a72]">Total Amount</p>

            <h2 className="text-4xl font-bold text-[#05b384] mt-2">
              ₦{Number(invoice.total).toLocaleString()}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
