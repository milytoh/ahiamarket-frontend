
const API_URL = import.meta.env.VITE_API_URL;

import React, { useEffect, useState } from "react";
import {
  MdAddAPhoto,
  MdAlternateEmail,
  MdCategory,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdStore,
} from "react-icons/md";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import Spinner from "@/components/ui/Spinner";

const categories = [
  "Fashion & Look",
  "Electronics & Gadgets",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Food & Groceries",
  "Health & Wellness",
  "Jewelry & Accessories",
  "Books & Stationery",
  "Automotive",
  "Sports & Outdoors",
  "Others",
];

const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username too long")
    .regex(
      /^[a-z0-9_-]+$/,
      "Username can only contain lowercase letters, numbers, hyphens and underscores",
    ),

  store_name: z.string().min(3, "Store name must be at least 3 characters"),

  category: z.string().min(2, "Category is required"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(600, "Description too long"),

  // phone: z.string().min(7, "Phone number is invalid"),

  email: z.string().email("Invalid email address"),

  city: z.string().min(2, "City is required"),

  state: z.string().min(2, "State is required"),

  country: z.string().min(2, "Country is required"),
});

type ProfileFormData = z.infer<typeof profileSchema>;



interface VendorProfileFormProps {
  vendorData?: {
    _id: string;
    store_name: string;
    logo_url: string;
    category: string;
    cover_url: string;
    avatar_img: string;
    username?: string;
    phone?: string;
    email?: string;
    vendorUsername: string;
    bio: string;

    location?: {
      city?: string;
      state?: string;
      country?: string;
    };
    verificationStatus?: "pending" | "verified" | "rejected";
  };
  rating?: number;
  reviewCount?: number;

  onSubmit: (formData: FormData) => Promise<void>;
  loading?: boolean;
}

export default function EditVendorProfileForm({
  vendorData,
  onSubmit,
  loading = false,
}: VendorProfileFormProps) {
  const [logoPreview, setLogoPreview] = useState(
    `${API_URL}/uploads/vendors/profile/${vendorData?.logo_url} || "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop"}`,
  );

  const [coverPreview, setCoverPreview] = useState(
    `${API_URL}/uploads/vendors/cover/${vendorData?.cover_url} || ${vendorData?.avatar_img}  || "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop"}`,
  );

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  console.log(coverPreview)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      username: "",
      store_name: "",
      category: "",
      description: "",
      // phone: "",
      email: "",
      city: "",
      state: "",
      country: "Nigeria",
    },
  });

  // PREPOPULATE DATA
  useEffect(() => {
    if (!vendorData) return;

    reset({
      username: vendorData.vendorUsername || "",
      store_name: vendorData.store_name || "",
      category: vendorData.category || "",
      description: vendorData.bio || "",
      // phone: vendorData.phone || "",
      email: vendorData.email || "",
      city: vendorData.location?.city || "",
      state: vendorData.location?.state || "",
      country: vendorData.location?.country || "Nigeria",
    });

    if (vendorData.cover_url) {
      setCoverPreview(
        `${API_URL}/uploads/vendors/cover/${vendorData.cover_url}`,
      );
    }

    if (vendorData.logo_url) {
      setLogoPreview(
        `${API_URL}/uploads/vendors/profile/${vendorData.logo_url}`,
      );
    }
  }, [vendorData, reset]);

  // HANDLE LOGO CHANGE
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  // HANDLE COVER CHANGE
  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  // SUBMIT
  const submitHandler = async (data: ProfileFormData) => {
    try {
      const formData = new FormData();

      formData.append("username", data.username);
      formData.append("store_name", data.store_name);
      formData.append("category", data.category);
      formData.append("bio", data.description);
      // formData.append("phone", data.phone);
      formData.append("email", data.email);

      formData.append("city", data.city);
      formData.append("state", data.state);
      
      if (logoFile) {
        formData.append("profileImage", logoFile);
      }

      if (coverFile) {
        formData.append("coverImage", coverFile);
      }

      await onSubmit(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-10">
        {/* HEADER */}
        <section className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm">
          {/* Cover Image */}
          <div className="relative h-64 rounded-3xl overflow-hidden group">
            <img
              src={coverPreview}
              alt="Cover"
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Hidden Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverChange}
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
            />

            {/* Button */}

            <label className="absolute bottom-36 right-2 md:bottom-5 md:right-5 bg-white/60 backdrop-blur-sm hover:bg-white transition-all px-5 py-3 rounded-2xl cursor-pointer flex items-center gap-2 font-semibold shadow-lg">
              <MdAddAPhoto size={20} />
              Change Cover
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleCoverChange}
              />
            </label>
          </div>

          {/* LOGO */}
          <div className="px-6 md:px-10 pb-10 flex flex-col md:flex-row gap-6 items-end -mt-16 relative">
            <div className="relative">
              <img
                src={logoPreview}
                alt="logo"
                className="w-36 h-36 rounded-3xl border-4 border-white object-cover shadow-xl bg-white"
              />

              <label className="absolute bottom-2 right-2 bg-[#05b384] hover:bg-[#04956f] text-white p-3 rounded-2xl cursor-pointer shadow-lg">
                <MdAddAPhoto size={20} />

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleLogoChange}
                />
              </label>
            </div>

            <div className="pb-3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-main">
                Edit Vendor Profile
              </h2>

              <p className="text-slate-500 mt-2">
                Update your storefront identity and business details
              </p>
            </div>
          </div>
        </section>

        {/* BUSINESS DETAILS */}
        <section className="bg-white rounded-3xl border border-border-light p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-7 bg-[#05b384] rounded-full" />
            <h3 className="font-bold text-2xl">Business Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* USERNAME */}
            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Username
              </label>

              <div className="relative">
                <MdAlternateEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  {...register("username")}
                  placeholder="miraclefashion"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
                />
              </div>

              {errors.username && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.username.message}
                </p>
              )}

              <p className="text-xs text-slate-400 mt-2">
                Public URL:
                <span className="ml-1 font-semibold text-[#05b384]">
                  `ahiamarket.com/$shop/
                  {vendorData?.vendorUsername || "your-username"}`
                </span>
              </p>
            </div>

            {/* STORE NAME */}
            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Store Name
              </label>

              <div className="relative">
                <MdStore className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  {...register("store_name")}
                  placeholder="Miracle Fashion Hub"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
                />
              </div>

              {errors.store_name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.store_name.message}
                </p>
              )}
            </div>

            {/* CATEGORY */}
            {/* <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Category
              </label>

              <div className="relative">
                <MdCategory className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  {...register("category")}
                  placeholder="Fashion"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
                />
              </div>

              {errors.category && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.category.message}
                </p>
              )}
            </div> */}

            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Category
              </label>

              <div className="relative">
                <MdCategory className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10" />

                <select
                  {...register("state")}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384] appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {errors.category && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Phone
              </label>

              <div className="relative">
                <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  // {...register("phone")}
                  disabled
                  placeholder="+234..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
                />
              </div>

              {/* {errors.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.phone.message}
                </p>
              )} */}
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Email
              </label>

              <div className="relative">
                <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  {...register("email")}
                  placeholder="store@email.com"
                  readOnly
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                Bio
              </label>

              <textarea
                {...register("description")}
                rows={5}
                placeholder="Tell customers about your store..."
                className="w-full p-4 rounded-2xl border border-border-light bg-background-light outline-none resize-none focus:ring-2 focus:ring-[#05b384]"
              />

              {errors.description && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="bg-white rounded-3xl border border-border-light p-6 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-7 bg-[#05b384] rounded-full" />
            <h3 className="font-bold text-2xl">Store Location</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* CITY */}
            <div>
              <div className="relative">
                <MdLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  {...register("city")}
                  placeholder="City"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
                />
              </div>

              {errors.city && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* STATE */}
            {/* STATE */}
            <div>

              <select
                {...register("state")}
                className="w-full px-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384] appearance-none"
              >
               

                {nigeriaStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              {errors.state && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.state.message}
                </p>
              )}
            </div>

            {/* COUNTRY */}
            <div>
              <input
                // {...register("country")}
                value={"Nigeria"}
                placeholder="Country"
                readOnly
                className="w-full px-4 py-4 rounded-2xl border border-border-light bg-background-light outline-none focus:ring-2 focus:ring-[#05b384]"
              />

              {errors.country && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ACTION BUTTONS */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border border-border-light rounded-3xl p-5 shadow-lg flex flex-col sm:flex-row justify-end gap-4">
          <button
            type="button"
            className="px-8 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-all font-bold"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="px-10 py-4 rounded-2xl bg-[#05b384] hover:bg-[#04956f] transition-all text-white font-bold shadow-lg disabled:opacity-70 min-w-[180px]"
          >
            {isSubmitting || loading ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
