"use client";

import React from "react";
import {
  MdLocationOn,
  MdCategory,
  MdStar,
  MdEdit,
  MdVerified,
} from "react-icons/md";

export default function VendorProfileHeader() {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-border-light">
      {/* Cover Photo */}
      <div
        className="h-52 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkZX6fj0vcXsAqQao5S-eBI1RPDFwoUk8zp3uzm-AapVwMOHwmz-GaQh-DyMQ4PnXx8m2K_BMqsv8qyWUXRsOuu4cxX3-CksI8Zmz8eY-IGZ4RbTjUzcsRXyVKIF-3mWKUZChcYcC4mem-bJpPU8UugRgc74oMI8o7isNmF41kSbYXKKdOf-X8Jy1mvlVxxDYO9MSSqDbfblPF2dWEimdh2aH6tBE1GXi7_5G84BYyL4qeKvCeNcqLhmDkj8vxaX6FbelJK-tiGaSu')`,
        }}
      />

      <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row items-end -mt-12 gap-6 relative">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ3deY2Hqh8qBkrhjSCIckY8zRDYoG-7bP691haOLoONjO_Gyi_H_IP7LXejheIHWKZrh_RowutO-EfhalaqSXtFqE-_nvLyWtkvHeZXUVPUJy6MXb0yM035t2S6a0mnLXfMLds7DpMaxr1xB4PiX3E0Ng69l8Sma_9RWSTnU-xlQmX99GbKK1KrCqAzojIXaLZdwjbyEjdBSIFZu1okHXfQpgqhUFBZV15VY34AzxNlU9vc7z2f1kgaQu7kPN_tiM9279MNAu66nS"
            alt="Lagos Fashion Hub"
            className="w-32 h-32 rounded-2xl border-4 border-white object-cover shadow-xl"
          />
          <div className="absolute bottom-3 right-3 bg-[#05b384] text-white p-1.5 rounded-full border-2 border-white">
            <MdVerified size={20} />
          </div>
        </div>

        {/* Business Info */}
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-text-main">
              Lagos Fashion Hub
            </h2>
            <button className="flex items-center gap-2 text-sm font-bold text-[#05b384] hover:text-brand-green transition-colors">
              <MdEdit size={18} /> Edit Profile
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <MdLocationOn className="text-[#05b384]" />
              Lagos, Nigeria
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div className="flex items-center gap-1">
              <MdCategory className="text-[#05b384]" />
              Fashion & Apparel
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <MdStar size={20} />
              <span>4.2</span>
            </div>
            <span className="text-slate-500">(128 reviews)</span>
          </div>
        </div>

        {/* Follow Button */}
        <div className="pb-3">
          <button className="bg-[#05b384]/10 text-[#05b384] font-bold px-8 py-3 rounded-2xl hover:bg-[#05b384]/20 transition-all">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
