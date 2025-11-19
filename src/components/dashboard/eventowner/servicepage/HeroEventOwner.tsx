"use client";

import { useState } from "react";

const categories = [
  "All Categories",
  "MCs & Hosts",
  "Caterers",
  "Photographers",
  "Decorators",
  "Musicians",
  "Venues",
];

const HeroEventOwner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Rwanda");

  const handleSearch = () => {
    console.log({ searchQuery, selectedCategory, location });
    // Call API or filter logic here
  };

  return (
    <section className="bg-white rounded-lg p-8 shadow-md w-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Find Your Perfect Event Service Provider
        </h1>
        <p className="text-gray-600 mt-2">
          Discover verified professionals for your special events in Rwanda
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for services, keywords, or provider names..."
          className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        >
          <option>All Rwanda</option>
          <option>Kigali</option>
          <option>Butare</option>
          <option>Musanze</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
        >
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === category
                ? "bg-primary text-white border-primary"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroEventOwner;
