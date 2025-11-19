import React from "react";

interface ResultsHeaderProps {
  count: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export const ResultsHeader: React.FC<ResultsHeaderProps> = ({
  count,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {count} Service Providers Found
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Showing results for all categories in Rwanda
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="best_match">Best Match</option>
            <option value="rating">Highest Rating</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>
      </div>
    </div>
  );
};
