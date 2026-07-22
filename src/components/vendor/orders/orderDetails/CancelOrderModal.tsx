import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { MdWarningAmber } from "react-icons/md";

interface Props {
  isOpen: boolean;
  loading?: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => Promise<void>;
}

const quickReasons = [
  "Out of stock",
  "Customer requested cancellation",
  "Pricing error",
  "Unable to fulfill order",
  "Other",
];

const CancelOrderModal: React.FC<Props> = ({
  isOpen,
  loading = false,
  onClose,
  onConfirm,
}) => {
  const [reason, setReason] = useState("");

  const handleSubmit = async () => {
    if (!reason.trim()) return;

    await onConfirm(reason);

    setReason("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cancel Order"
      subtitle="This action cannot be undone."
    >
      <div className="space-y-6">
        {/* Warning */}
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 flex gap-3">
          <MdWarningAmber className="text-red-600 text-3xl shrink-0" />

          <div>
            <h3 className="font-semibold text-red-700">Are you sure?</h3>

            <p className="text-sm text-red-600 mt-1">
              Cancelling this order will stop fulfillment and notify the
              customer. This action cannot be undone.
            </p>
          </div>
        </div>

        {/* Quick reasons */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Quick Reasons
          </label>

          <div className="flex flex-wrap gap-2">
            {quickReasons.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setReason(item)}
                className={`px-3 py-2 rounded-full border text-sm transition ${
                  reason === item
                    ? "bg-red-600 border-red-600 text-white"
                    : "border-[#bbcac1] hover:border-red-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Reason */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Cancellation Reason
          </label>

          <textarea
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Explain why this order is being cancelled..."
            className="w-full rounded-xl border border-[#bbcac1] p-4 focus:ring-2 focus:ring-red-500 outline-none resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-[#bbcac1] hover:bg-gray-50"
          >
            Close
          </button>

          <button
            disabled={!reason.trim() || loading}
            onClick={handleSubmit}
            className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Cancelling..." : "Cancel Order"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelOrderModal;
