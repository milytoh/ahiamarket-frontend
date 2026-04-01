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
    .max(60, "Store name is too long"),
  storeBio: z
    .string()
    .min(20, "Please write a bit more about your store (minimum 20 characters)")
    .max(300, "Store bio cannot exceed 300 characters"),
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
    },
  });

  const onSubmit = (data: FormData) => {
    // Save data to parent wizard
    updateFormData({
      storeNameIdentity: data.storeName,
      storeBioIdentity: data.storeBio,
    });

    // Move to next step
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-border-light">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Progress Bar */}

        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                Current Progress
              </span>
              {/* <p className="font-semibold text-lg text-text-main">
                Welcome to Ahiamarket
              </p> */}
            </div>
            <span className="text-sm font-medium text-slate-600">
              Step 2 of 4 • 50% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <div className="bg-primary h-full w-1/2 rounded-full" />
          </div>
        </div>

        {/* Store Name */}
        <div className="space-y-2">
          <div className="relative">
            <input
              {...register("storeName")}
              className="block w-full px-4 pt-6 pb-3 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none peer transition-all"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:text-primary peer-focus:top-2 peer-focus:text-xs pointer-events-none">
              Store Name
            </label>
          </div>
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
              {...register("storeBio")}
              rows={5}
              className="block w-full px-4 pt-6 pb-3 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none peer resize-none transition-all"
              placeholder=" "
            />
            <label className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:text-primary peer-focus:top-2 peer-focus:text-xs pointer-events-none">
              Store Bio
            </label>
          </div>
          {errors.storeBio && (
            <p className="text-red-500 text-xs ml-1">
              {errors.storeBio.message}
            </p>
          )}
        </div>

        {/* Preview Card */}
        <div className="p-6 rounded-xl bg-slate-50 border border-border-light">
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="text-3xl">🏪</span>
            </div>
            <div>
              <p className="font-bold">Store Preview</p>
              <p className="text-xs text-slate-500">
                This is how your store will appear to customers
              </p>
            </div>
          </div>
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
