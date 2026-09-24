import useIsMobile from '@/hooks/useIsMobile';
import DesktopCurriculumAccordion from './desktop/DesktopCurriculumAccordion';
import MobileCurriculumAccordion from './mobile/MobileCurriculumAccordion';

export default function CurriculumAccordion(props) {
  const isMobile = useIsMobile(1024);

  return isMobile ? <MobileCurriculumAccordion {...props} /> : <DesktopCurriculumAccordion {...props} />;
}
