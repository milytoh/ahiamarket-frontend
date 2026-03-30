"use client";

import React from "react";
import { MdEdit, MdCheckCircle, MdArrowBack } from "react-icons/md";

const StoreReview: React.FC = () => {
  // Mock data - In real app, this would come from previous steps / context / Zustand / etc.
  const reviewData = {
    storeName: "The Artisan Collective",
    storeBio:
      "Curating handcrafted sustainable goods from local artisans. We focus on ethical production and timeless design for the modern home.",
    address: "124 Industrial Way, Suite B",
    city: "Port Harcourt",
    state: "Rivers State",
  };

  const handleSubmit = () => {
    alert(
      "Application submitted successfully! 🎉\n\n(You would normally redirect to a success page here)",
    );
    // TODO: Call your API to submit the full vendor application
  };

  const handleEdit = (section: string) => {
    alert(
      `Edit ${section} - In a real app this would navigate back to the respective step`,
    );
  };

  return (
    <div className="bg-background-light text-text-main min-h-screen font-sans overflow-x-hidden">
      <div className="flex min-h-screen ">
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-16 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-text-main mb-2">
              Review & Submit
            </h1>
            <p className="text-lg text-slate-600">
              Almost there! Review your details before joining the marketplace.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-primary">Final Step</span>
              <span className="text-sm font-bold text-slate-600">
                100% Complete
              </span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full rounded-full" />
            </div>
          </div>

          {/* Review Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-border-light p-8 lg:p-10 mb-10">
            <div className="grid grid-cols-1 gap-10">
              {/* Store Branding Section */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                      Store Branding
                    </h3>
                    <p className="text-2xl font-bold text-text-main">
                      {reviewData.storeName}
                    </p>
                  </div>
                  <button
                    onClick={() => handleEdit("Store Branding")}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-brand-green transition-colors"
                  >
                    <MdEdit size={20} />
                    Edit
                  </button>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-border-light">
                  <p className="text-slate-600 leading-relaxed">
                    {reviewData.storeBio}
                  </p>
                </div>
              </section>

              {/* Location Section */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                      Business Location
                    </h3>
                    <p className="text-xl font-bold text-text-main">
                      Primary Warehouse & Office
                    </p>
                  </div>
                  <button
                    onClick={() => handleEdit("Location")}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-brand-green transition-colors"
                  >
                    <MdEdit size={20} />
                    Edit
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      Street Address
                    </p>
                    <p className="font-semibold text-text-main">
                      {reviewData.address}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-500 uppercase">
                      City & State
                    </p>
                    <p className="font-semibold text-text-main">
                      {reviewData.city}, {reviewData.state}
                    </p>
                  </div>
                </div>
              </section>

              {/* Verification Section */}
              <section>
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                      Identity & Legal
                    </h3>
                    <p className="text-xl font-bold text-text-main">
                      Verified Status
                    </p>
                  </div>
                  <button
                    onClick={() => handleEdit("Identity")}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:text-brand-green transition-colors"
                  >
                    <MdEdit size={20} />
                    Edit
                  </button>
                </div>
                <div className="flex items-center gap-4 bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                    <MdCheckCircle size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-800">
                      Tax ID & Business License Uploaded
                    </p>
                    <p className="text-sm text-slate-600">
                      Verified via automated verification system
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <button className="w-full md:w-auto px-8 py-4 border-2 border-border-light text-text-main font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <MdArrowBack size={20} />
              Back to Inventory
            </button>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <p className="text-xs text-slate-500 max-w-[220px] text-center md:text-right">
                By submitting, you agree to the Vendor Terms & Conditions.
              </p>
              <button
                onClick={handleSubmit}
                className="w-full md:w-auto px-12 py-4 bg-primary hover:bg-brand-green text-white font-extrabold text-lg rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all"
              >
                Submit Application
              </button>
            </div>
          </div>

          {/* Decorative Footer */}
          <div className="mt-20 flex justify-center opacity-20">
            <div className="text-2xl font-bold tracking-tighter text-slate-300">
              Ahiamarket
            </div>
          </div>
        </main>
      </div>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-screen bg-gradient-to-l from-emerald-50/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default StoreReview;
