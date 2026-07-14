const API_URL = import.meta.env.VITE_API_URL;

import { MdPerson, MdEmail, MdPhone, MdBadge } from "react-icons/md";

interface Props {
  buyer: {
    fullname?: string;
    email?: string;
    phone?: string;
    profileImage?: string;
  };
}

const CustomerCard: React.FC<Props> = ({ buyer }) => {

  
  return (
    <div className="bg-white rounded-3xl border border-[#bbcac1] shadow-sm p-6 hover:shadow-md transition-all duration-300 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#05b384]/10 flex items-center justify-center overflow-hidden">
          {buyer?.profileImage ? (
            <>
              <img
                src={`${API_URL}/uploads/users/profile/${buyer.profileImage}`}
                alt={buyer?.fullname || "Profile"}
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  console.error("Image failed to load:", e.currentTarget.src);
                  e.currentTarget.style.display = "none";
                }}
                onLoad={() => console.log("Image loaded successfully")}
              />
              {/* Temporary debug text */}
              <div className="absolute text-[10px] text-red-500 hidden">
                Debug: {buyer.profileImage}
              </div>
            </>
          ) : (
            <MdPerson className="text-2xl text-[#05b384]" />
          )}
        </div>

        <div>
          <h2 className="font-bold text-lg text-[#0b1c30]">Customer</h2>

          <p className="text-sm text-[#6c7a72]">Buyer Information</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdPerson />
            Name
          </span>

          <span className="font-semibold">{buyer?.fullname || "N/A"}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdEmail />
            Email
          </span>

          <span className="font-medium text-right">
            {buyer?.email || "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdPhone />
            Phone
          </span>

          <span>{buyer?.phone || "N/A"}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-[#6c7a72]">
            <MdBadge />
            Buyer
          </span>

          <span className="text-[#05b384] font-semibold">
            Verified Customer
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
