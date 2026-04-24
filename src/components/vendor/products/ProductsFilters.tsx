import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdFilterList } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

type Status = "active" | "out_of_stock" | "draft";
type Category = "Fashion" | "Electronics" | "Home & Kitchen" | "Beauty";

type Filters = {
  status?: Status;
  category?: Category;
  startDate?: Date | null;
  endDate?: Date | null;
};

interface Props {
  onFilter: (filters: Filters) => void;
}

export default function ProductsFilters({ onFilter }: Props) {
  const [status, setStatus] = useState<Status | "">("");
  const [category, setCategory] = useState<Category | "">("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // 6 months helper
  const sixMonthsFrom = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 6, date.getDate());

  const handleApply = () => {
    // validation
    if (startDate && endDate) {
      const diffInMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

      if (diffInMonths > 6) {
        alert("Date range cannot exceed 6 months");
        return;
      }

      if (endDate < startDate) {
        alert("End date cannot be before start date");
        return;
      }
    }

    onFilter({
      status: status || undefined,
      category: category || undefined,
      startDate,
      endDate,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 mb-10 flex flex-wrap gap-6 items-end border border-border-light">
      {/* STATUS */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
          Status Filter
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status | "")}
          className="w-full bg-background-light border border-border-light rounded-2xl py-3 px-5 text-sm"
        >
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="out_of_stock">Out of Stock</option>
          <option value="draft">In Draft</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div className="flex-1 min-w-[200px]">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category | "")}
          className="w-full bg-background-light border border-border-light rounded-2xl py-3 px-5 text-sm"
        >
          <option value="">All Categories</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
          <option value="Home & Kitchen">Home & Kitchen</option>
          <option value="Beauty">Beauty</option>
        </select>
      </div>

      {/* DATE RANGE */}
      <div className="flex-1 min-w-[260px]">
        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
          Date Added Range
        </label>

        <div className="flex gap-3">
          {/* FROM */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-2xl">
            <FiCalendar className="text-slate-500" />

            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => {
                setStartDate(date);
                if (date && endDate && endDate < date) {
                  setEndDate(null);
                }
              }}
              placeholderText="From"
              maxDate={endDate || new Date()}
              dateFormat="MMM d, yyyy"
              className="bg-transparent text-sm outline-none w-[120px]"
            />
          </div>

          {/* TO */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-1 py-2 rounded-2xl">
            <FiCalendar className="text-slate-500" />

            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              placeholderText="To"
              minDate={startDate || undefined}
              maxDate={
                startDate
                  ? new Date(
                      startDate.getFullYear(),
                      startDate.getMonth() + 6,
                      startDate.getDate(),
                    )
                  : new Date()
              }
              dateFormat="MMM d, yyyy"
              className="bg-transparent text-sm outline-none w-[120px]"
            />
          </div>
        </div>
      </div>

      {/* APPLY BUTTON */}
      <button
        onClick={handleApply}
        className="bg-primary text-white md:ml-8 p-4 rounded-2xl hover:bg-brand-green transition-all "
      >
        <MdFilterList size={24} />
      </button>
    </div>
  );
}
