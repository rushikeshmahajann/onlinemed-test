import React from "react";
import { Review } from "@/data/reviews";
import { MdStarRate } from "react-icons/md";

interface ReviewCardProps {
  id: number;
  name: string;
  occupation: string;
  location: string;
  daysAgo: string;
  description: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  name,
  occupation,
  location,
  daysAgo,
  description,
  rating,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <MdStarRate         key={index}
      className={`w-4 h-4 ${
        index < rating ? "text-[#219653]" : "text-gray-300"
      }`} />
/*       <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-[#219653]" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg> */
    ));
  };

  return (
    <div className="flex flex-col gap-2 px-4 py-5 rounded-xl bg-white/60 mb-6 transition-opacity duration-200 opacity-100 font-satoshi">
      <div className="flex gap-2 items-center">
        <div className="rounded-full w-14 h-14 bg-orange-100"></div>
        <div className="flex flex-col">
          <p className="font-satoshi font-bold text-primary text-base">
            {name}
          </p>
          <p className="font-satoshi font-medium text-[#4B5563] text-xs">
            {occupation} • {location}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {renderStars(rating)}
        </div>
        <div>
          <p className="font-satoshi font-medium text-[#4B5563] text-xs">
            {daysAgo}
          </p>
        </div>
      </div>
      <div>
        <p className="font-satoshi font-medium text-[#111827] leading-5 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
