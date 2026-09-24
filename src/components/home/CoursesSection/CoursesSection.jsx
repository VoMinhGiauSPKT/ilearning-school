import useIsMobile from '@/hooks/useIsMobile';
import DesktopCoursesSection from './desktop/DesktopCoursesSection';
import MobileCoursesSection from './mobile/MobileCoursesSection';

export default function CoursesSection() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileCoursesSection /> : <DesktopCoursesSection />;
}
