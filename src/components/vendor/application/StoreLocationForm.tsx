"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MdLocationOn,
  MdMap,
  MdApartment,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";

const locationSchema = z.object({
  address: z.string().min(10, "Please enter a complete business address"),
  state: z.string().min(1, "Please select your state"),
  city: z.string().min(2, "City name must be at least 2 characters"),
});

type FormData = z.infer<typeof locationSchema>;

type Props = {
  formData: any;
  updateFormData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function StoreLocationForm({
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
    resolver: zodResolver(locationSchema),
    defaultValues: {
      address: formData.address || "",
      state: formData.state || "",
      city: formData.city || "",
    },
  });

  const onSubmit = (data: FormData) => {
    updateFormData({
      address: data.address,
      state: data.state,
      city: data.city,
    });
    onNext();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border-light p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Business Address */}
        <div className="space-y-2">
          <label
            className="block text-sm font-bold text-text-main"
            htmlFor="address"
          >
            Business Address
          </label>
          <div className="relative">
            <MdLocationOn
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={22}
            />
            <input
              id="address"
              {...register("address")}
              placeholder="e.g. 123 Commerce Avenue, Suite 400"
              className="w-full pl-12 pr-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none transition-all"
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-xs ml-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* State & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-text-main"
              htmlFor="state"
            >
              State
            </label>
            <div className="relative">
              <MdMap
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={22}
              />
              <select
                id="state"
                {...register("state")}
                className="w-full pl-12 pr-10 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none appearance-none"
              >
                <option value="">Select State</option>
                <option value="Rivers">Rivers</option>
                <option value="Lagos">Lagos</option>
                <option value="Abia">Abia</option>
                <option value="Anambra">Anambra</option>
                <option value="Delta">Delta</option>
                {/* Add more states as needed */}
              </select>
            </div>
            {errors.state && (
              <p className="text-red-500 text-xs ml-1">
                {errors.state.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-bold text-text-main"
              htmlFor="city"
            >
              City
            </label>
            <div className="relative">
              <MdApartment
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={22}
              />
              <input
                id="city"
                {...register("city")}
                placeholder="e.g. Port Harcourt"
                className="w-full pl-12 pr-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 outline-none"
              />
            </div>
            {errors.city && (
              <p className="text-red-500 text-xs ml-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Info Card */}
        <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-4">
          <MdLocationOn className="text-primary mt-1" size={24} />
          <div className="text-sm text-slate-700">
            <strong>Why is this required?</strong> Ahiamarket uses this address
            to calculate shipping rates and verify your business legitimacy.
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-8 border-t border-border-light">
          <button
            type="button"
            onClick={onBack}
            className="w-full md:w-auto px-8 py-4 text-primary font-bold border border-border-light rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <MdArrowBack /> Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-brand-green text-white font-bold rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
          >
            Continue
            <MdArrowForward />
          </button>
        </div>
      </form>
    </div>
  );
}
