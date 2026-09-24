import useIsMobile from '@/hooks/useIsMobile';
import DesktopPartnersSection from './desktop/DesktopPartnersSection';
import MobilePartnersSection from './mobile/MobilePartnersSection';

export default function PartnersSection() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobilePartnersSection /> : <DesktopPartnersSection />;
}
