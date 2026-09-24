import useIsMobile from '@/hooks/useIsMobile';
import DesktopVideoShowcase from './desktop/DesktopVideoShowcase';
import MobileVideoShowcase from './mobile/MobileVideoShowcase';

export default function VideoShowcase() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileVideoShowcase /> : <DesktopVideoShowcase />;
}
