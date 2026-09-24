import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Button from '@/components/common/Button/Button';
import QuoteIcon from '@/components/common/QuoteIcon/QuoteIcon';
import { instructorsList } from '@/data/homeData';
import './_mobileInstructorSection.scss';

export default function MobileInstructorSection() {
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

  return (
    <section className="mobile-instructor-section">
      <div className="mobile-instructor-container">
        <SectionHeading
          subtitle="Nhân sự nòng cốt"
          title="Đội ngũ giảng viên"
          align="center"
        />

        <div className="mobile-instructor-main-card">
          {/* Top Photo */}
          <div className="mobile-instructor-photo-box" />

          {/* Info & Quote */}
          <div className="mobile-instructor-info-box">
            <QuoteIcon />

            <div className="mobile-instructor-quote-wrap">
              <p className="mobile-quote-para">{current.quotePara1}</p>
              <p className="mobile-quote-para">{current.quotePara2}</p>
            </div>

            <div className="mobile-instructor-identity">
              <h4 className="mobile-instructor-name">{current.name}</h4>
              <span className="mobile-instructor-role">{current.role}</span>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="mobile-slider-dots">
            {instructorsList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`mobile-dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slider Arrows */}
          <div className="mobile-slider-arrows">
            <Button
              type="button"
              variant={isFirstSlide ? 'outline' : 'primary'}
              shape="square"
              className={`mobile-arrow-btn ${isFirstSlide ? 'is-initial' : 'is-active'}`}
              onClick={prevSlide}
              disabled={isFirstSlide}
              aria-label="Previous instructor"
              icon={<ChevronLeft size={20} />}
            />
            <Button
              type="button"
              variant={isLastSlide ? 'outline' : 'primary'}
              shape="square"
              className={`mobile-arrow-btn ${isLastSlide ? 'is-initial' : 'is-active'}`}
              onClick={nextSlide}
              disabled={isLastSlide}
              aria-label="Next instructor"
              icon={<ChevronRight size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
