import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '@/components/common/Button/Button';
import reactLogoImg from '@/assets/CourseCard/reactlogoartwork.png';
import './_mobileCourseCard.scss';

export default function MobileCourseCard({
  course,
  isExpanded = false,
  onToggleExpand,
}) {
  if (!course) return null;

  return (
    <div className="mobile-course-card">
      <div className="mobile-card-media">
        <img
          src={reactLogoImg}
          alt={course.title}
          className="mobile-course-artwork-img"
        />
      </div>

      <div className="mobile-card-info">
        <h3 className="mobile-course-title">{course.title}</h3>
        <div className="mobile-course-price">{course.price}</div>

        <ul className="mobile-course-benefits-list">
          {course.benefits.map((benefit, idx) => (
            <li key={idx}>
              <span className="mobile-triangle-icon" aria-hidden="true">▶</span>
              <span className="mobile-benefit-text">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mobile-card-footer-action">
          <Button
            type="button"
            variant="primary"
            shape="rounded"
            className="mobile-see-more-btn"
            onClick={onToggleExpand}
            aria-expanded={isExpanded}
            icon={
              isExpanded ? (
                <ChevronUp size={18} className="btn-chevron" />
              ) : (
                <ChevronDown size={18} className="btn-chevron" />
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
