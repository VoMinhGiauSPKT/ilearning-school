import { useState } from 'react';

export function useCurriculumAccordion() {
  const [openStages, setOpenStages] = useState({});

  const toggleStage = (id) => {
    setOpenStages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    openStages,
    toggleStage,
  };
}

export default useCurriculumAccordion;
