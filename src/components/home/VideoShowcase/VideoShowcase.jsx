import { lazy, Suspense } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import SectionSkeleton from '@/components/common/SectionSkeleton/SectionSkeleton';
import { useVideoProgress } from './useVideoProgress';

const DesktopVideoShowcase = lazy(() => import('./desktop/DesktopVideoShowcase'));
const MobileVideoShowcase = lazy(() => import('./mobile/MobileVideoShowcase'));

export default function VideoShowcase() {
  const isMobile = useIsMobile(1024);
  const videoData = useVideoProgress(24);

  return (
    <Suspense fallback={<SectionSkeleton minHeight={480} />}>
      {isMobile ? (
        <MobileVideoShowcase {...videoData} />
      ) : (
        <DesktopVideoShowcase {...videoData} />
      )}
    </Suspense>
  );
}
