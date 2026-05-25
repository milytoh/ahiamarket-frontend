import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { type UserProfile } from "@/pages/profile/Profile";

interface InfoField {
  label: string;
  value: string;
}


 
interface InfoProp {
  info: UserProfile
}

const PersonalInfo: React.FC<InfoProp> = ({info}) => {
  const fields: InfoField[] = [
    { label: "Full Name", value: `${info?.fullName}` },
    { label: "Email Address", value: `${info?.email}` },
    { label: "Phone Number", value: "********" },
    { label: "Preferred Language", value: "English (US)" },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-50">
        <h3 className="text-brand-orange text-lg font-bold">
          Personal Information
        </h3>

        <button
          className="flex items-center gap-2 text-primary text-sm font-bold
          hover:underline hover:opacity-90 transition"
        >
          <HiOutlinePencilSquare className="text-lg" />
          Edit
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {fields.map((field, index) => (
          <div key={index}>
            <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
              {field.label}
            </p>
            <p className="text-charcoal text-sm font-bold truncate">
              {field.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalInfo;
