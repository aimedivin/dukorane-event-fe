"use client";
import React from "react";
import { FilterState } from "./types/types";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClearAll: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearAll,
}) => {
  const ratings = [
    { value: 4.5, label: "4.5+" },
    { value: 4.0, label: "4.0+" },
    { value: 3.5, label: "3.5+" },
  ];

  const serviceCategories = [
    "MCs & Hosts",
    "Catering",
    "Photography",
    "Decoration",
    "Music & Entertainment",
  ];

  const handleChange = (field: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleRatingChange = (rating: number) => {
    handleChange("minRating", filters.minRating === rating ? null : rating);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    handleChange("categories", newCategories);
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
          <button
            onClick={onClearAll}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Clear All
          </button>
        </div>

        {/* Event Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Date
          </label>
          <input
            type="date"
            value={filters.eventDate}
            onChange={(e) => handleChange("eventDate", e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Budget Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget Range (RWF)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={filters.budgetMin}
              onChange={(e) => handleChange("budgetMin", e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.budgetMax}
              onChange={(e) => handleChange("budgetMax", e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Minimum Rating */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Minimum Rating
          </label>
          <div className="space-y-2">
            {ratings.map((r) => (
              <label
                key={r.value}
                className="flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  checked={filters.minRating === r.value}
                  onChange={() => handleRatingChange(r.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-3 text-sm text-gray-700 flex items-center">
                  {r.label} <span className="ml-1 text-yellow-400">⭐</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Verified Only */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filters.verifiedOnly}
              onChange={(e) => handleChange("verifiedOnly", e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Verified Providers Only
            </span>
          </label>
        </div>

        {/* Service Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Service Categories
          </label>
          <div className="space-y-2">
            {serviceCategories.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
