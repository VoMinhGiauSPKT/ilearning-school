import useIsMobile from '@/hooks/useIsMobile';
import DesktopTestimonialsSection from './desktop/DesktopTestimonialsSection';
import MobileTestimonialsSection from './mobile/MobileTestimonialsSection';

export default function TestimonialsSection() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileTestimonialsSection /> : <DesktopTestimonialsSection />;
}
