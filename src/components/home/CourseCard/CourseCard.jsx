import useIsMobile from '@/hooks/useIsMobile';
import DesktopCourseCard from './desktop/DesktopCourseCard';
import MobileCourseCard from './mobile/MobileCourseCard';

export default function CourseCard(props) {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileCourseCard {...props} /> : <DesktopCourseCard {...props} />;
}
