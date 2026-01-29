import React from "react";

interface InfoField {
  label: string;
  value: string;
}

const PersonalInfo: React.FC = () => {
  const fields: InfoField[] = [
    { label: "Full Name", value: "Alex Johnson" },
    { label: "Email Address", value: "alex.j@example.com" },
    { label: "Phone Number", value: "+1 (555) 012-3456" },
    { label: "Preferred Language", value: "English (US)" },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-50">
        <h3 className="text-charcoal text-lg font-bold">
          Personal Information
        </h3>
        <button className="text-primary text-sm font-bold hover:underline">
          Edit
        </button>
      </div>
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
