import React from "react";

interface TrustScoreItem {
  icon: string;
  label: string;
  value: string;
  isPrimary: boolean;
}

const TrustScore: React.FC = () => {
  const items: TrustScoreItem[] = [
    {
      icon: "payments",
      label: "Payment History",
      value: "Excellent",
      isPrimary: true,
    },
    {
      icon: "stars",
      label: "Review Authenticity",
      value: "98% Positive",
      isPrimary: true,
    },
    {
      icon: "calendar_today",
      label: "Account Tenure",
      value: "6 Months",
      isPrimary: false,
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div className="px-6 md:px-8 py-5 border-b border-slate-50">
        <h3 className="text-charcoal text-lg font-bold">
          Trust Score Breakdown
        </h3>
      </div>
      <div className="p-6 md:p-8 space-y-5 flex-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
              </div>
              <p className="text-charcoal/80 text-sm font-bold">{item.label}</p>
            </div>
            <p
              className={`text-sm font-extrabold whitespace-nowrap ${
                item.isPrimary ? "text-primary" : "text-charcoal/40"
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustScore;
