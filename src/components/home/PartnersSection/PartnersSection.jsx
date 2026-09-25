import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';

const DesktopPartnersSection = lazy(() => import('./desktop/DesktopPartnersSection'));
const MobilePartnersSection = lazy(() => import('./mobile/MobilePartnersSection'));

export default function PartnersSection() {
  const isMobile = useIsMobile(1024);

  return (
    <Suspense fallback={<SectionSkeleton minHeight={180} />}>
      {isMobile ? <MobilePartnersSection /> : <DesktopPartnersSection />}
    </Suspense>
  );
}
