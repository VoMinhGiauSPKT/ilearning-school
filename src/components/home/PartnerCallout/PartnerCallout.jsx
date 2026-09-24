import useIsMobile from '@/hooks/useIsMobile';
import DesktopPartnerCallout from './desktop/DesktopPartnerCallout';
import MobilePartnerCallout from './mobile/MobilePartnerCallout';

export default function PartnerCallout() {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobilePartnerCallout /> : <DesktopPartnerCallout />;
}
