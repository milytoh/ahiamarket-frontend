import React from "react";

const API_URL = import.meta.env.VITE_API_URL;
import { useApi } from "@/hooks/useApi";

import { useState, useEffect } from "react";

import EditProfileForm from "@/components/profile/index/EditProfile";
import EditProfileFormSkeleton from "@/components/ui/skeletons/profile/index/EditProfileFormSkeleton";

interface UserProfile {
  fullname: string;
  email: string;
  profileImage?: string | null;
}

const handleProfileUpdate = async (formData: FormData): Promise<void> => {};

export default function EditProfile() {
  const { get, loading, error } = useApi<UserProfile>(
    `${API_URL}/user/profile`,
  );
  const [userData, setUserData] = useState<UserProfile | null>(null);

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
  }, []);

  if (loading) {
    return <EditProfileFormSkeleton />;
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
