"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdAddPhotoAlternate, MdClose } from "react-icons/md";

const addProductSchema = z.object({
  productName: z
    .string()
    .min(3, "Product name must be at least 3 characters")
    .max(100),
  category: z.string().min(1, "Please select a category"),
  condition: z.enum(["New", "Refurbished", "Used"], {
    required_error: "Please select condition",
  }),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000),
  unitPrice: z.number().min(100, "Price must be at least ₦100"),
  stock: z.number().min(0, "Stock cannot be negative").max(10000),
  podEnabled: z.boolean().default(false),
});

type AddProductFormData = z.infer<typeof addProductSchema>;

export default function AddProductForm() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AddProductFormData>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      podEnabled: false,
      condition: "New",
      stock: 1,
    },
  });

  const podEnabled = watch("podEnabled");

  // Handle image selection with preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newImages = [...selectedImages, ...files].slice(0, 3); // Max 3 images
    setSelectedImages(newImages);

    // Create previews
    const newPreviews = newImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(newPreviews);
  };

  // Remove image
  const removeImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setSelectedImages(newImages);
    setImagePreviews(newPreviews);
  };

  const onSubmit = async (data: AddProductFormData) => {
    try {
      const formDataToSend = new FormData();

      // Append form fields
      formDataToSend.append("productName", data.productName);
      formDataToSend.append("category", data.category);
      formDataToSend.append("condition", data.condition);
      formDataToSend.append("description", data.description);
      formDataToSend.append("unitPrice", data.unitPrice.toString());
      formDataToSend.append("stock", data.stock.toString());
      formDataToSend.append("podEnabled", data.podEnabled.toString());

      // Append images
      selectedImages.forEach((file, index) => {
        formDataToSend.append(`image${index}`, file);
      });

      console.log("Submitting to backend with images:", selectedImages.length);

      const response = await fetch("/api/vendor/products", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("✅ Product added successfully!");
        // Reset form if needed
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-8">
        {/* Foundation Details */}
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

            {/* Category Dropdown */}
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

            {/* Condition Dropdown (as requested) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Condition
              </label>
              <select
                {...register("condition")}
                className="w-full bg-background-light border border-border-light rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="New">New</option>
                <option value="Refurbished">Refurbished</option>
                <option value="Used">Used</option>
              </select>
              {errors.condition && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.condition.message}
                </p>
              )}
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

        {/* Image Upload with Preview */}
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h3 className="font-bold text-xl">Visual Assets</h3>
            </div>
            <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full">
              Max 3 Images
            </span>
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            id="productImages"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <label
            htmlFor="productImages"
            className="border-2 border-dashed border-border-light rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all"
          >
            <MdAddPhotoAlternate className="text-6xl text-slate-300 mb-4" />
            <p className="font-medium text-slate-600">Click to upload images</p>
            <p className="text-xs text-slate-400 mt-1">
              PNG, JPG up to 5MB each
            </p>
          </label>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="w-full aspect-square object-cover rounded-2xl border border-border-light"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <MdClose size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Right Column - Pricing & Settings */}
      <div className="lg:col-span-4 space-y-8">
        {/* Pricing & Inventory */}
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

        {/* Submit Buttons */}
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
