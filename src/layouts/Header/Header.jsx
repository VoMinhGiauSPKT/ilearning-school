import useIsMobile from '@/hooks/useIsMobile';
import DesktopHeader from './desktop/DesktopHeader';
import MobileHeader from './mobile/MobileHeader';

export default function Header() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
