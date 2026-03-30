"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdStorefront, MdArrowForward } from "react-icons/md";

const storeIdentitySchema = z.object({
  storeName: z
    .string()
    .min(3, "Store name must be at least 3 characters")
    .max(50, "Store name cannot exceed 50 characters"),
  storeBio: z
    .string()
    .min(
      10,
      "Please tell us a bit more about your store (minimum 10 characters)",
    )
    .max(300, "Store bio cannot exceed 300 characters"),
});

type StoreIdentityFormData = z.infer<typeof storeIdentitySchema>;

const StoreIdentityForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<StoreIdentityFormData>({
    resolver: zodResolver(storeIdentitySchema),
    defaultValues: {
      storeName: "",
      storeBio: "",
    },
  });

  const storeName = watch("storeName");

  const onSubmit = async (data: StoreIdentityFormData) => {
    console.log("Form submitted:", data);
    // Add your API call or navigation logic here
    alert("Store identity saved successfully! (Demo)");
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border-light">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div className="bg-primary h-full w-1/2 rounded-full transition-all" />
        </div>

        {/* Store Name */}
        <div className="space-y-2">
          <div className="relative">
            <input
              id="storeName"
              type="text"
              {...register("storeName")}
              className="block w-full px-4 pt-6 pb-3 text-text-main bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none peer transition-all"
              placeholder=" "
            />
            <label
              htmlFor="storeName"
              className="absolute left-4 top-4 text-slate-500 text-sm transition-all duration-200 peer-focus:text-primary peer-focus:top-2 peer-focus:text-xs pointer-events-none"
            >
              Store Name
            </label>
          </div>
          <p className="text-xs text-slate-500 ml-1">
            Give your store a memorable name
          </p>
          {errors.storeName && (
            <p className="text-red-500 text-xs ml-1">
              {errors.storeName.message}
            </p>
          )}
        </div>

        {/* Store Bio */}
        <div className="space-y-2">
          <div className="relative">
            <textarea
              id="storeBio"
              {...register("storeBio")}
              rows={4}
              className="block w-full px-4 pt-6 pb-3 text-text-main bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none peer resize-none transition-all"
              placeholder=" "
            />
            <label
              htmlFor="storeBio"
              className="absolute left-4 top-4 text-slate-500 text-sm transition-all duration-200 peer-focus:text-primary peer-focus:top-2 peer-focus:text-xs pointer-events-none"
            >
              Store Bio
            </label>
          </div>
          <p className="text-xs text-slate-500 ml-1">
            Tell customers what you sell
          </p>
          {errors.storeBio && (
            <p className="text-red-500 text-xs ml-1">
              {errors.storeBio.message}
            </p>
          )}
        </div>

        {/* Store Preview */}
        <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-dashed border-border-light flex gap-6 items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <MdStorefront size={32} className="text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-text-main">Store Preview</h4>
            <p className="text-xs text-slate-500">
              This information will be displayed on your vendor profile page.
            </p>
            {storeName && (
              <p className="mt-2 text-sm font-medium text-primary">
                {storeName}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-8 border-t border-border-light">
          <button
            type="button"
            className="px-8 py-3 rounded-xl font-bold text-emerald-700 hover:bg-emerald-50 transition-all border border-emerald-200"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-3 rounded-xl font-bold text-white bg-primary hover:bg-brand-green shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? "Saving..." : "Next"}
            <MdArrowForward />
          </button>
        </div>
      </form>
    </div>
  );
};

export default StoreIdentityForm;
