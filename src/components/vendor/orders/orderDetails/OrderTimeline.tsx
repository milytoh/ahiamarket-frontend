

import React from "react";
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdPending,
  MdAccessTime,
  MdStickyNote2,
} from "react-icons/md";

interface HistoryItem {
  status: string;
  note?: string;
  created_at: string;
}

interface Props {
  currentStatus: string;
  history: HistoryItem[];
}

const steps = [
  { key: "pending", label: "Order Received" },
  { key: "processing", label: "Processing" },
  { key: "packed", label: "Packed" },
  { key: "shipped", label: "Shipped" },
  { key: "delivered", label: "Delivered" },
  { key: "buyer_confirmed", label: "Buyer Confirmed" },
  { key: "completed", label: "Completed" },
];

const OrderTimeline: React.FC<Props> = ({ currentStatus, history }) => {
  const currentIndex = steps.findIndex((step) => step.key === currentStatus);

  const historyMap = history.reduce(
    (acc, item) => {
      acc[item.status] = item;
      return acc;
    },
    {} as Record<string, HistoryItem>,
  );

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm animate-fade-in">
      <div className="px-6 py-5 border-b border-[#bbcac1]">
        <h2 className="text-xl font-bold text-[#0b1c30]">Order Progress</h2>

        <p className="text-sm text-[#6c7a72]">Current order lifecycle</p>
      </div>

      <div className="p-8">
        {steps.map((step, index) => {
          const completed = index < currentIndex;

          const current = index === currentIndex;

          const item = historyMap[step.key];

          return (
            <div key={step.key} className="flex gap-4">
              <div className="flex flex-col items-center">
                {completed ? (
                  <MdCheckCircle className="text-[#05b384]" size={26} />
                ) : current ? (
                  <MdPending
                    className="text-blue-600 animate-pulse"
                    size={26}
                  />
                ) : (
                  <MdRadioButtonUnchecked className="text-gray-300" size={24} />
                )}

                {index !== steps.length - 1 && (
                  <div
                    className={`w-[2px] flex-1 my-2 ${
                      completed
                        ? "bg-[#05b384]"
                        : current
                          ? "bg-blue-400"
                          : "bg-gray-200"
                    }`}
                  />
                )}
              </div>

              <div className="pb-8 flex-1">
                <h3
                  className={`font-semibold ${
                    completed
                      ? "text-[#05b384]"
                      : current
                        ? "text-blue-600"
                        : "text-gray-400"
                  }`}
                >
                  {step.label}
                </h3>

                <p className="text-sm text-[#6c7a72] mt-1">
                  {completed && "Completed"}

                  {current && "Current Step"}

                  {!completed && !current && "Waiting"}
                </p>

                {item && (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MdAccessTime />

                      {new Date(item.created_at).toLocaleString()}
                    </div>

                    {item.note && (
                      <div className="flex items-start gap-2 bg-[#f8f9ff] border border-[#bbcac1] rounded-xl px-3 py-2">
                        <MdStickyNote2 className="text-[#05b384] mt-0.5" />

                        <p className="text-sm text-[#3c4a43]">{item.note}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;
