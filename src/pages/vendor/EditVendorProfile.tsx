const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EditVendorProfileForm from "@/components/vendor/overview/EditVendorProfileForm";
import EditVendorProfileSkeleton from "@/components/ui/skeletons/vendor/overview/EditVendorProfileSkeleton";
import { toast } from "react-toastify";
import ErrorState from "@/components/ui/Error";

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
  
  const { id } = useParams();

  //using custom hook
  const { get, loading, error } = useApi(
    `${API_URL}/vendor/dashboard/overview`,
  );



  const {
    put,
    loading: isUpdating,
    error: updateError,
  } = useApi(`${API_URL}/vendor/profile/update/${id}`);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await get();

        setVendorData(response.data?.vendor);
        console.log(response.data?.vendor);
      } catch (err) {
       
      }
    };

    fetchDashboard();
  }, []);

  const handleProfileUpdate = async (formData: FormData): Promise<void> => {
    try {
      const response = await put(formData);

      console.log(response);
    } catch (err: any) {
      toast.error(`${err.message || "Failed to update profile. Please try again."}`);
    } 
  };


   useEffect(() => {
     if (error) {
       toast.error(
         `${error.message || "something went wrong, check your network connection"}`,
       );
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
    <>
      {loading && <EditVendorProfileSkeleton />}
      {!loading && vendorData && (
        <EditVendorProfileForm
          vendorData={vendorData}
          loading={isUpdating}
          onSubmit={handleProfileUpdate}
        />
      )}
    </>
  );
}


