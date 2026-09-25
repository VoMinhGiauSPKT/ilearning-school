import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';
import { useCoursesSection } from './useCoursesSection';

const DesktopCoursesSection = lazy(() => import('./desktop/DesktopCoursesSection'));
const MobileCoursesSection = lazy(() => import('./mobile/MobileCoursesSection'));

export default function CoursesSection() {
  const isMobile = useIsMobile(1024);
  const coursesData = useCoursesSection();

  return (
    <Suspense fallback={<SectionSkeleton minHeight={750} />}>
      {isMobile ? (
        <MobileCoursesSection {...coursesData} />
      ) : (
        <DesktopCoursesSection {...coursesData} />
      )}
    </Suspense>
  );
}
