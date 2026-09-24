import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import QuoteIcon from '@/components/common/QuoteIcon/QuoteIcon';
import { testimonials } from '@/data/homeData';
import './_mobileTestimonialsSection.scss';

export default function MobileTestimonialsSection() {
  return (
    <section className="mobile-testimonials-section">
      <div className="mobile-testimonials-container">
        <SectionHeading
          subtitle="Cảm nhận học viên"
          title="Mọi người nói gì về UI8"
          align="center"
        />

        <div className="mobile-testimonials-list">
          {testimonials.map((item) => (
            <div key={item.id} className="mobile-testimonial-card">
              <div className="mobile-card-top-content">
                <QuoteIcon />
                <p className="mobile-testimonial-text">{item.quote}</p>
              </div>

              <div className="mobile-testimonial-author-wrap">
                <div className="mobile-author-avatar-placeholder" />
                <div className="mobile-author-info">
                  <span className="mobile-author-name">{item.author}</span>
                  <span className="mobile-author-location">{item.batch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
