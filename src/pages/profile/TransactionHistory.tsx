import Breadcrumb from "@/components/profile/transaction-history/Breadcrumb";




const TransactionHistory: React.FC = () => {
  // In real app: fetch from API, use state / React Query / etc.
  const transactions = [
    {
      date: "Oct 24, 2023",
      time: "14:22 PM",
      description: "NVIDIA RTX 4090 Purchase",
      icon: "shopping_bag",
      method: "Main Wallet",
      amount: "-$1,599.00",
      status: "Success",
      statusColor: "emerald",
    },

    {
      date: "Oct 24, 2023",
      time: "14:22 PM",
      description: "NVIDIA RTX 4090 Purchase",
      icon: "shopping_bag",
      method: "Main Wallet",
      amount: "-$1,599.00",
      status: "Success",
      statusColor: "emerald",
    },

    {
      date: "Oct 24, 2023",
      time: "14:22 PM",
      description: "NVIDIA RTX 4090 Purchase",
      icon: "shopping_bag",
      method: "Main Wallet",
      amount: "-$1,599.00",
      status: "Success",
      statusColor: "emerald",
    },
    // ... add more (your other rows)
    // You can have 5–10 static for demo, or fetch real data
  ];

  return (
    <main className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 min-w-0">
      <Breadcrumb />

      <PageHeader />

      <FilterControls />

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
        <TransactionTable transactions={transactions} />

        <Pagination
          currentPage={1}
          totalPages={12} // calculate from real data
          showingFrom={1}
          showingTo={5}
          total={48}
        />
      </div>
    </main>
  );
};