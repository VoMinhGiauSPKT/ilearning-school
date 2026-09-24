import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import Button from '../../common/Button/Button';
import QuoteIcon from '../../common/QuoteIcon/QuoteIcon';
import { instructorsList } from '../../../data/homeData';
import './_instructorSection.scss';

export default function InstructorSection() {
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
    <section className="instructor-section">
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

            {/* Quote Paragraphs */}
            <div className="instructor-quote-wrap">
              <p className="quote-para">{current.quotePara1}</p>
              <p className="quote-para">{current.quotePara2}</p>
            </div>

            {/* Instructor Identity */}
            <div className="instructor-identity">
              <h4 className="instructor-name">{current.name}</h4>
              <span className="instructor-role">{current.role}</span>
            </div>
          </div>

          {/* Dots Pagination*/}
          <div className="slider-dots">
            {instructorsList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
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
