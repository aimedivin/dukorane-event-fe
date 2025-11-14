'use client';
import React, { useState } from "react";
import { FilterSidebar } from "../../components/dashboard/eventowner/FiltersSidebar";
import { ResultsHeader } from "../../components/dashboard/eventowner/ResultsHeader";
import { ProviderCard } from "../../components/dashboard/eventowner/ProviderCard"
import { FilterState, Provider } from "../../components/dashboard/eventowner/types"

const ServiceProvidersPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    eventDate: "",
    budgetMin: "",
    budgetMax: "",
    minRating: null,
    verifiedOnly: false,
    categories: [],
  });
  const [sortBy, setSortBy] = useState("best_match");

  const mockProviders: Provider[] = [
    {
      id: "1",
      name: "Jean-UX Pilot Uwimana",
      title: "Professional MC & Event Host",
      description: "Bilingual MC specializing in weddings, corporate events, and cultural celebrations. 8+ years experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 4.9,
      reviewCount: 127,
      verified: true,
      location: "Kigali",
      priceFrom: 150000,
      priceUnit: "/event"
    },
    {
      id: "2",
      name: "Grace Mukamana",
      title: "Premium Catering Services",
      description: "Traditional & modern cuisine specialist. Custom menus for weddings, corporate events, and private parties.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 4.8,
      reviewCount: 89,
      verified: true,
      location: "Kigali",
      priceFrom: 25000,
      priceUnit: "/person"
    }
    // Add other providers as needed
  ];

  const handleClearAll = () => setFilters({ eventDate: "", budgetMin: "", budgetMax: "", minRating: null, verifiedOnly: false, categories: [] });

  const filteredProviders = mockProviders.filter(provider => {
    if (filters.verifiedOnly && !provider.verified) return false;
    if (filters.minRating && provider.rating < filters.minRating) return false;
    if (filters.budgetMin && provider.priceFrom < parseInt(filters.budgetMin)) return false;
    if (filters.budgetMax && provider.priceFrom > parseInt(filters.budgetMax)) return false;
    return true;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <FilterSidebar filters={filters} onFilterChange={setFilters} onClearAll={handleClearAll} />
      <div className="flex-1 overflow-y-auto">
        <ResultsHeader count={filteredProviders.length} sortBy={sortBy} onSortChange={setSortBy} />
        <div className="px-8 py-6 space-y-4">
          {filteredProviders.map(provider => <ProviderCard key={provider.id} provider={provider} />)}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvidersPage;
