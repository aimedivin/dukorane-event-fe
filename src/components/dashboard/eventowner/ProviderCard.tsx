"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Provider } from "./types/types";

import { Badge } from "./Badge";
import { RatingStars } from "./RatingStar";

interface ProviderCardProps {
  provider: Provider;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow ">
      <div className="flex gap-4">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {provider.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{provider.title}</p>
              <div className="flex items-center gap-2 mb-3">
                {provider.verified && <Badge variant="verified" />}
                {provider.premium && <Badge variant="premium" />}
                <span className="text-sm text-gray-500">
                  {provider.location}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </button>
          </div>

          <RatingStars
            rating={provider.rating}
            reviewCount={provider.reviewCount}
          />
          <p className="text-sm text-gray-700 mt-3 line-clamp-2">
            {provider.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-lg font-bold text-gray-900">
                From RWF {provider.priceFrom.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">{provider.priceUnit}</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                View Profile
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
