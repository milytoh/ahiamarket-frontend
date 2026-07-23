import React from "react";
import {
  MdStore,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

interface Props {
  invoice: any;
}

const InvoiceParties: React.FC<Props> = ({ invoice }) => {
  const vendorAddress = invoice?.vendor?.address;
  const deliveryAddress = invoice?.delivery?.address;

  

  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-6 animate-fade-in">
      {/* Seller */}
      <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#05b384]/10 flex items-center justify-center">
            <MdStore className="text-2xl text-[#05b384]" />
          </div>

          <div>
            <h2 className="font-bold text-lg text-[#0b1c30]">Sold By</h2>

            <p className="text-sm text-[#6c7a72]">Vendor Information</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-start gap-4">
            <span className="text-[#6c7a72]">Store</span>

            <span className="font-semibold text-right">
              {invoice.vendor?.storeName || "N/A"}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2 text-[#6c7a72]">
              <MdEmail />
              Email
            </span>

            <span className="text-right break-all">
              {invoice.vendor?.email || "N/A"}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2 text-[#6c7a72]">
              <MdPhone />
              Phone
            </span>

            <span className="text-right">{invoice.vendor?.phone || "N/A"}</span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2 text-[#6c7a72]">
              <MdLocationOn />
              Address
            </span>

            <div className="text-right text-sm leading-6">
              <div>{invoice.vendor?.address}</div>

              <div>
                {[invoice.vendor?.city, invoice.vendor?.state]
                  .filter(Boolean)
                  .join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buyer */}
      <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#05b384]/10 flex items-center justify-center">
            <MdPerson className="text-2xl text-[#05b384]" />
          </div>

          <div>
            <h2 className="font-bold text-lg text-[#0b1c30]">Bill To</h2>

            <p className="text-sm text-[#6c7a72]">Customer Information</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-start gap-4">
            <span className="text-[#6c7a72]">Name</span>

            <span className="font-semibold text-right">
              {invoice.buyer?.fullname || "N/A"}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2 text-[#6c7a72]">
              <MdEmail />
              Email
            </span>

            <span className="text-right break-all">
              {invoice.buyer?.email || "N/A"}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2 text-[#6c7a72]">
              <MdPhone />
              Phone
            </span>

            <span className="text-right">{invoice.buyer?.phone || "N/A"}</span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="flex items-center gap-2 text-[#6c7a72]">
              <MdLocationOn />
              Address
            </span>

            <div className="text-right text-sm leading-6">
              {invoice.delivery?.address || "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceParties