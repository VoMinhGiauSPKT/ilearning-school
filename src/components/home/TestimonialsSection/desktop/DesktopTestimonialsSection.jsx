import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import QuoteIcon from '@/components/common/QuoteIcon/QuoteIcon';
import { testimonials } from '@/data/homeData';
import './_desktopTestimonialsSection.scss';

export default function DesktopTestimonialsSection() {
  return (
    <section className="desktop-testimonials-section">
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
                <p className="testimonial-text">{item.quote}</p>
              </div>

              <div className="testimonial-author-wrap">
                <div className="author-avatar-placeholder" />
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
