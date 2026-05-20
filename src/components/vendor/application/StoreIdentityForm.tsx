"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const storeIdentitySchema = z.object({
  storeName: z
    .string()
    .min(3, "Store name must be at least 3 characters")
    .max(60),
  storeBio: z.string().min(20, "Bio must be at least 20 characters").max(300),
  category: z.string().min(1, "Please select a store category"),
});

type FormData = z.infer<typeof storeIdentitySchema>;

type Props = {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function StoreIdentityForm({
  formData,
  updateFormData,
  onNext,
  onBack,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(storeIdentitySchema),
    defaultValues: {
      storeName: formData.storeNameIdentity || "",
      storeBio: formData.storeBioIdentity || "",
      category: formData.category || "",
    },
  });

  const onSubmit = (data: FormData) => {
    updateFormData({
      storeNameIdentity: data.storeName,
      storeBioIdentity: data.storeBio,
      category: data.category,
    });
    onNext();
  };

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

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border-light">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div className="bg-primary h-full w-1/2 rounded-full" />
        </div>

        {/* Store Name */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-text-main">
            Store Name
          </label>
          <input
            {...register("storeName")}
            className="w-full px-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none"
            placeholder="e.g. Lagos Fashion Hub"
          />
          {errors.storeName && (
            <p className="text-red-500 text-xs">{errors.storeName.message}</p>
          )}
        </div>

        {/* Store Category - Dropdown */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-text-main">
            Store Category
          </label>
          <select
            {...register("category")}
            className="w-full px-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none"
          >
            <option value="">Select Store Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs">{errors.category.message}</p>
          )}
        </div>

        {/* Store Bio */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-text-main">
            Store Bio
          </label>
          <textarea
            {...register("storeBio")}
            rows={5}
            className="w-full px-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none resize-none"
            placeholder="Tell customers what makes your store special..."
          />
          {errors.storeBio && (
            <p className="text-red-500 text-xs">{errors.storeBio.message}</p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-border-light">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-4 text-slate-600 font-bold hover:bg-slate-100 transition-colors rounded-xl border border-border-light"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-4 bg-primary hover:bg-brand-green text-white font-bold rounded-xl flex items-center gap-3 disabled:opacity-70 transition-all"
          >
            Continue
            <MdArrowForward />
          </button>
        </div>
      </form>
    </div>
  );
}
