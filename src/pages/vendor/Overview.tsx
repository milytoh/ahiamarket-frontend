const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import VendorProfileHeader from "@/components/vendor/overview/VendorProfileHeader";

import VendorQuickStats from "@/components/vendor/overview/VendorQuickStats";
import VendorRevenueChart from "@/components/vendor/overview/VendorRevenueChart";
import VendorTopProducts from "@/components/vendor/overview/VendorTopProducts";
import RecentTransactionsTable from "@/components/vendor/overview/RecentTransactionsTable";

// types/vendorDashboard.ts

// types/vendorDashboard.ts

export interface VendorDashboardOverview {
  vendor: {
    store_name: string;
    logo_url?: string;
    location?: {
      city: string;
      state: string;
      country: string;
    };
    verificationStatus?: "pending" | "verified" | "rejected";
    // Add any other vendor fields you need
  };

  wallet: {
    balance: number;
    currency: string;
  };

  stats: {
    totalOrders: number;
    totalSales: number;
    avgOrderValue: number;
    todayOrders: number;
    pendingOrders: number;
    pendingSettlementAmount: number;
  };

  sevenDaySales: Array<{
    _id: string; // date string
    totalSales: number;
    orderCount: number;
  }>;

  recentOrders: Array<{
    _id: string;
    total: number;
    order_status: string;
    created_at: string;
    payment?: any;
  }>;

  topProducts: Array<{
    productId: string;
    name: string;
    totalSold: number;
    revenue: number;
  }>;

  podStats?: Array<{
    _id: string;
    count: number;
  }>;
}

export default function OverviewPage() {
  const [vendorDashboardOverview, setVendorDashboardOverview] =
    useState<VendorDashboardOverview | null>(null);
  //using custom hook
  const { get, loading, error } = useApi(
    `${API_URL}/vendor/dashboard/overview`,
  );

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();

        setVendorDashboardOverview(response.data);
      } catch (err) {}
    };

    fetchDashboard();
  }, []);
  console.log(vendorDashboardOverview);
  return (
    <div className="p-6 md:p-8 space-y-8">
      <VendorProfileHeader
        vendor={vendorDashboardOverview?.vendor || {}}
        rating={4.2} // You can pull from stats if you add it later
        reviewCount={128}
      />
      <VendorQuickStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VendorRevenueChart />
        </div>
        <VendorTopProducts />
      </div>
      {/* Recent Transactions */}
      <RecentTransactionsTable />
    </div>
  );
}
