"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdArrowBack } from "react-icons/md";

const addProductSchema = z.object({
  productName: z
    .string()
    .min(3, "Product name must be at least 3 characters")
    .max(100),
  category: z.string().min(1, "Please select a category"),
  condition: z.enum(["New", "Refurbished"]),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000),
  unitPrice: z.number().min(100, "Price must be at least ₦100"),
  stock: z.number().min(0, "Stock cannot be negative").max(10000),
  podEnabled: z.boolean().default(false),
});

type AddProductFormData = z.infer<typeof addProductSchema>;

interface AddProductFormProps {
  onSubmit: (data: AddProductFormData) => Promise<void>;
  isSubmitting: boolean;
}

export default function AddProductForm({
  onSubmit,
  isSubmitting,
}: AddProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      podEnabled: false,
      condition: "New",
      stock: 1,
    },
  });

  const categories = [
    "Fashion & Apparel",
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
    >
      {/* Left Column - Primary Details */}
      <div className="lg:col-span-8 space-y-8">
        {/* Foundation Details Section */}
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-primary rounded-full" />
            <h3 className="font-bold text-xl">Foundation Details</h3>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Product Name
              </label>
              <input
                {...register("productName")}
                className="w-full bg-background-light border border-border-light rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none"
                placeholder="e.g. Ergonomic Leather Drafting Chair"
              />
              {errors.productName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.productName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Category
                </label>
                <select
                  {...register("category")}
                  className="w-full bg-background-light border border-border-light rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  Condition
                </label>
                <div className="flex gap-3">
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      value="New"
                      {...register("condition")}
                      className="peer sr-only"
                    />
                    <div className="bg-background-light border border-border-light peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white text-center py-3 rounded-2xl font-medium transition-all">
                      New
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="radio"
                      value="Refurbished"
                      {...register("condition")}
                      className="peer sr-only"
                    />
                    <div className="bg-background-light border border-border-light peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white text-center py-3 rounded-2xl font-medium transition-all">
                      Refurbished
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={6}
                className="w-full bg-background-light border border-border-light rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none resize-y"
                placeholder="Describe your product in detail..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Media Upload Section */}
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h3 className="font-bold text-xl">Visual Assets</h3>
            </div>
            <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full">
              Max 3 Files
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 h-64">
            <div className="col-span-2 border-2 border-dashed border-border-light rounded-3xl flex flex-col items-center justify-center hover:border-primary transition-all cursor-pointer">
              <div className="text-center">
                <div className="text-6xl text-slate-300 mb-3">📸</div>
                <p className="font-medium">Upload Primary Image</p>
                <p className="text-xs text-slate-400 mt-1">
                  High resolution recommended
                </p>
              </div>
            </div>

            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex-1 border-2 border-dashed border-border-light rounded-3xl flex items-center justify-center hover:border-primary transition-all cursor-pointer"
              >
                <div className="text-4xl text-slate-300">+</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Column - Pricing & Settings */}
      <div className="lg:col-span-4 space-y-8">
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-emerald-200 rounded-full" />
            <h3 className="font-bold text-xl">Market Logistics</h3>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Unit Price (NGN)
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary font-bold">
                  ₦
                </span>
                <input
                  type="number"
                  {...register("unitPrice", { valueAsNumber: true })}
                  className="w-full bg-background-light border border-border-light rounded-2xl pl-10 py-4 text-2xl font-bold focus:ring-2 focus:ring-primary outline-none"
                  placeholder="0.00"
                />
              </div>
              {errors.unitPrice && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.unitPrice.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Stock Inventory
              </label>
              <input
                type="number"
                {...register("stock", { valueAsNumber: true })}
                className="w-full bg-background-light border border-border-light rounded-2xl p-4 text-xl font-bold focus:ring-2 focus:ring-primary outline-none"
                min="0"
              />
              {errors.stock && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.stock.message}
                </p>
              )}
            </div>

            {/* PoD Toggle */}
            <div className="pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Pay on Delivery</span>
                  <p className="text-xs text-slate-500">
                    Allow customers to pay upon delivery
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("podEnabled")}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-slate-200 rounded-full peer peer-checked:bg-[#05b384] after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-6" />
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-70"
          >
            {isSubmitting ? "Saving Product..." : "Save Product"}
          </button>

          <button
            type="button"
            className="w-full bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
