import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '@/components/common/Button/Button';
import reactLogoImg from '@/assets/CourseCard/reactlogoartwork.png';
import './_desktopCourseCard.scss';

export default function DesktopCourseCard({
  course,
  isExpanded = false,
  onToggleExpand,
}) {
  if (!course) return null;

  return (
    <div className="desktop-course-card">
      <div className="card-media-col">
        <img
          src={reactLogoImg}
          alt={course.title}
          className="course-artwork-img"
        />
      </div>

      <div className="card-info-col">
        <h3 className="course-title">{course.title}</h3>
        <div className="course-price">{course.price}</div>

        <ul className="course-benefits-list">
          {course.benefits.map((benefit, idx) => (
            <li key={idx}>
              <span className="triangle-icon" aria-hidden="true">▶</span>
              <span className="benefit-text">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="card-footer-action">
          <Button
            type="button"
            variant="primary"
            shape="rounded"
            className="see-more-btn"
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            icon={
              isExpanded ? (
                <ChevronUp size={22} className="btn-chevron" />
              ) : (
                <ChevronDown size={22} className="btn-chevron" />
              )
            }
          >
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
}
