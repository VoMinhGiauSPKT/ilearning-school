import SectionHeading from '../../common/SectionHeading/SectionHeading';
import QuoteIcon from '../../common/QuoteIcon/QuoteIcon';
import { testimonials } from '../../../data/homeData';
import './_testimonialsSection.scss';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        <SectionHeading
          subtitle="Cảm nhận học viên"
          title="Mọi người nói gì về UI8"
          align="center"
        />

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="card-top-content">
                <QuoteIcon />

                {/* Testimonial Quote Text */}
                <p className="testimonial-text">{item.quote}</p>
              </div>

              {/* Author Row */}
              <div className="testimonial-author-wrap">
                {/* Author Avatar */}
                <div className="author-avatar-placeholder" />

                {/* Author Info */}
                <div className="author-info">
                  <span className="author-name">{item.author}</span>
                  <span className="author-location">{item.batch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
