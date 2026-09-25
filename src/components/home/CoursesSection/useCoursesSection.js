import { useState } from 'react';
import { coursesList } from '@/data/homeData';

export function useCoursesSection() {
  const [expandedCourseIds, setExpandedCourseIds] = useState({
    'course-1': true,
  });

  const toggleCourse = (id) => {
    setExpandedCourseIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    courses: coursesList,
    expandedCourseIds,
    toggleCourse,
  };
}

export default useCoursesSection;
