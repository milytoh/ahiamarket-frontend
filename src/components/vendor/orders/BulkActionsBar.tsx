import React from "react";
import {
  MdCheckCircle,
  MdEdit,
  MdIosShare,
  MdPrint,
  MdClose,
} from "react-icons/md";

interface BulkActionsBarProps {
  selectedCount: number;
}

const BulkActionsBar: React.FC<BulkActionsBarProps> = ({ selectedCount }) => {
  return (
    <div className="px-4 py-3 bg-[#05b384]/10 border-b border-[#bbcac1] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-medium text-sm text-[#006c4e] flex items-center gap-2">
          <MdCheckCircle size={20} />
          {selectedCount} orders selected
        </span>

        {selectedCount > 0 && (
          <>
            <div className="h-4 w-px bg-[#bbcac1]" />
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#bbcac1] rounded-lg text-sm hover:bg-[#eff4ff] transition-colors">
                <MdEdit size={18} />
                Bulk Status Update
                <span className="text-xs">⌄</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#bbcac1] rounded-lg text-sm hover:bg-[#eff4ff] transition-colors">
                <MdIosShare size={18} />
                Export Selected
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#bbcac1] rounded-lg text-sm hover:bg-[#eff4ff] transition-colors">
                <MdPrint size={18} />
                Print Invoices
              </button>
            </div>
          </>
        )}
      </div>

      {selectedCount > 0 && (
        <button
          className="p-2 text-[#6c7a72] hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          title="Cancel Selection"
        >
          <MdClose size={22} />
        </button>
      )}
    </div>
  );
};

export default BulkActionsBar;
