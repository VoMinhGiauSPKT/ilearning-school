import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import CourseCard from '@/components/home/CourseCard/CourseCard';
import CurriculumAccordion from '@/components/home/CurriculumAccordion/CurriculumAccordion';
import Button from '@/components/common/Button/Button';
import './_mobileCoursesSection.scss';

export default function MobileCoursesSection({
  courses = [],
  expandedCourseIds = {},
  toggleCourse,
}) {
  return (
    <section className="mobile-courses-section" id="courses">
      <div className="mobile-courses-container">
        <SectionHeading
          subtitle="Trải nghiệm dự án thực tế cùng UI8"
          title="Các khoá học sắp khai giảng"
          align="center"
        />

        <div className="mobile-courses-list-wrap">
          {courses.map((course) => {
            const isExpanded = !!expandedCourseIds[course.id];
            return (
              <div key={course.id} className="mobile-course-list-item">
                <CourseCard
                  course={course}
                  isExpanded={isExpanded}
                  onToggleExpand={() => toggleCourse && toggleCourse(course.id)}
                />

                {isExpanded && (
                  <CurriculumAccordion stages={course.curriculumStages} course={course} />
                )}
              </div>
            );
          })}
        </div>

        <div className="mobile-courses-bottom-action">
          <Button variant="primary" shape="rounded" className="mobile-all-courses-btn">
            Tất cả khoá học
          </Button>
        </div>
      </div>
    </section>
  );
}
