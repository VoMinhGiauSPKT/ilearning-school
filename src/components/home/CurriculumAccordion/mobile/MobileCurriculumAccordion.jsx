import { useState } from 'react';
import Button from '@/components/common/Button/Button';
import { curriculumStages } from '@/data/homeData';
import './_mobileCurriculumAccordion.scss';

export default function MobileCurriculumAccordion({ stages = curriculumStages }) {
  const [openStages, setOpenStages] = useState({});

  const toggleStage = (id) => {
    setOpenStages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="mobile-curriculum-accordion-box">
      <h3 className="mobile-curriculum-title">Giáo trình</h3>

      <div className="mobile-accordion-list">
        {(stages || []).map((stage) => {
          const isOpen = !!openStages[stage.id];
          return (
            <div key={stage.id} className="mobile-accordion-item">
              <button
                className="mobile-accordion-header"
                onClick={() => toggleStage(stage.id)}
                aria-expanded={isOpen}
              >
                <span className="mobile-item-title">{stage.title}</span>

                <div className="mobile-header-right-controls">
                  <span className="mobile-accordion-toggle-icon" aria-hidden="true">
                    <span className="icon-line line-horizontal" />
                    {!isOpen && <span className="icon-line line-vertical" />}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="mobile-accordion-body">
                  <ul className="mobile-lesson-list">
                    {stage.lessons.map((lesson, idx) => (
                      <li key={idx} className="mobile-lesson-item">
                        <span className="mobile-lesson-dash">-</span>
                        <span className="mobile-lesson-text">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mobile-curriculum-action">
        <Button variant="primary" shape="rounded" className="mobile-curriculum-register-btn">
          Đăng ký ngay
        </Button>
      </div>
    </div>
  );
}
