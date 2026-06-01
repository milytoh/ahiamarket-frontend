import React from "react";

const API_URL = import.meta.env.VITE_API_URL;
import { useApi } from "@/hooks/useApi";

import { useState, useEffect } from "react";

import EditProfileForm from "@/components/profile/index/EditProfile";
import EditProfileFormSkeleton from "@/components/ui/skeletons/profile/index/EditProfileFormSkeleton";
import ErrorState from "@/components/ui/Error";
import { toast } from "react-toastify";

interface UserProfile {
  fullName: string;
  email: string;
  profileImage?: string | null;
}

export default function EditProfile() {
  const { get, loading, error } = useApi<UserProfile>(
    `${API_URL}/user/profile`,
  );

  const {
    put,
    loading: isUpdating,
    error: updateError,
  } = useApi(`${API_URL}/user/profile/update`);
    const [userData, setUserData] = useState<UserProfile | null>(null);
     const [callGet, setCallGet] = useState(false);

    // Function to handle profile update
    const handleProfileUpdate = async (formData: FormData): Promise<void> => {
    try {
        await put(formData);
        toast.success("Profile updated successfully");
        handleCallGet()
    } catch (err) {
        console.error("Error updating user profile:", err);
        toast.error("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await get();
        setUserData(data.profile.user);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    fetchUserProfile();
  }, [callGet]);
    
    const handleCallGet = () => {
      setCallGet((prev) => !prev);
    };

 
 if (error) {
   return (
     <ErrorState
       title="Failed to load"
       message={error.message}
       onRetry={handleCallGet}
     />
   );
    }
    
  return (
    <>
      {loading ? (
        <EditProfileFormSkeleton />
      ) : (
        <EditProfileForm userData={userData} onSubmit={handleProfileUpdate} />
      )}
    </>
  );
}
