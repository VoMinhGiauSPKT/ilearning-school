import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';

const DesktopPartnerCallout = lazy(() => import('./desktop/DesktopPartnerCallout'));
const MobilePartnerCallout = lazy(() => import('./mobile/MobilePartnerCallout'));

export default function PartnerCallout() {
  const isMobile = useIsMobile(1024);

  return (
    <Suspense fallback={<SectionSkeleton minHeight={280} />}>
      {isMobile ? <MobilePartnerCallout /> : <DesktopPartnerCallout />}
    </Suspense>
  );
}
