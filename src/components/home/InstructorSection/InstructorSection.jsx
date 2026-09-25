import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';
import { useInstructorSlide } from './useInstructorSlide';

const DesktopInstructorSection = lazy(() => import('./desktop/DesktopInstructorSection'));
const MobileInstructorSection = lazy(() => import('./mobile/MobileInstructorSection'));

export default function InstructorSection() {
  const isMobile = useIsMobile(1024);
  const slideData = useInstructorSlide();

  return (
    <Suspense fallback={<SectionSkeleton minHeight={620} />}>
      {isMobile ? (
        <MobileInstructorSection {...slideData} />
      ) : (
        <DesktopInstructorSection {...slideData} />
      )}
    </Suspense>
  );
}
