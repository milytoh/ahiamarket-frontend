import React from "react";
import { MdPayments, MdStars, MdCalendarToday } from "react-icons/md";

interface TrustScoreItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  isPrimary: boolean;
}


interface TscoreProp {
  excellenct: {
    value: string,
    isPrimary: boolean
  }

  review?: {
    value: string
    isPrimary: boolean
  }

  accountTenure: string
}





const TrustScore: React.FC<TscoreProp> = ({ excellenct, accountTenure }) => {

  // time and date format function
function getAccountTenure(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} Year${years > 1 ? "s" : ""}`;
  }

  if (months > 0) {
    return `${months} Month${months > 1 ? "s" : ""}`;
  }

  return `${days} Day${days > 1 ? "s" : ""}`;
}

  
  const items: TrustScoreItem[] = [
    {
      icon: <MdPayments className="text-xl" />,
      label: "Payment History",
      value: `${excellenct.value}`,
      isPrimary: excellenct.isPrimary
    },
    {
      icon: <MdStars className="text-xl" />,
      label: "Review Authenticity",
      value: "98% Positive",
      isPrimary: true,
    },
    {
      icon: <MdCalendarToday className="text-xl" />,
      label: "Account Tenure",
      value: `${getAccountTenure(Number(accountTenure))}`,
      isPrimary: false,
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      <div className="px-6 md:px-8 py-5 border-b border-slate-50">
        <h3 className="text-brand-orange text-lg font-bold">
          Trust Score Breakdown
        </h3>
      </div>
      <div className="p-6 md:p-8 space-y-5 flex-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <p className="text-brand-orange/80 text-sm font-bold">{item.label}</p>
            </div>
            <p
              className={`text-sm font-extrabold whitespace-nowrap ${
                item.isPrimary ? "text-primary" : "text-primary"
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
