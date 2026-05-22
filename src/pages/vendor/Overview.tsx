const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import VendorProfileHeader from "@/components/vendor/overview/VendorProfileHeader";

import VendorQuickStats from "@/components/vendor/overview/VendorQuickStats";
import VendorRevenueChart from "@/components/vendor/overview/VendorRevenueChart";
import VendorTopProducts from "@/components/vendor/overview/VendorTopProducts";
import RecentTransactionsTable from "@/components/vendor/overview/RecentTransactionsTable";
import RecentTransactionsMobile from "@/components/vendor/overview/RecentTransactionsMobile";

//skeleton

import RecentTransactionsTableSkeleton from "@/components/ui/skeletons/vendor/overview/RecentTransactionsTableSkeleton";
import RecentTransactionsMobileSkeleton from "@/components/ui/skeletons/vendor/overview/RecentTransactionsMobileSkeleton";
import VendorProfileHeaderSkeleton from "@/components/ui/skeletons/vendor/overview/VendorProfileHeaderSkeleton";
import VendorQuickStatsSkeleton from "@/components/ui/skeletons/vendor/overview/VendorQuickStatsSkeleton";
import VendorRevenueChartSkeleton from "@/components/ui/skeletons/vendor/overview/VendorRevenueChartSkeleton";
import VendorTopProductsSkeleton from "@/components/ui/skeletons/vendor/overview/VendorTopProductsSkeleton";

import ErrorState from "@/components/ui/Error";
import ErrorEmptyState from "@/components/ui/ErrorEmptyState";

import { toast } from "react-toastify";

export interface VendorDashboardOverview {
  vendor: {
    _id: string;
    store_name: string;
    logo_url: string;
    category: string;
    cover_url: string;
    avatar_img: string;
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
        console.log(response.data);
        setVendorDashboardOverview(response.data);
      } catch (err) {}
    };

    fetchDashboard();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(`${error.message || "something went wrong, check your network connection"}`);
    }
  }, [error]);

  if (error) {
    return (
      <ErrorState
        title="Failed to load"
        message={error.message}
        onRetry={get}
      />
    );
  }

  return (
    <div className="p-6 md:p-8 space-y-8">
      {loading ? (
        <VendorProfileHeaderSkeleton />
      ) : (
        <VendorProfileHeader
          vendor={vendorDashboardOverview?.vendor!}
          rating={4.2} // You can pull from stats if you add it later
          reviewCount={128}
        />
      )}
      {loading ? (
        <VendorQuickStatsSkeleton />
      ) : (
        <VendorQuickStats stats={vendorDashboardOverview?.stats!} />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {loading ? (
            <VendorRevenueChartSkeleton />
          ) : (
            <VendorRevenueChart data={vendorDashboardOverview?.sevenDaySales} />
          )}
        </div>
        {loading ? (
          <VendorTopProductsSkeleton />
        ) : (
          <VendorTopProducts
            products={vendorDashboardOverview?.topProducts || []}
          />
        )}
      </div>
      {/* Recent Transactions */}

      {loading ? (
        <RecentTransactionsTableSkeleton />
      ) : (
        <RecentTransactionsTable
          orders={vendorDashboardOverview?.recentOrders || []}
        />
      )}

      {loading ? (
        <RecentTransactionsMobileSkeleton />
      ) : (
        <RecentTransactionsMobile
          orders={vendorDashboardOverview?.recentOrders || []}
        />
      )}
    </div>
  );
}
