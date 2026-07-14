import {
  MdLocalShipping,
  MdLocationOn,
  MdQrCode,
  MdCalendarToday,
} from "react-icons/md";

interface Props {
  delivery: any;
}

const DeliveryCard: React.FC<Props> = ({ delivery }) => {
  const badge = {
    pending: "bg-yellow-100 text-yellow-700",

    processing: "bg-blue-100 text-blue-700",

    packed: "bg-purple-100 text-purple-700",

    shipped: "bg-indigo-100 text-indigo-700",

    delivered: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 hover:shadow-md transition-all duration-300 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#05b384]/10 flex items-center justify-center">
          <MdLocalShipping className="text-2xl text-[#05b384]" />
        </div>

        <div>
          <h2 className="font-bold text-lg">Delivery</h2>

          <p className="text-sm text-[#6c7a72]">Shipping Information</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span>Status</span>

          <span
            className={`capitalize px-3 py-1 rounded-full text-xs font-semibold ${
              badge[delivery?.status?.toLowerCase() as keyof typeof badge] ||
              "bg-gray-100 text-gray-700"
            }`}
          >
            {delivery?.status}
          </span>
        </div>

        <div className="flex justify-between gap-5">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdLocationOn />
            Address
          </span>

          <span className="text-right font-medium">{delivery?.address}</span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdQrCode />
            Tracking
          </span>

          <span>{delivery?.tracking_number || "Not Assigned"}</span>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdCalendarToday />
            Estimated
          </span>

          <span>
            {delivery?.estimated_date
              ? new Date(delivery?.estimated_date).toLocaleDateString()
              : "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
