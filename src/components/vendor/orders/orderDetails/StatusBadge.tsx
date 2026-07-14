import React from "react";

interface Props {
  status: string;
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  const colors = {
    pending: "bg-yellow-100 text-yellow-700",

    processing: "bg-blue-100 text-blue-700",

    packed: "bg-purple-100 text-purple-700",

    shipped: "bg-indigo-100 text-indigo-700",

    completed: "bg-green-100 text-green-700",

    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`capitalize inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
        colors[status?.toLowerCase() as keyof typeof colors] ??
        "bg-gray-100 text-gray-700"
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>

      {status}
    </span>
  );
};

export default StatusBadge;
