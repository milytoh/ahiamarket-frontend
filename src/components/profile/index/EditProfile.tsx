import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HiOutlineCamera } from "react-icons/hi";

const API_URL = import.meta.env.VITE_API_URL;

const profileSchema = z.object({
  fullname: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name is too long"),

  email: z.string().email("Please enter a valid email address"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface UserProfile {
  fullName: string;
  email: string;
  profileImage?: string | null;
}

interface EditProfileFormProps {
  userData: UserProfile | null;
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function EditProfileForm({
  userData,
  onSubmit,
}: EditProfileFormProps) {
  const [profileFile, setProfileFile] = useState<File | null>(null);

  const [profilePreview, setProfilePreview] = useState(
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  // Populate existing user data
  useEffect(() => {
    if (!userData) return;

    reset({
      fullname: userData.fullName || "",
      email: userData.email || "",
    });

    if (userData.profileImage) {
      setProfilePreview(
        `${API_URL}/uploads/users/profile/${userData.profileImage}`,
      );
    }
  }, [userData, reset]);

  // Handle image selection
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setProfileFile(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  // Submit form
  const submitHandler = async (data: ProfileFormData) => {
    const formData = new FormData();

    formData.append("fullname", data.fullname);
    formData.append("email", data.email);

    if (profileFile) {
      formData.append("profileImage", profileFile);
    }

    await onSubmit(formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8"
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Edit Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Update your profile information and profile picture.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={profilePreview}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <label
            htmlFor="profileImage"
            className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white font-semibold cursor-pointer hover:opacity-90 transition"
          >
            <HiOutlineCamera className="w-5 h-5" />
            Change Photo
          </label>

          <input
            id="profileImage"
            type="file"
            accept="image/*"
            hidden
            onChange={handleProfileChange}
          />
        </div>

        {/* Full Name */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-slate-700">
            Full Name
          </label>

          <input
            {...register("fullname")}
            className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your full name"
          />

          {errors.fullname && (
            <p className="text-red-500 text-sm mt-2">
              {errors.fullname.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-10">
          <label className="block mb-2 text-sm font-bold text-slate-700">
            Email Address
          </label>

                  <input
                  readOnly
            {...register("email")}
            className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-3 rounded-2xl border border-slate-200 font-semibold hover:bg-slate-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!isDirty && !profileFile}
            className="px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
