import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import QuoteIcon from '@/components/common/QuoteIcon/QuoteIcon';
import './_desktopInstructorSection.scss';

export default function DesktopInstructorSection({
  instructors = [],
  current,
  activeSlide = 0,
  setActiveSlide,
  isFirstSlide = true,
  isLastSlide = false,
  prevSlide,
  nextSlide,
}) {
  if (!current) return null;

  return (
    <section className="desktop-instructor-section">
      <div className="container instructor-container">
        <SectionHeading
          subtitle="Nhân sự nòng cốt"
          title="Đội ngũ giảng viên"
          align="center"
        />

        <div className="instructor-main-card">
          {/* Left Photo Placeholder */}
          <div className="instructor-photo-box" />

          {/* Right Info */}
          <div className="instructor-info-box">
            <QuoteIcon />

            <div className="instructor-quote-wrap">
              <p className="quote-para">{current.quotePara1}</p>
              <p className="quote-para">{current.quotePara2}</p>
            </div>

            <div className="instructor-identity">
              <h4 className="instructor-name">{current.name}</h4>
              <span className="instructor-role">{current.role}</span>
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="slider-dots">
            {instructors.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide && setActiveSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="slider-arrows">
            <Button
              type="button"
              variant={isFirstSlide ? 'outline' : 'primary'}
              shape="square"
              className={`arrow-btn arrow-prev ${isFirstSlide ? 'is-initial' : 'is-active'}`}
              onClick={prevSlide}
              disabled={isFirstSlide}
              aria-label="Previous instructor"
              icon={<ChevronLeft size={28} />}
            />
            <Button
              type="button"
              variant={isLastSlide ? 'outline' : 'primary'}
              shape="square"
              className={`arrow-btn arrow-next ${isLastSlide ? 'is-initial' : 'is-active'}`}
              onClick={nextSlide}
              disabled={isLastSlide}
              aria-label="Next instructor"
              icon={<ChevronRight size={28} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
