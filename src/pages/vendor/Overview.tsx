import VendorProfileHeader from "@/components/vendor/overview/VendorProfileHeader";

import VendorQuickStats from "@/components/vendor/overview/VendorQuickStats";
import VendorRevenueChart from "@/components/vendor/overview/VendorRevenueChart";
import VendorTopProducts from "@/components/vendor/overview/VendorTopProducts";

export default function OverviewPage() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <VendorProfileHeader />
      <VendorQuickStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VendorRevenueChart />
        </div>
        <VendorTopProducts />
      </div>
    </div>
  );
}
