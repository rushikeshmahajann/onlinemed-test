"use client";
import React, { useState, useEffect } from "react";
import ReviewCard from "./review-card";
import { reviews } from "../data/reviews";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-6">
      {/* Single Review Card */}
      <div className="min-h-[200px]">
        <ReviewCard
          key={reviews[currentIndex].id}
          id={reviews[currentIndex].id}
          name={reviews[currentIndex].name}
          occupation={reviews[currentIndex].occupation}
          location={reviews[currentIndex].location}
          daysAgo={reviews[currentIndex].daysAgo}
          description={reviews[currentIndex].description}
          rating={reviews[currentIndex].rating}
        />
      </div>

      {/* Indicator Circles */}
      <div className="flex justify-start gap-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#2563EB] scale-110"
                : "bg-[#2563EB]/30 hover:bg-[#2563EB]/60"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
