import useIsMobile from '@/hooks/useIsMobile';
import Button from '@/components/common/Button/Button';
import './_heroSection.scss';

export default function HeroSection() {
  const isMobile = useIsMobile(1024);

  if (isMobile) return null;

  return (
    <section className="hero-section-container">
      <div className="hero-slider-banner">
        <div className="hero-content">
          <h1 className="hero-title">
            Chương trình học mang lại kiến thức tổng quan để đi làm
          </h1>

          <p className="hero-subtitle">
            Đào tạo theo nhu cầu doanh nghiệp, học viên tham gia chương trình
            sẽ có được những giá trị khác biệt: Tiết kiệm thời gian, tiền bạc, công sức
            và dễ dàng tham gia và định hướng sự nghiệp.
          </p>

          <div className="hero-cta">
            <Button variant="primary" shape="rounded" className="hero-register-btn">
              Đăng ký ngay
            </Button>
          </div>
        </div>

        <div className="hero-slider-indicator" aria-label="Slider progress">
          <div className="slider-indicator-track">
            <div className="slider-indicator-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}
