import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';

const DesktopTestimonialsSection = lazy(() => import('./desktop/DesktopTestimonialsSection'));
const MobileTestimonialsSection = lazy(() => import('./mobile/MobileTestimonialsSection'));

export default function TestimonialsSection() {
  const isMobile = useIsMobile(1024);

  return (
    <Suspense fallback={<SectionSkeleton minHeight={520} />}>
      {isMobile ? <MobileTestimonialsSection /> : <DesktopTestimonialsSection />}
    </Suspense>
  );
}
