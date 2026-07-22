import React, { useMemo, useState } from "react";
import { MdAutorenew, MdNotes, MdSave, MdInfo } from "react-icons/md";

interface Props {
  order: any;
  loading?: boolean;
  onUpdate: (status: string, note: string) => Promise<void>;
  onCancel: () => void;
}

const statusFlow = [
  "pending",
  "processing",
  "packed",
  "shipped",
  "delivered",
  "buyer_confirmed",
  "completed",
];

const statusLabels: Record<string, string> = {
  pending: "Pending",
  processing: "Processing",
  packed: "Packed",
  shipped: "Shipped",
  delivered: "Delivered",
  buyer_confirmed: "Buyer Confirmed",
  completed: "Completed",
  cancelled: "Cancelled",
};

const UpdateOrderStatus: React.FC<Props> = ({
  order,
  loading,
  onUpdate,
  onCancel,
}) => {
  const [note, setNote] = useState("");

  const currentIndex = statusFlow.indexOf(order?.order_status);

  const nextStatus = useMemo(() => {
    if (currentIndex === -1) return null;

    if (currentIndex === statusFlow.length - 1) return null;

    return statusFlow[currentIndex + 1];
  }, [currentIndex]);

  const handleSubmit = () => {
    if (!nextStatus) return;

    onUpdate(nextStatus, note);

    setNote("");
  };

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm animate-fade-in">
      <div className="px-6 py-5 border-b border-[#bbcac1]">
        <h2 className="text-xl font-bold text-[#0b1c30]">Update Order</h2>

        <p className="text-sm text-[#6c7a72]">
          Move this order to the next stage.
        </p>
      </div>

      <div className="p-6 space-y-6">
        {/* Current Status */}

        <div>
          <label className="text-sm text-[#6c7a72]">Current Status</label>

          <div className="mt-2 px-4 py-3 rounded-xl bg-[#f8f9ff] border border-[#bbcac1] flex items-center gap-3">
            <MdInfo className="text-[#05b384]" />

            <span className="font-semibold capitalize">
              {statusLabels[order?.order_status]}
            </span>
          </div>
        </div>

        {/* Next Status */}

        <div>
          <label className="text-sm text-[#6c7a72]">Next Status</label>

          <div className="mt-2">
            <select
              value={nextStatus ?? ""}
              disabled
              className="w-full rounded-xl border border-[#bbcac1] bg-[#f8f9ff] px-4 py-3"
            >
              {nextStatus ? (
                <option value={nextStatus}>{statusLabels[nextStatus]}</option>
              ) : (
                <option>Order Completed</option>
              )}
            </select>
          </div>
        </div>

        {/* Note */}

        <div>
          <label className="text-sm text-[#6c7a72] flex items-center gap-2">
            <MdNotes />
            Note (Optional)
          </label>

          <textarea
            rows={5}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Example: Packed carefully and ready for pickup..."
            className="mt-2 w-full rounded-xl border border-[#bbcac1] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#05b384] resize-none"
          />
        </div>

        {/* Button */}

        <button
          disabled={!nextStatus || loading}
          onClick={handleSubmit}
          className="w-full bg-[#05b384] hover:bg-[#04956f] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
        >
          <MdAutorenew />

          {loading ? "Updating..." : "Update Order"}

          <MdSave />
        </button>
      </div>

      {/* Danger Zone */}

      {["pending", "processing", "packed"].includes(order?.order_status) && (
        <div className="mt-8 border-t border-red-200 pt-6">
          <h3 className="text-red-600 font-semibold">Danger Zone</h3>

          <p className="text-sm text-gray-500 mt-2">
            Cancelling an order will stop fulfillment permanently.
          </p>

          <button
            onClick={onCancel}
            className="mt-4 w-full rounded-xl bg-red-600 hover:bg-red-700 text-white py-3 transition"
          >
            Cancel Order
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateOrderStatus;
