import { useState } from 'react';
import { instructorsList } from '@/data/homeData';

export function useInstructorSlide() {
  const [activeSlide, setActiveSlide] = useState(0);

  const isFirstSlide = activeSlide === 0;
  const isLastSlide = activeSlide === instructorsList.length - 1;

  const prevSlide = () => {
    if (!isFirstSlide) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (!isLastSlide) {
      setActiveSlide((prev) => prev + 1);
    }
  };

  const current = instructorsList[activeSlide];

  return {
    instructors: instructorsList,
    current,
    activeSlide,
    setActiveSlide,
    isFirstSlide,
    isLastSlide,
    prevSlide,
    nextSlide,
  };
}

export default useInstructorSlide;
