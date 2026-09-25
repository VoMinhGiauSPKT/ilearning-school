import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';

const DesktopHeader = lazy(() => import('./desktop/DesktopHeader'));
const MobileHeader = lazy(() => import('./mobile/MobileHeader'));

export default function Header() {
  const isMobile = useIsMobile(1024);

  return (
    <Suspense fallback={<SectionSkeleton minHeight={72} className="header-skeleton" />}>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </Suspense>
  );
}
