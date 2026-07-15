import React from "react";
import {
  MdCheckCircle,
  MdRadioButtonUnchecked,
  MdPending,
} from "react-icons/md";

interface Props {
  currentStatus: string;
}

const steps = [
  {
    key: "pending",
    label: "Order Received",
  },
  {
    key: "processing",
    label: "Processing",
  },
  {
    key: "packed",
    label: "Packed",
  },
  {
    key: "shipped",
    label: "Shipped",
  },
  {
    key: "delivered",
    label: "Delivered",
  },
  {
    key: "buyer_confirmed",
    label: "Buyer Confirmed",
  },
  {
    key: "completed",
    label: "Completed",
  },
];

const OrderTimeline: React.FC<Props> = ({ currentStatus }) => {
  const currentIndex = steps.findIndex((step) => step.key === currentStatus);

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
                      completed ? "bg-[#05b384]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>

              <div className="pb-8">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;
