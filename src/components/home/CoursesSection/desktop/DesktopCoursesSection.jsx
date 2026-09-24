import { useState } from 'react';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import CourseCard from '@/components/home/CourseCard/CourseCard';
import CurriculumAccordion from '@/components/home/CurriculumAccordion/CurriculumAccordion';
import Button from '@/components/common/Button/Button';
import { coursesList } from '@/data/homeData';
import './_desktopCoursesSection.scss';

export default function DesktopCoursesSection() {
  const [expandedCourseIds, setExpandedCourseIds] = useState({
    'course-1': true,
  });

  const toggleCourse = (id) => {
    setExpandedCourseIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="desktop-courses-section" id="courses">
      <div className="container courses-container">
        <SectionHeading
          subtitle="Trải nghiệm dự án thực tế cùng UI8"
          title="Các khoá học sắp khai giảng"
          align="center"
        />

        <div className="courses-list-wrap">
          {coursesList.map((course) => {
            const isExpanded = !!expandedCourseIds[course.id];
            return (
              <div key={course.id} className="course-list-item">
                <CourseCard
                  course={course}
                  isExpanded={isExpanded}
                  onToggleExpand={() => toggleCourse(course.id)}
                />

                {isExpanded && (
                  <CurriculumAccordion stages={course.curriculumStages} />
                )}
              </div>
            );
          })}
        </div>

        <div className="courses-bottom-action">
          <Button variant="primary" shape="rounded" className="all-courses-btn">
            Tất cả khoá học
          </Button>
        </div>
      </div>
    </section>
  );
}
