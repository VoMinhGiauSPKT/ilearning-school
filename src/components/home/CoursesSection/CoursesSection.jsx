import { useState } from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import CourseCard from '../CourseCard/CourseCard';
import CurriculumAccordion from '../CurriculumAccordion/CurriculumAccordion';
import Button from '../../common/Button/Button';
import { coursesList } from '../../../data/homeData';
import './_coursesSection.scss';

export default function CoursesSection() {
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
    <section className="courses-section" id="courses">
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

        {/* Nút hành động đáy danh sách: "Tất cả khoá học" */}
        <div className="courses-bottom-action">
          <Button variant="primary" shape="rounded" className="all-courses-btn">
            Tất cả khoá học
          </Button>
        </div>
      </div>
    </section>
  );
}
