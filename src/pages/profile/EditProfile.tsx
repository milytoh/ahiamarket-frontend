import React from "react";

const API_URL = import.meta.env.VITE_API_URL;

import { useState, useEffect } from "react";
import { readonly } from "zod";

import EditProfileForm from "@/components/profile/index/EditProfile";
import { useApi } from "@/hooks/useApi";

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
            setUserData(data);
          } catch (err) {
            console.error("Error fetching user profile:", err);
          }
        };

        fetchUserProfile();
      }, [get]);

  return <EditProfileForm userData={userData} onSubmit={handleProfileUpdate} />;
}
