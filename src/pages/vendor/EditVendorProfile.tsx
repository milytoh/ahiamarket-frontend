const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

import EditVendorProfileForm from "@/components/vendor/overview/EditVendorProfileForm";
import EditVendorProfileSkeleton from "@/components/ui/skeletons/vendor/overview/EditVendorProfileSkeleton";

interface VendorProfilePro {
  vendorData?: {
    _id: string;
    store_name: string;
    logo_url: string;
    category: string;
    cover_url: string;
    avatar_img: string;
    username?: string;
    phone?: string;
    email: string;
    bio: string;
    vendorUsername: string;
    location?: {
      city?: string;
      state?: string;
      country?: string;
    };
    verificationStatus?: "pending" | "verified" | "rejected";
  };
}

export default function EditVendorProfile() {
  const [vendorData, setVendorData] =
    useState<VendorProfilePro["vendorData"]>();

  //using custom hook
  const { get, loading, error } = useApi(
    `${API_URL}/vendor/dashboard/overview`,
  );

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();

        setVendorData(response.data?.vendor);
        console.log(response.data?.vendor);
      } catch (err) {}
    };

    fetchDashboard();
  }, []);

  const handleProfileUpdate = async (formData: FormData): Promise<void> => {
    console.log(formData);
  };
  return (
    <>
      {loading && <EditVendorProfileSkeleton />}
      {!loading && vendorData && (
        <EditVendorProfileForm
          vendorData={vendorData}
          loading={loading}
          onSubmit={handleProfileUpdate}
        />
      )}
    </>
  );
}


