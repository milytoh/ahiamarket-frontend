import React from "react";
import { MdDownload } from "react-icons/md";

const PageHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="font-semibold text-3xl tracking-tight text-[#0b1c30]">
          Orders
        </h2>
        <p className="text-[#3c4a43] text-[14px] mt-1">
          Manage your store orders and fulfillment
        </p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 border border-[#bbcac1] text-[#0b1c30] rounded-lg hover:bg-[#eff4ff] transition-colors font-medium text-sm">
        <MdDownload size={18} />
        Export
      </button>
    </div>
  );
};

export default PageHeader;
