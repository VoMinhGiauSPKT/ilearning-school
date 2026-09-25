import useIsMobile from '@/hooks/useIsMobile';
import DesktopCurriculumAccordion from './desktop/DesktopCurriculumAccordion';
import MobileCurriculumAccordion from './mobile/MobileCurriculumAccordion';
import { useCurriculumAccordion } from './useCurriculumAccordion';

export default function CurriculumAccordion(props) {
  const isMobile = useIsMobile(1024);
  const accordionData = useCurriculumAccordion();

  const combinedProps = {
    ...accordionData,
    ...props,
  };

  return isMobile ? (
    <MobileCurriculumAccordion {...combinedProps} />
  ) : (
    <DesktopCurriculumAccordion {...combinedProps} />
  );
}
