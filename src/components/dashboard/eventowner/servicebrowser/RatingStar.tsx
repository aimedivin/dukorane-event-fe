import React from "react";

interface RatingStarsProps {
  rating: number;
  reviewCount: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  reviewCount,
}) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "text-yellow-400" : "text-gray-300"}
        >
          ⭐
        </span>
      ))}
      <span className="ml-1 text-sm font-semibold text-gray-900">{rating}</span>
      <span className="text-sm text-gray-500">({reviewCount} reviews)</span>
    </div>
  );
};
