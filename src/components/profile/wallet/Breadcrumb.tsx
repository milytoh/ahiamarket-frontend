import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const defaultItems: BreadcrumbItem[] = [
    { label: "Home", href: "#" },
    { label: "Profile", href: "#" },
    { label: "Wallet", active: true },
  ];

  const breadcrumbItems = items || defaultItems;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.active ? (
            <span className="text-slate-900 text-sm font-bold leading-normal">
              {item.label}
            </span>
          ) : (
            <a
              className="text-slate-400 text-sm font-medium leading-normal hover:text-primary"
              href={item.href}
            >
              {item.label}
            </a>
          )}
          {index < breadcrumbItems.length - 1 && (
            <span className="text-slate-300 text-sm font-medium leading-normal">
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
