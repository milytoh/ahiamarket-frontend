const API_URL = import.meta.env.VITE_API_URL;

import { useApi } from "@/hooks/useApi";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MdAddPhotoAlternate, MdClose } from "react-icons/md";

import Spinner from "@/components/ui/Spinner";
import EditProductFormSkeleton from "@/components/ui/skeletons/vendor/products/EditProductFormSkeleton";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

// Updated Zod Schema with Image Validation
const editProductSchema = z.object({
  productName: z
    .string()
    .min(3, "Product name must be at least 3 characters")
    .max(100, "Product name is too long"),

  category: z.string().min(1, "Please select a category"),

  condition: z.enum(["New", "Refurbished", "Used"]),

  status: z.enum(["active", "draft", "out_of_stock"]),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description is too long"),

  unitPrice: z.number().min(1000, "Price must be at least ₦1000"),

  stock: z
    .number()
    .min(0, "Stock cannot be negative")
    .max(10000, "Stock limit reached"),

  podEnabled: z.boolean().default(false),
});

// Extend schema with custom image validation
const fullSchema = editProductSchema.extend({
  // We will validate images manually since files are not part of the form values
});

type EditProductFormData = z.infer<typeof editProductSchema>;

interface Props {
  product?: any;
  loading?: boolean;
}

export default function EditProductForm({
  product,
  loading: productLoading,
}: Props) {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // OLD images from DB
  const [existingImages, setExistingImages] = useState<string[]>([]);

  // NEW uploaded images
  const [newImages, setNewImages] = useState<File[]>([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const { put, loading, error } = useApi(
    `${API_URL}/vendor/product/${id}/update`,
  );

  useEffect(() => {
    if (error) {
      toast.error(
        "something went wrong, update failed, check your network connection",
      );
    }
  }, [error]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(editProductSchema),
    defaultValues: {
      condition: "New",
      stock: 1,
      podEnabled: false,
    },
  });

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const updatedNewImages = [...newImages, ...files].slice(0, 3);

    setNewImages(updatedNewImages);

    const newPreviews = updatedNewImages.map((file) =>
      URL.createObjectURL(file),
    );

    setImagePreviews([
      ...existingImages.map((img) => `${API_URL}/uploads/products/${img}`),
      ...newPreviews,
    ]);
  };

  const removeImage = (index: number) => {
    const totalExisting = existingImages.length;

    if (index < totalExisting) {
      // removing OLD image
      const updatedExisting = existingImages.filter((_, i) => i !== index);
      setExistingImages(updatedExisting);
    } else {
      // removing NEW image
      const newIndex = index - totalExisting;
      const updatedNew = newImages.filter((_, i) => i !== newIndex);
      setNewImages(updatedNew);
    }

    // rebuild previews
    const updatedPreviews = [
      ...existingImages
        .filter((_, i) => i !== index)
        .map((img) => `${API_URL}/uploads/products/${img}`),
      ...newImages.map((file) => URL.createObjectURL(file)),
    ];

    setImagePreviews(updatedPreviews);
  };

  const onSubmit = async (data: EditProductFormData) => {
    if (existingImages.length === 0 && newImages.length === 0) {
      toast.warning("Please upload at least 1 product image");
      return;
    }
    try {
      const formData = new FormData();

      formData.append("productName", data.productName);
      formData.append("category", data.category);
      formData.append("condition", data.condition);
      formData.append("description", data.description);
      formData.append("unitPrice", data.unitPrice.toString());
      formData.append("stock", data.stock.toString());
      formData.append("podEnabled", data.podEnabled.toString());
      formData.append("status", data.status);

      //
      formData.append("existingImages", JSON.stringify(existingImages));

      //  new images
      newImages.forEach((file) => {
        formData.append("images", file);
      });

      await put(formData);

      toast.success("Product updated successfully!");
      navigate("/vendor/dashboard/products");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (product) {
      console.log("Product in form:", product);
      reset({
        productName: product.name,
        category: product.category,
        condition: product.condition,
        description: product.description,
        unitPrice: product.price,
        stock: product.stock,
        podEnabled: product.pod,
        status: product.status,
      });

      if (product.images?.length) {
        setExistingImages(product.images);

        setImagePreviews(
          product.images.map(
            (img: string) => `${API_URL}/uploads/products/${img}`,
          ),
        );
      }
    }
  }, [product, reset]);

  

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

  if (productLoading) {
    return <EditProductFormSkeleton />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8"
    >
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-8">
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

            {/* status */}

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                Status
              </label>
              <select
                {...register("status")}
                className="w-full bg-background-light border border-border-light rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.status.message}
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

        {/* Image Upload with Preview - Required */}
        <section className="bg-white p-8 rounded-3xl border border-border-light">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h3 className="font-bold text-xl">Visual Assets</h3>
            </div>
            <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full">
              {existingImages.length + newImages.length}/3 • First image is main
            </span>
          </div>

          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <label
            htmlFor="images"
            className={`border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all ${
              existingImages.length === 0 && newImages.length === 0
                ? "border-red-300"
                : "border-border-light hover:border-primary"
            }`}
          >
            <MdAddPhotoAlternate className="text-6xl text-slate-300 mb-4" />
            <p className="font-medium">Click to upload images</p>
            <p className="text-xs text-slate-400 mt-1">
              PNG or JPG • Max 3 images (First is main thumbnail)
            </p>
          </label>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-2xl border border-border-light"
                  />
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold">
                      MAIN
                    </div>
                  )}
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

          {existingImages.length === 0 && newImages.length === 0 && (
            <p className="text-red-500 text-xs mt-2 text-center">
              * At least 1 image is required
            </p>
          )}
        </section>
      </div>

      {/* Right Column */}
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

        <div className="flex flex-col gap-4 pt-6">
          <button
            type="submit"
            disabled={
              isSubmitting ||
              (existingImages.length === 0 && newImages.length === 0)
            }
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-70"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                {" "}
                <Spinner />
              </div>
            ) : (
              "Update Product"
            )}
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
