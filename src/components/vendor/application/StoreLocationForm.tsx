'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MdLocationOn, MdMap, MdApartment, MdArrowBack, MdArrowForward } from 'react-icons/md';

const locationSchema = z.object({
  address: z
    .string()
    .min(10, "Please enter a complete business address")
    .max(200, "Address is too long"),
  state: z
    .string()
    .min(1, "Please select your state"),
  city: z
    .string()
    .min(2, "City name must be at least 2 characters")
    .max(50, "City name is too long"),
});

type LocationFormData = z.infer<typeof locationSchema>;

const StoreLocationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      address: '',
      state: '',
      city: '',
    },
  });

  const onSubmit = async (data: LocationFormData) => {
    console.log('Location data submitted:', data);
    // TODO: Send to your backend or next step
    alert('Location information saved successfully! (Demo)');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border-light p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Business Address */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-text-main" htmlFor="address">
            Business Address
          </label>
          <div className="relative">
            <MdLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
            <input
              id="address"
              type="text"
              {...register('address')}
              placeholder="e.g. 123 Commerce Avenue, Suite 400"
              className="w-full pl-12 pr-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          <p className="text-xs text-slate-500 italic ml-1">
            Please provide your registered legal business address.
          </p>
          {errors.address && (
            <p className="text-red-500 text-xs ml-1">{errors.address.message}</p>
          )}
        </div>

        {/* State & City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* State */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-text-main" htmlFor="state">
              State
            </label>
            <div className="relative">
              <MdMap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
              <select
                id="state"
                {...register('state')}
                className="w-full pl-12 pr-10 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none text-text-main"
              >
                <option value="" disabled>Select State</option>
                <option value="lagos">Lagos</option>
                <option value="rivers">Rivers</option>
                <option value="abia">Abia</option>
                <option value="anambra">Anambra</option>
                <option value="delta">Delta</option>
                <option value="enugu">Enugu</option>
                <option value="imo">Imo</option>
                <option value="ogun">Ogun</option>
                {/* Add more Nigerian states as needed */}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                ▼
              </div>
            </div>
            {errors.state && (
              <p className="text-red-500 text-xs ml-1">{errors.state.message}</p>
            )}
          </div>

          {/* City - Now a text input */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-text-main" htmlFor="city">
              City
            </label>
            <div className="relative">
              <MdApartment className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
              <input
                id="city"
                type="text"
                {...register('city')}
                placeholder="e.g. Port Harcourt"
                className="w-full pl-12 pr-4 py-4 bg-background-light border border-border-light rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            {errors.city && (
              <p className="text-red-500 text-xs ml-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-10 p-5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-4">
          <MdLocationOn className="text-primary mt-0.5" size={24} />
          <div className="text-sm text-slate-700 leading-relaxed">
            <strong>Why is this required?</strong> Ahiamarket uses this address to calculate shipping rates and verify your business legitimacy for the marketplace.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-light">
          <button
            type="button"
            className="w-full md:w-auto px-8 py-4 text-primary font-bold hover:bg-emerald-50 transition-colors rounded-xl flex items-center justify-center gap-2 border border-border-light"
          >
            <MdArrowBack size={20} />
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-brand-green text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSubmitting ? 'Saving...' : 'Next Step'}
            <MdArrowForward />
          </button>
        </div>
      </form>
    </div>
  );
};

export default StoreLocationForm;