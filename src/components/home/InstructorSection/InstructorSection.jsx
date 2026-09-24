import useIsMobile from '@/hooks/useIsMobile';
import DesktopInstructorSection from './desktop/DesktopInstructorSection';
import MobileInstructorSection from './mobile/MobileInstructorSection';

export default function InstructorSection() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileInstructorSection /> : <DesktopInstructorSection />;
}
