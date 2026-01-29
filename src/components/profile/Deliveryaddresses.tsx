import React from "react";

interface Address {
  id: number;
  type: "home" | "work";
  label: string;
  icon: string;
  address: string[];
  isDefault?: boolean;
}

const DeliveryAddresses: React.FC = () => {
  const addresses: Address[] = [
    {
      id: 1,
      type: "home",
      label: "Home Address",
      icon: "home",
      address: [
        "4512 Belisario Street, Suite 200",
        "San Francisco, CA 94107",
        "United States",
      ],
      isDefault: true,
    },
    {
      id: 2,
      type: "work",
      label: "Office Location",
      icon: "work",
      address: [
        "101 Market Street, Floor 12",
        "San Francisco, CA 94105",
        "United States",
      ],
    },
  ];

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 px-1">
        <h3 className="text-charcoal text-xl font-extrabold">
          Delivery Addresses
        </h3>
        <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline group w-fit">
          <span className="material-symbols-outlined text-[20px] group-hover:no-underline">
            add_circle
          </span>
          Add New Address
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            className={`bg-white p-6 rounded-2xl shadow-sm relative group ${
              address.isDefault
                ? "border-2 border-primary"
                : "border border-slate-100 hover:border-primary/30 transition-all"
            }`}
          >
            <div className="absolute top-6 right-6 flex gap-2">
              <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  edit
                </span>
              </button>
              <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  delete
                </span>
              </button>
            </div>
            <div className="flex items-center gap-3 mb-4 pr-16">
              <div
                className={`p-2 rounded-lg shrink-0 ${
                  address.isDefault
                    ? "bg-primary/10 text-primary"
                    : "bg-slate-50 text-slate-400"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {address.icon}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-charcoal font-extrabold">
                  {address.label}
                </h4>
                {address.isDefault && (
                  <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-bold uppercase rounded-full tracking-wider">
                    Default
                  </span>
                )}
              </div>
            </div>
            <p className="text-charcoal/70 text-sm font-medium leading-relaxed">
              {address.address.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  {idx < address.address.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryAddresses;
