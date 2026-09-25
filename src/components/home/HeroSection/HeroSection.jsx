import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';

const DesktopHeroSection = lazy(() => import('./desktop/DesktopHeroSection'));

export default function HeroSection() {
  const isMobile = useIsMobile(1024);

  if (isMobile) return null;

  return (
    <Suspense fallback={<SectionSkeleton minHeight={450} />}>
      <DesktopHeroSection />
    </Suspense>
  );
}
